import { MainLayout2 } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageHome8 = () => {
    return (
        <main className="overflow-x-hidden">
            {/* <!-- Hero --> */}
            <section className="hero relative py-20 md:pt-32">
                <picture className="pointer-events-none absolute inset-0 -z-10">
                    <img src="img/gradient_dark.jpg" alt="gradient dark" className="h-full w-full" />
                </picture>
                <img
                    src="img/patterns/pattern_donut.png"
                    alt="pattern donut"
                    className="absolute right-0 top-0 -z-10"
                />

                <div className="container">
                    <div className="mx-auto max-w-2xl pt-24 text-center">
                        <h1 className="mb-6 font-display text-5xl text-white lg:text-6xl">
                            Welcome to the Xhibiter Universe of Play!
                        </h1>
                        <p className="mx-auto mb-8 max-w-md text-lg leading-normal text-jacarta-50">
                            A place where inspiration starts here. Play your favorite games and earn real money
                        </p>
                        <a
                            href="edit-profile.html"
                            className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        >
                            Enter Account
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- end hero --> */}

            {/* <!-- Intro Video --> */}
            <div className="relative mx-auto max-w-[90rem]">
                <img
                    src="img/nft-game/crypto_icons.png"
                    className="pointer-events-none absolute -top-1/4 animate-fly"
                    alt=""
                />
                <div className="container">
                    <figure className="relative overflow-hidden rounded-3xl before:absolute before:inset-0 before:bg-jacarta-900/25">
                        <img src="img/nft-game/nft_game_video_poster.jpg" className="w-full" alt="video" />
                        <a
                            href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            data-bs-toggle="modal"
                            data-bs-target=".video-lightbox"
                            className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-24 w-24 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-rotate h-8 w-8 fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"></path>
                            </svg>
                        </a>
                    </figure>
                </div>
            </div>
            {/* <!-- end intro video --> */}

            {/* <!-- Characters Slider --> */}
            <section className="relative pb-12 pt-24 lg:py-36">
                <picture className="pointer-events-none absolute inset-0 -z-10">
                    <img src="img/gradient_creative.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h2 className="mx-auto mb-16 max-w-md text-center font-display text-3xl text-white">
                        Collect Them All. Be the True Ownership for Players
                    </h2>
                </div>
                <div className="relative px-6 pb-16 sm:px-0">
                    {/* <!-- Slider --> */}
                    <div className="swiper coverflow-slider-2 !py-5">
                        <div className="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div className="swiper-slide">
                                <article>
                                    <a
                                        href="item.html"
                                        className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                                    >
                                        <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                                            <img
                                                src="img/nft-game/gradient_glow_small.png"
                                                alt=""
                                                className="absolute inset-0"
                                            />
                                            <figure className="relative my-4 mb-14">
                                                <img
                                                    src="./img/nft-game/nft_game_character_1.png"
                                                    alt="item 1"
                                                    className="swiper-lazy inline-block"
                                                    height="212"
                                                    width="182"
                                                />
                                                <div className="swiper-lazy-preloader"></div>
                                            </figure>
                                            <div className="relative rounded-2lg bg-jacarta-700 p-5">
                                                <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                                                    Optimus Prime
                                                </h3>
                                                <div className="flex justify-center space-x-5">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1734_6301)">
                                                                    <path
                                                                        d="M14.5 2v1.333c0 6.418-3.582 9.334-8 9.334H5.232c.141-2.008.767-3.224 2.399-4.668.802-.71.734-1.12.339-.884-2.723 1.62-4.075 3.809-4.135 7.305l-.002.247H2.5c0-.909.077-1.734.23-2.488-.153-.863-.23-2.034-.23-3.512A6.667 6.667 0 019.167 2c1.333 0 2.666.667 5.333 0z"
                                                                        fill="url(#paint0_linear_1734_6301)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1734_6301"
                                                                        x1="8.5"
                                                                        y1="14.667"
                                                                        x2="8.283"
                                                                        y2="2.291"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#57FF2D" />
                                                                        <stop offset="1" stop-color="#39FF88" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1734_6301">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Nature
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1734_6308)">
                                                                    <path
                                                                        d="M9.168 6.667h4.667l-6 8.666v-6H3.168l6-8.666v6z"
                                                                        fill="url(#paint0_linear_1734_6308)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1734_6308"
                                                                        x1="8.502"
                                                                        y1="15.333"
                                                                        x2="8.174"
                                                                        y2="1.007"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#FCFF52" />
                                                                        <stop offset="1" stop-color="#FF9A03" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1734_6308">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Lightning
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="swiper-slide">
                                <article>
                                    <a
                                        href="item.html"
                                        className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                                    >
                                        <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                                            <img
                                                src="img/nft-game/gradient_glow_small.png"
                                                alt=""
                                                className="absolute inset-0"
                                            />
                                            <figure className="relative my-4 mb-14">
                                                <img
                                                    src="./img/nft-game/nft_game_character_2.png"
                                                    alt="item 1"
                                                    className="swiper-lazy inline-block"
                                                    height="212"
                                                    width="182"
                                                />
                                                <div className="swiper-lazy-preloader"></div>
                                            </figure>
                                            <div className="relative rounded-2lg bg-jacarta-700 p-5">
                                                <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                                                    Tractor Bowling
                                                </h3>
                                                <div className="flex justify-center space-x-5">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6537)">
                                                                    <path
                                                                        d="M10.666 1.333v1.334H10v2.162c0 .772.167 1.534.49 2.234l2.855 6.184a1 1 0 01-.908 1.42H3.563a1 1 0 01-.909-1.42L5.51 7.063c.323-.7.49-1.462.49-2.234V2.667h-.666V1.333h5.333zm-2 1.334H7.333v2.666h1.333V2.667z"
                                                                        fill="url(#paint0_linear_1739_6537)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6537"
                                                                        x1="8"
                                                                        y1="14.667"
                                                                        x2="7.735"
                                                                        y2="1.641"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#8054FF" />
                                                                        <stop offset="1" stop-color="#FF68D5" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6537">
                                                                        <path fill="#fff" d="M0 0h16v16H0z" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Ether
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6544)">
                                                                    <path
                                                                        d="M9.334 12V9.338h-7.95a5.333 5.333 0 019.588-4.605A3.667 3.667 0 1111.667 12H9.334zm-5.333 1.333h6.666v1.334H4.001v-1.334zm-2.667-2.666h6.667V12H1.334v-1.333z"
                                                                        fill="url(#paint0_linear_1739_6544)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6544"
                                                                        x1="8.174"
                                                                        y1="14.667"
                                                                        x2="7.994"
                                                                        y2="2.348"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#C5FFFB" />
                                                                        <stop offset="1" stop-color="#39FFF3" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6544">
                                                                        <path fill="#fff" d="M0 0h16v16H0z" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Airpower
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="swiper-slide">
                                <article>
                                    <a
                                        href="item.html"
                                        className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                                    >
                                        <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                                            <img
                                                src="img/nft-game/gradient_glow_small.png"
                                                alt=""
                                                className="absolute inset-0"
                                            />
                                            <figure className="relative my-4 mb-14">
                                                <img
                                                    src="./img/nft-game/nft_game_character_3.png"
                                                    alt="item 1"
                                                    className="swiper-lazy inline-block"
                                                    height="212"
                                                    width="182"
                                                />
                                                <div className="swiper-lazy-preloader"></div>
                                            </figure>
                                            <div className="relative rounded-2lg bg-jacarta-700 p-5">
                                                <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                                                    Rakoun
                                                </h3>
                                                <div className="flex justify-center space-x-5">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6558)">
                                                                    <path
                                                                        d="M9.644 1.298l2.489.956-.478 1.245-.623-.24-.497 1.297c.52.308.963.73 1.296 1.23l1.27-.564-.272-.61 1.218-.541 1.085 2.436-1.218.542-.272-.609-1.268.565a4.017 4.017 0 01.047 1.786l1.296.498.239-.622 1.245.478-.956 2.489L13 11.156l.239-.622-1.296-.498c-.308.52-.73.963-1.23 1.297l.564 1.268.61-.271.541 1.218-2.436 1.085-.542-1.218.609-.272-.565-1.268a4.017 4.017 0 01-1.787.046l-.497 1.297.622.239-.478 1.245-2.49-.956.479-1.245.621.239.499-1.296a4.037 4.037 0 01-1.297-1.23l-1.27.564.272.61-1.218.541-1.084-2.436 1.218-.542.27.61 1.269-.566a4.047 4.047 0 01-.046-1.786L3.28 6.71l-.238.622-1.245-.478.956-2.488 1.245.478-.24.622 1.297.498c.308-.52.73-.964 1.23-1.298l-.564-1.269-.61.271L4.57 2.45l2.436-1.084.542 1.218-.61.272.566 1.268a4.015 4.015 0 011.786-.047l.497-1.297-.621-.238.478-1.245zm-2.39 7.523a.667.667 0 101.156.667.667.667 0 00-1.155-.667zm2.578-1.488a.667.667 0 100 1.334.667.667 0 000-1.334zM7.5 6.268a.667.667 0 10.667 1.155.667.667 0 00-.667-1.155z"
                                                                        fill="url(#paint0_linear_1739_6558)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6558"
                                                                        x1="8.499"
                                                                        y1="14.702"
                                                                        x2="8.282"
                                                                        y2="1.606"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#54FFAD" />
                                                                        <stop offset="1" stop-color="#7AFF80" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6558">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Poison
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6565)">
                                                                    <path
                                                                        d="M4.52 11.62A5.335 5.335 0 016.502 1.333a5.335 5.335 0 014.972 3.4 3.667 3.667 0 011.028 7.252 4 4 0 00-7.982-.366v.001zm4.648-.775l1.31-.756.666 1.154L9.835 12l1.31.756-.667 1.155-1.31-.756v1.512H7.835v-1.512l-1.31.756-.666-1.155L7.17 12l-1.31-.756.667-1.155 1.31.756V9.333h1.332v1.512z"
                                                                        fill="url(#paint0_linear_1739_6565)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6565"
                                                                        x1="8.328"
                                                                        y1="14.667"
                                                                        x2="8.126"
                                                                        y2="1.639"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#8EB5FF" />
                                                                        <stop offset="1" stop-color="#D1DEFF" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6565">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Snow Storm
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="swiper-slide">
                                <article>
                                    <a
                                        href="item.html"
                                        className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                                    >
                                        <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                                            <img
                                                src="img/nft-game/gradient_glow_small.png"
                                                alt=""
                                                className="absolute inset-0"
                                            />
                                            <figure className="relative my-4 mb-14">
                                                <img
                                                    src="./img/nft-game/nft_game_character_4.png"
                                                    alt="item 1"
                                                    className="swiper-lazy inline-block"
                                                    height="212"
                                                    width="182"
                                                />
                                                <div className="swiper-lazy-preloader"></div>
                                            </figure>
                                            <div className="relative rounded-2lg bg-jacarta-700 p-5">
                                                <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                                                    Skoopnum
                                                </h3>
                                                <div className="flex justify-center space-x-5">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6306)">
                                                                    <path
                                                                        d="M4.557 8.667a4 4 0 117.889 0h-7.89zM1.835 10H8.5v1.333H1.835V10zm8 0h5.333v1.333H9.835V10zm1.333 2.667h2.667V14h-2.667v-1.333zm-8 0h6.667V14H3.168v-1.333zm4.667-12h1.333v2H7.835v-2zm-4.99 2.619l.942-.943 1.414 1.414-.942.943-1.414-1.413v-.001zm10.37-.943l.942.943L12.743 4.7l-.942-.943 1.414-1.414zm2.62 4.99v1.334h-2V7.333h2zm-12.667 0v1.334h-2V7.333h2z"
                                                                        fill="url(#paint0_linear_1739_6306)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6306"
                                                                        x1="8.502"
                                                                        y1="14"
                                                                        x2="8.305"
                                                                        y2=".972"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#FFC42D" />
                                                                        <stop offset="1" stop-color="#FFF7DC" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6306">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Blaze
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1739_6313)">
                                                                    <path
                                                                        d="M12.268 1.133l-1.855 1.689c.864.26 1.658.71 2.327 1.315 2.341 2.134 2.341 5.592 0 7.726-1.728 1.573-4.399 2.574-8.01 3.004l1.854-1.689a6.091 6.091 0 01-2.327-1.315c-2.341-2.134-2.355-5.58 0-7.726 1.728-1.573 4.4-2.574 8.012-3.004h-.001zm-3.77 4.2c-1.656 0-3 1.194-3 2.667 0 1.473 1.344 2.667 3 2.667 1.657 0 3-1.194 3-2.667 0-1.473-1.343-2.667-3-2.667z"
                                                                        fill="url(#paint0_linear_1739_6313)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1739_6313"
                                                                        x1="8.496"
                                                                        y1="14.867"
                                                                        x2="8.241"
                                                                        y2="1.45"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#DCF4A9" />
                                                                        <stop offset="1" stop-color="#7CE2C3" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1739_6313">
                                                                        <path
                                                                            fill="#fff"
                                                                            transform="translate(.5)"
                                                                            d="M0 0h16v16H0z"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Tornado
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div className="swiper-slide">
                                <article>
                                    <a
                                        href="item.html"
                                        className="animate-gradient--no-text-fill block animate-gradient overflow-hidden rounded-2.5xl !bg-clip-border p-[2px] text-center shadow-md transition-shadow hover:shadow-lg"
                                    >
                                        <div className="rounded-[1.125rem] bg-jacarta-900 p-8">
                                            <img
                                                src="img/nft-game/gradient_glow_small.png"
                                                alt=""
                                                className="absolute inset-0"
                                            />
                                            <figure className="relative my-4 mb-14">
                                                <img
                                                    src="./img/nft-game/nft_game_character_5.png"
                                                    alt="item 1"
                                                    className="swiper-lazy inline-block"
                                                    height="212"
                                                    width="182"
                                                />
                                                <div className="swiper-lazy-preloader"></div>
                                            </figure>
                                            <div className="relative rounded-2lg bg-jacarta-700 p-5">
                                                <h3 className="mb-3 text-lg font-semibold leading-none text-white">
                                                    Bumblebee
                                                </h3>
                                                <div className="flex justify-center space-x-5">
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1633_19343)">
                                                                    <path
                                                                        d="M8 15.333a5 5 0 01-3.426-8.642C5.47 5.85 7.666 4.333 7.333 1c4 2.667 6 5.333 2 9.333.667 0 1.667 0 3.333-1.646.18.515.334 1.069.334 1.646a5 5 0 01-5 5z"
                                                                        fill="url(#paint0_linear_1633_19343)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1633_19343"
                                                                        x1="8"
                                                                        y1="15.333"
                                                                        x2="7.667"
                                                                        y2="1.333"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#FF2D2D" />
                                                                        <stop offset="1" stop-color="#FFD439" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1633_19343">
                                                                        <path fill="#fff" d="M0 0h16v16H0z" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Inferno
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-jacarta-900">
                                                            <svg
                                                                width="16"
                                                                height="16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_1633_19371)">
                                                                    <path
                                                                        d="M3.757 4.424L8 .181l4.243 4.243a6 6 0 11-8.486 0z"
                                                                        fill="url(#paint0_linear_1633_19371)"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="paint0_linear_1633_19371"
                                                                        x1="8"
                                                                        y1="14.667"
                                                                        x2="7.717"
                                                                        y2=".516"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stop-color="#2DFFF2" />
                                                                        <stop offset="1" stop-color="#3D39FF" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_1633_19371">
                                                                        <path fill="#fff" d="M0 0h16v16H0z" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="font-display text-sm font-semibold text-white">
                                                            Water
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Slider dots --> */}
                    <div className="swiper-pagination-2 mt-4 text-center"></div>
                </div>
            </section>
            {/* <!-- end characters slider --> */}

            {/* <!-- Statistic / Promo --> */}
            <section className="relative py-12 lg:py-36">
                <picture className="pointer-events-none absolute inset-0 -z-10 after:absolute after:bottom-0 after:h-1/3 after:w-full after:bg-gradient-to-t after:from-[#010107]">
                    <img src="img/gradient_creative.jpg" alt="gradient" className="h-full w-full -scale-y-100" />
                </picture>
                <div className="container -mt-20 lg:pb-32">
                    <h2 className="mb-12 max-w-5xl font-display text-5xl text-white lg:text-[6rem]">
                        Play Your Favorite Characters. Win Big Prizes.
                    </h2>
                    <p className="mb-20 max-w-4xl text-3xl font-medium text-white lg:ml-36">
                        We empower artists, creators, and players to build the platform they always envisioned,
                        providing the means to unleash your creativity and earn income.
                    </p>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div>
                            <div>
                                <span className="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                                    1M+
                                </span>
                            </div>
                            <span className="text-lg text-white">Active Users</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                                    $115M
                                </span>
                            </div>
                            <span className="text-lg text-white">Already Earned</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                                    4.8
                                </span>
                            </div>
                            <span className="text-lg text-white">Average Ratings</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-fill-transparent inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                                    250+
                                </span>
                            </div>
                            <span className="text-lg text-white">NFT Collections</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Promo 1 --> */}
                <div className="container pt-32">
                    <div className="items-center justify-between lg:flex">
                        <div className="relative text-center lg:w-1/2">
                            <img
                                src="img/nft-game/gradient_glow_large_1.png"
                                alt=""
                                loading="lazy"
                                className="absolute scale-150"
                            />
                            <img
                                src="img/nft-game/robot_large_1.png"
                                alt=""
                                loading="lazy"
                                className="relative -top-10 inline-block"
                            />
                            <img
                                src="img/hero/3D_elements.png"
                                alt=""
                                loading="lazy"
                                className="absolute top-10 animate-fly"
                            />
                        </div>
                        <div className="lg:w-[45%] lg:pl-16">
                            <h2 className="mb-6 font-display text-2xl text-white">
                                Discover. Collect. Buy Now. And play Autobattler Game
                            </h2>
                            <p className="mb-8 text-lg leading-normal text-jacarta-200">
                                Employees are our number-one priority, so we like to take care of them!
                            </p>
                            <p className="mb-12 text-jacarta-200">
                                Every digital creation available through MakersPlace is an authentic and truly unique
                                digital creation, signed and issued by the creator — made possible by blockchain
                                technology. Even if the digital creation is copied, it won't be the authentic and
                                originally signed version.
                            </p>
                            <a
                                href="collections.html"
                                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Come Discover
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end statistic / promo --> */}

            {/* <!-- Promo 2 --> */}
            <section className="bg-[#010107] py-12 lg:pb-32">
                <div className="container">
                    <div className="items-center justify-between lg:flex">
                        <div className="mb-12 lg:w-[45%] lg:pr-16">
                            <h2 className="mb-6 font-display text-2xl text-white">
                                Find and Fight rare Creatures and Collect Stunning Pieces
                            </h2>
                            <p className="mb-8 text-lg leading-normal text-jacarta-200">
                                Employees are our number-one priority, so we like to take care of them!
                            </p>
                            <p className="mb-12 text-jacarta-200">
                                Every digital creation available through MakersPlace is an authentic and truly unique
                                digital creation, signed and issued by the creator — made possible by blockchain
                                technology. Even if the digital creation is copied, it won't be the authentic and
                                originally signed version.
                            </p>
                            <a
                                href="collections.html"
                                className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Create Avatar
                            </a>
                        </div>
                        <div className="relative text-center lg:w-1/2">
                            <img
                                src="img/nft-game/gradient_glow_large_2.png"
                                loading="lazy"
                                alt=""
                                className="pointer-events-none absolute scale-150"
                            />

                            {/* <!-- Slider --> */}
                            <div className="swiper single-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="img/nft-game/robot_large_2.png" alt="" className="inline-block" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img
                                            src="img/transparent_pixel.png"
                                            data-src="img/nft-game/robot_large_3.png"
                                            alt=""
                                            width="398"
                                            height="571"
                                            className="swiper-lazy inline-block border-0"
                                        />
                                        <div className="swiper-lazy-preloader"></div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img
                                            src="img/transparent_pixel.png"
                                            data-src="img/nft-game/robot_large_4.png"
                                            alt=""
                                            width="398"
                                            height="571"
                                            className="swiper-lazy inline-block border-0"
                                        />
                                        <div className="swiper-lazy-preloader"></div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Slider Navigation --> */}
                            <div className="mt-6 flex justify-center space-x-3">
                                <div className="swiper-button-prev swiper-button-prev-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="fill-jacarta-700 group-hover:fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="fill-jacarta-700 group-hover:fill-accent"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                    </svg>
                                </div>
                            </div>

                            <img
                                src="img/nft-game/crypto_icons_1.png"
                                alt=""
                                loading="lazy"
                                className="pointer-events-none absolute -top-10 z-10 animate-fly"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end promo 2 --> */}

            {/* <!-- Features --> */}
            <section className="bg-[#010107] py-12 lg:py-24">
                <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
                    <div className="mx-auto mb-12 max-w-lg text-center">
                        <h2 className="mb-6 text-center font-display text-3xl font-medium text-white md:text-5xl">
                            Fabulous Things To Enjoy
                        </h2>
                        <p className="text-lg text-jacarta-300">
                            State-of-the-art technology to challenge global warming and trigger substantial change.
                        </p>
                    </div>

                    {/* <!-- Slider --> */}
                    <div className="swiper card-slider-3-columns-large-gap xl:!overflow-visible">
                        <div className="swiper-wrapper">
                            {/* <!-- Slides --> */}
                            <div className="swiper-slide">
                                <div className="rounded-2.5xl bg-jacarta-800 p-10">
                                    <div className="mb-4 md:mb-0">
                                        <svg
                                            width="48"
                                            height="48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mb-8"
                                        >
                                            <g clip-path="url(#clip0_1648_19589)">
                                                <path
                                                    d="M18.66 23H23a9 9 0 019 9H17.998L18 34h16v-2a11.156 11.156 0 00-1.772-6H38a10 10 0 019.032 5.702C42.302 37.944 34.644 42 26 42c-5.522 0-10.2-1.18-14-3.25V20.142A13.935 13.935 0 0118.66 23zM8 18a2 2 0 011.986 1.766L10 20v18a2 2 0 01-2 2H4a2 2 0 01-2-2V20a2 2 0 012-2h4zM27.292 7.15l.708.71.708-.708a5 5 0 117.07 7.072L28 22l-7.78-7.78a5 5 0 117.072-7.07z"
                                                    fill="url(#paint0_linear_1648_19589)"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1648_19589"
                                                    x1="24.516"
                                                    y1="5.669"
                                                    x2="24.516"
                                                    y2="42"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#8358FF" />
                                                    <stop offset="1" stop-color="#FD9BFF" />
                                                </linearGradient>
                                                <clipPath id="clip0_1648_19589">
                                                    <path fill="#fff" d="M0 0h48v48H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3 className="mb-4 font-display text-lg text-white">
                                            Generate financial contributions
                                        </h3>
                                        <p className="text-jacarta-300">
                                            With millions in transactions since 2017, we’ll help you generate revenue on
                                            our platform ⁠— from direct sales to secondary sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="rounded-2.5xl bg-jacarta-800 p-10">
                                    <div className="mb-4 md:mb-0">
                                        <svg
                                            width="48"
                                            height="48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mb-8"
                                        >
                                            <g clip-path="url(#clip0_1766_5774)">
                                                <path
                                                    d="M20 39.496V32.8c0-2.566 1.99-4.584 4.934-5.736A16.963 16.963 0 0019 26c-3.78 0-7.272 1.234-10.094 3.32A16.033 16.033 0 0020 39.496zm17.76-7.324C36.97 31.106 34.34 30 31 30c-4.012 0-7 1.594-7 2.8V40a15.993 15.993 0 0013.76-7.828zM19.1 23a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM31 25a4 4 0 100-8 4 4 0 000 8zm-7 19C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"
                                                    fill="url(#paint0_linear_1766_5774)"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1766_5774"
                                                    x1="24"
                                                    y1="4"
                                                    x2="24"
                                                    y2="44"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#8358FF" />
                                                    <stop offset="1" stop-color="#FD9BFF" />
                                                </linearGradient>
                                                <clipPath id="clip0_1766_5774">
                                                    <path fill="#fff" d="M0 0h48v48H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3 className="mb-4 font-display text-lg text-white">
                                            Build a driven community
                                        </h3>
                                        <p className="text-jacarta-300">
                                            With millions in transactions since 2017, we’ll help you generate revenue on
                                            our platform ⁠— from direct sales to secondary sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="rounded-2.5xl bg-jacarta-800 p-10">
                                    <div className="mb-4 md:mb-0">
                                        <svg
                                            width="48"
                                            height="48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mb-8"
                                        >
                                            <g clip-path="url(#clip0_1766_5788)">
                                                <path
                                                    d="M22 4c8.136 0 14.852 6.072 15.868 13.93l4.5 7.078c.296.466.236 1.16-.45 1.456L38 28.14V34c0 2.21-1.79 4-4 4h-3.998L30 44H12v-7.388c0-2.36-.872-4.594-2.488-6.61A15.929 15.929 0 016 20c0-8.836 7.164-16 16-16zm-1.06 11.526a3.498 3.498 0 00-4.95 0 3.496 3.496 0 000 4.948L22 26.486l6.01-6.012a3.496 3.496 0 000-4.948 3.498 3.498 0 00-4.95 0L22 16.586l-1.06-1.06z"
                                                    fill="url(#paint0_linear_1766_5788)"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1766_5788"
                                                    x1="24.268"
                                                    y1="4"
                                                    x2="24.268"
                                                    y2="44"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#8358FF" />
                                                    <stop offset="1" stop-color="#FD9BFF" />
                                                </linearGradient>
                                                <clipPath id="clip0_1766_5788">
                                                    <path fill="#fff" d="M0 0h48v48H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3 className="mb-4 font-display text-lg text-white">
                                            Create awareness & knowledge
                                        </h3>
                                        <p className="text-jacarta-300">
                                            With millions in transactions since 2017, we’ll help you generate revenue on
                                            our platform ⁠— from direct sales to secondary sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="rounded-2.5xl bg-jacarta-800 p-10">
                                    <div className="mb-4 md:mb-0">
                                        <svg
                                            width="48"
                                            height="48"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mb-8"
                                        >
                                            <g clip-path="url(#clip0_1766_5760)">
                                                <path
                                                    d="M36 16h4a2 2 0 012 2v24a2 2 0 01-2 2H8a2 2 0 01-2-2V18a2 2 0 012-2h4v-2a12 12 0 0124 0v2zM22 31.464V36h4v-4.536a4 4 0 10-4 0zM32 16v-2a8 8 0 00-16 0v2h16z"
                                                    fill="url(#paint0_linear_1766_5760)"
                                                />
                                            </g>
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1766_5760"
                                                    x1="24"
                                                    y1="2"
                                                    x2="24"
                                                    y2="44"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#8358FF" />
                                                    <stop offset="1" stop-color="#FD9BFF" />
                                                </linearGradient>
                                                <clipPath id="clip0_1766_5760">
                                                    <path fill="#fff" d="M0 0h48v48H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h3 className="mb-4 font-display text-lg text-white">
                                            Enhancing global security
                                        </h3>
                                        <p className="text-jacarta-300">
                                            With millions in transactions since 2017, we’ll help you generate revenue on
                                            our platform ⁠— from direct sales to secondary sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Slider dots --> */}
                    <div className="swiper-pagination-1 mt-10 text-center"></div>
                </div>
            </section>
            {/* <!-- end features --> */}

            {/* <!-- Newsletter --> */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0 after:bg-[#000000]/50"
                style={{ backgroundImage: 'url(img/nft-game/newsletter.jpg)' }}
            >
                <div className="container relative z-10">
                    <h2 className="mx-auto mb-6 max-w-lg text-center font-display text-2xl text-white">
                        Ready to be a Part of Our Journey? Make the Most of Your World
                    </h2>

                    <p className="mx-auto max-w-md text-center text-lg text-white">
                        Be part of our amazing community and development updates, giveaways, events. Stay tuned for the
                        news.more!
                    </p>

                    <div className="mx-auto mt-10 max-w-md text-center">
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-full border border-jacarta-600 bg-jacarta-700 py-3 px-4 text-white placeholder-white focus:ring-accent"
                            />
                            <button className="absolute top-2 right-2 rounded-full bg-accent px-6 py-2 font-display text-sm text-white hover:bg-accent-dark">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- end newsletter --> */}

            {/* <!-- Partners --> */}
            <div className="bg-jacarta-800">
                <div className="container">
                    <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
                        <a href="#">
                            <img src="img/partners/partner_logo_1.png" alt="partner 1" />{' '}
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_2.png" alt="partner 1" />{' '}
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_3.png" alt="partner 1" />{' '}
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_4.png" alt="partner 1" />{' '}
                        </a>
                        <a href="#">
                            <img src="img/partners/partner_logo_5.png" alt="partner 1" />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

PageHome8.getLayout = (page: ReactElement) => {
    return <MainLayout2>{page}</MainLayout2>;
};

export { PageHome8 };
