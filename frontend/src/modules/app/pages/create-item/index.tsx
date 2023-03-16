import {
    FormCreateItem,
    ModalProperties,
    ModalLevels,
    ModalStats,
} from '@modules/app/contexts/create-item-context/components';
import { ModalLicenseMonetization } from '@modules/app/contexts/create-item-context/components/modal-license-monetization';
import { CreateItemProvider } from '@modules/app/contexts/create-item-context/create-item-provider';
import { MainLayout } from '@modules/app/layouts';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const PageCreateItem = () => {
    const router = useRouter();

    const onCreateItemSucceeded = (item: any) => {
        router.push(`view-item?itemId=${item.itemID}&viewOnly=true`);
    };

    return (
        <>
            <CreateItemProvider onCreateItemSucceeded={onCreateItemSucceeded}>
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

                {/* <!-- License & Monetization Modal --> */}
                <ModalLicenseMonetization />
            </CreateItemProvider>
        </>
    );
};

PageCreateItem.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCreateItem };
