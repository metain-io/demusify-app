import { PropsWithChildren } from 'react';

type AuthLayoutProps = PropsWithChildren<{}>;

const AuthLayout = (props: AuthLayoutProps) => {
    const { children } = props;

    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
            {children}

            <script src="./js/app.bundle.js"></script>
        </div>
    );
};

export { AuthLayout };
