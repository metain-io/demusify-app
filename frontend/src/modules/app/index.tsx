import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store as appStore } from './redux/store';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    React.useEffect(() => {
        (window as any).bootstrap = require('bootstrap');
    }, []);

    return <ReduxProvider store={appStore}>{getLayout(<Component {...pageProps} />)}</ReduxProvider>;
}

export default App;
