import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Script from 'next/script';

const PageCollection = () => {
    return (
        <>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* <!-- Banner --> */}
                <div className="relative">
                    <img
                        src="img/collections/collection_banner.jpg"
                        alt="banner"
                        className="h-[18.75rem] object-cover"
                    />
                </div>
                {/* <!-- end banner --> */}

                {/* <!-- Profile --> */}
                <section className="relative bg-light-base pb-12 pt-28 dark:bg-jacarta-800">
                    {/* <!-- Avatar --> */}
                    <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <figure className="relative">
                            <img
                                src="img/collections/collection_avatar.jpg"
                                alt="collection avatar"
                                className="rounded-xl border-[5px] border-white dark:border-jacarta-600"
                            />
                            <div
                                className="absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
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
                        </figure>
                    </div>

                    <div className="container">
                        <div className="text-center">
                            <h2 className="mb-2 font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                                NFT Funny Cat
                            </h2>
                            <div className="mb-8">
                                <span className="text-sm font-bold text-jacarta-400">Created by</span>
                                <a href="user" className="text-sm font-bold text-accent">
                                    051_Hart
                                </a>
                            </div>

                            <div className="mb-8 inline-flex flex-wrap items-center justify-center rounded-xl border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-800">
                                <a
                                    href="#"
                                    className="w-1/2 rounded-l-xl border-r border-jacarta-100 py-4 hover:shadow-md dark:border-jacarta-600 sm:w-32"
                                >
                                    <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">
                                        7.2K
                                    </div>
                                    <div className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                        Items
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="w-1/2 border-jacarta-100 py-4 hover:shadow-md dark:border-jacarta-600 sm:w-32 sm:border-r"
                                >
                                    <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">
                                        5.3K
                                    </div>
                                    <div className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                        Owners
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="w-1/2 border-r border-jacarta-100 py-4 hover:shadow-md dark:border-jacarta-600 sm:w-32"
                                >
                                    <div className="mb-1 flex items-center justify-center text-base font-medium text-jacarta-700 dark:text-white">
                                        <span className="-mt-px inline-block" data-tippy-content="ETH">
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
                                        <span className="font-bold">2.55</span>
                                    </div>
                                    <div className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                        Floor Price
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="w-1/2 rounded-r-xl border-jacarta-100 py-4 hover:shadow-md sm:w-32"
                                >
                                    <div className="mb-1 flex items-center justify-center text-base font-medium text-jacarta-700 dark:text-white">
                                        <span className="-mt-px inline-block" data-tippy-content="ETH">
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
                                        <span className="font-bold">17.2K</span>
                                    </div>
                                    <div className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                        Volume Traded
                                    </div>
                                </a>
                            </div>

                            <p className="mx-auto max-w-xl text-lg dark:text-jacarta-300">
                                Unique, fully 3D and built to unite the design multiverse. Designed and styled by
                                Digimental.
                            </p>

                            <div className="mt-6 flex items-center justify-center space-x-2.5">
                                <div className="rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                    <div
                                        className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                        role="button"
                                        data-tippy-content="Favorite"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0H24V24H0z" />
                                            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="dropdown rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600">
                                    <a
                                        href="#"
                                        className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm"
                                        role="button"
                                        id="collectionShare"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-tippy-content="Share"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z" />
                                        </svg>
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                        aria-labelledby="collectionShare"
                                    >
                                        <a
                                            href="#"
                                            className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="facebook"
                                                className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                            </svg>
                                            <span className="mt-1 inline-block">Facebook</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="twitter"
                                                className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                            <span className="mt-1 inline-block">Twitter</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="discord"
                                                className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                            </svg>
                                            <span className="mt-1 inline-block">Discord</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Email</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="mr-2 h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
                                            </svg>
                                            <span className="mt-1 inline-block">Copy</span>
                                        </a>
                                    </div>
                                </div>
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
                                            <circle cx="2" cy="2" r="2" />
                                            <circle cx="8" cy="2" r="2" />
                                            <circle cx="14" cy="2" r="2" />
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
                    </div>
                </section>
                {/* <!-- end profile --> */}

                {/* <!-- Collection --> */}
                <section className="relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        {/* <!-- Tabs Nav --> */}
                        <ul
                            className="nav nav-tabs mb-12 flex items-center justify-center border-b border-jacarta-100 dark:border-jacarta-600"
                            role="tablist"
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                    id="items-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#items"
                                    type="button"
                                    role="tab"
                                    aria-controls="items"
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
                                        <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Items</span>
                                </button>
                            </li>
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
                                        <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                                    </svg>
                                    <span className="font-display text-base font-medium">Activity</span>
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* <!-- Items Tab --> */}
                            <div
                                className="tab-pane fade show active"
                                id="items"
                                role="tabpanel"
                                aria-labelledby="items-tab"
                            >
                                {/* <!-- Filters --> */}
                                <div className="mb-8 flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        {/* <!-- Blockchain --> */}
                                        <div className="my-1 mr-2.5">
                                            <button
                                                className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                                id="blockchainFilter"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z" />
                                                </svg>
                                                <span>Blockchain</span>
                                            </button>
                                            <div
                                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                aria-labelledby="blockchainFilter"
                                            >
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            <span className="text-jacarta-700 dark:text-white">
                                                                Ethereum
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-accent"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Polygon
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Flow
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Tezos
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Category --> */}
                                        <div className="my-1 mr-2.5">
                                            <button
                                                className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                                id="categoriesFilter"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                                                </svg>
                                                <span>Category</span>
                                            </button>
                                            <div
                                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                aria-labelledby="categoriesFilter"
                                            >
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            <span className="text-jacarta-700 dark:text-white">
                                                                All
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-accent"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Collectibles
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Domain
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Music
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Virtual World
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Properties --> */}
                                        <div className="my-1 mr-2.5">
                                            <button
                                                className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                                type="button"
                                                id="propertiesFilter"
                                                data-bs-toggle="modal"
                                                data-bs-target="#propertiesModal"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                                                </svg>
                                                <span>Properties</span>
                                            </button>

                                            {/* <!-- Properties Modal --> */}
                                            <div
                                                className="modal fade"
                                                id="propertiesModal"
                                                tabIndex={-1}
                                                aria-labelledby="propertiesModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog max-w-md">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="propertiesModalLabel">
                                                                Properties
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    width="24"
                                                                    height="24"
                                                                    className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                                                                >
                                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* <!-- Body --> */}
                                                        <div className="modal-body">
                                                            <div className="accordion" id="accordionProps">
                                                                <div className="accordion-item border-b border-jacarta-100 dark:border-jacarta-600">
                                                                    <h2
                                                                        className="accordion-header"
                                                                        id="prop-heading-1"
                                                                    >
                                                                        <button
                                                                            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#prop-background"
                                                                            aria-expanded="false"
                                                                            aria-controls="prop-background"
                                                                        >
                                                                            <span>Background</span>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                                height="24"
                                                                                className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                                                            >
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                ></path>
                                                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="prop-background"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="prop-heading-1"
                                                                        data-bs-parent="#accordionProps"
                                                                    >
                                                                        <div className="accordion-body px-2 pb-4">
                                                                            <div className="flex flex-col">
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Red</span>
                                                                                    <span>14</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Green</span>
                                                                                    <span>56</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Blue</span>
                                                                                    <span>11</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>White</span>
                                                                                    <span>25</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item border-b border-jacarta-100 dark:border-jacarta-600">
                                                                    <h2
                                                                        className="accordion-header"
                                                                        id="prop-heading-2"
                                                                    >
                                                                        <button
                                                                            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#prop-eyes"
                                                                            aria-expanded="false"
                                                                            aria-controls="prop-eyes"
                                                                        >
                                                                            <span>Eyes</span>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                                height="24"
                                                                                className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                                                            >
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                ></path>
                                                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="prop-eyes"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="prop-heading-2"
                                                                        data-bs-parent="#accordionProps"
                                                                    >
                                                                        <div className="accordion-body px-2 pb-4">
                                                                            <div className="flex flex-col">
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Red</span>
                                                                                    <span>14</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Green</span>
                                                                                    <span>56</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Blue</span>
                                                                                    <span>11</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>White</span>
                                                                                    <span>25</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2
                                                                        className="accordion-header"
                                                                        id="prop-heading-3"
                                                                    >
                                                                        <button
                                                                            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-6 py-5 font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#prop-face"
                                                                            aria-expanded="false"
                                                                            aria-controls="prop-face"
                                                                        >
                                                                            <span>Face</span>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                                width="24"
                                                                                height="24"
                                                                                className="accordion-arrow h-4 w-4 fill-jacarta-700 transition-transform dark:fill-white"
                                                                            >
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                ></path>
                                                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="prop-face"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="prop-heading-3"
                                                                        data-bs-parent="#accordionProps"
                                                                    >
                                                                        <div className="accordion-body px-2 pb-4">
                                                                            <div className="flex flex-col">
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Red</span>
                                                                                    <span>14</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Green</span>
                                                                                    <span>56</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>Blue</span>
                                                                                    <span>11</span>
                                                                                </button>
                                                                                <button className="flex items-center justify-between rounded-xl px-4 py-2 hover:bg-jacarta-50 dark:text-jacarta-200 dark:hover:bg-jacarta-600">
                                                                                    <span>White</span>
                                                                                    <span>25</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- end body --> */}

                                                        <div className="modal-footer">
                                                            <div className="flex items-center justify-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                                                >
                                                                    Clear All
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                                                >
                                                                    Apply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end properties modal --> */}

                                            <div
                                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                aria-labelledby="propertiesFilter"
                                            >
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            <span className="text-jacarta-700 dark:text-white">
                                                                All
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-accent"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Collectibles
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Domain
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Music
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Virtual World
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* <!-- Sale Type --> */}
                                        <div className="my-1 mr-2.5">
                                            <button
                                                className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                                id="saleTypeFilter"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z" />
                                                </svg>
                                                <span>Sale type</span>
                                            </button>
                                            <div
                                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                aria-labelledby="saleTypeFilter"
                                            >
                                                <ul className="flex flex-col flex-wrap">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            <span className="text-jacarta-700 dark:text-white">
                                                                Timed auction
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-accent"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Fixed price
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Not for sale
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                        >
                                                            Open for offers
                                                        </a>
                                                    </li>
                                                </ul>

                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button
                                                        type="button"
                                                        className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                                    >
                                                        Clear
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Price Range --> */}
                                        <div className="my-1 mr-2.5">
                                            <button
                                                className="dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                                                id="priceRangeFilter"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                                                </svg>
                                                <span>Price Range</span>
                                            </button>

                                            <div
                                                className="dropdown-menu z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                aria-labelledby="priceRangeFilter"
                                            >
                                                {/* <!-- Blockchain --> */}
                                                <div className="dropdown mb-4 cursor-pointer px-5 pt-2">
                                                    <div
                                                        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                                        role="button"
                                                        id="filterPriceBlockchain"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <span className="flex items-center font-display">
                                                            <img
                                                                src="img/chains/ETH.png"
                                                                alt="eth"
                                                                className="mr-2 h-5 w-5 rounded-full"
                                                            />
                                                            ETH
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="24"
                                                            height="24"
                                                            className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                                        </svg>
                                                    </div>

                                                    <div
                                                        className="dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                                        aria-labelledby="filterPriceBlockchain"
                                                    >
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/ETH.png"
                                                                    alt="eth"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                ETH
                                                            </span>
                                                        </button>
                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/FLOW.png"
                                                                    alt="flow"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                FLOW
                                                            </span>
                                                        </button>

                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/FUSD.png"
                                                                    alt="fusd"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                FUSD
                                                            </span>
                                                        </button>

                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/XTZ.png"
                                                                    alt="xtz"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                XTZ
                                                            </span>
                                                        </button>

                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/DAI.png"
                                                                    alt="dai"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                DAI
                                                            </span>
                                                        </button>

                                                        <button className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                                            <span className="flex items-center">
                                                                <img
                                                                    src="img/chains/RARI.png"
                                                                    alt="rari"
                                                                    className="mr-2 h-5 w-5 rounded-full"
                                                                />
                                                                RARI
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* <!-- From / To --> */}
                                                <div className="flex items-center space-x-3 px-5 pb-2">
                                                    <input
                                                        type="number"
                                                        placeholder="From"
                                                        className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="To"
                                                        className="w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                                    />
                                                </div>

                                                <div className="-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t border-jacarta-100 px-7 pt-4 dark:border-jacarta-600">
                                                    <button
                                                        type="button"
                                                        className="flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                                    >
                                                        Clear
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Sort --> */}
                                    <div className="dropdown my-1 cursor-pointer">
                                        <div
                                            className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                                            role="button"
                                            id="sort"
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
                                            aria-labelledby="sort"
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
                                                        className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
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
                                                        className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
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
                                                        className="relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end filters --> */}

                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                    <article>
                                        <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                            <figure className="relative">
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    From 8.49 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    From 5.9 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    0.078 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    10 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    From 5 FLOW
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    0.16 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    0.13 FLOW
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                                <a href="item">
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
                                                <a href="item">
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
                                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">
                                                    0.8 ETH
                                                </span>
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
                                                <a href="item" className="group flex items-center">
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
                                {/* <!-- end grid --> */}
                            </div>
                            {/* <!-- end items tab --> */}

                            {/* <!-- Activity Tab --> */}
                            <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                                {/* <!-- Period / Stats --> */}
                                <div className="mb-16 flex flex-wrap items-center">
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
                                            <span className="block text-sm font-bold text-green">Ξ24,085.6957</span>
                                        </span>
                                    </div>
                                </div>

                                {/* <!-- Chart --> */}
                                <div className="chart-container relative mb-24 h-80 w-full">
                                    <canvas id="activityChart"></canvas>
                                </div>

                                {/* <!-- Records / Filter --> */}
                                <div className="lg:flex">
                                    {/* <!-- Records --> */}
                                    <div className="mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10">
                                        <a
                                            href="item"
                                            className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="mr-5 self-start">
                                                <img
                                                    src="img/avatars/avatar_2.jpg"
                                                    alt="avatar 2"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Lazyone Panda
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200">
                                                    sold for 1.515 ETH
                                                </span>
                                                <span className="block text-xs text-jacarta-300">
                                                    30 minutes 45 seconds ago
                                                </span>
                                            </div>

                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-jacarta-700 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            href="item"
                                            className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="mr-5 self-start">
                                                <img
                                                    src="img/products/item_21_sm.jpg"
                                                    alt="item 2"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    NFT Funny Cat
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200">
                                                    listed by 051_Hart .08095 ETH
                                                </span>
                                                <span className="block text-xs text-jacarta-300">
                                                    40 minutes 36 seconds ago
                                                </span>
                                            </div>

                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-jacarta-700 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            href="item"
                                            className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="mr-5 self-start">
                                                <img
                                                    src="img/products/item_22_sm.jpg"
                                                    alt="item 3"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Prince Ape Planet
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200">
                                                    tranferred from 027ab52
                                                </span>
                                                <span className="block text-xs text-jacarta-300">
                                                    1 hour 15 minutes ago
                                                </span>
                                            </div>

                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-jacarta-700 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            href="item"
                                            className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="mr-5 self-start">
                                                <img
                                                    src="img/products/item_23_sm.jpg"
                                                    alt="item 3"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Origin Morish
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200">
                                                    bid cancelled by 0397fd
                                                </span>
                                                <span className="block text-xs text-jacarta-300">
                                                    1 hour 55 minutes ago
                                                </span>
                                            </div>

                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-jacarta-700 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a
                                            href="item"
                                            className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="mr-5 self-start">
                                                <img
                                                    src="img/products/item_24_sm.jpg"
                                                    alt="item 3"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                                    Portrait Gallery#029
                                                </h3>
                                                <span className="mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200">
                                                    liked by Trina_more
                                                </span>
                                                <span className="block text-xs text-jacarta-300">
                                                    2 hours 24 minutes ago
                                                </span>
                                            </div>

                                            <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-jacarta-700 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <!-- Filters --> */}
                                    <aside className="basis-4/12 lg:pl-5">
                                        <form action="search" className="relative mb-12 block">
                                            <input
                                                type="search"
                                                className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                                placeholder="Search"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                                                </svg>
                                            </button>
                                        </form>

                                        <h3 className="mb-4 font-display font-semibold text-jacarta-500 dark:text-white">
                                            Filters
                                        </h3>
                                        <div className="flex flex-wrap">
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Listing</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Bids</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Transfer</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Likes</span>
                                            </button>
                                            <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                                                </svg>
                                                <span className="text-2xs font-medium">Purchases</span>
                                            </button>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            {/* <!-- end activity tab --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- end collection --> */}
            </main>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js" />
            <Script src="./js/charts.bundle.js" />
        </>
    );
};

PageCollection.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCollection };
