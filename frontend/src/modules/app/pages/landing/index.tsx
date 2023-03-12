import { MainLayout4 } from '@modules/app/layouts';
import { ReactElement } from 'react';

const LandingPage = () => {
    return (
        <>
            <main>
                {/* Hero */}
                <section className="relative h-screen py-6" id="intro">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img
                            src="../img/hero/landing_hero.jpg"
                            className="h-full w-full object-cover"
                            alt="Xhibiter | NFT Marketplace HTML Template"
                        />
                    </picture>
                    <div className="container h-full">
                        <div className="flex h-full flex-col items-center justify-center">
                            <div className="mb-6 inline-flex space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jacarta-900/40">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 54 33"
                                        className="w-5"
                                    >
                                        <g clipPath="url(#prefix__clip0)">
                                            <path
                                                fill="#38bdf8"
                                                fillRule="evenodd"
                                                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                                                clipRule="evenodd"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="prefix__clip0">
                                                <path fill="#fff" d="M0 0h54v32.4H0z" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jacarta-900/40">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7" className="w-4">
                                        <title>webpack</title>
                                        <path fill="#FFF" d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z" />
                                        <path
                                            fill="#8ed6fb"
                                            d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"
                                        />
                                        <path
                                            fill="#1c78c0"
                                            d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-jacarta-900/40">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width="25.534"
                                        height="25.532"
                                        viewBox="0 0 25.534 25.532"
                                        className="w-6"
                                    >
                                        <defs>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: '\n                      .cls-1 {\n                        fill: #fbde34;\n                      }\n                    ',
                                                }}
                                            />
                                        </defs>
                                        <circle
                                            id="Ellipse_1_copy_3"
                                            data-name="Ellipse 1 copy 3"
                                            className="cls-1"
                                            cx="12.767"
                                            cy="12.766"
                                            r="12.767"
                                        />
                                        <image
                                            id="_1_ktJUMJO60oHoluiEV6KBmA"
                                            data-name="1_ktJUMJO60oHoluiEV6KBmA"
                                            x="2.594"
                                            y="2.594"
                                            width={20}
                                            height={20}
                                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADvklEQVRIia3WbWhWZRgH8N/Zs81wzpfpdE3BwsISExJLCBM1QymKXiFL7ENgkKVRHypNRWvUpyioGAQKmhqZmGYfQpNyvgWaTUzRbKyy+TLNKTbnnm0n7j1n+mzOtnL/D+c557nPuf/39fK/ritKV43TDRRiAkajGPk4h8PYjaqutsjtYv1OLMQD6PUv7+3H+1iJps5eyLnGhyVYjb14tAuSgDFYhkpM6S7ReOzDDERdEHTEKGzGgo4LHV0XSLagz38kyEY4/NsowPzOLBqC9ddJko03MLMzoo9wYw+RtOFDDMwmuheP9zBJQL+2eLXpaB0ei1vISZEKTkyhJYniedKnyeuXqCgk8EnSl4hSxE3kDcAgnCJ9juhK9C9haCDqi9ogwvBRc5pDVdSdz9zXX2J4KXfchQus+YrBRdw3keZm4ovkDskcZO3XjB3FrWOIL7SzbHZuovigdKneXDjJzFdjp84wqIij1Sx8kdvHR56eG9u+h+M1zJ9LWVlEQ0ZlU2fFdu3lp28jqfyrVDslNxFbBnFGOTW1vDWPF16P+At92bqKtes5WhEpGsbPPyZFqISlr8S2/UD1zsjwYHk1cXPGrQlGpxbNK30E97RmRj6N9XzxDQ0NnKrlu62MvCnSr5TPN7BmE+PHRSY+nBHC7g3BAwwrYd8R4rqo1c1RE3F8xaSQdXlXpUof9h9m9WcsX0dVJcNGUrk5UjqEyQ/G5syO1Z+mrDw2YgRlSyKFN/DMnNimjeSUtNsyPxDVZf8TDnHwKIteoqIicvBA5O6HObaLgl5UbI/s+DLy8XI2ruDAL0yfwKznWFWeqVhbd8Yda86Z8Hgk275gbksL7y1j3++x2t+YNo3GusjMl2NL3uRMTaSwL+MmMaOad8opHBTbX5nZ46GpEY3tiH4NRLsuW5MmL8XzT3HgCHu2UXOWocUseI3q46xYRe8+sTUfRG4Zy+LiSH1jbOWnDCxmw/LI5Om0nGhHtKVNsJWt2RcT5ZAakEQvTn7/RjMG43QihgKa/iC3fyYr08fIC1WyP/EJmtKZvRKMbLstb71GSaaEtD2bRO8scQNNDTQfS6rFRZprMtWj6TzxcfIKMhWj+c+MkLNIvg/habMoNLZDuLljBl4n4kQ6u9t4Qz2anSz0JFYmM0W7NrElu1H1AEKXnpOV0O3wLhb3gGVh1piWKcOdEwUsxZOZ5vC/sAKTko5wGdeagkJ/ug2fJPHrDkIs7sez2Za0oTsDZBGeSMaoMOWEdh/qchBAGBx3JLNG0GLnwD9wtDAYpf8XlgAAAABJRU5ErkJggg=="
                                        />
                                    </svg>
                                </div>
                            </div>
                            <span className="mb-3 bg-gradient-to-r from-[#F43771] to-[#FF9567] bg-clip-text font-display text-xl text-transparent lg:text-3xl">
                                9x Lighter &amp; Faster
                            </span>
                            <h1 className="mb-6 text-center font-display text-5xl text-white lg:text-6xl xl:text-7xl">
                                NFT Marketplace
                            </h1>
                            <p className="mx-auto mb-8 max-w-lg text-center text-lg text-white">
                                With a loading time of just about 500ms
                                <br />
                                Xhibiter offers unparalleled performance among others
                            </p>
                        </div>
                    </div>
                </section>
                {/* end hero */}
                {/* Features */}
                <section className="relative py-24" id="features">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="mx-auto max-w-[90.375rem] px-4">
                        <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            Why Choose Xhibiter?
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="text-center">
                                <img
                                    src="../img/landing/google_speed.jpg"
                                    alt="google speed"
                                    className="rounded-2.5xl"
                                />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        Fast and Optimized
                                    </h3>
                                    <p>The highest Google score among other templates.</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <img src="../img/landing/dark_mode.jpg" alt="dark mode" className="rounded-2.5xl" />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        Dark Mode
                                    </h3>
                                    <p>Switch to a dark theme in a single click.</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <img src="../img/landing/stack.jpg" alt="modern stack" className="rounded-2.5xl" />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        Modern Stack
                                    </h3>
                                    <p>
                                        Xhibiter built using the most modern tools, such as Webpack, Tailwind CSS and
                                        ES6
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <img
                                    src="../img/landing/light_and_fast.jpg"
                                    alt="9x lighter and faster"
                                    className="rounded-2.5xl"
                                />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        9x Lighter and Faster
                                    </h3>
                                    <p>
                                        Thanks to the Tailwind CSS and no JS dependencies, Xhibiter is lean and
                                        lightning fast.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <img
                                    src="../img/landing/ui_components.jpg"
                                    alt="100+ UI Components"
                                    className="rounded-2.5xl"
                                />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        100+ UI Components
                                    </h3>
                                    <p>Modals, dropdowns, charts, tooltips, tabs, countdowns and more.</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <img src="../img/landing/metamask.jpg" alt="metamask" className="rounded-2.5xl" />
                                <div className="mx-auto max-w-xs">
                                    <h3 className="mb-2 pt-6 text-center font-display text-lg text-jacarta-700">
                                        Metamask Integrated
                                    </h3>
                                    <p>The most popular crypto wallet &amp; gateway to blockchain apps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end features */}
                {/* Pages */}
                <section className="py-24" id="pages">
                    <div className="mx-auto max-w-[90.375rem] px-4">
                        <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
                            Pages for Every Need
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <a
                                href="index"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_1.jpg" alt="home 1" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 1</h3>
                            </a>
                            <a
                                href="home-2"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_2.jpg" alt="home 2" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 2</h3>
                            </a>
                            <a
                                href="home-3"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_3.jpg" alt="home 3" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 3</h3>
                            </a>
                            <a
                                href="home-4"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_4.jpg" alt="home 4" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 4</h3>
                            </a>
                            <a
                                href="home-5"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_5.jpg" alt="home 5" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 5</h3>
                            </a>
                            <a
                                href="home-6"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_6.jpg" alt="home 6" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home 6</h3>
                            </a>
                            <a
                                href="home-7"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img
                                    className="w-full"
                                    src="../img/pages/home_7.jpg"
                                    alt="Home 7 — Crypto Consultant"
                                />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 7 — Crypto Consultant
                                </h3>
                            </a>
                            <a
                                href="home-8"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_8.jpg" alt="Home 8 — NFT Game" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 8 — NFT Game
                                </h3>
                            </a>
                            <a
                                href="home-9"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_9.jpg" alt="Home 9 — DAO" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 9 — DAO
                                </h3>
                            </a>
                            <a
                                href="home-10"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_10.jpg" alt="Home 10 — Crypto App" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 10 — Crypto App
                                </h3>
                            </a>
                            <a
                                href="home-11"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_11.jpg" alt="Home 11 — Crypto Trading" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 11 — Crypto Trading
                                </h3>
                            </a>
                            <a
                                href="home-12"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_12.jpg" alt="Home 12 — ICO Landing" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Home 12 — ICO Landing
                                </h3>
                            </a>
                            <a
                                href="index-rtl"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/home_rtl.jpg" alt="Home RTL" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Home RTL</h3>
                            </a>
                            <a
                                href="collections"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/collections.jpg" alt="Collections" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Collections
                                </h3>
                            </a>
                            <a
                                href="item"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/item.jpg" alt="item" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Item Details
                                </h3>
                            </a>
                            <a
                                href="collection"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/collection.jpg" alt="Collection" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Collection</h3>
                            </a>
                            <a
                                href="activity"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/activity.jpg" alt="activity" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Activity</h3>
                            </a>
                            <a
                                href="rankings"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/rankings.jpg" alt="rankings" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Rankings</h3>
                            </a>
                            <a
                                href="user"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/user.jpg" alt="user" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">User</h3>
                            </a>
                            <a
                                href="edit-profile"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/edit_profile.jpg" alt="Edit Profile" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Edit Profile
                                </h3>
                            </a>
                            <a
                                href="case-studies"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/case_studies.jpg" alt="case studies" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Case Studies
                                </h3>
                            </a>
                            <a
                                href="single-case-study"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/single_case_study.jpg" alt="case studies" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Single Case Study
                                </h3>
                            </a>
                            <a
                                href="about"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/about.jpg" alt="about" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">About</h3>
                            </a>
                            <a
                                href="careers"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/careers.jpg" alt="careers" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Careers</h3>
                            </a>
                            <a
                                href="contact"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/contact.jpg" alt="contact" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Contact</h3>
                            </a>
                            <a
                                href="wallet"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/wallet.jpg" alt="wallet" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Wallet</h3>
                            </a>
                            <a
                                href="create-item"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/create.jpg" alt="create" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Create</h3>
                            </a>
                            <a
                                href="login"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/login.jpg" alt="login" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Login</h3>
                            </a>
                            <a
                                href="404"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/404.jpg" alt={'404'} />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Page 404</h3>
                            </a>
                            <a
                                href="blog"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/blog.jpg" alt="blog" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Blog</h3>
                            </a>
                            <a
                                href="single-post"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/single_post.jpg" alt="Single post" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Single Post
                                </h3>
                            </a>
                            <a
                                href="newsletter"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/newsletter.jpg" alt="newsletter" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Newsletter</h3>
                            </a>
                            <a
                                href="help-center"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/help_center.jpg" alt="Help Center" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Help Center
                                </h3>
                            </a>
                            <a
                                href="platform-status"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/platform_status.jpg" alt="platform status" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Platform Status
                                </h3>
                            </a>
                            <a
                                href="partners"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/partners.jpg" alt="partners" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">Partners</h3>
                            </a>
                            <a
                                href="tos"
                                className="overflow-hidden rounded-2.5xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                            >
                                <img className="w-full" src="../img/pages/tos.jpg" alt="tos" />
                                <h3 className="py-6 text-center font-display text-base text-jacarta-700">
                                    Terms of Service
                                </h3>
                            </a>
                        </div>
                    </div>
                </section>
                {/* end pages */}
                {/* CTA */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-40 text-center after:absolute after:inset-0 after:bg-jacarta-900/60"
                    style={{ backgroundImage: 'url("../img/CTA.jpg")' }}
                >
                    <div className="relative z-10">
                        <h2 className="mb-3 text-center font-display text-3xl text-white">
                            Build Fast and Optimized Websites in No Time
                        </h2>
                        <p className="mb-6 text-lg text-white">One Time Payment, Lifetime Updates</p>
                        {/* <a
            href="#"
            class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >Try Xhibiter Today</a
          > */}
                    </div>
                </section>
            </main>
        </>
    );
};

LandingPage.getLayout = (page: ReactElement) => {
    return <MainLayout4>{page}</MainLayout4>;
};

export { LandingPage };
