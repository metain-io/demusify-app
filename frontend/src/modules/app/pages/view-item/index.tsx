import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Script from 'next/script';
import React from 'react';
import { useRouter } from 'next/router';
import { ItemCoverArtImage, ItemDetail, ItemTabs } from '@modules/app/contexts/view-item-context/components';
import { ViewItemProvider } from '@modules/app/contexts/view-item-context/view-item-provider';
import { PurchaseItemProvider } from '@modules/app/contexts/purchase-item-context/purchase-item-provider';
import { ButtonPurchaseItem } from '@modules/app/contexts/purchase-item-context/components/button-purchase-item';
import { ViewItemMode } from '@modules/app/contexts/view-item-context';

const PageViewItem = () => {
    const router = useRouter();

    const { itemId, viewOnly } = router.query;

    const onPurchaseItemSucceeded = () => {
        router.push('/user');
    };

    if (!router.isReady) {
        return <></>;
    }

    return (
        <>
            <ViewItemProvider
                itemId={itemId as string | undefined}
                mode={viewOnly == 'true' ? ViewItemMode.VIEW_ONLY : ViewItemMode.PURCHASABLE}
            >
                <main className="mt-24">
                    {/* <!-- Item --> */}
                    <section className="relative pt-12 pb-24 lg:py-24">
                        <div className="container">
                            {/* <!-- Item --> */}
                            <div className="md:flex md:flex-wrap">
                                {/* <!-- Image --> */}
                                <ItemCoverArtImage />

                                {/* <!-- Details --> */}
                                <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                                    <ItemDetail />

                                    <PurchaseItemProvider onPurchaseItemSucceeded={onPurchaseItemSucceeded}>
                                        <ButtonPurchaseItem />
                                    </PurchaseItemProvider>
                                </div>
                            </div>

                            {/* <!-- Tabs --> */}
                            <ItemTabs />
                        </div>
                    </section>
                </main>
            </ViewItemProvider>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js" />
            <Script src="./js/countdown.bundle.js" />
            <Script src="./js/charts.bundle.js" />
        </>
    );
};

PageViewItem.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageViewItem };
