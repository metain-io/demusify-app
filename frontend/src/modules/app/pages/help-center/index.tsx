import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageHelpCenter = () => {
    return (
        <main className="pt-[5.5rem] lg:pt-24">
            {/* <!-- Page Title --> */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-20 after:absolute after:inset-0 after:bg-jacarta-900/60"
                style={{ backgroundImage: 'url("./img/page-title/knowledge_base_banner.jpg")' }}
            >
                <div className="container relative z-10">
                    <h1 className="mb-4 text-center font-display text-4xl font-medium text-white">
                        How can I help you?
                    </h1>
                    <form action="search" className="relative mx-auto block max-w-md">
                        <input
                            type="search"
                            className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent"
                            placeholder="Search"
                        />
                        <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-jacarta-500"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                            </svg>
                        </span>
                    </form>
                </div>
            </section>

            {/* <!-- Help Center --> */}
            <section className="relative py-24">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <h2 className="mb-10 text-center font-display text-xl font-medium text-jacarta-700 dark:text-white">
                        Or browse categories
                    </h2>

                    {/* <!-- Categories --> */}
                    <div className="mb-16 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                Getting started
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                Buying
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                Selling
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                Creating
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                User Safety
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                        <a
                            href="#"
                            className="rounded-2lg border border-jacarta-100 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                            <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                Partners
                            </h3>
                            <p className="dark:text-jacarta-300">
                                Learn how to create an account, set up your wallet, and what you can do.
                            </p>
                        </a>
                    </div>
                    {/* <!-- end categories --> */}

                    <h2 className="mb-10 text-center font-display text-xl font-medium text-jacarta-700 dark:text-white">
                        Frequently asked questions
                    </h2>
                    <p className="mx-auto mb-10 max-w-md text-center text-lg text-jacarta-300">
                        Join our community now to get free updates and also alot of freebies are waiting for you or
                        <a href="contact.html" className="text-accent">
                            Contact Support
                        </a>
                    </p>

                    <div className="accordion mx-auto max-w-[35rem]" id="accordionFAQ">
                        <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <h2 className="accordion-header" id="faq-heading-1">
                                <button
                                    className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-1"
                                    aria-expanded="false"
                                    aria-controls="faq-1"
                                >
                                    <span>How do I create an NFT?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="faq-1"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq-heading-1"
                                data-bs-parent="#accordionFAQ"
                            >
                                <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <p className="dark:text-jacarta-200">
                                        Learn how to create your very first NFT and how to create your NFT collections.
                                        Unique, fully 3D and built to unite the design multiverse. Designed and styled
                                        by Digimental.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <h2 className="accordion-header" id="faq-heading-2">
                                <button
                                    className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-2"
                                    aria-expanded="false"
                                    aria-controls="faq-2"
                                >
                                    <span>How can I stay safe and protect my NFTs ?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="faq-2"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq-heading-2"
                                data-bs-parent="#accordionFAQ"
                            >
                                <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <p className="dark:text-jacarta-200">
                                        Learn how to create your very first NFT and how to create your NFT collections.
                                        Unique, fully 3D and built to unite the design multiverse. Designed and styled
                                        by Digimental.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <h2 className="accordion-header" id="faq-heading-3">
                                <button
                                    className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-3"
                                    aria-expanded="false"
                                    aria-controls="faq-3"
                                >
                                    <span>What are the key terms to know in NFTs and Web3 ?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="faq-3"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq-heading-3"
                                data-bs-parent="#accordionFAQ"
                            >
                                <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <p className="dark:text-jacarta-200">
                                        Learn how to create your very first NFT and how to create your NFT collections.
                                        Unique, fully 3D and built to unite the design multiverse. Designed and styled
                                        by Digimental.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <h2 className="accordion-header" id="faq-heading-4">
                                <button
                                    className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-4"
                                    aria-expanded="false"
                                    aria-controls="faq-4"
                                >
                                    <span>How do I sell an NFT ?</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="faq-4"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq-heading-4"
                                data-bs-parent="#accordionFAQ"
                            >
                                <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <p className="dark:text-jacarta-200">
                                        Learn how to create your very first NFT and how to create your NFT collections.
                                        Unique, fully 3D and built to unite the design multiverse. Designed and styled
                                        by Digimental.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <h2 className="accordion-header" id="faq-heading-5">
                                <button
                                    className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-5"
                                    aria-expanded="false"
                                    aria-controls="faq-5"
                                >
                                    <span>Smart Contract Upgrade: What You Need to Know</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="faq-5"
                                className="accordion-collapse collapse"
                                aria-labelledby="faq-heading-5"
                                data-bs-parent="#accordionFAQ"
                            >
                                <div className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <p className="dark:text-jacarta-200">
                                        Learn how to create your very first NFT and how to create your NFT collections.
                                        Unique, fully 3D and built to unite the design multiverse. Designed and styled
                                        by Digimental.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end help center --> */}
        </main>
    );
};

PageHelpCenter.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageHelpCenter };
