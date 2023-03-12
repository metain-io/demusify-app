import { MainLayout } from '@modules/app/layouts';
import { ChangeEventHandler, ReactElement } from 'react';
import Script from 'next/script';
import React from 'react';
import { Database } from '@modules/app/database';
import { useRouter } from 'next/router';
import { Tabs } from './tabs';

const PageViewItem = () => {
    const [item, setItem] = React.useState<any>(null);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [hidePurchaseButton, setHidePurchaseButton] = React.useState(true);
    const router = useRouter();

    const onCheckBoxLicenseOptionChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.currentTarget.getAttribute('data-value') || 0;
        const checked = e.currentTarget.checked;

        if (checked) {
            setTotalPrice(() => totalPrice + +value);
        } else {
            setTotalPrice(() => totalPrice - +value);
        }
    };

    React.useEffect(() => {
        const database = new Database();

        const { itemId, hidePurchaseButton } = router.query;

        setHidePurchaseButton(!!hidePurchaseButton);

        database.loadItems().then((items: Array<any>) => {
            const item = items.find((item) => item.id === itemId);
            console.log('itemId:', itemId);
            console.log('item:', item);
            setItem(item);
        });
    }, [router]);

    if (item == null) {
        return <></>;
    }

    return (
        <>
            <main className="mt-24">
                {/* <!-- Item --> */}
                <section className="relative pt-12 pb-24 lg:py-24">
                    <div className="container">
                        {/* <!-- Item --> */}
                        <div className="md:flex md:flex-wrap">
                            {/* <!-- Image --> */}
                            <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                                <img
                                    src={item?.coverArtImage}
                                    alt="item"
                                    className="cursor-pointer rounded-2.5xl"
                                    data-bs-toggle="modal"
                                    data-bs-target="#imageModal"
                                />

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="imageModal" tabIndex={-1} aria-hidden="true">
                                    <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                                        <img src="img/products/item_single_full.jpg" alt="item" />
                                    </div>

                                    <button
                                        type="button"
                                        className="btn-close absolute top-6 right-6"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-6 w-6 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                        </svg>
                                    </button>
                                </div>
                            </figure>

                            {/* <!-- Details --> */}
                            <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                                {/* <!-- Collection / Likes / Actions --> */}
                                <div className="mb-3 flex">
                                    {/* <!-- Collection --> */}
                                    <div className="flex items-center">
                                        <a href="collection" className="mr-2 text-sm font-bold text-accent">
                                            {item?.collection?.name}
                                        </a>
                                        <span
                                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                            data-tippy-content="Verified Collection"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="h-[.875rem] w-[.875rem] fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                            </svg>
                                        </span>
                                    </div>

                                    {/* <!-- Likes / Actions --> */}
                                    <div className="ml-auto flex space-x-2">
                                        <div className="flex items-center space-x-1 rounded-xl border border-jacarta-100 bg-white py-2 px-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <span
                                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                data-tippy-content="Favorite"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                >
                                                    <path fill="none" d="M0 0H24V24H0z"></path>
                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"></path>
                                                </svg>
                                            </span>
                                            <span className="text-sm dark:text-jacarta-200">0</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">
                                    {item?.name}
                                </h1>

                                {/* Description */}
                                <p className="mb-10 dark:text-jacarta-300">{item?.description}</p>

                                {/* <!-- Creator / Owner --> */}
                                <div className="mb-8 flex flex-wrap flex-col">
                                    {item?.licenseMonetizations?.map((lmItem: any, index: number) => (
                                        <div key={index} className="mr-8 mb-4 flex">
                                            <input
                                                type="checkbox"
                                                className="mr-2 w-1 h-1 border-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                                onChange={onCheckBoxLicenseOptionChanged}
                                                data-value={lmItem.value}
                                            ></input>
                                            <div className="flex flex-col justify-center">
                                                <span className="block text-sm text-jacarta-400 dark:text-white">
                                                    {lmItem.name}
                                                </span>
                                                <a href="user" className="block text-accent">
                                                    <span className="text-sm font-bold">{lmItem.value} SOL</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* <!-- Bid --> */}
                                {!hidePurchaseButton && (
                                    <div className="rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#placeBidModal"
                                            className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                        >
                                            PURCHASE LICENSE ({totalPrice} SOL)
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <!-- Tabs --> */}
                        {/* <Tabs /> */}
                    </div>
                </section>
            </main>

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