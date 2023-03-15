import { Footer, NavigationBar3 } from '@modules/app/components';
import WalletSidebar from '@modules/app/components/wallet-sidebar';
import { useButtonConnectPhantomWallet } from '@modules/auth/components/button-connect-phantom-wallet/use-button-connect-phantom-wallet';
import {
    selectLoginData,
    selectLoginStatus,
    selectLoginUsername,
    selectLoginWalletAddress,
} from '@modules/auth/redux/login/slice';
import { DemusifyApi } from '@modules/common/api';
import Script from 'next/script';
import React from 'react';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

type MainLayoutProps = PropsWithChildren<{ handleOnLoginClicked?: Function }>;

const MainLayout = (props: MainLayoutProps) => {
    const [openWalletSidebar, setOpenWalletSidebar] = React.useState(false);
    const { handleOnClicked } = useButtonConnectPhantomWallet();
    const loginData = useSelector(selectLoginData);

    const {
        children,
        handleOnLoginClicked = () => {
            handleOnClicked();
        },
    } = props;

    const toggleWalletSidebar = () => {
        setOpenWalletSidebar(!openWalletSidebar);
    };

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors"
            style={{backgroundColor: "rgba(255,213,0,0.5) !important"}}>
                <NavigationBar3 handleOnLoginClicked={handleOnLoginClicked} loginData={loginData} onMenuToggle={toggleWalletSidebar} />
            </header>

            <WalletSidebar isMenuOpen={openWalletSidebar} onMenuToggle={toggleWalletSidebar} />

            {children}

            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <Footer />
            </footer>

            <Script src="./js/app.bundle.js" />
        </div>
    );
};

export { MainLayout };
