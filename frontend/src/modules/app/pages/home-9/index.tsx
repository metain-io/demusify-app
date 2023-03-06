import { MainLayout4 } from '@modules/app/layouts';
import { ReactElement } from 'react';

const Home9Page = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="relative h-screen">
                    <img
                        src="./../img/hero/hero_dao.jpg"
                        alt=""
                        className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
                        <div className="grid h-full items-center gap-4 md:grid-cols-12">
                            <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
                                <h1 className="mb-6 text-center font-display text-5xl text-white md:text-left lg:text-6xl">
                                    DAO-enabled NFT platforms or the NFT marketplaces
                                </h1>
                                <p className="mb-8 max-w-md text-center text-lg text-white md:text-left">
                                    Every digital creation available through MakersPlace is an authentic and truly
                                    unique.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="collections"
                                        className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="collections"
                                        className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="relative col-span-6 col-start-7 hidden h-full md:block">
                                <div className="absolute bottom-[17%] left-12 animate-fly">
                                    <div className="flex items-center space-x-4 rounded-2lg bg-[#8247E5]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                                        <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <img src="./../img/chains/polygon@2x.png" alt="" className="max-w-[50%]" />
                                        </div>
                                        <span className="font-display text-sm text-white">Polygon</span>
                                        <span className="font-display text-sm text-white/40">PY</span>
                                    </div>
                                </div>
                                <div className="absolute right-8 top-1/2 animate-fly">
                                    <div className="flex items-center space-x-4 rounded-2lg bg-[#62688F]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                                        <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <img src="./../img/chains/ethereum@2x.png" alt="" className="max-w-[50%]" />
                                        </div>
                                        <span className="font-display text-sm text-white">Ethereum</span>
                                        <span className="font-display text-sm text-white/40">ETH</span>
                                    </div>
                                </div>
                                <div className="absolute right-1/3 top-1/4 animate-fly">
                                    <div className="flex items-center space-x-4 rounded-2lg bg-[#000000]/50 p-2.5 pr-6 pl-0 backdrop-blur-md">
                                        <div className="-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                            <img src="./../img/chains/bitcoin@2x.png" alt="" className="max-w-[50%]" />
                                        </div>
                                        <span className="font-display text-sm text-white">Bitcoin</span>
                                        <span className="font-display text-sm text-white/40">BTC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end hero */}
                {/* Partners */}
                <div className="dark:bg-jacarta-900">
                    <div className="container">
                        <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
                            <a href="#">
                                <img src="../img/partners/partner_logo_1.png" alt="partner 1" />{' '}
                            </a>
                            <a href="#">
                                <img src="../img/partners/partner_logo_2.png" alt="partner 1" />{' '}
                            </a>
                            <a href="#">
                                <img src="../img/partners/partner_logo_3.png" alt="partner 1" />{' '}
                            </a>
                            <a href="#">
                                <img src="../img/partners/partner_logo_4.png" alt="partner 1" />{' '}
                            </a>
                            <a href="#">
                                <img src="../img/partners/partner_logo_5.png" alt="partner 1" />{' '}
                            </a>
                        </div>
                    </div>
                </div>
                {/* end partners */}
                {/* Intro */}
                <section className="bg-gradient-to-r from-[transparent_33%] to-[#F5F8FA_33%] py-36 dark:to-[#101436_33%]">
                    <div className="container">
                        <div className="lg:flex lg:justify-between">
                            {/* Image */}
                            <div className="relative lg:w-[45%]">
                                <figure className="relative">
                                    <img src="../img/dao/intro_dao.jpg" className="rounded-2.5xl" alt="" />
                                </figure>
                            </div>
                            {/* Info */}
                            <div className="py-10 lg:w-[55%] lg:pl-24">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                                    Evolution of NFT Platforms Web3 Social Impact Protocol
                                </h2>
                                <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                    NFTs are implemented on blockchains using smart contracts. Each token minted on the
                                    blockchain protocol carries unique information called Metadata.
                                </p>
                                <p className="dark:text-jacarta-300">
                                    Therefore, NFT platforms or the NFT marketplace cannot be centralized. However, the
                                    founders of the blockchain protocol have sovereignty over decisions such as
                                    launching features on the blockchain, establishing rules, and unveiling upgrades.
                                </p>
                                <div className="mt-11 flex space-x-8">
                                    <div className="w-1/2">
                                        <div>
                                            <span className="inline-block font-display text-4xl font-semibold text-accent">
                                                $4.2B
                                            </span>
                                        </div>
                                        <span className="text-lg text-jacarta-700 dark:text-white">
                                            All-time trade volume
                                        </span>
                                    </div>
                                    <div className="w-1/2">
                                        <div>
                                            <span className="inline-block font-display text-4xl font-semibold text-accent">
                                                10.53K+
                                            </span>
                                        </div>
                                        <span className="text-lg text-jacarta-700 dark:text-white">Total Trades</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end intro */}
                {/* Benefits */}
                <section className="py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                How can DAO-enabled NFT platforms Benefit Users?
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                We empower artists, creators, and players to build the platform they always envisioned,
                                providing the means to unleash your creativity and earn income.
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-nowrap lg:space-x-10">
                            <div className="lg:w-[43%]">
                                {/* tabs */}
                                <ul className="nav nav-tabs mb-12 space-y-2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link nav-link--style-2 active group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                                            id="ownership-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#ownership"
                                            type="button"
                                            role="tab"
                                            aria-controls="ownership"
                                            aria-selected="true"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                            </svg>
                                            <div>
                                                <span className="mb-2 mt-1 block font-display text-xl font-medium group-hover:text-accent dark:text-white">
                                                    Ownership Benefits
                                                </span>
                                                <div className="nav-link-content hidden">
                                                    <p className="text-jacarta-500 dark:text-jacarta-300">
                                                        DAOs own the smart contracts and digital assets (NFTs) to bring
                                                        autonomy, removing the concept of CEO and leadership from any
                                                        NFT platform.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                                            id="voting-power-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#voting-power"
                                            type="button"
                                            role="tab"
                                            aria-controls="voting-power"
                                            aria-selected="false"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zm-9.707 10.13l-2.475-2.476-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414-4.243 4.242z" />
                                            </svg>
                                            <div>
                                                <span className="mb-2 mt-1 block font-display text-xl font-medium text-jacarta-700 group-hover:text-accent dark:text-white">
                                                    Voting Power
                                                </span>
                                                <div className="nav-link-content hidden">
                                                    <p className="text-jacarta-500 dark:text-jacarta-300">
                                                        DAOs own the smart contracts and digital assets (NFTs) to bring
                                                        autonomy, removing the concept of CEO and leadership from any
                                                        NFT platform.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                                            id="rewards-income-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#rewards-income"
                                            type="button"
                                            role="tab"
                                            aria-controls="rewards-income"
                                            aria-selected="false"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-6.383-2.302l-.244-.209.902-1.902a8 8 0 1 0-2.27-5.837l-.005.25h2.5l-2.706 5.716A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2zm1 4v2h2.5v2H10a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2H14a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 1 1 0-5h1V6h2z" />
                                            </svg>
                                            <div>
                                                <span className="mb-2 mt-1 block font-display text-xl font-medium text-jacarta-700 group-hover:text-accent dark:text-white">
                                                    Rewards &amp; Income
                                                </span>
                                                <div className="nav-link-content hidden">
                                                    <p className="text-jacarta-500 dark:text-jacarta-300">
                                                        DAOs own the smart contracts and digital assets (NFTs) to bring
                                                        autonomy, removing the concept of CEO and leadership from any
                                                        NFT platform.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                                            id="complete-decentralization-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#complete-decentralization"
                                            type="button"
                                            role="tab"
                                            aria-controls="complete-decentralization"
                                            aria-selected="false"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 1 1 0-8.5zm0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13zm10.5-10.5a4.25 4.25 0 1 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25zM13 13h4.25A4.25 4.25 0 1 1 13 17.25V13z" />
                                            </svg>
                                            <div>
                                                <span className="mb-2 mt-1 block font-display text-xl font-medium text-jacarta-700 group-hover:text-accent dark:text-white">
                                                    Complete Decentralization
                                                </span>
                                                <div className="nav-link-content hidden">
                                                    <p className="text-jacarta-500 dark:text-jacarta-300">
                                                        DAOs own the smart contracts and digital assets (NFTs) to bring
                                                        autonomy, removing the concept of CEO and leadership from any
                                                        NFT platform.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link nav-link--style-2 group relative flex w-full border-b border-jacarta-100 p-6 text-left dark:border-jacarta-600"
                                            id="nft-yield-farming-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nft-yield-farming"
                                            type="button"
                                            role="tab"
                                            aria-controls="nft-yield-farming"
                                            aria-selected="false"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="mr-2 h-8 w-8 flex-shrink-0 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM13 11V6.5L8.5 13H11v4.5l4.5-6.5H13z" />
                                            </svg>
                                            <div>
                                                <span className="mb-2 mt-1 block font-display text-xl font-medium text-jacarta-700 group-hover:text-accent dark:text-white">
                                                    NFT Yield Farming
                                                </span>
                                                <div className="nav-link-content hidden">
                                                    <p className="text-jacarta-500 dark:text-jacarta-300">
                                                        DAOs own the smart contracts and digital assets (NFTs) to bring
                                                        autonomy, removing the concept of CEO and leadership from any
                                                        NFT platform.
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center overflow-hidden lg:w-[57%] lg:overflow-visible">
                                {/* content */}
                                <div className="tab-content flex-1">
                                    <div
                                        className="tab-pane fade show active relative"
                                        id="ownership"
                                        role="tabpanel"
                                        aria-labelledby="ownership-tab"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <img
                                                src="./../img/dao/benefit_dao_1.jpg"
                                                alt=""
                                                className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                                            />
                                            <img
                                                src="./../img/dao/3d_elements_circle.png"
                                                alt=""
                                                className="absolute animate-spin-slow"
                                            />
                                        </figure>
                                    </div>
                                    <div
                                        className="tab-pane fade relative"
                                        id="voting-power"
                                        role="tabpanel"
                                        aria-labelledby="voting-power-tab"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <img
                                                src="./../img/dao/benefit_dao_2.jpg"
                                                alt=""
                                                className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                                            />
                                            <img
                                                src="./../img/dao/3d_elements_circle.png"
                                                alt=""
                                                className="absolute animate-spin-slow"
                                            />
                                        </figure>
                                    </div>
                                    <div
                                        className="tab-pane fade relative"
                                        id="rewards-income"
                                        role="tabpanel"
                                        aria-labelledby="rewards-income-tab"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <img
                                                src="./../img/dao/benefit_dao_3.jpg"
                                                alt=""
                                                className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                                            />
                                            <img
                                                src="./../img/dao/3d_elements_circle.png"
                                                alt=""
                                                className="absolute animate-spin-slow"
                                            />
                                        </figure>
                                    </div>
                                    <div
                                        className="tab-pane fade relative"
                                        id="complete-decentralization"
                                        role="tabpanel"
                                        aria-labelledby="complete-decentralization-tab"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <img
                                                src="./../img/dao/benefit_dao_4.jpg"
                                                alt=""
                                                className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                                            />
                                            <img
                                                src="./../img/dao/3d_elements_circle.png"
                                                alt=""
                                                className="absolute animate-spin-slow"
                                            />
                                        </figure>
                                    </div>
                                    <div
                                        className="tab-pane fade relative"
                                        id="nft-yield-farming"
                                        role="tabpanel"
                                        aria-labelledby="nft-yield-farming-tab"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <img
                                                src="./../img/dao/benefit_dao_5.jpg"
                                                alt=""
                                                className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                                            />
                                            <img
                                                src="./../img/dao/3d_elements_circle.png"
                                                alt=""
                                                className="absolute animate-spin-slow"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end benefits */}
                {/* Video / FAQ */}
                <section className="bg-light-base py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                How to Participate
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                NFTs can be used to represent items such as photos, videos, audio, and other types of
                                digital files.
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-nowrap">
                            <div className="lg:w-[59%]">
                                <figure className="relative mb-8 overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
                                    <a
                                        href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        data-bs-toggle="modal"
                                        data-bs-target=".video-lightbox"
                                        className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-rotate h-8 w-8 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
                                        </svg>
                                    </a>
                                    <img src="../img/dao/video_cover_dao.jpg" className="w-full" alt="" />
                                </figure>
                            </div>
                            <div className="lg:w-[41%] lg:pl-24">
                                <p className="mb-6 dark:text-jacarta-300">
                                    DAOs are said to be the future of work. As a concept and a technology, DAO can
                                    transform the structure of a legacy business by empowering member-owned communities
                                    and removing centralized leadership.
                                </p>
                                <a href="#" className="mb-8 inline-block text-sm font-bold text-accent">
                                    Learn More
                                </a>
                                <div className="accordion mx-auto max-w-[35rem]" id="accordionFAQ">
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-1">
                                            <button
                                                className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
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
                                                    width={24}
                                                    height={24}
                                                    className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-2">
                                            <button
                                                className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
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
                                                    width={24}
                                                    height={24}
                                                    className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-3">
                                            <button
                                                className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
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
                                                    width={24}
                                                    height={24}
                                                    className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-4">
                                            <button
                                                className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
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
                                                    width={24}
                                                    height={24}
                                                    className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-5">
                                            <button
                                                className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
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
                                                    width={24}
                                                    height={24}
                                                    className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end video / faq */}
                {/* Partners */}
                <section className="overflow-hidden py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="mx-auto mb-14 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                They trust Us
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                NFTs can be used to represent items such as photos, videos, audio, and other types of
                                digital files.
                            </p>
                        </div>
                    </div>
                    <div className="mb-8 flex animate-marqueeRight space-x-8">
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_1.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_2.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_3.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_4.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_5.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_6.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_7.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_1.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_2.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_3.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_4.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_5.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_6.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_7.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex animate-marquee space-x-8">
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_8.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_9.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_10.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_11.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_12.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_13.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_14.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_8.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_9.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_10.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_11.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_12.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_13.jpg" alt="" />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6">
                            <img src="../img/dao/partner_dao_14.jpg" alt="" />
                        </div>
                    </div>
                </section>
                {/* end partners */}
                {/* Socials / CTA / Newsletter */}
                <section className="relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                        <img src="../img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="lg:flex lg:space-x-12">
                            <div className="mb-12 lg:w-1/2">
                                <div className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                    <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                                        A global distributed community
                                    </h2>
                                    <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                        We support the advancement of DAOs and decentralized governance solutions in all
                                        geographies and industries. Be part of this revolution.
                                    </p>
                                    <div className="flex space-x-2">
                                        <a
                                            href="#"
                                            className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="twitter"
                                                className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="discord"
                                                className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 496 512"
                                            >
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 lg:w-1/2">
                                <div className="h-full rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                    <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                                        What’s your DAO Idea?
                                        <br />
                                        Let’s chat.
                                    </h2>
                                    <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                        Our mission is to foster a diverse, open economy of transparent cooperation.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2.5xl bg-white px-12 py-20 text-center dark:bg-jacarta-700">
                            <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                                Weekly Digest
                            </h2>
                            <p className="mx-auto max-w-2xl text-center text-lg text-jacarta-700 dark:text-white">
                                Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
                                and tips and tricks for navigating Xhibiter
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
                    </div>
                </section>
            </main>
            {/* YouTube Video Modal */}
            <div
                className="modal fade video-lightbox js-video-lightbox"
                tabIndex={-1}
                aria-label="Youtube Modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 fill-jacarta-700"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                            <div className="ratio ratio-16x9 before:bg-jacarta-900">
                                <iframe className="embed-responsive-item" allow="autoplay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Wallet Modal */}
            <div
                className="modal fade"
                id="walletModal"
                tabIndex={-1}
                aria-labelledby="walletModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog max-w-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="walletModalLabel">
                                Connect your wallet
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>
                        {/* Body */}
                        <div className="modal-body p-6 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x={0}
                                y={0}
                                viewBox="0 0 318.6 318.6"
                                xmlSpace="preserve"
                                className="mb-4 inline-block h-8 w-8"
                            >
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: '\n                .st1,\n                .st6 {\n                  fill: #e4761b;\n                  stroke: #e4761b;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n                .st6 {\n                  fill: #f6851b;\n                  stroke: #f6851b;\n                }\n              ',
                                    }}
                                />
                                <path
                                    fill="#e2761b"
                                    stroke="#e2761b"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M274.1 35.5l-99.5 73.9L193 65.8z"
                                />
                                <path
                                    className="st1"
                                    d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                                />
                                <path
                                    className="st1"
                                    d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z"
                                />
                                <path
                                    d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z"
                                    fill="#d7c1b3"
                                    stroke="#d7c1b3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z"
                                    fill="#233447"
                                    stroke="#233447"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                                    fill="#cd6116"
                                    stroke="#cd6116"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z"
                                    fill="#e4751f"
                                    stroke="#e4751f"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="st6"
                                    d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                                />
                                <path
                                    fill="#c0ad9e"
                                    stroke="#c0ad9e"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                                />
                                <path
                                    fill="#161616"
                                    stroke="#161616"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                                />
                                <path
                                    d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                                    fill="#763d16"
                                    stroke="#763d16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="st6"
                                    d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                                />
                            </svg>
                            <p className="text-center dark:text-white">
                                You don&apos;t have MetaMask in your browser, please download it from
                                <a
                                    href="https://metamask.io/"
                                    className="text-accent"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    MetaMask
                                </a>
                            </p>
                        </div>
                        {/* end body */}
                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <a
                                    href="https://metamask.io/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Get Metamask
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Home9Page.getLayout = (page: ReactElement) => {
    return <MainLayout4>{page}</MainLayout4>;
};

export { Home9Page };
