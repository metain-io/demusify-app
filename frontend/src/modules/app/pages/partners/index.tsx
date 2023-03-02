import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Image from 'next/image';

const PagePartners = () => {
    return (
        <main className="pt-[5.5rem] lg:pt-24">
            {/* <!-- Benefits --> */}
            <section className="relative pt-32 pb-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                    <img src="img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="mb-6 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                            Xhibiter Affiliate Partnership
                        </h1>
                        <p className="mb-16 text-lg leading-normal dark:text-jacarta-200">
                            Interested in making money with Xhibiter? Earn A 20% Commission For Every Sale You Refer By
                            Recommending The Most Powerful NFT marketplace.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        <div className="rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl dark:bg-jacarta-800">
                            <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
                                <div className="inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-accent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-[2.25rem] w-[2.25rem] fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mx-auto mb-4 max-w-[9.625rem] font-display text-lg text-jacarta-700 dark:text-white">
                                305,000+ NFTs created
                            </h3>
                        </div>

                        <div className="rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl dark:bg-jacarta-800">
                            <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
                                <div className="inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-accent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-[2.25rem] w-[2.25rem] fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mx-auto mb-4 max-w-[9.625rem] font-display text-lg text-jacarta-700 dark:text-white">
                                Rated the best NFT Marketplace
                            </h3>
                        </div>

                        <div className="rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl dark:bg-jacarta-800">
                            <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
                                <div className="inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-accent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-[2.25rem] w-[2.25rem] fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0zm1-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mx-auto mb-4 max-w-[9.625rem] font-display text-lg text-jacarta-700 dark:text-white">
                                1.6M+ Happy NFT Users
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end benefits --> */}

            {/* <!-- Process --> */}
            <section className="relative py-24">
                <div className="container">
                    <div className="mx-auto mb-20 max-w-xl text-center">
                        <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                            How Our Affiliate Program Works
                        </h2>
                        <p className="dark:text-jacarta-300">
                            While we take pride in being the first and largest marketplace and in our robust feature
                            set, we also help our partners succeed with the following...
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM7 16v2h2v1h2v-1h.5a2.5 2.5 0 1 0 0-5h-3a.5.5 0 1 1 0-1H13v-2h-2V9H9v1h-.5a2.5 2.5 0 1 0 0 5h3a.5.5 0 1 1 0 1H7z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Generate Revenue
                            </h3>
                            <p className="dark:text-jacarta-300">
                                With millions in transactions since 2017, we&apos;ll help you generate revenue on our
                                platform ⁠— from direct sales to secondary sales
                            </p>
                        </div>
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Reach Millions
                            </h3>
                            <p className="dark:text-jacarta-300">
                                With over thousands of users and followers, we can help you reach a large audience of
                                collectors
                            </p>
                        </div>
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">Spend Less</h3>
                            <p className="dark:text-jacarta-300">
                                Compared with other NFT marketplaces, we have lowest fees in the space allowing you to
                                spend less with your created collection
                            </p>
                        </div>
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M22 20v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20h1zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Gas-free Marketplace
                            </h3>
                            <p className="dark:text-jacarta-300">
                                With our multiple blockchains support, create, buy, and sell NFTs without paying any gas
                                fee
                            </p>
                        </div>
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Advertise Xhibiter
                            </h3>
                            <p className="dark:text-jacarta-300">
                                With the most powerful way for users to buy and sell NFTS, we offer the most advanced
                                features
                            </p>
                        </div>
                        <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                                </svg>
                            </div>

                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Earn 20% Commission Per Sale!
                            </h3>
                            <p className="dark:text-jacarta-300">
                                With over thousands of collections, we are proud to host the widest range of categories,
                                ranging from digital to physical NFTs
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end process --> */}

            {/* <!-- Partner collections / FAQ / Testimonials --> */}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="mx-auto mb-8 max-w-xl text-center">
                        <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                            Who has partnered with us
                        </h2>
                        <p className="dark:text-jacarta-300">
                            While we take pride in being the first and largest marketplace and in our robust feature
                            set, we also help our partners succeed with the following...
                        </p>
                    </div>

                    {/* <!-- Collections Slider --> */}
                    <div className="relative">
                        {/* <!-- Slider --> */}
                        <div className="swiper collections-slider !py-5">
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img
                                                        src="./img/collections/collection_1_1.jpg"
                                                        alt="item 1"
                                                        className="h-full w-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img
                                                        src="./img/collections/collection_1_2.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_1_3.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_1_4.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>

                                            <a
                                                href="collection.html"
                                                className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                            >
                                                Art Me Outside
                                            </a>

                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img
                                                            src="img/avatars/owner_5.png"
                                                            alt="owner"
                                                            className="h-5 w-5 rounded-full"
                                                        />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Wow Frens</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">10K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img
                                                        src="./img/collections/collection_2_1.jpg"
                                                        alt="item 1"
                                                        className="h-full w-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img
                                                        src="./img/collections/collection_2_2.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_2_3.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_2_4.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>

                                            <a
                                                href="collection.html"
                                                className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                            >
                                                PankySkal
                                            </a>

                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img
                                                            src="img/avatars/owner_9.png"
                                                            alt="owner"
                                                            className="h-5 w-5 rounded-full"
                                                        />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>NFT stars</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">2.8K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img
                                                        src="./img/collections/collection_3_1.jpg"
                                                        alt="item 1"
                                                        className="h-full w-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img
                                                        src="./img/collections/collection_3_2.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_3_3.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_3_4.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>

                                            <a
                                                href="collection.html"
                                                className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                            >
                                                VR Space_287
                                            </a>

                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img
                                                            src="img/avatars/owner_4.png"
                                                            alt="owner"
                                                            className="h-5 w-5 rounded-full"
                                                        />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Origin Morish</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">8K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img
                                                        src="./img/collections/collection_4_1.jpg"
                                                        alt="item 1"
                                                        className="h-full w-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img
                                                        src="./img/collections/collection_4_2.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_4_3.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_4_4.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>

                                            <a
                                                href="collection.html"
                                                className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                            >
                                                Metasmorf
                                            </a>

                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img
                                                            src="img/avatars/owner_10.png"
                                                            alt="owner"
                                                            className="h-5 w-5 rounded-full"
                                                        />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>Lazy Panda</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">1.5K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <a href="collection.html" className="flex space-x-[0.625rem]">
                                                <span className="w-[74.5%]">
                                                    <img
                                                        src="./img/collections/collection_5_1.jpg"
                                                        alt="item 1"
                                                        className="h-full w-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                                <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                    <img
                                                        src="./img/collections/collection_5_2.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_5_3.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <img
                                                        src="./img/collections/collection_5_4.jpg"
                                                        alt="item 1"
                                                        className="h-full rounded-[0.625rem] object-cover"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>

                                            <a
                                                href="collection.html"
                                                className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                            >
                                                3Landers
                                            </a>

                                            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                <div className="flex flex-wrap items-center">
                                                    <a href="user.html" className="mr-2 shrink-0">
                                                        <img
                                                            src="img/avatars/owner_11.png"
                                                            alt="owner"
                                                            className="h-5 w-5 rounded-full"
                                                        />
                                                    </a>
                                                    <span className="mr-1 dark:text-jacarta-400">by</span>
                                                    <a href="user.html" className="text-accent">
                                                        <span>051_Hart</span>
                                                    </a>
                                                </div>
                                                <span className="text-sm dark:text-jacarta-300">15K Items</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slider Navigation --> */}
                        <div className="swiper-button-prev swiper-button-prev-2 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="fill-jacarta-700 group-hover:fill-accent"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                            </svg>
                        </div>
                        <div className="swiper-button-next swiper-button-next-2 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="fill-jacarta-700 group-hover:fill-accent"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </svg>
                        </div>
                    </div>
                    {/* <!-- end collections slider --> */}

                    {/* <!-- FAQ --> */}
                    <div className="pt-20 pb-24">
                        <h2 className="mb-10 text-center font-display text-xl font-medium text-jacarta-700 dark:text-white">
                            Frequently asked questions
                        </h2>
                        <p className="mx-auto mb-10 max-w-md text-center text-lg dark:text-jacarta-300">
                            Join our community now to get free updates and also alot of freebies are waiting for you or
                            <a href="contact.html" className="text-accent">
                                Contact Support
                            </a>
                        </p>

                        <div className="accordion mx-auto max-w-[35rem]" id="accordionFAQ">
                            <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <h2 className="accordion-header" id="faq-heading-1">
                                    <button
                                        className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-1"
                                        aria-expanded="false"
                                        aria-controls="faq-1"
                                    >
                                        <span>How do I create an NFT?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="faq-1"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq-heading-1"
                                    data-bs-parent="#accordionFAQ"
                                >
                                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <p className="dark:text-jacarta-200">
                                            Learn how to create your very first NFT and how to create your NFT
                                            collections. Unique, fully 3D and built to unite the design multiverse.
                                            Designed and styled by Digimental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <h2 className="accordion-header" id="faq-heading-2">
                                    <button
                                        className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-2"
                                        aria-expanded="false"
                                        aria-controls="faq-2"
                                    >
                                        <span>How can I stay safe and protect my NFTs ?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="faq-2"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq-heading-2"
                                    data-bs-parent="#accordionFAQ"
                                >
                                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <p className="dark:text-jacarta-200">
                                            Learn how to create your very first NFT and how to create your NFT
                                            collections. Unique, fully 3D and built to unite the design multiverse.
                                            Designed and styled by Digimental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <h2 className="accordion-header" id="faq-heading-3">
                                    <button
                                        className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-3"
                                        aria-expanded="false"
                                        aria-controls="faq-3"
                                    >
                                        <span>What are the key terms to know in NFTs and Web3 ?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="faq-3"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq-heading-3"
                                    data-bs-parent="#accordionFAQ"
                                >
                                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <p className="dark:text-jacarta-200">
                                            Learn how to create your very first NFT and how to create your NFT
                                            collections. Unique, fully 3D and built to unite the design multiverse.
                                            Designed and styled by Digimental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <h2 className="accordion-header" id="faq-heading-4">
                                    <button
                                        className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-4"
                                        aria-expanded="false"
                                        aria-controls="faq-4"
                                    >
                                        <span>How do I sell an NFT ?</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="faq-4"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq-heading-4"
                                    data-bs-parent="#accordionFAQ"
                                >
                                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <p className="dark:text-jacarta-200">
                                            Learn how to create your very first NFT and how to create your NFT
                                            collections. Unique, fully 3D and built to unite the design multiverse.
                                            Designed and styled by Digimental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <h2 className="accordion-header" id="faq-heading-5">
                                    <button
                                        className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq-5"
                                        aria-expanded="false"
                                        aria-controls="faq-5"
                                    >
                                        <span>Smart Contract Upgrade: What You Need to Know</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id="faq-5"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq-heading-5"
                                    data-bs-parent="#accordionFAQ"
                                >
                                    <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <p className="dark:text-jacarta-200">
                                            Learn how to create your very first NFT and how to create your NFT
                                            collections. Unique, fully 3D and built to unite the design multiverse.
                                            Designed and styled by Digimental.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Testimonials --> */}
                    <div className="flex flex-wrap rounded-2.5xl bg-white p-10 dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
                        <div className="mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent md:mb-0 md:w-16">
                            <svg
                                width="22"
                                height="19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-white"
                            >
                                <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                            </svg>
                        </div>

                        <div className="mb-4 md:mb-0">
                            <p className="text-lg leading-normal text-jacarta-700 dark:text-white">
                                Xhibiter is one of the most exciting, important companies in the world right now because
                                it&apos;s the portal to the new digital economy. If you&apos;re interested in shaping a
                                new business model for creators, this is the team to join.
                            </p>
                            <span className="mt-12 block font-display text-md font-medium text-jacarta-700 dark:text-white">
                                Katie Smith
                            </span>
                            <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                General Partner at Entrepreneur
                            </span>
                        </div>

                        <img src="img/testimonials.jpg" alt="" className="w-28 self-start rounded-2.5xl lg:w-auto" />
                    </div>
                </div>
            </section>
            {/* <!-- end partner collections / faq / testimonials --> */}

            {/* <!-- CTA --> */}
            <section className="bg-accent py-28">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mx-auto mb-8 max-w-sm font-display text-3xl text-white">
                            Interested In Becoming An Affiliate Partner?
                        </h2>
                        <p className="mb-10 text-lg leading-normal text-white">
                            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
                            tips and tricks for navigating Xhibiter
                        </p>
                        <a
                            href="contact.html"
                            className="inline-block rounded-full bg-white py-3 px-8 text-center font-semibold text-accent transition-all hover:bg-accent-dark hover:text-white"
                        >
                            Sign Up Now
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end cta --> */}

            {/* <!-- Partners --> */}
            <div className="bg-light-base dark:bg-jacarta-800">
                <div className="container">
                    <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
                        <a href="#">
                            <img src="img/partners/partner_logo_1.png" alt="partner 1" />
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_2.png" alt="partner 1" />
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_3.png" alt="partner 1" />
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_4.png" alt="partner 1" />
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_5.png" alt="partner 1" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

PagePartners.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PagePartners };
