import { Footer2, NavigationBar2 } from '@modules/app/components';
import { PropsWithChildren } from 'react';

type MainLayout2Props = PropsWithChildren<{}>;

const MainLayout2 = (props: MainLayout2Props) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden bg-jacarta-900 font-body text-jacarta-500">
            <header className="js-page-header page-header--transparent fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <NavigationBar2 />
            </header>

            {children}

            <footer className="page-footer bg-jacarta-900">
                <Footer2 />
            </footer>

            <script src="./js/app.bundle.js"></script>
        </div>
    );
};

export { MainLayout2 };
