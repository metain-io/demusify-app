import { loginActions, LoginStatus, selectLoginStatus, selectLoginWalletAddress } from '../../redux/login/slice';
import { useDispatch, useSelector } from 'react-redux';

const useButtonConnectPhantomWallet = () => {
    const loginStatus = useSelector(selectLoginStatus);
    const walletAddress = useSelector(selectLoginWalletAddress);
    const dispatch = useDispatch();

    const handleOnClicked = () => {
        switch (loginStatus) {
            case LoginStatus.LoggedIn:
                dispatch(loginActions.logoutRequested());
                break;

            case LoginStatus.NotLogged:
                dispatch(loginActions.loginWithPhantomWalletRequested());
                break;
        }
    };

    return { loginStatus, walletAddress, handleOnClicked };
};

export { useButtonConnectPhantomWallet };
