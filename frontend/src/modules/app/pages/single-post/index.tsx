import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const SinglePostPage = () => {
    return (
        <>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Post */}
                <section className="relative py-16 md:py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <header className="mx-auto mb-16 max-w-lg text-center">
                            <div className="mb-3 inline-flex flex-wrap items-center space-x-1 text-xs">
                                <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                    <a href="single-post">NFT&apos;s</a>
                                    <a href="single-post">DIGITAL ART</a>
                                </span>
                            </div>
                            <h1 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-5xl">
                                List your collection for secondary sales
                            </h1>
                            {/* Author */}
                            <div className="inline-flex items-center">
                                <img
                                    src="../img/blog/author.jpg"
                                    alt="author"
                                    className="mr-4 h-10 w-10 shrink-0 rounded-full"
                                />
                                <div className="text-left">
                                    <span className="text-2xs font-medium tracking-tight text-jacarta-700 dark:text-jacarta-200">
                                        Deothemes
                                    </span>
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
                        </header>
                        {/* Featured image */}
                        <figure className="mb-16">
                            <img
                                src="../img/blog/single_post_featured.jpg"
                                alt="post 1"
                                className="w-full rounded-2.5xl"
                            />
                        </figure>
                        {/* Article */}
                        <article className="mb-12">
                            {/* Content */}
                            <div className="article-content">
                                <p className="text-lg leading-normal">
                                    Since we launched Tezos at the end of 2021, many awesome creator. From a barely
                                    understood abbreviation (hello, right click savers!), it turned into a massive
                                    cultural phenomenon adopted by blue chip companies like Adidas and Twitter in a few
                                    short months.
                                </p>
                                <p>
                                    Just like the NFT space has grown, so has Rarible.com. What started with a few
                                    people in a café grew into a passionate team of over 100, and counting!
                                </p>
                                <p>
                                    And that team has been busy. In 2021, we&apos;ve shipped more features than ever
                                    before, scaled to a multi-chain platform with Flow and Tezos integrations, and
                                    watched our community soar on every social media channel.
                                </p>
                                <p>
                                    And of course, we couldn&apos;t have done it without you! You are creating Rarible
                                    day by day - by using the platform, requesting features, sharing your feedback,
                                    being as active and passionate as you are.
                                </p>
                                <h2 className="text-xl">A Picture is Worth a Thousand Words</h2>
                                <p>
                                    Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt, explicabo. Donec quam felis, ultricies nec,
                                    pellentesque eu, pretium quis, sem.
                                </p>
                                <div className="article-content-wide my-12 grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
                                    <img src="../img/blog/gallery_1.jpg" alt="gallery 1" className="rounded-2lg" />
                                    <img src="../img/blog/gallery_2.jpg" alt="gallery 2" className="rounded-2lg" />
                                </div>
                                <p>
                                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                    justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Lorem ipsum
                                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Aenean imperdiet. Etiam ultricies. Ut enim.
                                </p>
                                <blockquote className="!my-10 text-xl italic text-jacarta-700 dark:text-white">
                                    “Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                                    faucibus. Nullam quis.”
                                    <cite className="mt-3 block text-2xs not-italic tracking-tight text-jacarta-400">
                                        — Vincent De Paul
                                    </cite>
                                </blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Aenean imperdiet. Etiam ultricies. Ut enim.
                                </p>
                            </div>
                        </article>
                        <div className="mx-auto max-w-[48.125rem]">
                            {/* Share */}
                            <div className="mb-16 flex items-center">
                                <span className="mr-4 text-sm font-bold dark:text-jacarta-300">Share:</span>
                                <div className="flex space-x-2">
                                    <a
                                        href="#"
                                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="facebook"
                                            className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:test@gmail.com"
                                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="email"
                                            className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* Author */}
                            <div className="mb-16 flex rounded-2.5xl border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                                <img
                                    src="../img/blog/author_large.jpg"
                                    alt="author"
                                    className="mr-4 h-16 w-16 shrink-0 self-start rounded-lg md:mr-8 md:h-[9rem] md:w-[9rem]"
                                />
                                <div>
                                    <span className="mb-3 mt-2 block font-display text-base text-jacarta-700 dark:text-white">
                                        DeoThemes
                                    </span>
                                    <p className="mb-4 dark:text-jacarta-300">
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
                                        penatibus et magnis dis parturient montes.
                                    </p>
                                    <div className="flex space-x-5">
                                        <a href="#" className="group">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="facebook"
                                                className="h-4 w-4 fill-jacarta-400 group-hover:fill-accent dark:group-hover:fill-white"
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
                                                className="h-4 w-4 fill-jacarta-400 group-hover:fill-accent dark:group-hover:fill-white"
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
                                                className="h-4 w-4 fill-jacarta-400 group-hover:fill-accent dark:group-hover:fill-white"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 640 512"
                                            >
                                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Related */}
                            <h2 className="mb-8 font-display text-3xl text-jacarta-700 dark:text-white">
                                Related Posts
                            </h2>
                            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
                                {/* Posts */}
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
                                                    <a href="#">NFT&apos;s</a>
                                                    <a href="#">DIGITAL ART</a>
                                                </span>
                                            </div>
                                            <h2 className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                                                <a href="single-post">
                                                    Inflation is up, it matters: High prices plague Biden&apos;s
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
                                                    <a href="#">NFT&apos;s</a>
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
                        </div>
                        {/* end related */}
                    </div>
                </section>
                {/* end post */}
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
        </>
    );
};

SinglePostPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { SinglePostPage };
