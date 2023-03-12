import { NavigationBar3 } from '@modules/app/components';
import Script from 'next/script';
import { PropsWithChildren } from 'react';

type MainLayout3Props = PropsWithChildren<{}>;

const MainLayout3 = (props: MainLayout3Props) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500">
            <header className="js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors"
            style={{backgroundColor: "rgba(255,213,0,0.5) !important"}}>
                <NavigationBar3 />
            </header>

            {children}

            <Script src="./js/app.bundle.js" />
        </div>
    );
};

export { MainLayout3 };
