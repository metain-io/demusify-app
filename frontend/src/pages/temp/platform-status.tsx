const PlatformStatusPage = () => {
    return (
        <div className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900" itemScope itemType="http://schema.org/WebPage">
            <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
                <div className="container">
                    <div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
                        {/* Logo */}
                        <a href="index.html" className="shrink-0 lg:mr-14">
                            <img src="../img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                            <img
                                src="../img/logo_white.png"
                                className="hidden max-h-7 dark:block"
                                alt="Xhibiter | NFT Marketplace"
                            />
                        </a>
                        <span className="mt-1 hidden font-display text-lg font-semibold lg:inline-block">Status</span>
                        <a
                            href="#"
                            className="ml-auto inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        >
                            <span className="hidden lg:block">Subscribe to Updates</span>
                            <span className="lg:hidden">Subscribe</span>
                        </a>
                    </div>
                </div>
            </header>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-24 after:absolute after:inset-0 after:bg-jacarta-900/60 md:py-32"
                    style={{ backgroundImage: 'url("../img/page-title/knowledge_base_banner.jpg")' }}
                >
                    <div className="container relative z-10">
                        <h1 className="text-center font-display text-4xl font-medium text-white">
                            Xhibiter System Status
                        </h1>
                    </div>
                </section>
                {/* Platform Status */}
                <section className="relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="mx-auto max-w-[53.125rem]">
                            <div className="mb-16 rounded-lg bg-green p-4 font-display text-md font-medium text-white">
                                <span>All Systems Operational</span>
                            </div>
                            {/* Table */}
                            <div className="mb-14 divide-y divide-jacarta-100 overflow-hidden rounded-lg border border-jacarta-100 bg-white dark:divide-jacarta-600 dark:border-jacarta-600 dark:bg-jacarta-700">
                                <div className="flex items-center justify-between py-4 px-5">
                                    <span className="font-medium text-jacarta-700 dark:text-white">API</span>
                                    <span className="text-green">Operational</span>
                                </div>
                                <div className="flex items-center justify-between py-4 px-5">
                                    <span className="font-medium text-jacarta-700 dark:text-white">
                                        Desktop Application
                                    </span>
                                    <span className="text-green">Operational</span>
                                </div>
                                <div className="flex items-center justify-between py-4 px-5">
                                    <span className="font-medium text-jacarta-700 dark:text-white">Website</span>
                                    <span className="text-green">Operational</span>
                                </div>
                                <div className="flex items-center justify-between py-4 px-5">
                                    <span className="font-medium text-jacarta-700 dark:text-white">
                                        Mobile Application
                                    </span>
                                    <span className="text-orange-bright">Active Incident</span>
                                </div>
                                <div className="flex items-center justify-between py-4 px-5">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-medium text-jacarta-700 dark:text-white">
                                            Support Services
                                        </span>
                                        <span
                                            className="inline-block"
                                            data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="text-green">Operational</span>
                                </div>
                                <div className="flex items-center justify-between py-4 px-5">
                                    <span className="font-medium text-jacarta-700 dark:text-white">Emails</span>
                                    <span className="text-green">Operational</span>
                                </div>
                            </div>
                            <h2 className="mb-6 font-display text-xl text-jacarta-700 dark:text-white">
                                Past Incidents
                            </h2>
                            <div className="mb-8">
                                <div className="mb-4 border-b border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white">
                                    Apr 8, 2022
                                </div>
                                <p className="dark:text-jacarta-300">No incidents reported today.</p>
                            </div>
                            <div className="mb-8">
                                <div className="mb-4 border-b border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white">
                                    Apr 7, 2022
                                </div>
                                <p className="dark:text-jacarta-300">No incidents reported today.</p>
                            </div>
                            <div className="mb-8">
                                <div className="mb-4 border-b border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white">
                                    Apr 6, 2022
                                </div>
                                <p className="dark:text-jacarta-300">No incidents reported today.</p>
                            </div>
                            <div className="mb-8">
                                <div className="mb-4 border-b border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white">
                                    Apr 5, 2022
                                </div>
                                <p className="mb-4 font-medium text-orange-bright">Database connectivity issues</p>
                                <div className="mb-6">
                                    <p className="dark:text-jacarta-300">
                                        <strong className="text-jacarta-700 dark:text-white">Resolved</strong> - This
                                        incident has been resolved.
                                    </p>
                                    <time className="text-sm dark:text-jacarta-300">Apr 5, 16:53 UTC</time>
                                </div>
                                <div className="mb-6">
                                    <p className="dark:text-jacarta-300">
                                        <strong className="text-jacarta-700 dark:text-white">In progress</strong> -
                                        Scheduled maintenance is currently in progress. We will provide updates as
                                        necessary.
                                    </p>
                                    <time className="text-sm dark:text-jacarta-300">Apr 5, 16:52 UTC</time>
                                </div>
                                <div className="mb-6">
                                    <p className="dark:text-jacarta-300">
                                        <strong className="text-jacarta-700 dark:text-white">Investigating</strong> - We
                                        are experiencing intermittent database connectivity issues. The team is
                                        currently investigating.
                                    </p>
                                    <time className="text-sm dark:text-jacarta-300">Apr 5, 16:45 UTC</time>
                                </div>
                            </div>
                            <div className="mb-8">
                                <div className="mb-4 border-b border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white">
                                    Apr 4, 2022
                                </div>
                                <p className="dark:text-jacarta-300">No incidents reported today.</p>
                            </div>
                            <div className="mt-12 flex items-center justify-between border-t border-jacarta-100 pt-4 text-2xs dark:border-jacarta-600">
                                <a href="#" className="flex items-center space-x-1 text-blue">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        className="h-rotate h-4 w-4 fill-current"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                                    </svg>
                                    <span>Incident History</span>
                                </a>
                                <a href="https://deothemes.com" className="hover:text-blue dark:text-jacarta-300">
                                    Powered by DeoThemes
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end platform status */}
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
                                <span className="font-display font-semibold text-jacarta-700 dark:text-white">
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
                            <a href="https://deothemes.com" className="hover:text-accent dark:hover:text-white">
                                DeoThemes
                            </a>
                        </span>
                        <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400">
                            <li>
                                <a href="#" className="hover:text-accent dark:hover:text-white">
                                    Terms and conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-accent dark:hover:text-white">
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

export default PlatformStatusPage;
