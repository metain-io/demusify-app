import { NavigationBar3 } from '@modules/app/components';
import { PropsWithChildren } from 'react';

type MainLayout3Props = PropsWithChildren<{}>;

const MainLayout3 = (props: MainLayout3Props) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500">
            <header className="js-page-header page-header--transparent fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <NavigationBar3 />
            </header>

            {children}

            <script src="./js/app.bundle.js" defer></script>
        </div>
    );
};

export { MainLayout3 };
