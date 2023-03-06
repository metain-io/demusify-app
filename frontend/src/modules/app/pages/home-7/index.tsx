import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Script from 'next/script';

const PageHome7 = () => {
    return (
        <>
            <main>
                {/* <!-- Hero --> */}
                <section className="relative pb-32 pt-20 lg:pt-48">
                    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                        <img src="img/gradient.jpg" alt="gradient" className="w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                        <img src="img/gradient_dark.jpg" alt="gradient dark" className="w-full" />
                    </picture>
                    <img
                        src="img/patterns/pattern_donut.png"
                        alt="pattern donut"
                        className="absolute right-0 top-0 -z-10"
                    />

                    <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
                        <div className="h-full items-center gap-4 lg:grid lg:grid-cols-12">
                            <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
                                <p className="mb-10 text-xs font-bold uppercase text-jacarta-500 dark:text-jacarta-200">
                                    Discover How To Earn More
                                </p>
                                <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
                                    We Ensure & Transform NFT Business Growing
                                </h1>
                                <p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">
                                    Every digital creation available through MakersPlace is an authentic and truly
                                    unique.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="collections"
                                        className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="collections"
                                        className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* <!-- Hero image --> */}
                            <div className="col-span-6">
                                <div className="relative text-center lg:pl-32 lg:text-right">
                                    <div className="absolute -left-[18%] top-1/3 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[5%] md:left-20">
                                        <div className="flex gap-4">
                                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-green"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                                                </svg>
                                            </span>
                                            <div className="text-left">
                                                <span className="block font-display text-3xl text-green">3x</span>
                                                <span className="block font-display text-sm text-jacarta-600">
                                                    Increased Profits
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src="img/hero/hero_consultant_main.jpg"
                                        alt="crypto consultant hero"
                                        className="inline-block rounded-2.5xl"
                                    />

                                    <div className="absolute bottom-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%] lg:-right-[17%]">
                                        <div className="text-left">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="absolute right-6 top-6 fill-red"
                                            >
                                                <path fill="none" d="M0 0H24V24H0z" />
                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                                            </svg>
                                            <span className="block font-display text-3xl text-[#737EF2]">+10k</span>
                                            <span className="mb-5 block font-display text-sm text-jacarta-600">
                                                Happy customers
                                            </span>
                                            <img
                                                src="img/crypto-consultant/happy_customers.png"
                                                alt="happy customers"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end hero --> */}

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

                {/* <!-- Services --> */}
                <section className="py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Start Improving Your Business Today
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                Connect our AI to your exchange account and invest crypto automatically. Xhibiter app
                                work while you just live.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    NFT Consultant Analytics
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>

                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM11 10h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    NFT Marketing
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>

                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M2 18h7v2H2v-2zm0-7h9v2H2v-2zm0-7h20v2H2V4zm18.674 9.025l1.156-.391 1 1.732-.916.805a4.017 4.017 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.655-1.435.83L19 21h-2l-.24-1.196a3.996 3.996 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4.017 4.017 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.174 1.024.46 1.434.83zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    NFT Strategy
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>

                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107 1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    NFT Technology
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>

                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    Advisers & Intermediaries
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>

                            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 pt-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700">
                                <span className="absolute top-10 left-12 block h-10 w-10 rounded-full bg-[#DCD0FF] dark:bg-accent"></span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="relative mb-6 h-8 w-8 fill-accent-dark dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z" />
                                </svg>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    ICO Token
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein the top right corner.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end services --> */}

                {/* <!-- Promo --> */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="lg:flex lg:justify-between">
                            {/* <!-- Image --> */}
                            <div className="relative lg:w-[55%]">
                                <img
                                    src="img/patterns/pattern_circle_1.png"
                                    className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
                                    alt=""
                                />
                                <img
                                    src="img/patterns/pattern_circle_2.png"
                                    className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                                    alt=""
                                />
                                <div className="flex items-center space-x-7">
                                    <figure className="relative">
                                        <img src="img/crypto-consultant/promo_1.jpg" className="rounded-3xl" alt="" />
                                    </figure>
                                    <figure className="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
                                        <a
                                            href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            data-bs-toggle="modal"
                                            data-bs-target=".video-lightbox"
                                            className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="h-8 w-8 fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
                                            </svg>
                                        </a>
                                        <img src="img/crypto-consultant/promo_2.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>

                            {/* <!-- Info --> */}
                            <div className="py-10 lg:w-[45%] lg:pl-28">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                                    You Can Save Time & Money In Your Business
                                </h2>
                                <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.
                                </p>
                                <div className="mb-8 flex space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-8 w-8 shrink-0 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            Team Management
                                        </span>
                                        <span className="dark:text-jacarta-300">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            sed quia.
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-8 w-8 shrink-0 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            Revenue-based payments
                                        </span>
                                        <span className="dark:text-jacarta-300">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                            sed quia.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end promo --> */}

                {/* <!-- Testimonials --> */}
                <section className="bg-light-base py-24 dark:bg-jacarta-900">
                    <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
                        <div className="mx-auto mb-12 max-w-sm text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Satisfied Customers
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                10,000k+ Customers those who already tried our services.
                            </p>
                        </div>

                        {/* <!-- Slider --> */}
                        <div className="swiper card-slider-2-columns xl:!overflow-visible">
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="img/testimonials/testimonial_1.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
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
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you&apos;re interested in
                                                shaping a new business model for creators, this is the team to join.
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
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="img/testimonials/testimonial_2.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
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
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you&apos;re interested in
                                                shaping a new business model for creators, this is the team to join.
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
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
                                        <img
                                            src="img/testimonials/testimonial_3.jpg"
                                            alt=""
                                            className="w-28 self-start rounded-2.5xl lg:w-auto"
                                        />
                                        <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accent dark:border-jacarta-700 md:mb-0 md:w-16">
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
                                            <div className="-ml-1 mb-3 flex">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="h-5 w-5 fill-orange"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                                                </svg>
                                            </div>
                                            <p className="text-md leading-normal text-jacarta-700 dark:text-white">
                                                Xhibiter is one of the most exciting, if you&apos;re interested in
                                                shaping a new business model for creators, this is the team to join.
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

                        {/* <!-- Slider dots --> */}
                        <div className="swiper-pagination mt-10 text-center"></div>
                    </div>
                </section>
                {/* <!-- end testimonials --> */}

                {/* <!-- FAQ --> */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="justify-between lg:flex lg:space-x-20">
                            <div className="lg:w-[45%]">
                                <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                    Frequently Asked Questions
                                </h2>
                                <p className="mb-12 text-lg dark:text-jacarta-300">
                                    The most comprehensive complete-system warranty in the solar industry. Hassle-free
                                    replacement, repair or reimbursement.
                                </p>
                                <div className="accordion mb-14" id="accordionFAQ">
                                    <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                        <h2 className="accordion-header" id="faq-heading-1">
                                            <button
                                                className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faq-1"
                                                aria-expanded="true"
                                                aria-controls="faq-1"
                                            >
                                                <span>What is tax and legal advisory?</span>
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
                                            className="accordion-collapse collapse show"
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
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
                                                <span>Do you give guarantee and after sales service?</span>
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
                                                    collections. Unique, fully 3D and built to unite the design
                                                    multiverse. Designed and styled by Digimental.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg text-jacarta-700 dark:text-jacarta-100">
                                    Any Question?
                                    <a href="#" className="text-accent">
                                        support@xhibiter.com
                                    </a>
                                </p>
                            </div>
                            <div className="lg:w-[55%]">
                                <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                                    <div className="relative mb-8 max-w-[13.125rem] self-end rounded-2.5xl bg-green p-8 shadow-2xl">
                                        <img
                                            src="img/patterns/pattern_circle_1.png"
                                            className="absolute -top-10 -left-8 -z-10 animate-fly dark:z-0 dark:opacity-10"
                                            alt=""
                                        />
                                        <div>
                                            <span className="mb-4 block font-display text-base text-white">
                                                Individual Investors
                                            </span>
                                            <span className="mb-4 block font-display text-4xl text-white">7,000+</span>
                                            <span className="block text-base text-white">Sed do eiusmod tempor.</span>
                                        </div>
                                    </div>
                                    <img
                                        src="img/crypto-consultant/faq.jpg"
                                        className="mb-8 inline-block rounded-2.5xl"
                                        alt=""
                                    />
                                </div>
                                <div className="relative">
                                    <img
                                        src="img/patterns/pattern_circle_2.png"
                                        className="absolute -bottom-8 right-12 animate-fly dark:opacity-10"
                                        alt=""
                                    />
                                    <div className="relative mx-auto max-w-xs self-start rounded-2.5xl bg-blue p-8 shadow-2xl">
                                        <div className="absolute right-8 top-8 rounded-full bg-white p-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="fill-blue"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z" />
                                            </svg>
                                        </div>

                                        <div className="text-left">
                                            <span className="mb-4 block font-display text-base text-white">
                                                Invested to date
                                            </span>
                                            <span className="mb-4 block font-display text-4xl text-white">$3.7B</span>
                                            <span className="block text-base text-white">Sed do eiusmod tempor.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end faq --> */}

                {/* <!-- Blog --> */}
                <section className="bg-light-base py-24 pb-80 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-sm text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Financial News
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                Here are the best features that makes Xhibiter the most powerful, and fast.
                            </p>
                        </div>

                        {/* <!-- Slider --> */}
                        <div className="swiper card-slider-3-columns-large-gap">
                            <div className="swiper-wrapper">
                                {/* <!-- Slides --> */}
                                <div className="swiper-slide">
                                    <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                        <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                                            <div className="flex flex-wrap items-center space-x-2">
                                                <span className="text-accent">
                                                    <a href="single-post" className="uppercase">
                                                        Finance
                                                    </a>
                                                </span>
                                            </div>
                                            <span>
                                                <time dateTime="2022-02-05">5 Feb, 2022</time>
                                            </span>
                                        </div>

                                        <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">
                                                10 Marketing Trends That You Should Be Prepared for in 2022
                                            </a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-300">
                                            The goal of this new editor is to make adding rich content to WordPress
                                            simple…
                                        </p>
                                        <div className="overflow-hidden">
                                            <a
                                                href="single-post"
                                                className="h-rotate inline-block transition-transform will-change-transform hover:translate-x-1"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="fill-accent"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                        <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                                            <div className="flex flex-wrap items-center space-x-2">
                                                <span className="text-accent">
                                                    <a href="single-post" className="uppercase">
                                                        Finance
                                                    </a>
                                                </span>
                                            </div>
                                            <span>
                                                <time dateTime="2022-02-05">5 Feb, 2022</time>
                                            </span>
                                        </div>

                                        <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">
                                                Expanding the Global NFT Ecosystem: A Preview of Chain Expansion
                                            </a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-300">
                                            The goal of this new editor is to make adding rich content to WordPress
                                            simple…
                                        </p>
                                        <a
                                            href="single-post"
                                            className="h-rotate inline-block transition-transform will-change-transform hover:translate-x-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                            </svg>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                        <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                                            <div className="flex flex-wrap items-center space-x-2">
                                                <span className="text-accent">
                                                    <a href="single-post" className="uppercase">
                                                        Finance
                                                    </a>
                                                </span>
                                            </div>
                                            <span>
                                                <time dateTime="2022-02-05">5 Feb, 2022</time>
                                            </span>
                                        </div>

                                        <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">OpenSea Acquires Gem to Invest in Pro Experience</a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-300">
                                            The goal of this new editor is to make adding rich content to WordPress
                                            simple…
                                        </p>
                                        <a
                                            href="single-post"
                                            className="h-rotate inline-block transition-transform will-change-transform hover:translate-x-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                            </svg>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                                        <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                                            <div className="flex flex-wrap items-center space-x-2">
                                                <span className="text-accent">
                                                    <a href="single-post" className="uppercase">
                                                        Finance
                                                    </a>
                                                </span>
                                            </div>
                                            <span>
                                                <time dateTime="2022-02-05">5 Feb, 2022</time>
                                            </span>
                                        </div>

                                        <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">
                                                10 Marketing Trends That You Should Be Prepared for in 2022
                                            </a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-300">
                                            The goal of this new editor is to make adding rich content to WordPress
                                            simple…
                                        </p>
                                        <a
                                            href="single-post"
                                            className="h-rotate inline-block transition-transform will-change-transform hover:translate-x-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="fill-accent"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                            </svg>
                                        </a>
                                    </article>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slider dots --> */}
                        <div className="swiper-pagination-1 mt-10 text-center"></div>
                    </div>
                </section>
                {/* <!-- end blog --> */}

                {/* <!-- CTA --> */}
                <div className="relative z-10 -mt-48 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="relative overflow-hidden rounded-2.5xl px-16 pt-16 pb-8 shadow-md lg:px-24">
                            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                                <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                            </picture>
                            <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                                <img src="img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                            </picture>
                            <div className="items-center justify-between md:flex">
                                <div className="mb-6 md:w-1/2">
                                    <h2 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-3xl">
                                        Would you like some help getting started?
                                    </h2>
                                    <p className="mb-8 text-lg dark:text-jacarta-300">
                                        Our support heroes will have you up and running in less than 10mins.
                                    </p>
                                    <a
                                        href="contact"
                                        className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Schedule a Call
                                    </a>
                                </div>
                                <img src="img/crypto-consultant/cta_illustration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end cta --> */}
            </main>

            <Script src="./js/videoLightbox.bundle.js" />
        </>
    );
};

PageHome7.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHome7 };
