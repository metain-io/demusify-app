import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const AboutPage = () => {
    return (
        <main>
            {/* Page title */}
            <section className="relative pt-24 lg:pb-96">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    {/* Page Title */}
                    <div className="mx-auto max-w-2xl py-16 text-center">
                        <h1 className="mb-8 font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                            About Xhibiter
                        </h1>
                        <p className="text-lg leading-normal dark:text-jacarta-300">
                            Every digital creation available through MakersPlace is an authentic and truly unique
                            digital creation, signed and issued by the creator — made possible by blockchain technology.
                        </p>
                    </div>
                </div>
            </section>
            {/* Intro / Statistics */}
            <section className="pb-24">
                <div className="container">
                    {/* Video Lightbox */}
                    <figure className="relative mt-16 overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25 lg:-mt-96">
                        <img src="../img/about/video_cover.jpg" className="w-full" alt="video" />
                        <a
                            href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            data-bs-toggle="modal"
                            data-bs-target=".video-lightbox"
                            className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-24 w-24 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
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
                    </figure>
                    {/* Statistics */}
                    <div className="pt-24">
                        <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            Numbers Speak
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="mb-10 text-center">
                                <span className="block font-display text-5xl text-jacarta-700 dark:text-white">
                                    2019
                                </span>
                                <span className="block dark:text-jacarta-300">Founded</span>
                            </div>
                            <div className="mb-10 text-center">
                                <span className="block font-display text-5xl text-jacarta-700 dark:text-white">
                                    $178M
                                </span>
                                <span className="block dark:text-jacarta-300">Trading volume</span>
                            </div>
                            <div className="mb-10 text-center">
                                <span className="block font-display text-5xl text-jacarta-700 dark:text-white">
                                    305K
                                </span>
                                <span className="block dark:text-jacarta-300">NFTs created</span>
                            </div>
                            <div className="mb-10 text-center">
                                <span className="block font-display text-5xl text-jacarta-700 dark:text-white">
                                    1.6M
                                </span>
                                <span className="block dark:text-jacarta-300">Total users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end intro / statistics */}
            {/* Story */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="lg:flex lg:justify-between">
                        {/* Image */}
                        <div className="lg:w-[55%]">
                            <div className="relative">
                                <svg
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto mt-8 w-[80%] rotate-[8deg]"
                                >
                                    <defs>
                                        <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                                            <path
                                                d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                                                fill="#9446ED"
                                            />
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#clipping)">
                                        {/* Bg image */}
                                        <image
                                            href="../img/about/story.jpg"
                                            width={200}
                                            height={200}
                                            clipPath="url(#clipping)"
                                        />
                                    </g>
                                </svg>
                                <img src="../img/hero/3D_elements.png" alt="" className="absolute top-0 animate-fly" />
                            </div>
                        </div>
                        {/* Info */}
                        <div className="py-20 lg:w-[45%] lg:pl-16">
                            <h2 className="mb-6 font-display text-2xl text-jacarta-700 dark:text-white">
                                Get Experience. We're A Results Driven Team.
                            </h2>
                            <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam
                            </p>
                            <p className="mb-10 dark:text-jacarta-300">
                                Every digital creation available through MakersPlace is an authentic and truly unique
                                digital creation, signed and issued by the creator — made possible by blockchain
                                technology. Even if the digital creation is copied, it won't be the authentic and
                                originally signed version.
                            </p>
                            <div className="flex space-x-4 sm:space-x-10">
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
                                        <span className="block font-display text-xl text-jacarta-700 dark:text-white">
                                            11,2k+
                                        </span>
                                        <span className="text-jacarta-700 dark:text-jacarta-300">
                                            Products launched
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
                                        <span className="block font-display text-xl text-jacarta-700 dark:text-white">
                                            99,7%
                                        </span>
                                        <span className="text-jacarta-700 dark:text-jacarta-300">
                                            Satisfaction Rate
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end story */}
            {/* Team */}
            <section className="py-24">
                <div className="container">
                    <h2 className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        Meet Our Amazing Team
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
                        <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                            <img
                                src="../img/team/team_1.jpg"
                                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                alt="team"
                            />
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Alex Grey</h3>
                            <span className="text-2xs font-medium tracking-tight text-jacarta-400">CEO, Director</span>
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
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Ashton Kutsher</h3>
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
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Camille Alforque</h3>
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
                        <div className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                            <img
                                src="../img/team/team_6.jpg"
                                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                alt="team"
                            />
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Nathaniel Ragpa</h3>
                            <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                Front-end Developer
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
                                src="../img/team/team_7.jpg"
                                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                alt="team"
                            />
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Linda Brown</h3>
                            <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                Marketing Officer
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
                                src="../img/team/team_8.jpg"
                                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                alt="team"
                            />
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Gavin Silberman</h3>
                            <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                Designer &amp; Investor
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
                                src="../img/team/team_9.jpg"
                                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl"
                                alt="team"
                            />
                            <h3 className="font-display text-md text-jacarta-700 dark:text-white">Masha Smith</h3>
                            <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                                VP Communications
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
                        <a
                            href="careers.html"
                            className="flex items-center justify-center rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <span className="font-display text-md text-jacarta-700 dark:text-white">Join us!</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* end team */}
            {/* Partners */}
            <div className="container">
                <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
                    <a href="#">
                        <img src="../img/partners/partner_logo_1.png" alt="partner 1" />
                    </a>
                    <a href="#">
                        <img src="../img/partners/partner_logo_2.png" alt="partner 2" />
                    </a>
                    <a href="#">
                        <img src="../img/partners/partner_logo_3.png" alt="partner 3" />
                    </a>
                    <a href="#">
                        <img src="../img/partners/partner_logo_4.png" alt="partner 4" />
                    </a>
                    <a href="#">
                        <img src="../img/partners/partner_logo_5.png" alt="partner 5" />
                    </a>
                </div>
            </div>
            {/* Latest Posts */}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h2 className="mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        You Might Have Read About Us In The News
                    </h2>
                    <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                        <article>
                            <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                                <figure className="group overflow-hidden">
                                    <a href="single-post.html">
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
                                        <a href="single-post.html"> Mint your own Tezos collections </a>
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
                                    <a href="single-post.html">
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
                                        <a href="single-post.html">List your collection for secondary sales</a>
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
                                    <a href="single-post.html">
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
                                        <a href="single-post.html">The biggest moves in NFTs, Bitcoin, crypto rules</a>
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
                    </div>
                </div>
            </section>
            {/* end latest posts */}
        </main>
    );
};

AboutPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { AboutPage };
