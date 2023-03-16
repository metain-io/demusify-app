import { CollectionsFilter, GridCollections } from '@modules/app/contexts/view-collections-context/components';
import { ViewCollectionsProvider } from '@modules/app/contexts/view-collections-context/view-collections-provider';
import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageCollections = () => {
    return (
        <main>
            {/* <!-- Collections --> */}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        Explore Collections
                    </h1>

                    <ViewCollectionsProvider>
                        {/* <!-- Filters --> */}
                        <CollectionsFilter />

                        {/* <!-- Grid --> */}
                        <GridCollections />
                    </ViewCollectionsProvider>
                </div>
            </section>
            {/* <!-- end collections --> */}
        </main>
    );
};

PageCollections.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCollections };
