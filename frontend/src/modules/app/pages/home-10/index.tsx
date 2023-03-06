import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const Home10Page = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="relative py-20 lg:pt-48">
                    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                        <img src="../img/gradient.jpg" alt="gradient" className="w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                        <img src="../img/gradient_dark.jpg" alt="gradient dark" className="w-full" />
                    </picture>
                    <div className="container">
                        <div className="h-full items-center gap-4 lg:grid lg:grid-cols-12">
                            <div className="flex h-full flex-col items-center justify-center py-10 lg:col-span-5 lg:items-start lg:py-20">
                                <div className="mb-8 flex items-center space-x-3 rounded-3xl border border-jacarta-200 px-5 py-2 dark:border-jacarta-300">
                                    <img src="../img/crypto-app/rocket_crypto_app.png" alt="" width={20} height={20} />
                                    <span className="text-xs font-bold uppercase tracking-wide text-jacarta-500 dark:text-jacarta-100">
                                        #1 CRYPTO APP IN STORES
                                    </span>
                                </div>
                                <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
                                    Enjoy choosing to invest in digital currencies.
                                </h1>
                                <p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">
                                    Every digital creation available through MakersPlace is an authentic and truly
                                    unique.
                                </p>
                                <a
                                    href="#"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                            {/* Hero image */}
                            <div className="col-span-7">
                                <div className="relative text-center">
                                    <img src="../img/hero/hero_crypto_app.png" alt="hero" className="inline-block" />
                                    <div className="absolute top-0 -z-10 animate-fly">
                                        <img
                                            src="./../img/crypto-app/3d_elements_crypto_app.png"
                                            alt=""
                                            className="dark:hidden"
                                        />
                                        <img
                                            src="./../img/crypto-app/3d_elements_crypto_app_dark.png"
                                            alt=""
                                            className="hidden dark:block"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end hero */}
                {/* Features */}
                <section className="pt-20 pb-24">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800">
                                <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-5 w-5 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zm8.79 5.931L10.584 12l-2.828 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    $76 billion
                                </h3>
                                <p className="dark:text-jacarta-300">24h trading volume on our app exchange</p>
                            </div>
                            <div className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800">
                                <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-5 w-5 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-4H8V8h3V6h2v2h1a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-2 4h-1v2h-2v-2zm-1-3v1h4a.5.5 0 1 0 0-1h-4zm0-3v1h4a.5.5 0 1 0 0-1h-4z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">310+</h3>
                                <p className="dark:text-jacarta-300">Cryptocurrencies listed</p>
                            </div>
                            <div className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800">
                                <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-5 w-5 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M10.758 11.828l7.849-7.849 1.414 1.414-1.414 1.415 2.474 2.474-1.414 1.415-2.475-2.475-1.414 1.414 2.121 2.121-1.414 1.415-2.121-2.122-2.192 2.192a5.002 5.002 0 0 1-7.708 6.294 5 5 0 0 1 6.294-7.708zm-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    100+ million
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Download our app and register users in 3 minutes
                                </p>
                            </div>
                            <div className="rounded-2.5xl bg-light-base p-8 text-center dark:bg-jacarta-800">
                                <div className="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-5 w-5 fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">$0.00023</h3>
                                <p className="dark:text-jacarta-300">Lowest transaction fees</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end features */}
                {/* Promo */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="pr-[calc((100%_-_1170px)/2)]">
                        <div className="lg:flex lg:justify-between">
                            {/* Image */}
                            <div className="relative mb-8 pr-6 lg:w-[63%]">
                                <img src="../img/crypto-app/promo_crypto_app.png" alt="" loading="lazy" />
                            </div>
                            {/* Info */}
                            <div className="py-10 px-6 lg:w-[37%] lg:pl-28">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                                    The safest most secure crypto app like never before
                                </h2>
                                <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
                                    Xhibiter security is unlike every other. It’s better. No more complex passwords or
                                    long phrases to store, browser extensions, or special hardware required. Your
                                    account is secured by private facial biometrics and industry-leading encryption to
                                    keep you safe from account
                                </p>
                                <div className="mb-3 flex space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        className="h-8 w-8 shrink-0 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="mb-3 mt-2 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            Safe storage of cryptocurrencies – take control of your own assets
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3 flex space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        className="h-8 w-8 shrink-0 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="mb-3 mt-2 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            Safe storage of cryptocurrencies – take control of your own assets
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        className="h-8 w-8 shrink-0 fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                                    </svg>
                                    <div>
                                        <span className="mb-3 mt-2 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            10,000+ DApps - enjoy DeFi
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end promo */}
                {/* Partners */}
                <div className="bg-white dark:bg-jacarta-900">
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
                {/* Benefits */}
                <section className="relative bg-light-base py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="mx-auto mb-20 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Wallet security is unlike every other wallet: It’s better.
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                Your account is secured by private facial biometrics and industry-leading encryption to
                                keep you safe from account takeover attacks and phishing. Discover total control and
                                true peace of mind.
                            </p>
                        </div>
                        <div className="grid gap-7 md:grid-cols-3">
                            <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
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
                                    Keyless Encryption
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    It is commonly adopted, applies to secure message transmission either directly
                                    without any key distribution in advance
                                </p>
                            </div>
                            <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
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
                                    Biometric Protection
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Consider using anti-spoofing technology in conjunction with live detection to block
                                    unauthorized users.
                                </p>
                            </div>
                            <div className="mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700">
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
                                    3-Factor Recovery
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    It is commonly adopted, applies to secure message transmission either directly
                                    without any key distribution in advance
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-lg dark:text-jacarta-300">
                            Your funds will always be safe with Xhibiter.{' '}
                            <a href="#" className="text-accent">
                                Learn More.
                            </a>
                        </p>
                    </div>
                </section>
                {/* end benefits */}
                {/* Testimonials */}
                <section className="py-24 dark:bg-jacarta-900">
                    <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
                        <div className="mx-auto mb-12 max-w-sm text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Satisfied Customers
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
                        {/* Slider dots */}
                        <div className="swiper-pagination mt-10 text-center" />
                    </div>
                </section>
                {/* end testimonials */}
                {/* CTA Download App */}
                <section className="relative pt-20">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                        <img src="../img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
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
                                                        fillRule="nonzero"
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
                                                width={17}
                                                height={18}
                                                viewBox="0 0 17 18"
                                                className="mr-2 inline-block"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_1429_17255)">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0.815635 0.506775C0.615202 0.718493 0.5 1.04436 0.5 1.46779V16.5292C0.5 16.9527 0.615202 17.2785 0.823128 17.4829L0.877451 17.528L9.46423 9.08873V8.8991L0.869958 0.46167L0.815635 0.506775Z"
                                                        fill="url(#paint0_linear_1429_17255)"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12.3212 11.9129L9.45703 9.09707V8.90008L12.3221 6.08423L12.3839 6.12197L15.7725 8.01455C16.7429 8.55213 16.7429 9.43766 15.7725 9.98261L12.3839 11.8752C12.383 11.8752 12.3212 11.9129 12.3212 11.9129Z"
                                                        fill="url(#paint1_linear_1429_17255)"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12.3835 11.8751L9.45751 8.99854L0.816406 17.4912C1.13204 17.8244 1.6631 17.8622 2.2569 17.5363L12.3835 11.8751Z"
                                                        fill="url(#paint2_linear_1429_17255)"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12.3835 6.12303L2.2569 0.469231C1.66403 0.136005 1.13204 0.18111 0.816406 0.514336L9.45657 8.99872L12.3835 6.12303Z"
                                                        fill="url(#paint3_linear_1429_17255)"
                                                    />
                                                    <path
                                                        opacity="0.2"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12.322 11.8145L2.26472 17.4305C1.70275 17.7481 1.20167 17.726 0.878542 17.4379L0.824219 17.4913L0.878542 17.5364C1.20167 17.8236 1.70275 17.8466 2.26472 17.529L12.3913 11.8752L12.322 11.8145Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        opacity="0.12"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M15.7704 9.88407L12.3125 11.8144L12.3743 11.8751L15.7629 9.98256C16.2481 9.71009 16.4869 9.35477 16.4869 8.99854C16.456 9.3244 16.2097 9.63461 15.7704 9.88407Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        opacity="0.25"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
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
                                                        <stop stopColor="#00A0FF" />
                                                        <stop offset="0.007" stopColor="#00A1FF" />
                                                        <stop offset="0.26" stopColor="#00BEFF" />
                                                        <stop offset="0.512" stopColor="#00D2FF" />
                                                        <stop offset="0.76" stopColor="#00DFFF" />
                                                        <stop offset={1} stopColor="#00E3FF" />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear_1429_17255"
                                                        x1="17.0352"
                                                        y1="8.99899"
                                                        x2="0.264462"
                                                        y2="8.99899"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#FFE000" />
                                                        <stop offset="0.409" stopColor="#FFBD00" />
                                                        <stop offset="0.775" stopColor="#FFA500" />
                                                        <stop offset={1} stopColor="#FF9C00" />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint2_linear_1429_17255"
                                                        x1="10.7924"
                                                        y1="10.5634"
                                                        x2="0.0306903"
                                                        y2="28.9927"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#FF3A44" />
                                                        <stop offset={1} stopColor="#C31162" />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint3_linear_1429_17255"
                                                        x1="-1.35877"
                                                        y1="-4.5032"
                                                        x2="3.44229"
                                                        y2="3.72749"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#32A071" />
                                                        <stop offset="0.069" stopColor="#2DA771" />
                                                        <stop offset="0.476" stopColor="#15CF74" />
                                                        <stop offset="0.801" stopColor="#06E775" />
                                                        <stop offset={1} stopColor="#00F076" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_1429_17255">
                                                        <rect
                                                            width={16}
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
                                <img src="./../img/mobile_app_iphone.png" className="inline-block" alt="" />
                            </div>
                            <div className="mb-10 hidden lg:order-3 lg:block lg:w-2/4 xl:w-[30%]">
                                <div className="flex items-center space-x-8 lg:pl-6">
                                    <div className="inline-block flex-shrink-0 rounded-2.5xl border border-jacarta-100 bg-white p-6">
                                        <img src="./../img/qr.png" alt="" />
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
                {/* end cta download app */}
                {/* Help */}
                <section className="relative bg-light-base py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="items-center justify-between lg:flex lg:space-x-24">
                            <div className="lg:w-[45%]">
                                <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                    Need help?
                                </h2>
                                <p className="mb-6 text-lg dark:text-jacarta-300">
                                    Discover NFTs, decentralized finance, crypto gaming, and thousands of Dapps! We’ve
                                    integrated with the WalletConnect protocol to facilitate your simple and secure
                                    connection.
                                </p>
                                <p className="dark:text-jacarta-300">
                                    We’ve integrated with the WalletConnect protocol to facilitate your simple and
                                    secure connection to the world of Web3 quickly and instantaneously.
                                </p>
                            </div>
                            <div className="lg:w-[55%]">
                                <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                                    <div className="relative mb-8 flex-1 self-end rounded-2.5xl bg-green p-8 shadow-2xl">
                                        <div className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-white/50"
                                            >
                                                <path fill="none" d="M0 0L24 0 24 24 0 24z" />
                                                <path d="M20 2c.552 0 1 .448 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="mb-2 block font-display text-lg text-white">Blog</span>
                                            <p className="mb-4 text-white">
                                                Stay up to date with the latest stories and commentary.
                                            </p>
                                            <a href="#" className="font-bold text-white underline">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                    <div className="relative mb-8 flex-1 self-end rounded-2.5xl bg-accent p-8 py-16 shadow-2xl">
                                        <div className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-white/50"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="mb-2 block font-display text-lg text-white">
                                                24/7 Chat Support
                                            </span>
                                            <p className="mb-4 text-white">
                                                Get our friendly customer service agents at your service.
                                            </p>
                                            <a href="#" className="font-bold text-white underline">
                                                Chat Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative mx-auto self-start rounded-2.5xl bg-blue p-8 shadow-2xl md:max-w-xs">
                                        <div className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-12 w-12 fill-white/50"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="mb-2 block font-display text-lg text-white">FAQs</span>
                                            <p className="mb-4 text-white">
                                                View FAQs for detailed instructions on specific features.
                                            </p>
                                            <a href="#" className="font-bold text-white underline">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end help */}
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
            {/* Buy Now Modal */}
            <div
                className="modal fade"
                id="buyNowModal"
                tabIndex={-1}
                aria-labelledby="buyNowModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog max-w-2xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="buyNowModalLabel">
                                Complete checkout
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
                        <div className="modal-body p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                                    Item
                                </span>
                                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                                    Subtotal
                                </span>
                            </div>
                            <div className="relative flex items-center border-t border-b border-jacarta-100 py-4 dark:border-jacarta-600">
                                <figure className="mr-5 self-start">
                                    <img
                                        src="../img/avatars/avatar_2.jpg"
                                        alt="avatar 2"
                                        className="rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <a href="collection" className="text-sm text-accent">
                                        Elon Musk #709
                                    </a>
                                    <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                        Lazyone Panda
                                    </h3>
                                    <div className="flex flex-wrap items-center">
                                        <span className="mr-1 block text-sm text-jacarta-500 dark:text-jacarta-300">
                                            Creator Earnings: 5%
                                        </span>
                                        <span data-tippy-content="The creator of this collection will receive 5% of the sale total from future sales of this item.">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 fill-jacarta-700 dark:fill-jacarta-300"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <span className="mb-1 flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x={0}
                                                y={0}
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
                                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-100">
                                            1.55 ETH
                                        </span>
                                    </span>
                                    <div className="text-right text-sm dark:text-jacarta-300">$130.82</div>
                                </div>
                            </div>
                            {/* Total */}
                            <div className="mb-2 flex items-center justify-between border-b border-jacarta-100 py-2.5 dark:border-jacarta-600">
                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                    Total
                                </span>
                                <div className="ml-auto">
                                    <span className="flex items-center whitespace-nowrap">
                                        <span data-tippy-content="ETH">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x={0}
                                                y={0}
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
                                        <span className="font-medium tracking-tight text-green">1.55 ETH</span>
                                    </span>
                                    <div className="text-right dark:text-jacarta-300">$130.82</div>
                                </div>
                            </div>
                            {/* Terms */}
                            <div className="mt-4 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="buyNowTerms"
                                    className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                />
                                <label htmlFor="buyNowTerms" className="text-sm dark:text-jacarta-200">
                                    By checking this box, I agree to Xhibiter&apos;s{' '}
                                    <a href="#" className="text-accent">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>
                        </div>
                        {/* end body */}
                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Confirm Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Place Bid Modal */}
            <div
                className="modal fade"
                id="placeBidModal"
                tabIndex={-1}
                aria-labelledby="placeBidLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog max-w-2xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="placeBidLabel">
                                Place a bid
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
                        <div className="modal-body p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                                    Price
                                </span>
                            </div>
                            <div className="relative mb-2 flex items-center overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                                <div className="flex flex-1 items-center self-stretch border-r border-jacarta-100 bg-jacarta-50 px-2">
                                    <span>
                                        <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x={0}
                                            y={0}
                                            viewBox="0 0 1920 1920"
                                            xmlSpace="preserve"
                                            className="mr-1 h-5 w-5"
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
                                    <span className="font-display text-sm text-jacarta-700">ETH</span>
                                </div>
                                <input
                                    type="text"
                                    className="h-12 w-full flex-[3] border-0 focus:ring-inset focus:ring-accent"
                                    placeholder="Amount"
                                    defaultValue="0.05"
                                />
                                <div className="flex flex-1 justify-end self-stretch border-l border-jacarta-100 bg-jacarta-50">
                                    <span className="self-center px-2 text-sm">$130.82</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-sm dark:text-jacarta-400">Balance: 0.0000 WETH</span>
                            </div>
                            {/* Terms */}
                            <div className="mt-4 flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                />
                                <label htmlFor="terms" className="text-sm dark:text-jacarta-200">
                                    By checking this box, I agree to Xhibiter&apos;s{' '}
                                    <a href="#" className="text-accent">
                                        Terms of Service
                                    </a>
                                </label>
                            </div>
                        </div>
                        {/* end body */}
                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Place Bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Home10Page.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { Home10Page };
