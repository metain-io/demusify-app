const Home10Page = () => {
    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900" itemScope itemType="http://schema.org/WebPage">
            {/* Header */}
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <div className="flex items-center px-6 py-6 xl:px-24">
                    {/* Logo */}
                    <a href="index.html" className="shrink-0">
                        <img src="../img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                        <img
                            src="../img/logo_white.png"
                            className="hidden max-h-7 dark:block"
                            alt="Xhibiter | NFT Marketplace"
                        />
                    </a>
                    {/* Search */}
                    <form action="search" className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                        <input
                            type="search"
                            className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                            placeholder="Search"
                        />
                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                            </svg>
                        </span>
                    </form>
                    {/* Menu / Actions */}
                    <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                        {/* Mobile Logo / Menu Close */}
                        <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
                            {/* Mobile Logo */}
                            <a href="index.html" className="shrink-0">
                                <img
                                    src="../img/logo.png"
                                    className="max-h-7 dark:hidden"
                                    alt="Xhibiter | NFT Marketplace"
                                />
                                <img
                                    src="../img/logo_white.png"
                                    className="hidden max-h-7 dark:block"
                                    alt="Xhibiter | NFT Marketplace"
                                />
                            </a>
                            {/* Mobile Menu Close */}
                            <button
                                className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                                aria-label="close mobile menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Search */}
                        <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
                            <input
                                type="search"
                                className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                                placeholder="Search"
                            />
                            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                </svg>
                            </span>
                        </form>
                        {/* Primary Nav */}
                        <nav className="navbar w-full">
                            <ul className="flex flex-col lg:flex-row">
                                <li className="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                        id="navDropdown-1"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Home
                                        <i className="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="index.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 1
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="index-rtl.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 1 RTL
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-2.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 2
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-3.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 3
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-4.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 4
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-5.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 5
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-6.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Home 6
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-7.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Crypto Consultant
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-8.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    NFT Game
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-9.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    DAO Platform
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-10.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-accent">
                                                    Crypto App
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-11.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Crypto Trading
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="home-12.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    ICO Landing
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                        id="navDropdown-2"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Pages
                                        <i className="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-2"
                                    >
                                        <li>
                                            <a
                                                href="maintenance.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Maintenance
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="case-studies.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Case Studies
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="single-case-study.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Single Case Study
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="careers.html"
                                                className="flex items-center justify-between rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-4 font-display text-sm text-jacarta-700 dark:text-white">
                                                    Careers
                                                </span>
                                                <span className="rounded bg-green py-1 px-2 text-xxs font-bold uppercase leading-none text-white">
                                                    new
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="item.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Item Details
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Explore Collections
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collection.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Collection
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="activity.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Activity
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="rankings.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Rankings
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="user.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    User
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="edit-profile.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Edit Profile
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    About
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="contact.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Contact
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="wallet.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Wallet
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="login.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Login
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="404.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Page 404
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="tos.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Terms of Service
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="js-nav-dropdown nav-item dropdown group relative">
                                    <a
                                        href="collections.html"
                                        className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                        id="navDropdown-3"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Explore
                                        <i className="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-1"
                                    >
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-light-base p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-jacarta-700"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    All NFTs
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#E4FCF4] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#10B981]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Art
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#FDF7EE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#FEB240]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Collectibles
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#F2EEFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#8358FF]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Domain Names
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#FFEEFA] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#F35BC7]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Music
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#EAF2FE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#428AF8]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Photography
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#EBEDFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#737EF2]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Sports
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#F5FFED] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#8DD059]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Trading Cards
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#FFEEEE] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#EF3D3D]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Utility
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="collections.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="mr-3 rounded-xl bg-[#EEFCFF] p-[0.375rem]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-4 w-4 fill-[#46C7E3]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                    </svg>
                                                </span>
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Virtual Worlds
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="js-nav-dropdown group relative">
                                    <a
                                        href="#"
                                        className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                        id="navDropdown-4"
                                        aria-expanded="false"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Resources
                                        <i className="lg:hidden">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 dark:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                            </svg>
                                        </i>
                                    </a>
                                    <ul
                                        className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                                        aria-labelledby="navDropdown-4"
                                    >
                                        <li>
                                            <a
                                                href="help-center.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Help Center
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="platform-status.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Platform Status
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="partners.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Partners
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Blog
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="single-post.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Single Post
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="newsletter.html"
                                                className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                            >
                                                <span className="font-display text-sm text-jacarta-700 dark:text-white">
                                                    Newsletter
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="group">
                                    <a
                                        href="create.html"
                                        className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5"
                                    >
                                        Create
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* Mobile Connect Wallet / Socials */}
                        <div className="mt-10 w-full lg:hidden">
                            <a
                                href="#"
                                className="js-wallet block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                            >
                                Connect Wallet
                            </a>
                            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                            {/* Socials */}
                            <div className="flex items-center justify-center space-x-5">
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* Actions */}
                        <div className="ml-8 hidden lg:flex xl:ml-12">
                            {/* Wallet */}
                            <a
                                href="#"
                                className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                                data-bs-toggle="modal"
                                data-bs-target="#walletModal"
                                aria-label="wallet"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                                </svg>
                            </a>
                            {/* Profile */}
                            <div className="js-nav-dropdown group-dropdown relative">
                                <button
                                    className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                                    id="profileDropdown"
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown"
                                    aria-label="profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                    </svg>
                                </button>
                                <div
                                    className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                                    aria-labelledby="profileDropdown"
                                >
                                    <button
                                        className="js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display leading-none text-jacarta-700 dark:text-white"
                                        data-tippy-content="Copy"
                                    >
                                        <span className="max-w-[10rem] overflow-hidden text-ellipsis">
                                            0x7a86c0b064171007716bbd6af96676935799a63e
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                                        </svg>
                                    </button>
                                    <div className="mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600">
                                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">
                                            Balance
                                        </span>
                                        <div className="flex items-center">
                                            <svg
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x={0}
                                                y={0}
                                                viewBox="0 0 1920 1920"
                                                xmlSpace="preserve"
                                                className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
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
                                            <span className="text-lg font-bold text-green">10 ETH</span>
                                        </div>
                                    </div>
                                    <a
                                        href="user.html"
                                        className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                                            My Profile
                                        </span>
                                    </a>
                                    <a
                                        href="edit-profile.html"
                                        className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                                            Edit Profile
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width={24}
                                            height={24}
                                            className="h-4 w-4 fill-jacarta-700 transition-colors dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                                        </svg>
                                        <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                                            Sign out
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Dark Mode */}
                            <a
                                href="#"
                                className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Mobile Menu Actions */}
                    <div className="ml-auto flex lg:hidden">
                        {/* Profile */}
                        <a
                            href="edit-profile.html"
                            className="group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            aria-label="profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                            </svg>
                        </a>
                        {/* Dark Mode */}
                        <a
                            href="#"
                            className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                            </svg>
                        </a>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent"
                            aria-label="open mobile menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
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
                                    <a href="collection.html" className="text-sm text-accent">
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
                                    By checking this box, I agree to Xhibiter's{' '}
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
                                    By checking this box, I agree to Xhibiter's{' '}
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
            {/* Footer */}
            <footer className="page-footer bg-white dark:bg-jacarta-900">
                <div className="container">
                    <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
                        <div className="col-span-full sm:col-span-3 md:col-span-4">
                            {/* Logo */}
                            <a href="index.html" className="mb-6 inline-block">
                                <img
                                    src="../img/logo.png"
                                    className="max-h-7 dark:hidden"
                                    alt="Xhibiter | NFT Marketplace"
                                />
                                <img
                                    src="../img/logo_white.png"
                                    className="hidden max-h-7 dark:block"
                                    alt="Xhibiter | NFT Marketplace"
                                />
                            </a>
                            <p className="mb-12 dark:text-jacarta-300">
                                Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                            </p>
                            {/* Socials */}
                            <div className="flex space-x-5">
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="discord"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                    >
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </a>
                                <a href="#" className="group">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="tiktok"
                                        className="h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">Marketplace</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        All NFTs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Art
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Music
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Domain Names
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Collectibles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Virtual World
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">Company</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Explore
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Our Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-3 md:col-span-2">
                            <h3 className="mb-6 font-display text-sm text-jacarta-700 dark:text-white">My Account</h3>
                            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Authors
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Collection
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Author Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-accent dark:hover:text-white">
                                        Create Item
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
                        <span className="text-sm dark:text-jacarta-400">
                            © Xhibiter — Made by
                            <a href="https://deothemes.com" className="hover:text-accent">
                                DeoThemes
                            </a>
                        </span>
                        <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400">
                            <li>
                                <a href="#" className="hover:text-accent">
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent">
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home10Page;
