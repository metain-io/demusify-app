import { MainLayout4 } from '@modules/app/layouts';
import { ReactElement } from 'react';

const Home12Page = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="relative h-screen">
                    <picture className="pointer-events-none absolute inset-0 -z-10">
                        <img src="../img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-y-0 right-6 -z-10 hidden items-center justify-end md:flex xl:right-[10%]">
                        <img src="../img/ico-landing/ico_landing_hero.png" alt="" className="w-3/4 xl:w-auto" />
                    </picture>
                    <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
                        <div className="grid h-full items-center gap-4 md:grid-cols-12">
                            <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start lg:py-20">
                                <p className="mb-5 inline-block bg-gradient-to-r from-[#F43771] to-[#FF9567] bg-clip-text text-lg text-transparent">
                                    Decentralized Application
                                </p>
                                <h1 className="mb-8 text-center font-display text-5xl text-white md:text-left lg:text-6xl">
                                    World’s First Decentralized Marketplace With Blockchain
                                </h1>
                                <div className="flex space-x-4">
                                    <a
                                        href="collections.html"
                                        className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="tos.html"
                                        className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                    >
                                        White Paper
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end hero */}
                {/* Progress */}
                <div className="container -translate-y-24">
                    <div className="rounded-2.5xl bg-light-base px-6 py-16 shadow-sm dark:bg-jacarta-700 md:px-16 lg:px-24">
                        <div className="flex-wrap justify-between lg:flex">
                            <div className="mb-14">
                                <h2 className="mb-4 font-display text-3xl text-jacarta-700 dark:text-white">
                                    ICO Pre-Sale is <span className="text-accent">Alive!</span>
                                </h2>
                                <p className="mb-8 text-lg text-jacarta-500 dark:text-jacarta-300">
                                    Discount Tier: 40%
                                </p>
                                <a
                                    href="item.html"
                                    className="inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Buy Token Now
                                </a>
                            </div>
                            <div>
                                <div
                                    className="js-countdown-single-timer mb-10 flex space-x-2 text-center md:space-x-4"
                                    data-countdown="2023-12-07T19:40:30"
                                    data-expired="This auction has ended"
                                >
                                    <span className="countdown-days flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                                        <span className="js-countdown-days-number font-display text-xl font-medium md:text-3xl" />
                                        <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                                            Days
                                        </span>
                                    </span>
                                    <span className="countdown-hours flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                                        <span className="js-countdown-hours-number font-display text-xl font-medium md:text-3xl" />
                                        <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                                            Hrs
                                        </span>
                                    </span>
                                    <span className="countdown-minutes flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                                        <span className="js-countdown-minutes-number font-display text-xl font-medium md:text-3xl" />
                                        <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                                            Min
                                        </span>
                                    </span>
                                    <span className="countdown-seconds flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                                        <span className="js-countdown-seconds-number font-display text-xl font-medium md:text-3xl" />
                                        <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
                                            Sec
                                        </span>
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-between dark:text-jacarta-300">
                                        <span>
                                            Reached: <span className="text-green">$19,550,000</span>
                                        </span>
                                        <span>$70,000,000</span>
                                    </div>
                                    <div className="rounded bg-accent-lighter">
                                        <div className="h-4 rounded bg-accent" style={{ width: '32%' }} />
                                    </div>
                                    <div className="mt-2 flex justify-between dark:text-jacarta-300">
                                        <span>Softcap</span>
                                        <span>Hardcap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end progress */}
                {/* Partners */}
                <section className="overflow-hidden pb-24 dark:bg-jacarta-900">
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
                {/* Promo / FAQ */}
                <section className="bg-light-base py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                What Is an Initial Coin Offering (ICO)?
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                An initial coin offering (ICO) is the{' '}
                                <a href="#" className="underline">
                                    cryptocurrency
                                </a>{' '}
                                industry’s equivalent of an{' '}
                                <a href="#" className="underline">
                                    initial public offering (IPO)
                                </a>
                                .
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-nowrap">
                            <div className="lg:w-[59%]">
                                <figure className="relative mb-8 overflow-hidden rounded-3xl">
                                    <img src="../img/ico-landing/ico_landing_promo.png" alt="" />
                                </figure>
                            </div>
                            <div className="lg:w-[41%] lg:pl-24">
                                <p className="mt-10 mb-5 dark:text-jacarta-300">
                                    A company seeking to raise money to create a new coin, app, or service can launch an
                                    ICO as a way to raise funds.
                                </p>
                                <a href="#" className="mb-10 inline-block text-sm font-bold text-accent">
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
                                                <span>How an Initial Coin Offering (ICO) Works</span>
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
                                                <span>White Paper Release</span>
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
                                                <span>What Happens to the Funds?</span>
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
                                                <span>Who Can Launch an ICO?</span>
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
                                                <span>Buying Into an ICO</span>
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
                {/* end promo / faq */}
                {/* Benefits */}
                <section className="py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="swiper scrollbar-slider !pt-10">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Virtual Database
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            It is commonly adopted, applies to secure message transmission either
                                            directly without any key distribution in advance
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455c.128-.177.251-.357.369-.542l.17-.28a10.918 10.918 0 0 0 1.55-5.345L11 16V9h2v7a12.96 12.96 0 0 1-.997 5.001 7.026 7.026 0 0 0 2.27-.378c.442-1.361.693-2.808.724-4.31L15 16v-3.001h2V16c0 1.088-.102 2.153-.298 3.185a6.978 6.978 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.962 8.962 0 0 1 12 1zm-5 9a5 5 0 1 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04c-.23.414-.491.808-.782 1.179a9.03 9.03 0 0 1-1.237-.97l-.309-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 10v4c0 1.675.588 3.212 1.57 4.417a6.91 6.91 0 0 0 .426-2.176L7 16v-6z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Secured Money
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            Consider using anti-spoofing technology in conjunction with live detection
                                            to block unauthorized users.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M19.562 12.097l1.531 2.653c.967 1.674.393 3.815-1.28 4.781-.533.307-1.136.469-1.75.469H16v2.5L11 19l5-3.5V18h2.062c.263 0 .522-.07.75-.201.718-.414.963-1.332.55-2.049l-1.532-2.653 1.732-1zM7.304 9.134l.53 6.08-2.164-1.25-1.031 1.786c-.132.228-.201.487-.201.75 0 .828.671 1.5 1.5 1.5H9v2H5.938c-1.933 0-3.5-1.567-3.5-3.5 0-.614.162-1.218.469-1.75l1.03-1.787-2.164-1.249 5.53-2.58zm6.446-6.165c.532.307.974.749 1.281 1.281l1.03 1.785 2.166-1.25-.53 6.081-5.532-2.58 2.165-1.25-1.031-1.786c-.132-.228-.321-.417-.549-.549-.717-.414-1.635-.168-2.049.549L9.169 7.903l-1.732-1L8.97 4.25c.966-1.674 3.107-2.248 4.781-1.281z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Private Legal
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            It is commonly adopted, applies to secure message transmission either
                                            directly without any key distribution in advance
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Virtual Database
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            It is commonly adopted, applies to secure message transmission either
                                            directly without any key distribution in advance
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455c.128-.177.251-.357.369-.542l.17-.28a10.918 10.918 0 0 0 1.55-5.345L11 16V9h2v7a12.96 12.96 0 0 1-.997 5.001 7.026 7.026 0 0 0 2.27-.378c.442-1.361.693-2.808.724-4.31L15 16v-3.001h2V16c0 1.088-.102 2.153-.298 3.185a6.978 6.978 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.962 8.962 0 0 1 12 1zm-5 9a5 5 0 1 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04c-.23.414-.491.808-.782 1.179a9.03 9.03 0 0 1-1.237-.97l-.309-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.966 6.966 0 0 0-1.39 3.951L5 10v4c0 1.675.588 3.212 1.57 4.417a6.91 6.91 0 0 0 .426-2.176L7 16v-6z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Secured Money
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            Consider using anti-spoofing technology in conjunction with live detection
                                            to block unauthorized users.
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide !h-auto">
                                    <div className="h-full rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
                                        <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-accent"
                                            >
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M19.562 12.097l1.531 2.653c.967 1.674.393 3.815-1.28 4.781-.533.307-1.136.469-1.75.469H16v2.5L11 19l5-3.5V18h2.062c.263 0 .522-.07.75-.201.718-.414.963-1.332.55-2.049l-1.532-2.653 1.732-1zM7.304 9.134l.53 6.08-2.164-1.25-1.031 1.786c-.132.228-.201.487-.201.75 0 .828.671 1.5 1.5 1.5H9v2H5.938c-1.933 0-3.5-1.567-3.5-3.5 0-.614.162-1.218.469-1.75l1.03-1.787-2.164-1.249 5.53-2.58zm6.446-6.165c.532.307.974.749 1.281 1.281l1.03 1.785 2.166-1.25-.53 6.081-5.532-2.58 2.165-1.25-1.031-1.786c-.132-.228-.321-.417-.549-.549-.717-.414-1.635-.168-2.049.549L9.169 7.903l-1.732-1L8.97 4.25c.966-1.674 3.107-2.248 4.781-1.281z" />
                                            </svg>
                                        </div>
                                        <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                            Private Legal
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            It is commonly adopted, applies to secure message transmission either
                                            directly without any key distribution in advance
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-scrollbar swiper-scrollbar-horizontal" />
                        </div>
                    </div>
                </section>
                {/* end benefits */}
                {/* Team */}
                <section className="relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                        <img src="../img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Meet our Crypto Experts
                            </h2>
                            <p className="text-lg dark:text-jacarta-200">
                                NFTs can be used to represent items such as photos, videos, audio, and other types of
                                digital files.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/team/team_1.jpg"
                                    className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                    alt="team"
                                />
                                <h3 className="font-display text-md text-jacarta-700 dark:text-white">Alex Grey</h3>
                                <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                    CEO, Director
                                </span>
                                <div className="mt-3 flex justify-center space-x-5">
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/team/team_2.jpg"
                                    className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                    alt="team"
                                />
                                <h3 className="font-display text-md text-jacarta-700 dark:text-white">
                                    Ashton Kutsher
                                </h3>
                                <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                    Entrepreneur &amp; Author
                                </span>
                                <div className="mt-3 flex justify-center space-x-5">
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/team/team_3.jpg"
                                    className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                    alt="team"
                                />
                                <h3 className="font-display text-md text-jacarta-700 dark:text-white">John Ferris</h3>
                                <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                    Developer &amp; Investor
                                </span>
                                <div className="mt-3 flex justify-center space-x-5">
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/team/team_4.jpg"
                                    className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                    alt="team"
                                />
                                <h3 className="font-display text-md text-jacarta-700 dark:text-white">Belinda Bing</h3>
                                <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                    Former COO Shopee
                                </span>
                                <div className="mt-3 flex justify-center space-x-5">
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/team/team_5.jpg"
                                    className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                    alt="team"
                                />
                                <h3 className="font-display text-md text-jacarta-700 dark:text-white">
                                    Camille Alforque
                                </h3>
                                <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                    Chief Creative officer
                                </span>
                                <div className="mt-3 flex justify-center space-x-5">
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="group">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end team */}
                {/* Roadmap */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60"
                    style={{ backgroundImage: 'url("./../img/ico-landing/ico_landing_roadmap.jpg")' }}
                >
                    <div className="container relative z-10">
                        <h2 className="mb-6 font-display text-3xl text-white">Roadmap</h2>
                        <p className="mb-12 max-w-xl text-lg text-jacarta-300">
                            This timeline details our funding and development goals. Connect our AI to your exchange
                            account and invest crypto automatically.
                        </p>
                        <div className="flex">
                            <ul
                                className="nav nav-tabs w-1/3 space-y-9 self-start border-l-2 border-jacarta-200 py-2 pl-2 md:pl-8"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 active relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q3-2021-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q3-2021"
                                        type="button"
                                        role="tab"
                                        aria-controls="q3-2021"
                                        aria-selected="true"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2021 Q3
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q4-2021-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q4-2021"
                                        type="button"
                                        role="tab"
                                        aria-controls="q4-2021"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2021 Q4
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q1-2022-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q1-2022"
                                        type="button"
                                        role="tab"
                                        aria-controls="q1-2022"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2022 Q1
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q2-2022-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q2-2022"
                                        type="button"
                                        role="tab"
                                        aria-controls="q2-2022"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2022 Q2
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q3-2022-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q3-2022"
                                        type="button"
                                        role="tab"
                                        aria-controls="q3-2022"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2022 Q3
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q4-2022-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q4-2022"
                                        type="button"
                                        role="tab"
                                        aria-controls="q4-2022"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2022 Q4
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link nav-link--style-3 relative flex items-center whitespace-nowrap text-jacarta-300 hover:text-white"
                                        id="q1-2023-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#q1-2023"
                                        type="button"
                                        role="tab"
                                        aria-controls="q1-2023"
                                        aria-selected="false"
                                    >
                                        <span className="px-2 font-display text-lg font-medium md:text-2xl">
                                            2023 Q1
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content w-full pl-4 md:mt-16 md:w-2/4">
                                <div
                                    className="tab-pane fade active show"
                                    id="q3-2021"
                                    role="tabpanel"
                                    aria-labelledby="q3-2021-tab"
                                >
                                    <p className="text-lg text-white">
                                        Interested investors can buy into an initial coin offering to receive a new
                                        cryptocurrency token issued by the company. This token may have some utility
                                        related to the product or service that the company is offering or represent a
                                        stake in the company or project.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q4-2021"
                                    role="tabpanel"
                                    aria-labelledby="q4-2021-tab"
                                >
                                    <p className="text-lg text-white">
                                        This timeline details our funding and development goals. Connect our AI to your
                                        exchange account and invest crypto automatically.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q1-2022"
                                    role="tabpanel"
                                    aria-labelledby="q1-2022-tab"
                                >
                                    <p className="text-lg text-white">
                                        It is commonly adopted, applies to secure message transmission either directly
                                        without any key distribution in advance. This token may have some utility
                                        related to the product or service that the company is offering or represent a
                                        stake in the company or project.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q2-2022"
                                    role="tabpanel"
                                    aria-labelledby="q2-2022-tab"
                                >
                                    <p className="text-lg text-white">
                                        Interested investors can buy into an initial coin offering to receive a new
                                        cryptocurrency token issued by the company. This token may have some utility
                                        related to the product or service that the company is offering or represent a
                                        stake in the company or project.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q3-2022"
                                    role="tabpanel"
                                    aria-labelledby="q3-2022-tab"
                                >
                                    <p className="text-lg text-white">
                                        It is commonly adopted, applies to secure message transmission either directly
                                        without any key distribution in advance. This token may have some utility
                                        related to the product or service that the company is offering or represent a
                                        stake in the company or project.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q4-2022"
                                    role="tabpanel"
                                    aria-labelledby="q4-2022-tab"
                                >
                                    <p className="text-lg text-white">
                                        This timeline details our funding and development goals. Connect our AI to your
                                        exchange account and invest crypto automatically.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="q1-2023"
                                    role="tabpanel"
                                    aria-labelledby="q1-2023-tab"
                                >
                                    <p className="text-lg text-white">
                                        It is commonly adopted, applies to secure message transmission either directly
                                        without any key distribution in advance. This token may have some utility
                                        related to the product or service that the company is offering or represent a
                                        stake in the company or project.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end roadmap */}
                {/* Testimonials */}
                <section className="py-24 dark:bg-jacarta-900">
                    <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
                        <div className="mx-auto mb-12 max-w-sm text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Millions of Users Around the World
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                10,000k+ Customers those who already tried our services.
                            </p>
                        </div>
                        {/* Slider */}
                        <div className="swiper card-slider-2-columns xl:!overflow-visible">
                            <div className="swiper-wrapper">
                                {/* Slides */}
                                <div className="swiper-slide">
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-12 dark:border-transparent dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="../img/testimonials/testimonial_1.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                                            <svg
                                                width={22}
                                                height={19}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-white"
                                            >
                                                <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                                            </svg>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you're interested in shaping a
                                                new business model for creators, this is the team to join.
                                            </p>
                                            <span className="mt-6 block font-display text-sm font-medium text-jacarta-700 dark:text-white">
                                                Katie Smith
                                            </span>
                                            <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                                General Partner at Entrepreneur
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-12 dark:border-transparent dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="../img/testimonials/testimonial_2.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                                            <svg
                                                width={22}
                                                height={19}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-white"
                                            >
                                                <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                                            </svg>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you're interested in shaping a
                                                new business model for creators, this is the team to join.
                                            </p>
                                            <span className="mt-6 block font-display text-sm font-medium text-jacarta-700 dark:text-white">
                                                Alex Fox
                                            </span>
                                            <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                                Entrepreneur / Manager
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-12 dark:border-transparent dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="../img/testimonials/testimonial_3.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
                                            <svg
                                                width={22}
                                                height={19}
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="fill-white"
                                            >
                                                <path d="M6.027 18.096c-.997 0-1.813-.204-2.448-.612a5.147 5.147 0 01-1.564-1.564 5.729 5.729 0 01-.952-2.38C.927 12.679.86 11.976.86 11.432c0-2.221.567-4.239 1.7-6.052C3.693 3.567 5.461 2.093 7.863.96l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224zm11.56 0c-.997 0-1.813-.204-2.448-.612a5.148 5.148 0 01-1.564-1.564 5.73 5.73 0 01-.952-2.38c-.136-.861-.204-1.564-.204-2.108 0-2.221.567-4.239 1.7-6.052 1.134-1.813 2.902-3.287 5.304-4.42l.612 1.224c-1.405.59-2.606 1.519-3.604 2.788-1.042 1.27-1.564 2.561-1.564 3.876 0 .544.068 1.02.204 1.428a3.874 3.874 0 012.516-.884c1.179 0 2.199.385 3.06 1.156.862.77 1.292 1.836 1.292 3.196 0 1.27-.43 2.312-1.292 3.128-.861.816-1.881 1.224-3.06 1.224z" />
                                            </svg>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width={24}
                                                    height={24}
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you're interested in shaping a
                                                new business model for creators, this is the team to join.
                                            </p>
                                            <span className="mt-6 block font-display text-sm font-medium text-jacarta-700 dark:text-white">
                                                Marshal Ericson
                                            </span>
                                            <span className="text-2xs font-medium tracking-tight dark:text-jacarta-400">
                                                NFT Entrepreneur
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider dots */}
                        <div className="swiper-pagination mt-10 text-center" />
                    </div>
                </section>
                {/* end testimonials */}
                {/* CTA */}
                <div className="container">
                    <div className="relative z-10 overflow-hidden rounded-2.5xl px-16 py-24 lg:px-24">
                        <picture className="pointer-events-none absolute inset-0 -z-10 h-[150%] dark:hidden">
                            <img src="../img/gradient.jpg" alt="gradient" className="h-full w-full" />
                        </picture>
                        <picture className="pointer-events-none absolute inset-0 -z-10 hidden h-[150%] dark:block">
                            <img src="../img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                        </picture>
                        <img
                            src="../img/crypto-trading/crypto_trading_cta_icons.png"
                            alt=""
                            className="pointer-events-none absolute top-1/2 right-1/4 -z-10 -translate-y-1/2"
                            loading="lazy"
                        />
                        <div className="lg:flex lg:justify-between">
                            <div className="mb-6 max-w-lg lg:mb-0">
                                <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                                    Want to start investing in crypto now?
                                </h2>
                                <p className="text-lg leading-normal dark:text-jacarta-300">
                                    Discover how specific cryptocurrencies work — and get a bit of each crypto to try
                                    out for yourself.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="inline-block self-center rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Start Earning
                            </a>
                        </div>
                    </div>
                </div>
                {/* end cta */}
            </main>
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
                                You don't have MetaMask in your browser, please download it from
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

Home12Page.getLayout = (page: ReactElement) => {
    return <MainLayout4>{page}</MainLayout4>;
};

export { Home12Page };
