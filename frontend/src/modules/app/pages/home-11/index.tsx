import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const Home11Page = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="hero relative pt-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient.jpg" alt="gradient" className="h-[150%] w-full object-cover" />
                    </picture>
                    <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                        <img
                            src="../img/gradient_dark.jpg"
                            alt="gradient dark"
                            className="h-[150%] w-full object-cover"
                        />
                    </picture>
                    <picture className="pointer-events-none absolute bottom-[15%] left-1/2 -translate-x-1/2">
                        <img src="../img/crypto-trading/crypto_trading_icons.png" alt="" className="animate-fly" />
                    </picture>
                    <div className="container">
                        <div className="mx-auto max-w-4xl pt-16 text-center">
                            <p className="mb-6 text-lg text-accent dark:text-accent-lighter">
                                Open Free Crypto Trading Account
                            </p>
                            <h1 className="mb-8 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
                                Join the Future of Blockchain
                                <br />
                                Buy &amp; Trade Crypto
                            </h1>
                            <a
                                href="#"
                                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Start Earning
                            </a>
                            <figure className="relative z-10 mt-12 text-center">
                                <img
                                    src="../img/hero/hero_crypto_trading.png"
                                    className="relative z-10 -ml-16 inline-block"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-1/2 h-[364px] w-[364px] -translate-x-1/2 overflow-hidden rounded-[1.875rem] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
                                    <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] -rotate-45 animate-gradientDiagonal" />
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                                className="fill-jacarta-700 dark:fill-jacarta-900"
                            />
                        </svg>
                    </div>
                </section>
                {/* end hero */}
                {/* Crypto Prices */}
                <section className="bg-jacarta-700 pb-24 pt-32 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="scrollbar-custom overflow-x-auto">
                            <div className="rounded-lg bg-white dark:bg-jacarta-700 dark:text-jacarta-300">
                                <div className="flex items-center border-b border-jacarta-100 text-sm dark:border-jacarta-600">
                                    <div className="hidden w-[6%] pl-4 sm:block lg:pl-10">#</div>
                                    <div className="w-[36%] px-3 py-5">Name</div>
                                    <div className="w-[24%] px-3 py-5 text-right lg:w-[16%]">Price</div>
                                    <div className="hidden w-1/5 px-3 py-5 text-right md:block">Volume (24h)</div>
                                    <div className="w-[16%] px-3 py-5 text-right lg:w-[12%]">Change (24h)</div>
                                    <div className="w-[10%] py-5 pl-3 pr-4 text-right">Trade</div>
                                </div>
                                <div
                                    id="js-crypto-prices"
                                    className="divide-y divide-jacarta-100 dark:divide-jacarta-600"
                                />
                                <div className="border-t border-jacarta-100 px-4 pt-4 pb-8 text-center dark:border-jacarta-600">
                                    <a href="#" className="inline-flex items-center justify-center text-sm text-accent">
                                        View more markets
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-rotate ml-2 fill-accent"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end crypto prices */}
                {/* Stats */}
                <section className="bg-light-base py-24 pb-14 dark:bg-jacarta-700">
                    <div className="container">
                        <div className="md:flex md:flex-nowrap md:space-x-6">
                            <div className="mb-10 text-center md:w-1/3">
                                <span className="mb-3 block font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    $159B
                                </span>
                                <span className="text-lg dark:text-jacarta-300">Quarterly volume traded</span>
                            </div>
                            <div className="mb-10 text-center md:w-1/3">
                                <span className="mb-3 block font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    100+
                                </span>
                                <span className="text-lg dark:text-jacarta-300">Countries supported</span>
                            </div>
                            <div className="text-center md:w-1/3">
                                <span className="mb-3 block font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    108M+
                                </span>
                                <span className="text-lg dark:text-jacarta-300">Verified users</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end stats */}
                {/* Features */}
                <section className="relative pt-24 pb-10 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="lg:flex lg:flex-nowrap">
                            {/* Image */}
                            <div className="mb-16 lg:w-1/2 lg:pr-20">
                                <img
                                    src="../img/crypto-trading/crypto_trading_feature.jpg"
                                    alt=""
                                    loading="lazy"
                                    className="rounded-2.5xl"
                                />
                            </div>
                            {/* Info */}
                            <div className="mb-16 lg:w-1/2 lg:pl-5">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                                    Create your cryptocurrency portfolio today
                                </h2>
                                <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
                                    Start your first trade with these easy steps.
                                </p>
                                <div className="mb-6 flex space-x-6">
                                    <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-jacarta-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 fill-accent"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm-1 8V7H4v6h2zm2-6v6h3v-2h2v2h3V7H8zm10 6h2V7h-2v6zM9 3v2h6V3H9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                                            Verify your identity
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            Complete the identity verification process to secure your account and
                                            transactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-6 flex space-x-6">
                                    <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-jacarta-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 fill-accent"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                                            Fund your account
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            Add funds to your crypto account to start trading crypto. You can add funds
                                            with a variety of payment methods.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-6 flex space-x-6">
                                    <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl dark:bg-jacarta-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 fill-accent"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 10v4h2v-4H7zm4-6v10h2V7h-2zm4 3v7h2v-7h-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-2 block font-display text-xl font-semibold text-jacarta-700 dark:text-white">
                                            Start trading
                                        </h3>
                                        <p className="dark:text-jacarta-300">
                                            Complete the identity verification process to secure your account and
                                            transactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end features */}
                {/* Invest */}
                <section className="relative bg-light-base py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Invest and earn
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                Simple &amp; Secure. Search popular coins and start earning
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/btc.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        BTC
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.64%-71.53%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/usdt.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        USDT
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.60%-201.77%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/eth.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        ETH
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.31%-184.44%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/bnb.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        BNB
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.35%-60.96%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/xrp.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        XRP
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.30%-180.44%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/ada.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        ADA
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">1.48%-93.33%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/sol.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        SOL
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">2.67%-112.70%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/dot.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        DOT
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">1.05%-177.23%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/matic.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        MATIC
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">2.00%-215.36%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/doge.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        DOGE
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.60%-69.53%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/xmr.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        XMR
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.65%-72.53%</span> APR
                                    </span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700"
                            >
                                <figure className="mr-4 shrink-0">
                                    <img
                                        src="../img/crypto-trading/link.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 rounded-2lg"
                                        loading="lazy"
                                    />
                                </figure>
                                <div>
                                    <span className="block font-display font-semibold text-jacarta-700 dark:text-white">
                                        LINK
                                    </span>
                                    <span className="text-sm dark:text-jacarta-300">
                                        <span className="text-green">0.67%-58.48%</span> APR
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="mt-10 text-center">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Start Earning
                            </a>
                        </div>
                    </div>
                </section>
                {/* end invest */}
                {/* Process / CTA */}
                <section className="py-24 dark:bg-jacarta-800">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-xl text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Get started in a few minutes
                            </h2>
                            <p className="text-lg dark:text-jacarta-300">
                                Supports a variety of the most popular digital currencies.
                            </p>
                        </div>
                        <div className="mb-20 lg:flex lg:flex-nowrap lg:space-x-8">
                            <div className="relative mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700 lg:w-1/3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={48}
                                    height={48}
                                    className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <span className="mb-2 inline-block text-2xs font-medium text-accent">Step 01</span>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    Create an account
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein.
                                </p>
                                <div className="absolute -bottom-6 left-1/2 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-light-base dark:bg-jacarta-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={20}
                                        height={20}
                                        className="h-rotate fill-accent dark:fill-accent-lighter"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700 lg:w-1/3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={48}
                                    height={48}
                                    className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="mb-2 inline-block text-2xs font-medium text-accent">Step 02</span>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    Link your bank account
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein.
                                </p>
                                <div className="absolute -bottom-6 left-1/2 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-light-base dark:bg-jacarta-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={20}
                                        height={20}
                                        className="h-rotate fill-accent dark:fill-accent-lighter"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mb-12 rounded-2.5xl border border-jacarta-100 bg-white p-12 transition-shadow hover:shadow-xl dark:border-jacarta-700 dark:bg-jacarta-700 lg:w-1/3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={48}
                                    height={48}
                                    className="absolute top-5 right-5 fill-accent/25 dark:fill-accent/50"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625L6 10.071A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                                </svg>
                                <span className="mb-2 inline-block text-2xs font-medium text-accent">Step 03</span>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    Start buying &amp; selling
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you&apos;ve set up your wallet of choice, connect it to OpenSeaby clicking the
                                    NFT Marketplacein.
                                </p>
                                <div className="absolute -bottom-6 left-1/2 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-light-base dark:bg-jacarta-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={20}
                                        height={20}
                                        className="h-rotate fill-accent dark:fill-accent-lighter"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
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
                                        Earn up to $13 worth of crypto
                                    </h2>
                                    <p className="text-lg leading-normal dark:text-jacarta-300">
                                        Discover how specific cryptocurrencies work — and get a bit of each crypto to
                                        try out for yourself.
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
                </section>
                {/* end process / cta */}
                {/* Partners */}
                <div className="bg-light-base dark:bg-jacarta-700">
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

Home11Page.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { Home11Page };
