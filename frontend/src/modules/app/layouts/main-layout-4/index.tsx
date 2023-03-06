import { Footer, NavigationBar3 } from '@modules/app/components';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

type MainLayout4Props = PropsWithChildren<{}>;

const MainLayout4 = (props: MainLayout4Props) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500">
            <header className="js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors">
                <NavigationBar3 />
            </header>

            {children}

            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <Footer />
            </footer>

            <Script src="./js/app.bundle.js" />
        </div>
    );
};

export { MainLayout4 };
