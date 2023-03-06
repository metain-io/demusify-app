import { MainLayout4 } from '@modules/app/layouts';
import { ReactElement } from 'react';

const Home3Page = () => {
    return (
        <>
            <main>
                {/* Hero Slider */}
                <section className="relative h-screen">
                    <div className="swiper full-slider h-screen">
                        <div className="swiper-wrapper">
                            {/* Slides */}
                            <div className="swiper-slide after:absolute after:inset-0 after:bg-jacarta-900/60">
                                <div className="container relative z-10 h-full pt-40">
                                    <h2 className="font-display text-2xl font-semibold text-white">
                                        <a href="item">Portrait Gallery</a>
                                    </h2>
                                    <a href="user" className="text-2xs font-medium text-white">
                                        By 051_Hart
                                    </a>
                                </div>
                                <img
                                    src="../img/hero/hero_slide_1.jpg"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    alt="slide 1"
                                />
                            </div>
                            <div className="swiper-slide after:absolute after:inset-0 after:bg-jacarta-900/60">
                                <div className="container relative z-10 h-full pt-40">
                                    <h2 className="font-display text-2xl font-semibold text-white">
                                        <a href="item">Oceania \\ OVERSEER 017</a>
                                    </h2>
                                    <a href="user" className="text-2xs font-medium text-white">
                                        By THE OVERSEERS
                                    </a>
                                </div>
                                <img
                                    src="./../img/pixel.jpg"
                                    data-src="../img/hero/hero_slide_2.jpg"
                                    className="swiper-lazy absolute inset-0 h-full w-full object-cover"
                                    alt="slide 2"
                                />
                                <div className="swiper-lazy-preloader" />
                            </div>
                            <div className="swiper-slide after:absolute after:inset-0 after:bg-jacarta-900/60">
                                <div className="container relative z-10 h-full pt-40">
                                    <h2 className="font-display text-2xl font-semibold text-white">
                                        <a href="item">Shiba #368</a>
                                    </h2>
                                    <a href="user" className="text-2xs font-medium text-white">
                                        Generous Shiba Club
                                    </a>
                                </div>
                                <img
                                    src="./../img/pixel.jpg"
                                    data-src="../img/hero/hero_slide_3.jpg"
                                    className="swiper-lazy absolute inset-0 h-full w-full object-cover"
                                    alt="slide 3"
                                />
                                <div className="swiper-lazy-preloader" />
                            </div>
                            <div className="swiper-slide after:absolute after:inset-0 after:bg-jacarta-900/60">
                                <div className="container relative z-10 h-full pt-40">
                                    <h2 className="font-display text-2xl font-semibold text-white">
                                        <a href="item">Palettes of Aotearoa - The Place of greenstone #01</a>
                                    </h2>
                                    <a href="user" className="text-2xs font-medium text-white">
                                        LeeCookNZ
                                    </a>
                                </div>
                                <img
                                    src="./../img/pixel.jpg"
                                    data-src="../img/hero/hero_slide_4.jpg"
                                    className="swiper-lazy absolute inset-0 h-full w-full object-cover"
                                    alt="slide 4"
                                />
                                <div className="swiper-lazy-preloader" />
                            </div>
                        </div>
                    </div>
                    {/* end main slider */}
                    {/* Thumbs */}
                    <div className="absolute inset-x-0 bottom-12">
                        <div className="container">
                            <div className="swiper full-slider-thumbs">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide cursor-pointer rounded p-5">
                                        <img
                                            src="../img/hero/hero_slide_1_thumb.jpg"
                                            className="w-full rounded-lg"
                                            alt="thumb 1"
                                        />
                                        <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                                            <div className="progress absolute h-0.5 w-0 bg-accent" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide cursor-pointer rounded p-5">
                                        <img
                                            src="../img/hero/hero_slide_2_thumb.jpg"
                                            className="w-full rounded-lg"
                                            alt="thumb 2"
                                        />
                                        <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                                            <div className="progress absolute h-0.5 w-0 bg-accent" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide cursor-pointer rounded p-5">
                                        <img
                                            src="../img/hero/hero_slide_3_thumb.jpg"
                                            className="w-full rounded-lg"
                                            alt="thumb 3"
                                        />
                                        <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                                            <div className="progress absolute h-0.5 w-0 bg-accent" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide cursor-pointer rounded p-5">
                                        <img
                                            src="../img/hero/hero_slide_4_thumb.jpg"
                                            className="w-full rounded-lg"
                                            alt="thumb 4"
                                        />
                                        <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                                            <div className="progress absolute h-0.5 w-0 bg-accent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end thumbs slider */}
                </section>
                {/* end hero slider */}
                {/* Browse by Category */}
                <section className="py-24">
                    <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                        Browse by category
                    </h2>
                    {/* Slider */}
                    <div className="relative">
                        <div className="swiper centered-slider !pb-5">
                            <div className="swiper-wrapper">
                                {/* Slides */}
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-green">
                                                <img
                                                    src="./../img/categories/category_1.png"
                                                    alt="item 1"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Art
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-orange">
                                                <img
                                                    src="./../img/categories/category_2.png"
                                                    alt="item 2"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Collectibles
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-accent">
                                                <img
                                                    src="./../img/categories/category_3.png"
                                                    alt="item 2"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Domain Names
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-[#46C7E3]">
                                                <img
                                                    src="./../img/categories/category_4.png"
                                                    alt="item 1"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Virtual Worlds
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-[#737EF2]">
                                                <img
                                                    src="./../img/categories/category_5.png"
                                                    alt="item 1"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Sport
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-blue">
                                                <img
                                                    src="./../img/categories/category_6.png"
                                                    alt="item 2"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Photography
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                                <div className="swiper-slide">
                                    <article>
                                        <a
                                            href="collections"
                                            className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                                        >
                                            <figure className="rounded-t-[0.625rem] bg-[#F35BC7]">
                                                <img
                                                    src="./../img/categories/category_7.png"
                                                    alt="item 2"
                                                    className="w-full rounded-[0.625rem]"
                                                    loading="lazy"
                                                />
                                            </figure>
                                            <div className="mt-4 text-center">
                                                <span className="font-display text-lg text-jacarta-700 dark:text-white">
                                                    Music
                                                </span>
                                            </div>
                                        </a>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end browse by category */}
                {/* Hot Bids */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            <span
                                className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                                style={{
                                    backgroundImage:
                                        'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png)',
                                }}
                            />
                            Hot Bids
                        </h2>
                        <div className="relative">
                            {/* Slider */}
                            <div className="swiper card-slider-4-columns !py-5">
                                <div className="swiper-wrapper">
                                    {/* Slides */}
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure>
                                                    <a href="item">
                                                        <img
                                                            src="./../img/products/item_1.jpg"
                                                            alt="item 1"
                                                            width={230}
                                                            height={230}
                                                            className="w-full rounded-[0.625rem]"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            ETH Me Outside
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            1.55 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        1.3 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">159</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure>
                                                    <a href="item">
                                                        <img
                                                            src="./../img/products/item_2.jpg"
                                                            alt="item 2"
                                                            width={230}
                                                            height={230}
                                                            className="w-full rounded-[0.625rem]"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            Lazyone Panda
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            2 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        0.001 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">75</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure>
                                                    <a href="item">
                                                        <img
                                                            src="./../img/products/item_6.jpg"
                                                            alt="item 6"
                                                            width={230}
                                                            height={230}
                                                            className="w-full rounded-[0.625rem]"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            Splendid Girl
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            5.1 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        4.7 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">253</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure>
                                                    <a href="item">
                                                        <img
                                                            src="./../img/products/item_4.jpg"
                                                            alt="item 4"
                                                            width={230}
                                                            height={230}
                                                            className="w-full rounded-[0.625rem]"
                                                            loading="lazy"
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            Amazing NFT art
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            7 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        1.2 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">324</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure className="relative">
                                                    <a href="item">
                                                        <img
                                                            src="./../img/pixel.jpg"
                                                            data-src="./../img/products/item_3.gif"
                                                            alt="item 3"
                                                            width={230}
                                                            height={230}
                                                            className="swiper-lazy w-full rounded-[0.625rem]"
                                                        />
                                                        <div className="swiper-lazy-preloader" />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            Portrait Gallery
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            0.7 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        0.05 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">54</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <figure className="relative">
                                                    <a href="item">
                                                        <img
                                                            src="./../img/pixel.jpg"
                                                            data-src="./../img/products/item_5.jpg"
                                                            alt="item 5"
                                                            width={230}
                                                            height={230}
                                                            className="swiper-lazy w-full rounded-[0.625rem]"
                                                        />
                                                        <div className="swiper-lazy-preloader" />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a href="item">
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            Flourishing Cat #180
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
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
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M959.8 80.7L420.1 976.3 959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                                                />
                                                                <path
                                                                    fill="#454A75"
                                                                    d="M959.8 1295.4l539.8-319.1L959.8 731z"
                                                                />
                                                                <path
                                                                    fill="#8A92B2"
                                                                    d="M420.1 1078.7l539.7 760.6v-441.7z"
                                                                />
                                                                <path
                                                                    fill="#62688F"
                                                                    d="M959.8 1397.6v441.7l540.1-760.6z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            3 ETH
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">Current Bid</span>
                                                    <span className="text-jacarta-700 dark:text-jacarta-100">
                                                        0.25 ETH
                                                    </span>
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <button
                                                        type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#placeBidModal"
                                                    >
                                                        Place bid
                                                    </button>
                                                    <div className="flex items-center space-x-1">
                                                        <span
                                                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                                            data-tippy-content="Favorite"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width={24}
                                                                height={24}
                                                                className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                                                            >
                                                                <path fill="none" d="M0 0H24V24H0z" />
                                                                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm dark:text-jacarta-200">125</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            {/* Slider Navigation */}
                            <div className="swiper-button-prev swiper-button-prev-1 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                </svg>
                            </div>
                            <div className="swiper-button-next swiper-button-next-1 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end hot bids */}
                {/* Today's Drops / Sellers / Buyers */}
                <section className="py-24">
                    <div className="container">
                        <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-7">
                            <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                                <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    Today's Drops
                                </h2>
                                <div className="flex flex-col space-y-5">
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_1.jpg"
                                                    alt="avatar 1"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    1
                                                </div>
                                                <div
                                                    className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                    data-tippy-content="Verified Collection"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-[.875rem] w-[.875rem] fill-white"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    NFT Funny Cat
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">7,080.95 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_2.jpg"
                                                    alt="avatar 2"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-sm text-white dark:border-jacarta-600">
                                                    2
                                                </div>
                                                <div
                                                    className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                    data-tippy-content="Verified Collection"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-[.875rem] w-[.875rem] fill-white"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Cryptopank
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">6,548,133 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_3.jpg"
                                                    alt="avatar 3"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    3
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Prince Ape Planet
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">4,823,927 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_4.jpg"
                                                    alt="avatar 4"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    4
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Hey Mrsmeseks
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">3,186 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="collection"
                                    className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                                >
                                    View All Drops
                                </a>
                            </div>
                            <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                                <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    Top Sellers
                                </h2>
                                <div className="flex flex-col space-y-5">
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_5.jpg"
                                                    alt="avatar 5"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    1
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Bored Bunny
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">3,027 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_6.gif"
                                                    alt="avatar 6"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    2
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Wow Frens
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">2,586 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_7.jpg"
                                                    alt="avatar 7"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    3
                                                </div>
                                                <div
                                                    className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                    data-tippy-content="Verified Collection"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-[.875rem] w-[.875rem] fill-white"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Origin Morish
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">2,347.85 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_8.jpg"
                                                    alt="avatar 8"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    4
                                                </div>
                                                <div
                                                    className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                    data-tippy-content="Verified Collection"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-[.875rem] w-[.875rem] fill-white"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Superdo
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">2,115.71 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="collection"
                                    className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                                >
                                    View All Sellers
                                </a>
                            </div>
                            <div className="rounded-2.5xl bg-light-base p-12 dark:bg-jacarta-800 lg:w-1/3">
                                <h2 className="mb-8 text-center font-display text-3xl font-semibold text-jacarta-700 dark:text-white">
                                    Top Buyers
                                </h2>
                                <div className="flex flex-col space-y-5">
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_9.jpg"
                                                    alt="avatar 9"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    1
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    NFT stars
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">2,027 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_10.jpg"
                                                    alt="avatar 10"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    2
                                                </div>
                                                <div
                                                    className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                                                    data-tippy-content="Verified Collection"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}
                                                        className="h-[.875rem] w-[.875rem] fill-white"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Asumitsu
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">1,989.70 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_11.jpg"
                                                    alt="avatar 11"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    3
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Pank Skull
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">1,726.70 ETH</span>
                                        </div>
                                    </div>
                                    <div className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                                        <figure className="mr-4 shrink-0">
                                            <a href="collection" className="relative block">
                                                <img
                                                    src="../img/avatars/avatar_12.jpg"
                                                    alt="avatar 12"
                                                    className="rounded-2lg"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white bg-jacarta-700 text-xs text-white dark:border-jacarta-600">
                                                    4
                                                </div>
                                            </a>
                                        </figure>
                                        <div>
                                            <a href="collection" className="block">
                                                <span className="font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white">
                                                    Lazy Panda
                                                </span>
                                            </a>
                                            <span className="text-sm dark:text-jacarta-300">1,589.03 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="collection"
                                    className="mt-8 block text-center text-sm font-bold tracking-tight text-accent"
                                >
                                    View All Buyers
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end today's drops / sellers / buyers */}
                {/* Featured collections */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            <span
                                className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                                style={{
                                    backgroundImage:
                                        'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png)',
                                }}
                            />
                            Featured collections
                        </h2>
                        <div className="relative">
                            {/* Slider */}
                            <div className="swiper collections-slider !py-5">
                                <div className="swiper-wrapper">
                                    {/* Slides */}
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <a href="collection" className="flex space-x-[0.625rem]">
                                                    <span className="w-[74.5%]">
                                                        <img
                                                            src="./../img/collections/collection_1_1.jpg"
                                                            alt="item 1"
                                                            className="h-full w-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                        <img
                                                            src="./../img/collections/collection_1_2.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_1_3.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_1_4.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <a
                                                    href="collection"
                                                    className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                                >
                                                    Art Me Outside
                                                </a>
                                                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                    <div className="flex flex-wrap items-center">
                                                        <a href="user" className="mr-2 shrink-0">
                                                            <img
                                                                src="../img/avatars/owner_5.png"
                                                                alt="owner"
                                                                className="h-5 w-5 rounded-full"
                                                            />
                                                        </a>
                                                        <span className="mr-1 dark:text-jacarta-400">by</span>
                                                        <a href="user" className="text-accent">
                                                            <span>Wow Frens</span>
                                                        </a>
                                                    </div>
                                                    <span className="text-sm dark:text-jacarta-300">10K Items</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <a href="collection" className="flex space-x-[0.625rem]">
                                                    <span className="w-[74.5%]">
                                                        <img
                                                            src="./../img/collections/collection_2_1.jpg"
                                                            alt="item 1"
                                                            className="h-full w-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                        <img
                                                            src="./../img/collections/collection_2_2.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_2_3.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_2_4.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <a
                                                    href="collection"
                                                    className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                                >
                                                    PankySkal
                                                </a>
                                                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                    <div className="flex flex-wrap items-center">
                                                        <a href="user" className="mr-2 shrink-0">
                                                            <img
                                                                src="../img/avatars/owner_9.png"
                                                                alt="owner"
                                                                className="h-5 w-5 rounded-full"
                                                            />
                                                        </a>
                                                        <span className="mr-1 dark:text-jacarta-400">by</span>
                                                        <a href="user" className="text-accent">
                                                            <span>NFT stars</span>
                                                        </a>
                                                    </div>
                                                    <span className="text-sm dark:text-jacarta-300">2.8K Items</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <a href="collection" className="flex space-x-[0.625rem]">
                                                    <span className="w-[74.5%]">
                                                        <img
                                                            src="./../img/collections/collection_3_1.jpg"
                                                            alt="item 1"
                                                            className="h-full w-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                        <img
                                                            src="./../img/collections/collection_3_2.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_3_3.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_3_4.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <a
                                                    href="collection"
                                                    className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                                >
                                                    VR Space_287
                                                </a>
                                                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                    <div className="flex flex-wrap items-center">
                                                        <a href="user" className="mr-2 shrink-0">
                                                            <img
                                                                src="../img/avatars/owner_4.png"
                                                                alt="owner"
                                                                className="h-5 w-5 rounded-full"
                                                            />
                                                        </a>
                                                        <span className="mr-1 dark:text-jacarta-400">by</span>
                                                        <a href="user" className="text-accent">
                                                            <span>Origin Morish</span>
                                                        </a>
                                                    </div>
                                                    <span className="text-sm dark:text-jacarta-300">8K Items</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <a href="collection" className="flex space-x-[0.625rem]">
                                                    <span className="w-[74.5%]">
                                                        <img
                                                            src="./../img/collections/collection_4_1.jpg"
                                                            alt="item 1"
                                                            className="h-full w-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                        <img
                                                            src="./../img/collections/collection_4_2.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_4_3.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_4_4.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <a
                                                    href="collection"
                                                    className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                                >
                                                    Metasmorf
                                                </a>
                                                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                    <div className="flex flex-wrap items-center">
                                                        <a href="user" className="mr-2 shrink-0">
                                                            <img
                                                                src="../img/avatars/owner_10.png"
                                                                alt="owner"
                                                                className="h-5 w-5 rounded-full"
                                                            />
                                                        </a>
                                                        <span className="mr-1 dark:text-jacarta-400">by</span>
                                                        <a href="user" className="text-accent">
                                                            <span>Lazy Panda</span>
                                                        </a>
                                                    </div>
                                                    <span className="text-sm dark:text-jacarta-300">1.5K Items</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="swiper-slide">
                                        <article>
                                            <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                <a href="collection" className="flex space-x-[0.625rem]">
                                                    <span className="w-[74.5%]">
                                                        <img
                                                            src="./../img/collections/collection_5_1.jpg"
                                                            alt="item 1"
                                                            className="h-full w-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                    <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                                                        <img
                                                            src="./../img/collections/collection_5_2.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_5_3.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                        <img
                                                            src="./../img/collections/collection_5_4.jpg"
                                                            alt="item 1"
                                                            className="h-full rounded-[0.625rem] object-cover"
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                </a>
                                                <a
                                                    href="collection"
                                                    className="mt-4 block font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                                                >
                                                    3Landers
                                                </a>
                                                <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                                                    <div className="flex flex-wrap items-center">
                                                        <a href="user" className="mr-2 shrink-0">
                                                            <img
                                                                src="../img/avatars/owner_11.png"
                                                                alt="owner"
                                                                className="h-5 w-5 rounded-full"
                                                            />
                                                        </a>
                                                        <span className="mr-1 dark:text-jacarta-400">by</span>
                                                        <a href="user" className="text-accent">
                                                            <span>051_Hart</span>
                                                        </a>
                                                    </div>
                                                    <span className="text-sm dark:text-jacarta-300">15K Items</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            {/* Slider Navigation */}
                            <div className="swiper-button-prev swiper-button-prev-2 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                </svg>
                            </div>
                            <div className="swiper-button-next swiper-button-next-2 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    className="fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end featured collections */}
                {/* Process / Newsletter */}
                <section className="relative py-24 dark:bg-jacarta-900">
                    <div className="container">
                        <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            Create and sell your NFTs
                        </h2>
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
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
                                            <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    1. Set up your wallet
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT
                                    Marketplacein the top right corner.
                                </p>
                            </div>
                            <div className="text-center">
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
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    2. Create Your Collection
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Click Create and set up your collection. Add social links, a description, profile
                                    &amp; banner images, and set a secondary sales fee.
                                </p>
                            </div>
                            <div className="text-center">
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
                                            <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    3. Add Your NFTs
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Upload your work (image, video, audio, or 3D art), add a title and description, and
                                    customize your NFTs with properties, stats.
                                </p>
                            </div>
                            <div className="text-center">
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
                                            <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                                    4. List Them For Sale
                                </h3>
                                <p className="dark:text-jacarta-300">
                                    Choose between auctions, fixed-price listings, and declining-price listings. You
                                    choose how you want to sell your NFTs!
                                </p>
                            </div>
                        </div>
                        <p className="mx-auto mt-20 max-w-2xl text-center text-lg text-jacarta-700 dark:text-white">
                            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
                            tips and tricks for navigating Xhibiter
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
                </section>
                {/* end process / newsletter */}
                {/* Partners */}
                <div className="bg-light-base dark:bg-jacarta-800">
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
        </>
    );
};

Home3Page.getLayout = (page: ReactElement) => {
    return <MainLayout4>{page}</MainLayout4>;
};

export { Home3Page };
