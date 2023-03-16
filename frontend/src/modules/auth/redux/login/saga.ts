import { resolveGenerator } from '@libs/utils';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { loginActions, LoginStatus } from './slice';
import UserPoolService, { PoolTypeEnum } from '@modules/auth/services/user-pool';
import AuthService from '@modules/auth/services/auth';
import { eventChannel } from 'redux-saga';
import logger from '@libs/logger';
import CryptoWallet, { CryptoWalletEvent } from '@modules/crypto-wallet/crypto-wallet';
import PhantomWallet from '@modules/crypto-wallet/wallet-adapters/phantom-wallet-adapter';
import WalletService from '@modules/crypto-wallet/services/crypto-wallet-service';
import bs58 from 'bs58';
import { DemusifyApi } from '@modules/common/api';

function createCryptoWalletEventChannel(cryptoWallet: CryptoWallet) {
    return eventChannel(cryptoWallet.eventChannelEmitter);
}

function* watchCryptoWalletEventChannel(walletProvider: any): any {
    const walletEventChannel = yield call(createCryptoWalletEventChannel, walletProvider);

    while (true) {
        try {
            const { type, payload } = yield take(walletEventChannel);

            switch (type) {
                case CryptoWalletEvent.WalletConnect:
                    console.log('wallet-connected');
                    break;
                case CryptoWalletEvent.WalletDisconnect:
                    console.log('wallet-disconnect');
                    walletEventChannel.close();
                    yield put(loginActions.logoutRequested());
                    break;
                case CryptoWalletEvent.WalletAccountChanged:
                    const { walletAccount } = payload;
                    console.log('wallet-account-changed', walletAccount);
                    // yield put(loginActions.logoutRequested());
                    yield put(loginActions.loginWithPhantomWalletRequested());
                    break;
            }
        } catch (error) {
            logger.error('watchCryptoWalletEventChannelError', error);
        }
    }
}

function* init(): any {
    yield put(loginActions.initRequested());

    yield call(resolveGenerator, UserPoolService.syncUserPoolStorage(PoolTypeEnum.CONFIDENT));

    const [loadedUser, loadUserFromStorageError] = yield call(
        resolveGenerator,
        UserPoolService.loadUserFromStorage(PoolTypeEnum.CONFIDENT),
    );

    if (!loadedUser || loadUserFromStorageError) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    AuthService.currentUser = loadedUser;

    if (!AuthService.currentUserSessionValid()) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    const username = loadedUser.getUsername();

    yield new Promise((resolve, reject) => {
        PhantomWallet.waitForWalletInjection(resolve, 0);
    });

    WalletService.currentWallet = new PhantomWallet();

    if (!WalletService.currentWallet.available) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    const [walletAccount, connectError] = yield call(resolveGenerator, WalletService.connect(null));

    if (connectError) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    if (!walletAccount) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    // base58 is been lowercase when process in Cognito AWS
    // => So change to hex encode
    const bytes = bs58.decode(walletAccount);
    const walletAccountInHex = Buffer.from(bytes).toString('hex');

    if (walletAccountInHex.toLowerCase() != username.split('-')[2].toLowerCase()) {
        yield put(
            loginActions.initFinished({
                status: LoginStatus.NotLogged,
                username: null,
            }),
        );

        return;
    }

    yield put(
        loginActions.initFinished({
            status: LoginStatus.LoggedIn,
            username: username,
            walletAddress: walletAccount,
        }),
    );

    yield call(resolveGenerator, getUserProfile(username));
    yield call(resolveGenerator, getUserNftData(username));

    yield fork(watchCryptoWalletEventChannel, WalletService.currentWallet);
}

function* getUserProfile(username: string): any {
    console.log('============== getUserProfile')
    if (!username) return {};
    let [userProfile, error] = yield call(resolveGenerator, DemusifyApi.walletApp.getCreator(username));
    const [balances, balanceError] = yield call(resolveGenerator, WalletService.currentWallet!.getBalances())

    console.log('getUserProfile --- userProfile: ', userProfile);
    console.log('getUserProfile --- getBalances: ', balances);

    if (error || balanceError) {
        console.log('getUserProfile --- ERROR: ', error, balanceError);
        return {};
    }
    userProfile.balances = balances

    yield put(loginActions.updateProfile(userProfile))
    return userProfile
}

function* getUserNftData(username: string): any {
    console.log('============== getUserNftData')
    if (!username) return {};
    let [userNftData, error] = yield call(resolveGenerator, DemusifyApi.walletApp.getUserNftData(username));

    console.log('getUserNftData --- userNftData: ', userNftData);

    if (error) {
        console.log('getUserNftData --- ERROR: ', error);
        return {};
    }

    if (userNftData.nftCreation && userNftData.nftCreation.length > 0) {
        userNftData.nftCreation.forEach((item: any, index: any) => {
            try {
                item.transactions = JSON.parse(item.transactions)
            } catch {
                item.transactions = []
            }
        });
    }

    yield put(loginActions.updateUserData(userNftData))
    return userNftData
}

function* handleLoginWithPhantomWallet(): any {
    WalletService.currentWallet = new PhantomWallet();

    if (!WalletService.currentWallet.available) {
        yield put(
            loginActions.loginFailed({
                error: new Error(
                    `Wallet is not available. Please go to <a>${WalletService.currentWallet.downloadUrl}</a> to install wallet`,
                ),
            }),
        );
        return;
    }

    const [walletAccount, connectError] = yield call(resolveGenerator, WalletService.connect(null));

    if (connectError) {
        yield put(loginActions.loginFailed({ error: new Error('Connect failed') }));
        return;
    }

    // base58 is been lowercase when process in Cognito AWS
    // => So change to hex encode
    const bytes = bs58.decode(walletAccount);
    const walletAccountInHex = Buffer.from(bytes).toString('hex');

    const username = `sol-test-${walletAccountInHex}`;
    const password = 'DemusifyDummyPassword' + Date.now().toString();

    const [registerUserResult, registerUserError] = yield call(
        resolveGenerator,
        UserPoolService.registerUser(username, password, [], PoolTypeEnum.CONFIDENT),
    );

    if (registerUserError && registerUserError?.name != 'UsernameExistsException') {
        yield put(loginActions.loginFailed({ error: new Error('Connect get wallet account') }));
        return;
    }

    let cognitoUser = registerUserResult?.user || UserPoolService.createUser(username, PoolTypeEnum.CONFIDENT);

    AuthService.currentUser = cognitoUser;

    const [authenticateUserResult, authenticateUserError] = yield call(
        resolveGenerator,
        AuthService.authenticateUser(username, password, true),
    );

    if (authenticateUserError) {
        yield put(loginActions.loginFailed({ error: new Error('Authenticate failed') }));
        return;
    }

    if (!authenticateUserResult?.customChallange?.challengeParameters?.message) {
        yield put(loginActions.loginFailed({ error: new Error('No challenge found') }));
        return;
    }

    const message = authenticateUserResult.customChallange.challengeParameters.message;

    const [challengeAnswer, signMessageError] = yield call(resolveGenerator, WalletService.signMessage(message));

    if (signMessageError) {
        yield put(loginActions.loginFailed({ error: new Error('Sign message failed') }));
        return;
    }

    const [sendChallengeAnswerResult, sendChallengeAnswerError] = yield call(
        resolveGenerator,
        AuthService.sendCustomChallengeAnswer(challengeAnswer),
    );

    if (sendChallengeAnswerError) {
        yield put(loginActions.loginFailed({ error: new Error('Send challenge answer error') }));
        return;
    }

    if (!sendChallengeAnswerResult?.session) {
        yield put(loginActions.loginFailed({ error: new Error('Send challenge answer failed') }));
        return;
    }

    yield put(
        loginActions.loginSucceeded({
            username: username,
            walletAddress: walletAccount,
        }),
    );

    yield call(resolveGenerator, getUserProfile(username));
    yield call(resolveGenerator, getUserNftData(username));

    yield fork(watchCryptoWalletEventChannel, WalletService.currentWallet);
}

function* handleLogout() {
    if (AuthService.currentUser) {
        yield call([AuthService, AuthService.globalSignOutUser]);
        yield call([AuthService, AuthService.signOutUser]);
    }

    if (WalletService.currentWallet) {
        yield call([WalletService, WalletService.disconnect]);
    }
}

export function* loginSaga() {
    yield fork(init);

    yield takeLatest(loginActions.loginWithPhantomWalletRequested.type, handleLoginWithPhantomWallet);
    yield takeLatest(loginActions.logoutRequested.type, handleLogout);
}
