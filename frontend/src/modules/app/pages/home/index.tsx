import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import styles from './styles.module.scss';

const PageHome = () => {
    return (
        <div className={styles['page-container']}>
            <h3>Welcome to Demusify !!!</h3>
        </div>
    );
};

PageHome.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome };
