import { Footer, NavigationBar } from '@modules/app/components';
import { useButtonConnectPhantomWallet } from '@modules/auth/components/button-connect-phantom-wallet/use-button-connect-phantom-wallet';
import { selectLoginStatus } from '@modules/auth/redux/login/slice';
import Script from 'next/script';
import React from 'react';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

type MainLayoutProps = PropsWithChildren<{ handleOnLoginClicked?: Function }>;

const MainLayout = (props: MainLayoutProps) => {
    const { handleOnClicked } = useButtonConnectPhantomWallet();
    const loginStatus = useSelector(selectLoginStatus)
    const { children, handleOnLoginClicked = () => {handleOnClicked()} } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <NavigationBar handleOnLoginClicked={handleOnLoginClicked} loginStatus={loginStatus} />
            </header>

            {children}

            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <Footer />
            </footer>

            <Script src="./js/app.bundle.js" />
        </div>
    );
};

export { MainLayout };
