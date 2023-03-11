import { FormCreateCollection } from '@modules/app/contexts/create-collection-context/components/index';
import { CreateCollectionProvider } from '@modules/app/contexts/create-collection-context/create-collection-provider';
import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageCreateCollection = () => {
    return (
        <main>
            {/* <!-- Create --> */}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                        Create Collection
                    </h1>

                    <CreateCollectionProvider>
                        <FormCreateCollection />
                    </CreateCollectionProvider>
                </div>
            </section>
        </main>
    );
};

PageCreateCollection.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCreateCollection };
