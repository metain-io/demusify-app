import { MainLayout } from '@modules/app/layouts';
import { selectLoginData, selectUserNftData } from '@modules/auth/redux/login/slice';
import React from 'react';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from './tabs';
import { UserBanner } from './user-banner';
import { UserProfile } from './user-profile';

const PageUser = () => {
    return (
        <main className="pt-[5.5rem] lg:pt-24">
            {/* <!-- Banner --> */}
            <UserBanner />

            {/* <!-- Profile --> */}
            <UserProfile />

            {/* <!-- Tabs --> */}
            <Tabs />
        </main>
    );
};

PageUser.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageUser };
