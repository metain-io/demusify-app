import { Footer, NavigationBar } from '@modules/app/components';
import { PropsWithChildren } from 'react';

type MainLayoutProps = PropsWithChildren<{}>;

const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <NavigationBar />
            </header>

            {children}

            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <Footer />
            </footer>

            <script src="./js/app.bundle.js"></script>
        </div>
    );
};

export { MainLayout };
