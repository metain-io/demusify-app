import {
    FormCreateItem,
    ModalProperties,
    ModalLevels,
    ModalStats,
} from '@modules/app/contexts/create-item-context/components';
import { CreateItemProvider } from '@modules/app/contexts/create-item-context/create-item-provider';
import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageCreateItem = () => {
    return (
        <>
            <CreateItemProvider>
                <main>
                    {/* <!-- Create --> */}
                    <section className="relative py-24">
                        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                            <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                        </picture>
                        <div className="container">
                            <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                                Create Item
                            </h1>

                            <div className="flex flex-col md:flex-row gap-5">
                                <FormCreateItem />
                            </div>
                        </div>
                    </section>
                </main>

                {/* <!-- Properties Modal --> */}
                <ModalProperties />

                {/* <!-- Levels Modal --> */}
                <ModalLevels />

                {/* <!-- Stats Modal --> */}
                <ModalStats />
            </CreateItemProvider>
        </>
    );
};

PageCreateItem.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCreateItem };
