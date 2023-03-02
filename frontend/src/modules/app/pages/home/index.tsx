import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Image from 'next/image';

const PageHome = () => {
    return (
        <main>
            {/* <!-- Hero --> */}
            <section className="relative pb-10 pt-20 md:pt-32 lg:h-[88vh]">
                <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                    <Image src="img/gradient.jpg" alt="gradient" className="w-full" />
                </picture>
                <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                    <Image src="img/gradient_dark.jpg" alt="gradient dark" className="w-full" />
                </picture>

                <div className="container h-full">
                    <div className="grid h-full items-center gap-4 md:grid-cols-12">
                        <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
                            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                                Buy, sell and collect NFTs.
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

                        {/* <!-- Hero image --> */}
                        <div className="col-span-6 xl:col-span-8">
                            <div className="relative text-center md:pl-8 md:text-right">
                                <svg
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                                >
                                    <defs>
                                        <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                                            <path
                                                d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                                                fill="#9446ED"
                                            ></path>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipping)">
                                        {/* <!-- Bg image --> */}
                                        <image
                                            href="img/hero/hero.jpg"
                                            width="200"
                                            height="200"
                                            clip-path="url(#clipping)"
                                        />
                                    </g>
                                </svg>
                                <Image
                                    src="img/hero/3D_elements.png"
                                    alt=""
                                    className="absolute top-0 animate-fly md:-right-[10%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end hero --> */}

            {/* <!-- Hot Bids --> */}
            <section className="pt-10 pb-24">
                <div className="container">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        <span
                            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                            style={{
                                backgroundImage:
                                    'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png)',
                            }}
                        ></span>
                        Hot Bids
                    </h2>

                    <div className="relative">
                        {/* <!-- Slider --> */}
                        <div className="swiper card-slider-4-columns !py-5">
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure>
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/products/item_1.jpg"
                                                        alt="item 1"
                                                        width="230"
                                                        height="230"
                                                        className="w-full rounded-[0.625rem]"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
                                                <a href="item.html">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                        ETH Me Outside
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        1.55 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">1.3 ETH</span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">159</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure>
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/products/item_2.jpg"
                                                        alt="item 2"
                                                        width="230"
                                                        height="230"
                                                        className="w-full rounded-[0.625rem]"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
                                                <a href="item.html">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                        Lazyone Panda
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        2 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">
                                                    0.001 ETH
                                                </span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">75</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure>
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/products/item_6.jpg"
                                                        alt="item 6"
                                                        width="230"
                                                        height="230"
                                                        className="w-full rounded-[0.625rem]"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        5.1 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">4.7 ETH</span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">253</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure>
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/products/item_4.jpg"
                                                        alt="item 4"
                                                        width="230"
                                                        height="230"
                                                        className="w-full rounded-[0.625rem]"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
                                                <a href="item.html">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                        Amazing NFT art
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        7 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">1.2 ETH</span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">324</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/pixel.jpg"
                                                        data-src="./img/products/item_3.gif"
                                                        alt="item 3"
                                                        width="230"
                                                        height="230"
                                                        className="swiper-lazy w-full rounded-[0.625rem]"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
                                                <a href="item.html">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                        Portrait Gallery
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        0.7 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">0.05 ETH</span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">54</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item.html">
                                                    <Image
                                                        src="./img/pixel.jpg"
                                                        data-src="./img/products/item_5.jpg"
                                                        alt="item 5"
                                                        width="230"
                                                        height="230"
                                                        className="swiper-lazy w-full rounded-[0.625rem]"
                                                    />
                                                    <div className="swiper-lazy-preloader"></div>
                                                </a>
                                            </figure>
                                            <div className="mt-4 flex items-center justify-between">
                                                <a href="item.html">
                                                    <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                        Flourishing Cat #180
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
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            />
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            />
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            />
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            />
                                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-medium tracking-tight text-green">
                                                        3 ETH
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm">
                                                <span className="dark:text-jacarta-300">Current Bid</span>
                                                <span className="text-jacarta-700 dark:text-jacarta-100">0.25 ETH</span>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between">
                                                <button
                                                    type="button"
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
                                                    <span className="text-sm dark:text-jacarta-200">125</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slider Navigation --> */}
                        <div className="swiper-button-prev swiper-button-prev-1 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
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
                        <div className="swiper-button-next swiper-button-next-1 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
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
            {/* <!-- end hot bids --> */}

            {/* <!-- Top Collections --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <Image src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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
                                    <Image
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

            {/* <!-- Trending Categories --> */}
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

                    {/* <!-- Filter --> */}
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

                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                        <article>
                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                <figure className="relative">
                                    <a href="item.html">
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_1.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_2.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_3.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_4.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_3.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_6.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_2.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
                                        <Image
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
                                                <Image
                                                    src="img/avatars/creator_8.png"
                                                    alt="creator"
                                                    className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                                    data-tippy-content="Creator: Sussygirl"
                                                />
                                            </a>
                                            <a href="#">
                                                <Image
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
            {/* <!-- end trending categories --> */}

            {/* <!-- Process / Newsletter --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <Image src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
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
                                Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT
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
        </main>
    );
};

PageHome.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome };
