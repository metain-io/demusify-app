import { MainLayout } from '@modules/app/layouts';
import Script from 'next/script';
import { ReactElement } from 'react';

const PageHome2 = () => {
    return (
        <main>
            {/* <!-- Hero --> */}
            <section className="hero relative py-20 md:pt-32">
                <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                    <img src="img/gradient.jpg" alt="gradient" className="w-full" />
                </picture>
                <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                    <img src="img/gradient_dark.jpg" alt="gradient dark" className="w-full" />
                </picture>

                <div className="container">
                    <div className="py-24 text-center">
                        <h1 className="mb-6 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
                            Collect Digital Art.
                        </h1>
                        <p className="mb-8 text-lg dark:text-jacarta-200">
                            Buy and sell NFTs from the world's top artists
                        </p>
                        <div className="inline-flex space-x-4">
                            <a
                                href="create.html"
                                className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Create
                            </a>
                            <a
                                href="collections.html"
                                className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                            >
                                Explore
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        {/* <!-- Slider --> */}
                        <div className="swiper card-slider-3-columns !pb-5">
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/products/item_12_lg.jpg"
                                                        alt="item 1"
                                                        height="430"
                                                        width="379"
                                                        className="swiper-lazy h-[430px] w-full object-cover"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
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
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/products/item_13_lg.gif"
                                                        alt="item 1"
                                                        className="swiper-lazy h-[430px] w-full object-cover"
                                                        height="430"
                                                        width="379"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
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
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/products/item_16_lg.jpg"
                                                        alt="item 1"
                                                        className="swiper-lazy h-[430px] w-full object-cover"
                                                        height="430"
                                                        width="379"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
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
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/pixel.jpg"
                                                        data-src="./img/products/item_14_lg.jpg"
                                                        alt="item 1"
                                                        className="swiper-lazy h-[430px] w-full object-cover"
                                                        height="430"
                                                        width="379"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
                                                </a>
                                            </figure>
                                            <div className="p-6">
                                                <div className="flex">
                                                    <a href="user.html" className="shrink-0">
                                                        <img
                                                            src="img/avatars/avatar_19_rounded.jpg"
                                                            alt="avatar"
                                                            className="mr-4 h-10 w-10 rounded-full"
                                                        />
                                                    </a>
                                                    <div>
                                                        <a href="item.html" className="block">
                                                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                                Amazing NFT art
                                                            </span>
                                                        </a>
                                                        <a href="#" className="text-2xs text-accent">
                                                            Lila Spacex
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <img
                                                        src="./img/pixel.jpg"
                                                        data-src="./img/products/item_15_lg.jpg"
                                                        alt="item 1"
                                                        className="swiper-lazy h-[430px] w-full object-cover"
                                                        height="430"
                                                        width="379"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
                                                </a>
                                            </figure>
                                            <div className="p-6">
                                                <div className="flex">
                                                    <a href="user.html" className="shrink-0">
                                                        <img
                                                            src="img/avatars/avatar_20_rounded.jpg"
                                                            alt="avatar"
                                                            className="mr-4 h-10 w-10 rounded-full"
                                                        />
                                                    </a>
                                                    <div>
                                                        <a href="item.html" className="block">
                                                            <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                                                SwagFox#133
                                                            </span>
                                                        </a>
                                                        <a href="#" className="text-2xs text-accent">
                                                            Bored Bunny
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Navigation --> */}
                        <div className="swiper-button-prev swiper-button-prev-3 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
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
                        <div className="swiper-button-next swiper-button-next-3 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
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
            {/* <!-- end hero --> */}

            {/* <!-- Top Collections --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        <h2 className="inline">Top collections over</h2>
                        <div className="dropdown inline cursor-pointer">
                            <button
                                className="dropdown-toggle inline-flex items-center text-accent"
                                type="button"
                                id="collectionSort"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                last 7 days
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-8 w-8 fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                </svg>
                            </button>
                            <div
                                className="dropdown-menu z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                aria-labelledby="collectionSort"
                            >
                                <a
                                    className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                                    href="#"
                                >
                                    Last 24 Hours
                                </a>
                                <a
                                    className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                                    href="#"
                                >
                                    Last 7 Days
                                </a>
                                <a
                                    className="dropdown-item block rounded-xl px-5 py-2 text-sm transition-colors hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                                    href="#"
                                >
                                    Last 30 Days
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
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
                                        5
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
                                        6
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
                                        7
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
                                        8
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
                                        9
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
                                        10
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
                                        11
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
                                        12
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
                        <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                            <figure className="mr-4 shrink-0">
                                <a href="collection.html" className="relative block">
                                    <img
                                        src="img/avatars/avatar_13.jpg"
                                        alt="avatar 13"
                                        className="rounded-2lg"
                                        loading="lazy"
                                    />
                                    <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                        13
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
                                        Arcahorizons
                                    </span>
                                </a>
                                <span className="text-sm dark:text-jacarta-300">1,157 ETH</span>
                            </div>
                        </div>
                        <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                            <figure className="mr-4 shrink-0">
                                <a href="collection.html" className="relative block">
                                    <img
                                        src="img/avatars/avatar_14.jpg"
                                        alt="avatar 14"
                                        className="rounded-2lg"
                                        loading="lazy"
                                    />
                                    <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                        14
                                    </div>
                                </a>
                            </figure>
                            <div>
                                <a href="collection.html" className="block">
                                    <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                        Sussygirl
                                    </span>
                                </a>
                                <span className="text-sm dark:text-jacarta-300">1,030 ETH</span>
                            </div>
                        </div>
                        <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                            <figure className="mr-4 shrink-0">
                                <a href="collection.html" className="relative block">
                                    <img
                                        src="img/avatars/avatar_15.jpg"
                                        alt="avatar 15"
                                        className="rounded-2lg"
                                        loading="lazy"
                                    />
                                    <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                        15
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
                                        Smilebin
                                    </span>
                                </a>
                                <span className="text-sm dark:text-jacarta-300">999.51 ETH</span>
                            </div>
                        </div>
                        <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                            <figure className="mr-4 shrink-0">
                                <a href="collection.html" className="relative block">
                                    <img
                                        src="img/avatars/avatar_16.jpg"
                                        alt="avatar 16"
                                        className="rounded-2lg"
                                        loading="lazy"
                                    />
                                    <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                        16
                                    </div>
                                </a>
                            </figure>
                            <div>
                                <a href="collection.html" className="block">
                                    <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                        Pankysmoke
                                    </span>
                                </a>
                                <span className="text-sm dark:text-jacarta-300">875.65 ETH</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <a
                            href="rankings.html"
                            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        >
                            Go to Rankings
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end top collections --> */}

            {/* <!-- Live Auctions --> */}
            <section className="py-24">
                <div className="container">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        <span
                            className="mr-1 inline-block h-6 w-6 animate-heartBeat bg-contain bg-center text-xl"
                            style={{
                                backgroundImage:
                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png)',
                            }}
                        ></span>
                        Live Auctions
                    </h2>
                    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_1.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_1.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                                            role="button"
                                            id="itemActions1"
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
                                            aria-labelledby="itemActions1"
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_8.jpg"
                                            alt="item 8"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-04-07T11:32:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Monkeyme#155
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">1.3 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_4.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_4.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_6.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-06-01T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Splendid Girl
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">10 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">60</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_8.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_5.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_11.gif"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-03-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Asuna #1649
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">0.8 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">34</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_2.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_7.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_10.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-07-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Artof Eve
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">1.75 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_2.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_2.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_17.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-05-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Azuki #4017
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">9.3712 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">334</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_9.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_8.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_18.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2022-09-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Block #2788
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">7.3 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">52</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_6.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_4.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_19.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2022-10-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            Crypto bull #6195
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">0.32 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">90</span>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <a href="#">
                                            <img
                                                src="img/avatars/creator_3.png"
                                                alt="creator"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Creator: Sussygirl"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="img/avatars/owner_3.png"
                                                alt="owner"
                                                className="h-6 w-6 rounded-full"
                                                data-tippy-content="Owner: Sussygirl"
                                            />
                                        </a>
                                    </div>

                                    <div className="dropdown rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
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
                                <figure className="relative">
                                    <a href="item.html">
                                        <img
                                            src="./img/products/item_20.jpg"
                                            alt="item 6"
                                            className="w-full rounded-[0.625rem]"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                                        <span
                                            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                                            style={{
                                                backgroundImage:
                                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)',
                                            }}
                                        ></span>
                                        <span
                                            className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                                            data-countdown="2023-03-14T10:45:30"
                                            data-expired="This auction has ended"
                                        ></span>
                                        <span className="js-countdown-left" data-countdownLeft="left"></span>
                                    </div>
                                </figure>
                                <div className="mt-7 flex items-center justify-between">
                                    <a href="item.html">
                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                            TSARÉVNA
                                        </span>
                                    </a>
                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0"
                                                y="0"
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="h-4 w-4"
                                            >
                                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                                <path
                                                    fill="#62688F"
                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                />
                                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <span className="dark:text-jacarta-300">Highest Bid</span>
                                    <span className="text-jacarta-700 dark:text-jacarta-100">4.7 ETH</span>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <button
                                        className="font-display text-sm font-semibold text-accent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#placeBidModal"
                                    >
                                        Place bid
                                    </button>
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-sm dark:text-jacarta-200">260</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="collections.html"
                            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        >
                            Load More
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end live auctions --> */}

            {/* <!-- Process / Newsletter --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        Create and sell your NFTs
                    </h2>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-5 w-5 fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                1. Set up your wallet
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT
                                Marketplacein the top right corner.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-5 w-5 fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                2. Create Your Collection
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Click Create and set up your collection. Add social links, a description, profile &
                                banner images, and set a secondary sales fee.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-5 w-5 fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                3. Add Your NFTs
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Upload your work (image, video, audio, or 3D art), add a title and description, and
                                customize your NFTs with properties, stats.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-5 w-5 fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                4. List Them For Sale
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Choose between auctions, fixed-price listings, and declining-price listings. You choose
                                how you want to sell your NFTs!
                            </p>
                        </div>
                    </div>

                    <p className="mx-auto mt-20 max-w-2xl text-center text-lg text-jacarta-700 dark:text-white">
                        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips
                        and tricks for navigating Xhibiter
                    </p>

                    <div className="mx-auto mt-7 max-w-md text-center">
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-full border border-jacarta-100 py-3 px-4 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-white"
                            />
                            <button className="absolute top-2 right-2 rounded-full bg-accent px-6 py-2 font-display text-sm text-white hover:bg-accent-dark">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- end process / newsletter --> */}

            {/* <!-- Featured collections --> */}
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
                </div>
            </section>
            {/* <!-- end featured collections --> */}

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

            <Script src="./js/countdown.bundle.js" />
        </main>
    );
};

PageHome2.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome2 };
