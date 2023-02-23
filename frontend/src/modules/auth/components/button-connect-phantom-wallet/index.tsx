import { LoginStatus } from '@modules/auth/redux/login/slice';
import styles from './styles.module.scss';
import { useButtonConnectPhantomWallet } from './use-button-connect-phantom-wallet';

const ButtonConnectPhantomWallet = () => {
    const { loginStatus, handleOnClicked } = useButtonConnectPhantomWallet();

    return (
        <button className={[styles.button, 'mButton', 'mButton-cp5-bn1'].join(' ')} onClick={handleOnClicked}>
            {
                (
                    {
                        [LoginStatus.Undefined]: 'Connect Phantom Wallet',
                        [LoginStatus.Initializing]: 'Initializing',
                        [LoginStatus.InitializeFailed]: '',
                        [LoginStatus.Authenticating]: 'Authenticating',
                        [LoginStatus.AuthenticateFailed]: '',
                        [LoginStatus.LoggedIn]: 'Logout',
                        [LoginStatus.NotLogged]: 'Connect Phantom Wallet',
                    } as any
                )[loginStatus]
            }
        </button>
    );
};

export { ButtonConnectPhantomWallet };
