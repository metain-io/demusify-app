import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const SingleCaseStudyPage = () => {
    return (
        <>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Post */}
                <section className="relative py-16 md:py-24">
                    <div className="container">
                        <header className="mx-auto mb-16 max-w-2xl text-center">
                            <div className="mb-3 inline-flex flex-wrap items-center space-x-1 text-xs">
                                <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                    <a href="case-studies">CONTENT MARKETING</a>
                                    <a href="case-studies">PPC</a>
                                </span>
                            </div>
                            <h1 className="mb-4 font-display text-2xl text-jacarta-700 dark:text-white sm:text-5xl">
                                Which cryptocurrency has highest potential in future growth?
                            </h1>
                        </header>
                        {/* Featured image */}
                        <figure className="mb-4">
                            <img
                                src="../img/case-studies/single_case_study_featured.jpg"
                                alt="post 1"
                                className="w-full rounded-2.5xl"
                            />
                        </figure>
                        {/* Article */}
                        <article>
                            <div className="lg:flex lg:space-x-8">
                                <div className="mt-12 lg:w-1/3">
                                    <div className="mb-7">
                                        <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                                            Industry
                                        </h3>
                                        <span className="text-2xs font-medium dark:text-jacarta-300">
                                            Cryptocurency, Digital
                                        </span>
                                    </div>
                                    <div className="mb-7">
                                        <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                                            Services Provided
                                        </h3>
                                        <span className="text-2xs font-medium dark:text-jacarta-300">
                                            Content Marketing, PPC
                                        </span>
                                    </div>
                                    <div className="mb-7">
                                        <h3 className="font-display text-md font-semibold text-jacarta-700 dark:text-white">
                                            Area Served
                                        </h3>
                                        <span className="text-2xs font-medium dark:text-jacarta-300">Worldwide</span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="article-content lg:w-2/3">
                                    <h2 className="text-3xl">The Challenge</h2>
                                    <p className="text-lg leading-normal">
                                        As you may already know, there are an infinite number of things you can test on
                                        your site to help you increase sales.
                                    </p>
                                    <p>
                                        From layout to copy to design, there are limitless combinations of changes that
                                        may improve your visitor-to-sale conversion rate. But
                                        what&apos;s&quot;enough&quot; when you&apos;re just starting out? What elements
                                        should you focus on testing before rolling out your traffic campaign? Changes
                                        that may improve your visitor-to-sale conversion rate. But
                                        what&apos;s&quot;enough&quot; when you&apos;re just starting out? What elements
                                        should you focus on testing before rolling out your traffic campaign?
                                    </p>
                                    <p>
                                        Enthusiasm, commitment and a long list of satisfied clients wasn’t enough for
                                        Reborn to achieve the growth they wanted. To get ahead of the competition, they
                                        partnered with OMG on a digital solution engineered for market success.
                                    </p>
                                    <h3 className="text-xl">Key problems</h3>
                                    <ul>
                                        <li>Wanting to boost domain authority to dominate fierce market competition</li>
                                        <li>Create a site structure that will enhance SEO</li>
                                        <li>
                                            Onsite optimisation to make their website appeal to both search engines and
                                            users
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                {/* end post */}
                {/* Approach */}
                <section className="relative py-20 dark:bg-jacarta-800 lg:py-32">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            {/* Image */}
                            <div className="relative lg:w-1/2">
                                <img
                                    src="../img/patterns/pattern_circle_1.png"
                                    className="absolute -bottom-4 -left-8 animate-fly dark:opacity-10"
                                    alt=""
                                />
                                <img
                                    src="../img/patterns/pattern_circle_2.png"
                                    className="absolute -top-14 right-0 animate-fly dark:opacity-10 md:-right-12"
                                    alt=""
                                />
                                <div className="flex items-center space-x-7">
                                    <figure className="relative">
                                        <img
                                            src="../img/case-studies/single_case_study_approach.jpg"
                                            className="rounded-3xl"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="py-10 lg:w-1/2 lg:pl-20">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">
                                    Our Approach
                                </h2>
                                <p className="mb-8 dark:text-jacarta-300">
                                    SEO was about achieving significant uplifts in rankings, traffic, and revenue. They
                                    were ambitious in becoming the market leader online for advertising agencies. To
                                    achieve their version of success we customised a 24 month campaign. The core
                                    strategy leveraged:
                                </p>
                                <ul className="list-disc space-y-4 pl-4 dark:text-jacarta-300">
                                    <li>
                                        Optimising the website and content structure to improve the SEO ranking of their
                                        website
                                    </li>
                                    <li>
                                        Cutting edge technical onsite optimisation to streamline search and website
                                        performance
                                    </li>
                                    <li>
                                        Get more high authority and traffic driving links by increasing domain authority
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end approach */}
                {/* Results */}
                <section className="pt-32 pb-28 dark:bg-jacarta-900">
                    <div className="container">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="lg:w-1/2 lg:pr-16">
                                <h2 className="mb-6 font-display text-3xl text-jacarta-700 dark:text-white">Results</h2>
                                <p className="mb-8 dark:text-jacarta-300">
                                    As you may already know, there are an infinite number of things you can test on your
                                    site to help you increase sales. SEO was about achieving significant uplifts in
                                    rankings, traffic, and revenue. They were ambitious in becoming the market leader
                                    online for advertising agencies.
                                </p>
                                <p className="mb-8 dark:text-jacarta-300">
                                    As you may already know, there are an infinite number of things you can test on your
                                    site to help you increase sales. From layout to copy to design, there are limitless
                                    combinations of changes that may improve your visitor-to-sale conversion rate. But
                                    what&apos;s&quot;enough&quot; when you&apos;re just starting out? What elements
                                    should you focus on testing before rolling out your traffic campaign?
                                </p>
                            </div>
                            <div className="lg:w-[45%]">
                                <div className="md:flex md:space-x-6 xl:space-x-12">
                                    <div className="md:w-1/2">
                                        <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                                            <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                                                30%
                                            </span>
                                            <p className="text-md text-jacarta-700 dark:text-white">
                                                Lower cost per acquisition
                                            </p>
                                        </div>
                                        <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                                            <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                                                150%
                                            </span>
                                            <p className="text-md text-jacarta-700 dark:text-white">
                                                More organic traffic
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6 md:w-1/2">
                                        <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                                            <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                                                86%
                                            </span>
                                            <p className="text-md text-jacarta-700 dark:text-white">
                                                More inbound leads
                                            </p>
                                        </div>
                                        <div className="mb-6 rounded-2.5xl border border-jacarta-100 p-12 dark:border-jacarta-600 dark:bg-jacarta-700 xl:mb-12">
                                            <span className="font-display text-4xl font-semibold text-green md:text-6xl">
                                                12%
                                            </span>
                                            <p className="text-md text-jacarta-700 dark:text-white">
                                                Decrease in bounce rate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end results */}
                {/* Testimonials */}
                <section className="bg-light-base py-24 dark:bg-jacarta-800">
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
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
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
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
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
                                    <div className="flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap">
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
                {/* Case Studies */}
                <section className="relative py-24">
                    <div className="container">
                        <div className="mx-auto mb-12 max-w-sm text-center">
                            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                                Related Case Studies
                            </h2>
                        </div>
                        <div className="grid gap-12 md:grid-cols-2">
                            <article>
                                <a href="single-case-study">
                                    <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                                        <img src="../img/case-studies/case_study_3.jpg" alt="" />
                                    </figure>
                                </a>
                                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                                    <a href="single-case-study" className="group-hover:text-accent">
                                        UI/UX Designers Achieves a 31% Increase in Organic Traffic
                                    </a>
                                </h2>
                                <a href="single-case-study" className="text-sm font-bold text-accent">
                                    View Case Study
                                </a>
                            </article>
                            <article>
                                <a href="single-case-study">
                                    <figure className="mb-10 overflow-hidden rounded-2.5xl transition-shadow hover:shadow-xl">
                                        <img src="../img/case-studies/case_study_4.jpg" alt="" />
                                    </figure>
                                </a>
                                <h2 className="group mb-2 max-w-md font-display text-lg text-jacarta-700 dark:text-white">
                                    <a href="single-case-study" className="group-hover:text-accent">
                                        New Social Media Platforms Marketers Should Watch in 2022
                                    </a>
                                </h2>
                                <a href="single-case-study" className="text-sm font-bold text-accent">
                                    View Case Study
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                {/* end case studies */}
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

SingleCaseStudyPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { SingleCaseStudyPage };
