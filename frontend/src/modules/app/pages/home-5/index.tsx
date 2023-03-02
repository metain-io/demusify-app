import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageHome5 = () => {
    return (
        <main>
            {/*<!-- Hero -->*/}
            <section className="relative py-20 md:pt-32">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient.jpg" alt="gradient" className="h-full" />
                </picture>
                <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                    <img src="img/gradient_dark.jpg" alt="gradient dark" className="h-full" />
                </picture>

                <div className="h-full px-6 xl:px-20">
                    <div className="grid h-full items-center gap-4 lg:grid-cols-12">
                        <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]">
                            <div className="mb-10 w-full sm:flex sm:space-x-4">
                                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                                    <span className="block font-display text-3xl text-[#8DD059]">10,568</span>
                                    <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                                        Collectibles
                                    </span>
                                </div>
                                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                                    <span className="block font-display text-3xl text-[#737EF2]">1,200</span>
                                    <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                                        Auctions
                                    </span>
                                </div>
                                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                                    <span className="block font-display text-3xl text-[#F35BC7]">6,897</span>
                                    <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                                        Artists
                                    </span>
                                </div>
                            </div>
                            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-5xl xl:text-6xl">
                                Buy and Sell Digital Art and NFT’s
                            </h1>
                            <p className="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
                                The world&apos;s largest digital marketplace for crypto collectibles and non-fungible
                                tokens
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="create.html"
                                    className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Upload
                                </a>
                                <a
                                    href="collections.html"
                                    className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                >
                                    Explore
                                </a>
                            </div>
                        </div>

                        {/*<!-- Hero images -->*/}
                        <div className="relative col-span-6 xl:col-span-6 xl:col-start-7">
                            <img
                                src="./img/hero/badge.png"
                                className="absolute top-0 z-10 -ml-16 animate-spin-slow md:top-[12%]"
                                alt=""
                            />
                            <div className="md:flex md:space-x-6 xl:space-x-12">
                                <div className="mb-6 md:flex md:w-1/2 md:items-center">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/products/item_16_2lg.jpg"
                                                        alt="item 1"
                                                        className="w-full object-cover"
                                                        height="437"
                                                        width="406"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="p-6">
                                                <div className="flex">
                                                    <a href="user.html" className="shrink-0">
                                                        <img
                                                            src="img/avatars/avatar_22_rounded.jpg"
                                                            alt="avatar"
                                                            className="mr-4 h-10 w-10 rounded-full"
                                                        />
                                                    </a>
                                                    <div>
                                                        <a href="item.html" className="block">
                                                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                                Oceania \\ OVERSEER 017
                                                            </span>
                                                        </a>
                                                        <a href="#" className="text-2xs text-accent">
                                                            MadeByM1KE
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="space-y-6 md:w-1/2 xl:space-y-12">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/products/item_12_2lg.jpg"
                                                        alt="item 1"
                                                        height="437"
                                                        width="406"
                                                        className="w-full object-cover"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="p-6">
                                                <div className="flex">
                                                    <a href="user.html" className="shrink-0">
                                                        <img
                                                            src="img/avatars/avatar_17_rounded.jpg"
                                                            alt="avatar"
                                                            className="mr-4 h-10 w-10 rounded-full"
                                                        />
                                                    </a>
                                                    <div>
                                                        <a href="item.html" className="block">
                                                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                                Light Bars
                                                            </span>
                                                        </a>
                                                        <a href="#" className="text-2xs text-accent">
                                                            Wow Frens
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="md:w-3/4">
                                        <article>
                                            <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                                <figure className="relative">
                                                    <a href="item.html">
                                                        <img
                                                            src="./img/products/item_13_lg.gif"
                                                            alt="item 1"
                                                            className="w-full object-cover"
                                                            height="300"
                                                            width="300"
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="p-6">
                                                    <div className="flex">
                                                        <a href="user.html" className="shrink-0">
                                                            <img
                                                                src="img/avatars/avatar_18_rounded.gif"
                                                                alt="avatar"
                                                                className="mr-4 h-10 w-10 rounded-full"
                                                            />
                                                        </a>
                                                        <div>
                                                            <a href="item.html" className="block">
                                                                <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                                    Etherium NFT Launching Lab
                                                                </span>
                                                            </a>
                                                            <a href="#" className="text-2xs text-accent">
                                                                051_Hart
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- end hero -->*/}

            {/*<!-- Process -->*/}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h2 className="mb-10 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        Get Started in 3 Steps
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                            </svg>
                            <div className="mb-6 inline-flex items-center justify-center">
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
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Connect your Wallet
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT
                                Marketplacein the top right corner.
                            </p>
                        </div>
                        <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#10b981] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(16,185,129,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                            </svg>
                            <div className="mb-6 inline-flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-green"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Create your NFT Store
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Click Create and set up your collection. Add social links, a description, profile &
                                banner images, and set a secondary sales fee.
                            </p>
                        </div>
                        <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#ef4444] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(239,68,68,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="absolute right-3 top-3 h-16 w-16 fill-jacarta-50 dark:fill-jacarta-600"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                            </svg>
                            <div className="mb-6 inline-flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-12 w-12 fill-red"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                Start Selling & Growing
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Choose between auctions, fixed-price listings, and declining-price listings. You choose
                                how you want to sell your NFTs!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- end process -->*/}

            {/*<!-- Featured collections -->*/}
            <section className="py-24">
                <div className="container">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        <span
                            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                            style={{
                                backgroundImage:
                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png)',
                            }}
                        ></span>
                        Featured collections
                    </h2>

                    <div className="relative">
                        {/*<!-- Slider -->*/}
                        <div className="swiper collections-slider !py-5">
                            <div className="swiper-wrapper">
                                {/*<!-- Slides -->*/}
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

                        {/*<!-- Slider Navigation -->*/}
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
                </div>
            </section>
            {/*<!-- end featured collections -->*/}

            {/*<!-- Today&apos;s Drops / Sellers / Buyers -->*/}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-7">
                        <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                Today&apos;s Drops
                            </h2>
                            <div className="flex flex-col space-y-5">
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_1.jpg"
                                                alt="avatar 1"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                1
                                            </div>
                                            <div
                                                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                data-tippy-content="Verified Collection"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-[.875rem] w-[.875rem] fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                NFT Funny Cat
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">7,080.95 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_2.jpg"
                                                alt="avatar 2"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-sm text-white dark:border-jacarta-600">
                                                2
                                            </div>
                                            <div
                                                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                data-tippy-content="Verified Collection"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-[.875rem] w-[.875rem] fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Cryptopank
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">6,548,133 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_3.jpg"
                                                alt="avatar 3"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                3
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Prince Ape Planet
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">4,823,927 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_4.jpg"
                                                alt="avatar 4"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                4
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Hey Mrsmeseks
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">3,186 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="collection.html"
                                className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                            >
                                View All Drops
                            </a>
                        </div>

                        <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                Top Sellers
                            </h2>
                            <div className="flex flex-col space-y-5">
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_5.jpg"
                                                alt="avatar 5"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                1
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Bored Bunny
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">3,027 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_6.gif"
                                                alt="avatar 6"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                2
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Wow Frens
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">2,586 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_7.jpg"
                                                alt="avatar 7"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                3
                                            </div>
                                            <div
                                                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                data-tippy-content="Verified Collection"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-[.875rem] w-[.875rem] fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Origin Morish
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">2,347.85 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_8.jpg"
                                                alt="avatar 8"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                4
                                            </div>
                                            <div
                                                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                data-tippy-content="Verified Collection"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-[.875rem] w-[.875rem] fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Superdo
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">2,115.71 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="collection.html"
                                className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                            >
                                View All Sellers
                            </a>
                        </div>

                        <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                            <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                Top Buyers
                            </h2>
                            <div className="flex flex-col space-y-5">
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_9.jpg"
                                                alt="avatar 9"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                1
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                NFT stars
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">2,027 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_10.jpg"
                                                alt="avatar 10"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                2
                                            </div>
                                            <div
                                                className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                data-tippy-content="Verified Collection"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-[.875rem] w-[.875rem] fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Asumitsu
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">1,989.70 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_11.jpg"
                                                alt="avatar 11"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                3
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Pank Skull
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">1,726.70 ETH</span>
                                    </div>
                                </div>
                                <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                    <figure className="mr-4 shrink-0">
                                        <a href="collection.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_12.jpg"
                                                alt="avatar 12"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                4
                                            </div>
                                        </a>
                                    </figure>
                                    <div>
                                        <a href="collection.html" className="block">
                                            <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                Lazy Panda
                                            </span>
                                        </a>
                                        <span className="text-sm dark:text-jacarta-300">1,589.03 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="collection.html"
                                className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                            >
                                View All Buyers
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- end today&apos;s drops / sellers / buyers -->*/}

            {/*<!-- Trending Categories -->*/}
            <section className="py-24">
                <div className="container">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        <span
                            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                            style={{
                                backgroundImage:
                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)',
                            }}
                        ></span>
                        Trending categories
                    </h2>

                    {/*<!-- Filter -->*/}
                    <div className="mb-8 flex flex-wrap items-center justify-between">
                        <ul className="flex flex-wrap items-center">
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center justify-center rounded-lg bg-jacarta-100 px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                >
                                    All
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                    <span>Art</span>
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                    <span>Collectibles</span>
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                                    </svg>
                                    <span>Domain</span>
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                                    </svg>
                                    <span>Music</span>
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                                    </svg>
                                    <span>Photography</span>
                                </a>
                            </li>
                            <li className="my-1 mr-2.5">
                                <a
                                    href="#"
                                    className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                    </svg>
                                    <span>Virtual World</span>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown my-1 cursor-pointer">
                            <div
                                className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                role="button"
                                id="categoriesSort"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className="font-display">Recently Added</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                </svg>
                            </div>

                            <div
                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                aria-labelledby="categoriesSort"
                            >
                                <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                                    Sort By
                                </span>
                                <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    Recently Added
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="mb-[3px] h-4 w-4 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                    </svg>
                                </button>
                                <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    Price: Low to High
                                </button>

                                <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    Price: High to Low
                                </button>

                                <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    Auction ending soon
                                </button>
                                <span className="block px-5 py-2 font-display text-sm font-semibold text-jacarta-300">
                                    Options
                                </span>
                                <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    <span className="flex items-center justify-between">
                                        <span>Verified Only</span>
                                        <input
                                            type="checkbox"
                                            value="checkbox"
                                            name="check"
                                            checked
                                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                                        />
                                    </span>
                                </div>
                                <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    <span className="flex items-center justify-between">
                                        <span>NFSW Only</span>
                                        <input
                                            type="checkbox"
                                            value="checkbox"
                                            name="check"
                                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                                        />
                                    </span>
                                </div>
                                <div className="dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                    <span className="flex items-center justify-between">
                                        <span>Show Lazy Minted</span>
                                        <input
                                            type="checkbox"
                                            value="checkbox"
                                            name="check"
                                            className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!-- Grid -->*/}
                    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_5.jpg"
                                            alt="item 5"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">15</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_1.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_1.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Flourishing Cat #180
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 8.49 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_4.jpg"
                                            alt="item 4"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">188</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_2.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_2.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Amazing NFT art
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions2"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5.9 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/7</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_7.jpg"
                                            alt="item 7"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">160</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_3.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_3.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            SwagFox#133
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions3"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions3"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.078 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/3</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_6.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">159</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_4.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_4.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Splendid Girl
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions4"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions4"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">10 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">2/3</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_8.jpg"
                                            alt="item 8"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">32</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_3.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_5.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Monkeyme#155
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions5"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions5"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">From 5 FLOW</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_9.jpg"
                                            alt="item 9"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">25</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_6.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_4.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Jedidia#149
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions6"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions6"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.16 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_10.jpg"
                                            alt="item 10"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">55</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_2.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_7.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Artof Eve
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions7"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions7"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.13 FLOW</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_11.gif"
                                            alt="item 11"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
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
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                            </svg>
                                        </span>
                                        <span className="text-sm dark:text-jacarta-200">70</span>
                                    </div>
                                    <div className="absolute left-3 -bottom-3">
                                        <div className="flex -space-x-2">
                                            <a href="#">
                                                <img
                                                    src="img/avatars/creator_8.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="img/avatars/owner_5.png"
                                                    alt="owner"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Owner: Sussygirl"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Asuna #1649
                                        </span>
                                    </a>
                                    <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions8"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <svg
                                                width="16"
                                                height="4"
                                                viewBox="0 0 16 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-jacarta-500 dark:fill-jacarta-200"
                                            >
                                                <circle cx="2" cy="2" r="2" />
                                                <circle cx="8" cy="2" r="2" />
                                                <circle cx="14" cy="2" r="2" />
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="itemActions8"
                                        >
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                New bid
                                            </button>
                                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Refresh Metadata
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Share
                                            </button>
                                            <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">0.8 ETH</span>
                                    <span className="text-jacarta-500 dark:text-jacarta-300">1/1</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#buyNowModal"
                                    >
                                        Buy now
                                    </button>
                                    <a href="item.html" className="group flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200">
                                            View History
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            {/*<!-- end trending categories -->*/}

            {/*<!-- CTA Download App -->*/}
            <section className="relative pt-20 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-4">
                        <div className="mb-10 lg:order-1 lg:w-2/4 xl:w-[30%]">
                            <div className="text-center lg:text-left">
                                <h2 className="mb-6 font-display text-xl text-jacarta-700 dark:text-white lg:pr-4">
                                    Download Xhibiter app
                                    <span className="text-jacarta-300">
                                        to track your NFT portfolio and discover drops
                                    </span>
                                </h2>
                                <div className="inline-flex space-x-4">
                                    <a
                                        href="#"
                                        className="group flex items-center rounded-full bg-white py-3 px-6 text-center font-semibold text-jacarta-500 shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="mr-2 -mt-1 inline-block h-5 w-5 fill-jacarta-500 transition-colors group-hover:fill-white"
                                        >
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                    fill-rule="nonzero"
                                                    d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"
                                                />
                                            </g>
                                        </svg>
                                        App Store
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center rounded-full bg-white py-3 px-6 text-center font-semibold text-jacarta-500 shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                    >
                                        <svg
                                            width="17"
                                            height="18"
                                            viewBox="0 0 17 18"
                                            className="mr-2 inline-block"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1429_17255)">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0.815635 0.506775C0.615202 0.718493 0.5 1.04436 0.5 1.46779V16.5292C0.5 16.9527 0.615202 17.2785 0.823128 17.4829L0.877451 17.528L9.46423 9.08873V8.8991L0.869958 0.46167L0.815635 0.506775Z"
                                                    fill="url(#paint0_linear_1429_17255)"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.3212 11.9129L9.45703 9.09707V8.90008L12.3221 6.08423L12.3839 6.12197L15.7725 8.01455C16.7429 8.55213 16.7429 9.43766 15.7725 9.98261L12.3839 11.8752C12.383 11.8752 12.3212 11.9129 12.3212 11.9129Z"
                                                    fill="url(#paint1_linear_1429_17255)"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.3835 11.8751L9.45751 8.99854L0.816406 17.4912C1.13204 17.8244 1.6631 17.8622 2.2569 17.5363L12.3835 11.8751Z"
                                                    fill="url(#paint2_linear_1429_17255)"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.3835 6.12303L2.2569 0.469231C1.66403 0.136005 1.13204 0.18111 0.816406 0.514336L9.45657 8.99872L12.3835 6.12303Z"
                                                    fill="url(#paint3_linear_1429_17255)"
                                                />
                                                <path
                                                    opacity="0.2"
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.322 11.8145L2.26472 17.4305C1.70275 17.7481 1.20167 17.726 0.878542 17.4379L0.824219 17.4913L0.878542 17.5364C1.20167 17.8236 1.70275 17.8466 2.26472 17.529L12.3913 11.8752L12.322 11.8145Z"
                                                    fill="black"
                                                />
                                                <path
                                                    opacity="0.12"
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M15.7704 9.88407L12.3125 11.8144L12.3743 11.8751L15.7629 9.98256C16.2481 9.71009 16.4869 9.35477 16.4869 8.99854C16.456 9.3244 16.2097 9.63461 15.7704 9.88407Z"
                                                    fill="black"
                                                />
                                                <path
                                                    opacity="0.25"
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M2.25613 0.567505L15.7713 8.11388C16.2106 8.35598 16.4569 8.67355 16.4953 8.99942C16.4953 8.6441 16.2565 8.28786 15.7713 8.01539L2.25613 0.46901C1.28581 -0.0759346 0.5 0.377879 0.5 1.46777V1.56626C0.5 0.476374 1.28581 0.0299246 2.25613 0.567505Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1429_17255"
                                                    x1="8.69318"
                                                    y1="1.3059"
                                                    x2="-5.02929"
                                                    y2="5.02617"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#00A0FF" />
                                                    <stop offset="0.007" stop-color="#00A1FF" />
                                                    <stop offset="0.26" stop-color="#00BEFF" />
                                                    <stop offset="0.512" stop-color="#00D2FF" />
                                                    <stop offset="0.76" stop-color="#00DFFF" />
                                                    <stop offset="1" stop-color="#00E3FF" />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint1_linear_1429_17255"
                                                    x1="17.0352"
                                                    y1="8.99899"
                                                    x2="0.264462"
                                                    y2="8.99899"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#FFE000" />
                                                    <stop offset="0.409" stop-color="#FFBD00" />
                                                    <stop offset="0.775" stop-color="#FFA500" />
                                                    <stop offset="1" stop-color="#FF9C00" />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint2_linear_1429_17255"
                                                    x1="10.7924"
                                                    y1="10.5634"
                                                    x2="0.0306903"
                                                    y2="28.9927"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#FF3A44" />
                                                    <stop offset="1" stop-color="#C31162" />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint3_linear_1429_17255"
                                                    x1="-1.35877"
                                                    y1="-4.5032"
                                                    x2="3.44229"
                                                    y2="3.72749"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#32A071" />
                                                    <stop offset="0.069" stop-color="#2DA771" />
                                                    <stop offset="0.476" stop-color="#15CF74" />
                                                    <stop offset="0.801" stop-color="#06E775" />
                                                    <stop offset="1" stop-color="#00F076" />
                                                </linearGradient>
                                                <clipPath id="clip0_1429_17255">
                                                    <rect
                                                        width="16"
                                                        height="17.5238"
                                                        fill="white"
                                                        transform="translate(0.5 0.238037)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Google play
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="order-3 text-center lg:order-2 lg:w-1/4 lg:self-end xl:w-[40%]">
                            <img src="./img/mobile_app_iphone.png" className="inline-block" alt="" />
                        </div>
                        <div className="mb-10 hidden lg:order-3 lg:block lg:w-2/4 xl:w-[30%]">
                            <div className="flex items-center space-x-8 lg:pl-6">
                                <div className="inline-block flex-shrink-0 rounded-2.5xl border border-jacarta-100 bg-white p-6">
                                    <img src="./img/qr.png" alt="" />
                                </div>
                                <div className="text-left">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-rotate mb-2 h-6 w-6 fill-jacarta-700 dark:fill-white"
                                    >
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                                        </g>
                                    </svg>
                                    <span className="text-lg text-jacarta-700 dark:text-white">
                                        Scan to download Xhibiter app
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- end cta download app -->*/}
        </main>
    );
};

PageHome5.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome5 };
