import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Image from 'next/image';

const PageItem = () => {
    return (
        <main className="mt-24">
            {/* <!-- Item --> */}
            <section className="relative pt-12 pb-24 lg:py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    {/* <!-- Item --> */}
                    <div className="md:flex md:flex-wrap">
                        {/* <!-- Image --> */}
                        <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                            <img
                                src="img/products/item_single_large.jpg"
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
                            {/* <!-- end modal --> */}
                        </figure>

                        {/* <!-- Details --> */}
                        <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                            {/* <!-- Collection / Likes / Actions --> */}
                            <div className="mb-3 flex">
                                {/* <!-- Collection --> */}
                                <div className="flex items-center">
                                    <a href="collection.html" className="mr-2 text-sm font-bold text-accent">
                                        CryptoGuysNFT
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
                                        <span className="text-sm dark:text-jacarta-200">188</span>
                                    </div>

                                    {/* <!-- Actions --> */}
                                    <div className="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                        <a
                                            href="#"
                                            className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm"
                                            role="button"
                                            id="collectionActions"
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
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                            aria-labelledby="collectionActions"
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
                            </div>

                            <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">
                                TSARÉVNA
                            </h1>

                            <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <span className="-ml-1" data-tippy-content="ETH">
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0"
                                            y="0"
                                            viewBox="0 0 1920 1920"
                                            xmlSpace="preserve"
                                            className="mr-1 h-4 w-4"
                                        >
                                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                            <path
                                                fill="#62688F"
                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                            ></path>
                                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                                        </svg>
                                    </span>
                                    <span className="text-sm font-medium tracking-tight text-green">4.7 ETH</span>
                                </div>
                                <span className="text-sm text-jacarta-400 dark:text-jacarta-300">Highest bid</span>
                                <span className="text-sm text-jacarta-400 dark:text-jacarta-300">1/1 available</span>
                            </div>

                            <p className="mb-10 dark:text-jacarta-300">
                                Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at,
                                excepturi repudiandae magni optio odio doloribus? Facilisi lobortisal morbi fringilla
                                urna amet sed ipsum.
                            </p>

                            {/* <!-- Creator / Owner --> */}
                            <div className="mb-8 flex flex-wrap">
                                <div className="mr-8 mb-4 flex">
                                    <figure className="mr-4 shrink-0">
                                        <a href="user.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_7.jpg"
                                                alt="avatar 7"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div
                                                className="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                                            </div>
                                        </a>
                                    </figure>
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-sm text-jacarta-400 dark:text-white">
                                            Creator <strong>10% royalties</strong>
                                        </span>
                                        <a href="user.html" className="block text-accent">
                                            <span className="text-sm font-bold">@creative_world</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-4 flex">
                                    <figure className="mr-4 shrink-0">
                                        <a href="user.html" className="relative block">
                                            <img
                                                src="img/avatars/avatar_1.jpg"
                                                alt="avatar 1"
                                                className="rounded-2lg"
                                                loading="lazy"
                                            />
                                            <div
                                                className="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                                            </div>
                                        </a>
                                    </figure>
                                    <div className="flex flex-col justify-center">
                                        <span className="block text-sm text-jacarta-400 dark:text-white">Owned by</span>
                                        <a href="user.html" className="block text-accent">
                                            <span className="text-sm font-bold">@051_Hart</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Bid --> */}
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                                <div className="mb-8 sm:flex sm:flex-wrap">
                                    {/* <!-- Highest bid --> */}
                                    <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                            <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                                                Highest bid by{' '}
                                            </span>
                                            <a href="user.html" className="text-sm font-bold text-accent">
                                                0x695d2ef170ce69e794707eeef9497af2de25df82
                                            </a>
                                        </div>
                                        <div className="mt-3 flex">
                                            <figure className="mr-4 shrink-0">
                                                <a href="user.html" className="relative block">
                                                    <img
                                                        src="img/avatars/avatar_4.jpg"
                                                        alt="avatar"
                                                        className="rounded-2lg"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </figure>
                                            <div>
                                                <div className="flex items-center whitespace-nowrap">
                                                    <span className="-ml-1" data-tippy-content="ETH">
                                                        <svg
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="0"
                                                            y="0"
                                                            viewBox="0 0 1920 1920"
                                                            xmlSpace="preserve"
                                                            className="h-5 w-5"
                                                        >
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                            ></path>
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                            ></path>
                                                            <path
                                                                fill="#454A75"
                                                                d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                            ></path>
                                                            <path
                                                                fill="#8A92B2"
                                                                d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                            ></path>
                                                            <path
                                                                fill="#62688F"
                                                                d="M959.8 1397.6v441.7l540.1-760.6z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                    <span className="text-lg font-medium leading-tight tracking-tight text-green">
                                                        4.7 ETH
                                                    </span>
                                                </div>
                                                <span className="text-sm text-jacarta-400 dark:text-jacarta-300">
                                                    ~10,864.10
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Countdown --> */}
                                    <div className="mt-4 dark:border-jacarta-600 sm:mt-0 sm:w-1/2 sm:border-l sm:border-jacarta-100 sm:pl-4 lg:pl-8">
                                        <span className="js-countdown-ends-label text-sm text-jacarta-400 dark:text-jacarta-300">
                                            Auction ends in
                                        </span>
                                        <div
                                            className="js-countdown-single-timer mt-3 flex space-x-4"
                                            data-countdown="2023-09-07T19:40:30"
                                            data-expired="This auction has ended"
                                        >
                                            <span className="countdown-days text-jacarta-700 dark:text-white">
                                                <span className="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]"></span>
                                                <span className="block text-xs font-medium tracking-tight">Days</span>
                                            </span>
                                            <span className="countdown-hours text-jacarta-700 dark:text-white">
                                                <span className="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]"></span>
                                                <span className="block text-xs font-medium tracking-tight">Hrs</span>
                                            </span>
                                            <span className="countdown-minutes text-jacarta-700 dark:text-white">
                                                <span className="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]"></span>
                                                <span className="block text-xs font-medium tracking-tight">Min</span>
                                            </span>
                                            <span className="countdown-seconds text-jacarta-700 dark:text-white">
                                                <span className="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]"></span>
                                                <span className="block text-xs font-medium tracking-tight">Sec</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#placeBidModal"
                                    className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Place Bid
                                </a>
                            </div>
                            {/* <!-- end bid --> */}
                        </div>
                        {/* <!-- end details --> */}
                    </div>

                    {/* <!-- Tabs --> */}
                    <div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">
                        <div className="min-w-fit">
                            {/* <!-- Tabs Nav --> */}
                            <ul className="nav nav-tabs flex items-center" role="tablist">
                                {/* <!-- Offers --> */}
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                        id="offers-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#offers"
                                        type="button"
                                        role="tab"
                                        aria-controls="offers"
                                        aria-selected="true"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 h-5 w-5 fill-current"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                                        </svg>
                                        <span className="font-display text-base font-medium">Offers</span>
                                    </button>
                                </li>

                                {/* <!-- Properties --> */}
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                        id="properties-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#properties"
                                        type="button"
                                        role="tab"
                                        aria-controls="properties"
                                        aria-selected="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 h-5 w-5 fill-current"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                                        </svg>
                                        <span className="font-display text-base font-medium">Properties</span>
                                    </button>
                                </li>

                                {/* <!-- Details --> */}
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                        id="details-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#details"
                                        type="button"
                                        role="tab"
                                        aria-controls="details"
                                        aria-selected="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 h-5 w-5 fill-current"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
                                        </svg>
                                        <span className="font-display text-base font-medium">Details</span>
                                    </button>
                                </li>

                                {/* <!-- Activity --> */}
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                        id="activity-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#activity"
                                        type="button"
                                        role="tab"
                                        aria-controls="activity"
                                        aria-selected="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 h-5 w-5 fill-current"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                                        </svg>
                                        <span className="font-display text-base font-medium">Activity</span>
                                    </button>
                                </li>

                                {/* <!-- Price History --> */}
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                        id="price-history-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#price-history"
                                        type="button"
                                        role="tab"
                                        aria-controls="price-history"
                                        aria-selected="false"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-1 h-5 w-5 fill-current"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" />
                                        </svg>
                                        <span className="font-display text-base font-medium">Price History</span>
                                    </button>
                                </li>
                            </ul>

                            {/* <!-- Tab Content --> */}
                            <div className="tab-content">
                                {/* <!-- Offers --> */}
                                <div
                                    className="tab-pane fade show active"
                                    id="offers"
                                    role="tabpanel"
                                    aria-labelledby="offers-tab"
                                >
                                    <div
                                        role="table"
                                        className="scrollbar-custom grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                    >
                                        <div className="contents" role="row">
                                            <div
                                                className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"
                                                role="columnheader"
                                            >
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Price
                                                </span>
                                            </div>
                                            <div
                                                className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"
                                                role="columnheader"
                                            >
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    USD Price
                                                </span>
                                            </div>
                                            <div
                                                className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"
                                                role="columnheader"
                                            >
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Floor Difference
                                                </span>
                                            </div>
                                            <div
                                                className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"
                                                role="columnheader"
                                            >
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Expiration
                                                </span>
                                            </div>
                                            <div
                                                className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"
                                                role="columnheader"
                                            >
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    From
                                                </span>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    30 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $90,136.10
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                70% below
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 5 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    ViviGiallo
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    15.5 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $45,458.10
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                70% below
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 5 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    DB96DB
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    0.9 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $2,347.90
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                98% below
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 5 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    myc_nc
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    1.2 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $4,568.40
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                100% below
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 6 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    MetaRDnA
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    0.5 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $1,699.10
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                100% below
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 6 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    Karafuru
                                                </a>
                                            </div>
                                        </div>
                                        <div className="contents" role="row">
                                            <div
                                                className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    4.7 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                $13,966.64
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                40% above
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                in 2 months
                                            </div>
                                            <div
                                                className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    seekortelur
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Properties --> */}
                                <div
                                    className="tab-pane fade"
                                    id="properties"
                                    role="tabpanel"
                                    aria-labelledby="properties-tab"
                                >
                                    <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10">
                                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">ACCESSORY</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    Metal headband
                                                </span>
                                                <span className="text-sm text-jacarta-400">3% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">SKIN</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    Dark Brown
                                                </span>
                                                <span className="text-sm text-jacarta-400">8% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">EYES</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    Cyborg
                                                </span>
                                                <span className="text-sm text-jacarta-400">2% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">CLOTH</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    Adidas
                                                </span>
                                                <span className="text-sm text-jacarta-400">7% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">HAIR</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    White Ash
                                                </span>
                                                <span className="text-sm text-jacarta-400">7% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">CHARACTER</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    TSAREVNA
                                                </span>
                                                <span className="text-sm text-jacarta-400">1% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">BACKGROUND</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    CyberPunk
                                                </span>
                                                <span className="text-sm text-jacarta-400">9% have this trait</span>
                                            </a>
                                            <a
                                                href="collection.html"
                                                className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                                            >
                                                <span className="text-sm uppercase text-accent">MOUTH</span>
                                                <span className="text-base text-jacarta-700 dark:text-white">
                                                    Flower
                                                </span>
                                                <span className="text-sm text-jacarta-400">4% have this trait</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Details --> */}
                                <div
                                    className="tab-pane fade"
                                    id="details"
                                    role="tabpanel"
                                    aria-labelledby="details-tab"
                                >
                                    <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10">
                                        <div className="mb-2 flex items-center">
                                            <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">
                                                Contract Address:
                                            </span>
                                            <a href="#" className="text-accent">
                                                0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F
                                            </a>
                                        </div>
                                        <div className="mb-2 flex items-center">
                                            <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">Token ID:</span>
                                            <span
                                                className="js-copy-clipboard cursor-pointer select-none text-jacarta-700 dark:text-white"
                                                data-tippy-content="Copy"
                                            >
                                                7714
                                            </span>
                                        </div>
                                        <div className="mb-2 flex items-center">
                                            <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">
                                                Token Standard:
                                            </span>
                                            <span className="text-jacarta-700 dark:text-white">ERC-721</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">Blockchain:</span>
                                            <span className="text-jacarta-700 dark:text-white">Ethereum</span>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Activity --> */}
                                <div
                                    className="tab-pane fade"
                                    id="activity"
                                    role="tabpanel"
                                    aria-labelledby="activity-tab"
                                >
                                    {/* <!-- Filter --> */}
                                    <div className="border border-b-0 border-jacarta-100 bg-light-base px-4 pt-5 pb-2.5 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="flex flex-wrap">
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"></path>
                                                </svg>
                                                <span className="text-2xs font-medium">Listing</span>
                                            </button>
                                            <button className="mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent bg-accent px-4 py-3 hover:bg-accent-dark dark:hover:bg-accent-dark">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
                                                </svg>
                                                <span className="text-2xs font-medium text-white">Bids</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>
                                                </svg>
                                                <span className="text-2xs font-medium">Transfers</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
                                                </svg>
                                                <span className="text-2xs font-medium">Sales</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        role="table"
                                        className="scrollbar-custom max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                    >
                                        <div className="sticky top-0 flex bg-light-base dark:bg-jacarta-600" role="row">
                                            <div className="w-[17%] py-2 px-4" role="columnheader">
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Event
                                                </span>
                                            </div>
                                            <div className="w-[17%] py-2 px-4" role="columnheader">
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Price
                                                </span>
                                            </div>
                                            <div className="w-[22%] py-2 px-4" role="columnheader">
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    From
                                                </span>
                                            </div>
                                            <div className="w-[22%] py-2 px-4" role="columnheader">
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    To
                                                </span>
                                            </div>
                                            <div className="w-[22%] py-2 px-4" role="columnheader">
                                                <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                                                    Date
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex" role="row">
                                            <div
                                                className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
                                                </svg>
                                                Bid
                                            </div>
                                            <div
                                                className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    30 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    AD496A
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    Polymorph: MORPH Token
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a
                                                    href="#"
                                                    className="flex flex-wrap items-center text-accent"
                                                    target="_blank"
                                                    rel="nofollow noopener"
                                                    title="Opens in a new window"
                                                    data-tippy-content="March 13 2022, 2:32 pm"
                                                >
                                                    <span className="mr-1">19 days ago</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        className="h-4 w-4 fill-current"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex" role="row">
                                            <div
                                                className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>
                                                </svg>
                                                Transfer
                                            </div>
                                            <div
                                                className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    .00510 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    The_vikk
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    Polymorph: MORPH Token
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="mr-1 dark:text-jacarta-300">16 days ago</span>
                                            </div>
                                        </div>
                                        <div className="flex" role="row">
                                            <div
                                                className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
                                                </svg>
                                                Sale
                                            </div>
                                            <div
                                                className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <span className="-ml-1" data-tippy-content="ETH">
                                                    <svg
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 1920 1920"
                                                        xmlSpace="preserve"
                                                        className="mr-1 h-4 w-4"
                                                    >
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                        ></path>
                                                        <path
                                                            fill="#454A75"
                                                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                        ></path>
                                                        <path
                                                            fill="#8A92B2"
                                                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                        ></path>
                                                        <path
                                                            fill="#62688F"
                                                            d="M959.8 1397.6v441.7l540.1-760.6z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    1.50 ETH
                                                </span>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    CryptoGuysNFT
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a href="user.html" className="text-accent">
                                                    Polymorph: MORPH Token
                                                </a>
                                            </div>
                                            <div
                                                className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                                role="cell"
                                            >
                                                <a
                                                    href="#"
                                                    className="flex flex-wrap items-center text-accent"
                                                    target="_blank"
                                                    rel="nofollow noopener"
                                                    title="Opens in a new window"
                                                    data-tippy-content="March 13 2022, 2:32 pm"
                                                >
                                                    <span className="mr-1">19 days ago</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        className="h-4 w-4 fill-current"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Price History --> */}
                                <div
                                    className="tab-pane fade"
                                    id="price-history"
                                    role="tabpanel"
                                    aria-labelledby="price-history-tab"
                                >
                                    <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* <!-- Period / Stats --> */}
                                        <div className="mb-10 flex flex-wrap items-center">
                                            <select className="mr-8 min-w-[12rem] rounded-lg border-jacarta-100 py-3.5 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                                                <option value="7-days">Last 7 Days</option>
                                                <option value="14-days">Last 14 Days</option>
                                                <option value="30-days">Last 30 Days</option>
                                                <option value="60-days">Last 60 Days</option>
                                                <option value="90-days" selected>
                                                    Last 90 Days
                                                </option>
                                                <option value="last-year">Last Year</option>
                                                <option value="all-time">All Time</option>
                                            </select>

                                            <div className="py-2">
                                                <span className="mr-4 inline-block align-middle">
                                                    <span className="block text-sm font-bold dark:text-white">
                                                        90 Day Avg. Price:
                                                    </span>
                                                    <span className="block text-sm font-bold text-green">Ξ7.0633</span>
                                                </span>

                                                <span className="inline-block align-middle">
                                                    <span className="block text-sm font-bold dark:text-white">
                                                        90 Day Volume:
                                                    </span>
                                                    <span className="block text-sm font-bold text-green">
                                                        Ξ24,085.6957
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* <!-- Chart --> */}
                                        <div className="chart-container relative h-80 w-full">
                                            <canvas id="activityChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end tab content --> */}
                        </div>
                    </div>
                    {/* <!-- end tabs --> */}
                </div>
            </section>
            {/* <!-- end item --> */}

            {/* <!-- Related --> */}
            <section className="bg-light-base py-24 dark:bg-jacarta-800">
                <div className="container">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        More from this collection
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
                                                    <img
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
                                                    <img
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
                                                    <img
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
                                                    <img
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
                                                    <img
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
                                                    <img
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
            {/* <!-- end related --> */}
        </main>
    );
};

PageItem.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageItem };
