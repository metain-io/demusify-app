import { MainLayout } from '@modules/app/layouts';
import React from 'react';
import { ReactElement } from 'react';
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
