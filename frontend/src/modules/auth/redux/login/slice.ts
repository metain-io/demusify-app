import logger from '@libs/logger';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import WalletService from '@modules/crypto-wallet/services/crypto-wallet-service';

export enum LoginStatus {
    Undefined,
    Initializing,
    InitializeFailed,
    Authenticating,
    AuthenticateFailed,
    NotLogged,
    LoggedIn,
}

export type UserNFTDetail = {
    itemID: string,
    collectionID: string,
    collection: any,
    coverArtImage: string,
    createdAt: number,
    creatorAddress: string,
    description: string,
    externalLink: string,
    levels: any,
    licenseMonetizations: any,
    music: string,
    musicFingerprint: string,
    name: string,
    properties: any,
    stats: any,
    supply: number,
    tokenMintAddress: string,
    updatedAt: number,
    username: string,
    liked: number
}

export type UserNftActivities = {
    userID: string,
    nftID: string,
    nftName: string,
    coverArtImage: string,
    type: string,
    description: string,
    createAt: number
}

export type UserNftCreation = {
    creatorID: string,
    nftID: string,
    itemID: string,
    mintToMasterSignature: string,
    transferToCreatorSignature: string,
    totalSale: number,
    totalRevenue: number,
    detail: UserNFTDetail,
    transactions: any,
    createdAt: number,
    updatedAt: number
}

export type UserNftLicensed = {
    consumerID: string,
    nftID: string,
    createAt: string,
    transactions: any,
    detail: UserNFTDetail,
    licenses: string
}

type LoginState = {
    status: LoginStatus;
    error: any;
    username: string | null;
    walletAddress: string | null;
    name: string | null;
    bio: string | null;
    email: string | null;
    twitterLink: string | null;
    instagramLink: string | null;
    yourSiteLink: string | null;
    avatarUrl: string | null;
    coverImageUrl: string | null;

    balances: any

    nftActivities: Array<UserNftActivities> | undefined,
    nftCreation: Array<UserNftCreation> | undefined,
    nftLicensed: Array<UserNftLicensed> | undefined,

};

const initialState: LoginState = {
    status: LoginStatus.Undefined,
    error: null,
    username: null,
    walletAddress: null,
    name: null,
    bio: null,
    email: null,
    twitterLink: null,
    instagramLink: null,
    yourSiteLink: null,
    avatarUrl: null,
    coverImageUrl: null,

    balances: {},
    nftActivities: [],
    nftCreation: [],
    nftLicensed: [],
};

export const loginSlice = createSlice({
    name: 'auth/login',
    initialState: initialState,
    reducers: {
        initRequested: (state) => {
            logger.info('auth/login/init-requested');

            state.status = LoginStatus.Initializing;
        },
        initFinished: (state, action: PayloadAction<any>) => {
            const { status, username, walletAddress } = action.payload;

            logger.info('auth/login/init-finished: ', { status, username, walletAddress });

            state.status = status;
            state.username = username;
            state.walletAddress = walletAddress;
        },
        initFailed: (state, action: PayloadAction<any>) => {
            const { error } = action.payload;

            logger.error('auth/login/init-failed', { error });

            state.status = LoginStatus.InitializeFailed;
            state.error = error;
        },
        logoutRequested: (state) => {
            logger.info('auth/login/logout-requested');

            state.status = LoginStatus.NotLogged;
            state.error = null;
            state.username = null;
            state.walletAddress = null;
        },
        loginWithPhantomWalletRequested: (state) => {
            logger.info('auth/login/login-with-phantom-wallet-requested');

            state.status = LoginStatus.Authenticating;
            state.error = null;
            state.username = null;
            state.walletAddress = null;
        },
        loginSucceeded: (state, action: PayloadAction<any>) => {
            const { username, walletAddress } = action.payload;

            logger.info('auth/login/login-succeeded', { username });

            state.status = LoginStatus.LoggedIn;
            state.username = username;
            state.walletAddress = walletAddress;
        },
        loginFailed: (state, action: PayloadAction<any>) => {
            const { error } = action.payload;

            logger.error('auth/login/login-failed', { error });

            state.status = LoginStatus.AuthenticateFailed;
            state.error = error;
        },

        updateProfile: (state: any, action: PayloadAction<any>) => {
            logger.info('auth/login/update-profile', action.payload);

            state.name = action.payload?.name
            state.bio = action.payload?.bio
            state.email = action.payload?.email
            state.twitterLink = action.payload?.twitterLink
            state.instagramLink = action.payload?.instagramLink
            state.yourSiteLink = action.payload?.yourSiteLink
            state.avatarUrl = action.payload?.avatarUrl
            state.coverImageUrl = action.payload?.coverImageUrl

            state.balances = action.payload.balances
        },

        updateUserData: (state: any, action: PayloadAction<any>) => {
            logger.info('auth/login/update-userData', action.payload);

            state.nftActivities = action.payload?.nftActivities || []
            state.nftLicensed = action.payload?.nftLicensed || []
            state.nftCreation = action.payload?.nftCreation || []
            state.items = action.payload?.items || []
        }
    },
    extraReducers: (builder) => {},
});

export const loginActions = loginSlice.actions;

export const loginReducers = loginSlice.reducer;

export const selectLoginStatus = (state: any) => state.login.status;
export const selectLoginError = (state: any) => state.login.error;
export const selectLoginUsername = (state: any) => state.login.username;
export const selectLoginWalletAddress = (state: any) => state.login.walletAddress;
export const selectUserNftData = (state: any): {
    nftCreation: Array<UserNftCreation>,
    nftLicensed: Array<UserNftLicensed>,
    nftActivities: Array<UserNftActivities>,
    items: Array<UserNFTDetail>
} => {
    return {
        nftCreation: state.login.nftCreation,
        nftLicensed: state.login.nftLicensed,
        nftActivities: state.login.nftActivities,
        items: state.login.items,
    }
}
export const selectLoginData = (state: any) => {
    return {
        walletAddress: state.login.walletAddress,
        username: state.login.username,
        loginStatus: state.login.status,
        
        name: state.login.name,
        bio: state.login.bio,
        email: state.login.email,
        twitterLink: state.login.twitterLink,
        instagramLink: state.login.instagramLink,
        yourSiteLink: state.login.yourSiteLink,
        avatarUrl: state.login.avatarUrl,
        coverImageUrl: state.login.coverImageUrl,

        balances: state.login.balances
    }
}
