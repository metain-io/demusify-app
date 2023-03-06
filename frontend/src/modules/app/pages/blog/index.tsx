import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const BlogPage = () => {
    return (
        <>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Blog */}
                <section className="relative py-16 md:py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        {/* Featured Post */}
                        <article className="mb-[1.875rem] md:mb-16">
                            <div className="flex flex-col overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg md:flex-row">
                                <figure className="group overflow-hidden md:w-1/2">
                                    <a href="single-post">
                                        <img
                                            src="../img/blog/post_1.jpg"
                                            alt="post 1"
                                            className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                        />
                                    </a>
                                </figure>
                                {/* Body */}
                                <div className="rounded-b-[1.25rem] border border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                                    {/* Meta */}
                                    <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                        <a
                                            href="#"
                                            className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                        >
                                            Deothemes
                                        </a>
                                        <span className="dark:text-jacarta-400">in</span>
                                        <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                            <a href="#">NFT's</a>
                                            <a href="#">DIGITAL ART</a>
                                        </span>
                                    </div>
                                    <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl">
                                        <a href="single-post"> List your collection for secondary sales </a>
                                    </h2>
                                    <p className="mb-8 dark:text-jacarta-200">
                                        Since we launched Tezos at the end of 2021, many awesome creators...
                                    </p>
                                    {/* Date / Time */}
                                    <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                        <span>
                                            <time dateTime="2022-02-05">5 Feb</time>
                                        </span>
                                        <span>•</span>
                                        <span>3 min read</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                            {/* Posts */}
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_2.jpg"
                                                alt="post 2"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post"> Mint your own Tezos collections </a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">5 Feb</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_3.jpg"
                                                alt="post 3"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">List your collection for secondary sales</a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">22 Feb</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_4.jpg"
                                                alt="post 4"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">The biggest moves in NFTs, Bitcoin, crypto rules</a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">18 Jan</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_5.jpg"
                                                alt="post 5"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">Incredible Amount of Developer Energy' in Web3</a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">15 Jan</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_6.jpg"
                                                alt="post 6"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">
                                                Inflation is up, it matters: High prices plague Biden's
                                            </a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">23 Dec</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                    <figure className="group overflow-hidden">
                                        <a href="single-post">
                                            <img
                                                src="../img/blog/post_7.jpg"
                                                alt="post 7"
                                                className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                            />
                                        </a>
                                    </figure>
                                    {/* Body */}
                                    <div className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                                        {/* Meta */}
                                        <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                                            <a
                                                href="#"
                                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                                            >
                                                Deothemes
                                            </a>
                                            <span className="dark:text-jacarta-400">in</span>
                                            <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                                <a href="#">NFT's</a>
                                                <a href="#">DIGITAL ART</a>
                                            </span>
                                        </div>
                                        <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                            <a href="single-post">What to do when the market is going everywhere</a>
                                        </h2>
                                        <p className="mb-8 dark:text-jacarta-200">
                                            Since we launched Tezos at the end of 2021, many awesome creators...
                                        </p>
                                        {/* Date / Time */}
                                        <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                                            <span>
                                                <time dateTime="2022-02-05">15 Dec</time>
                                            </span>
                                            <span>•</span>
                                            <span>3 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Load More */}
                        <div className="mt-10 text-center">
                            <a
                                href="blog"
                                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Load More
                            </a>
                        </div>
                    </div>
                </section>
                {/* end blog */}
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
        </>
    );
};

BlogPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { BlogPage };
