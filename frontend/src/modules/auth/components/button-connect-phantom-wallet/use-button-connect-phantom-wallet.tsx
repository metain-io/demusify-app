import { loginActions, LoginStatus, selectLoginStatus } from '../../redux/login/slice';
import { useDispatch, useSelector } from 'react-redux';

const useButtonConnectPhantomWallet = () => {
    const loginStatus = useSelector(selectLoginStatus);
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

    return { loginStatus, handleOnClicked };
};

export { useButtonConnectPhantomWallet };
