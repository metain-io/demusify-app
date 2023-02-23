import { LoginStatus } from '@modules/auth/redux/login/slice';
import styles from './styles.module.scss';
import { useButtonConnectPhantomWallet } from './use-button-connect-phantom-wallet';

const ButtonConnectPhantomWallet = () => {
    const { loginStatus, walletAddress, handleOnClicked } = useButtonConnectPhantomWallet();

    return (
        <button className={[styles.button, 'mButton', 'mButton-cp5-bn1'].join(' ')} onClick={handleOnClicked}>
            {
                (
                    {
                        [LoginStatus.Undefined]: 'Connect Phantom Wallet',
                        [LoginStatus.Initializing]: 'Initializing',
                        [LoginStatus.InitializeFailed]: 'Connect Phantom Wallet',
                        [LoginStatus.Authenticating]: 'Authenticating',
                        [LoginStatus.AuthenticateFailed]: 'Connect Phantom Wallet',
                        [LoginStatus.LoggedIn]: walletAddress,
                        [LoginStatus.NotLogged]: 'Connect Phantom Wallet',
                    } as any
                )[loginStatus]
            }
        </button>
    );
};

export { ButtonConnectPhantomWallet };
