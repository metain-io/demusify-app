import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageHome = () => {
    return <div>Welcome to Demusify !!!</div>;
};

PageHome.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome };
