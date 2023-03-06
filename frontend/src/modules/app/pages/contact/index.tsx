import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const ContactPage = () => {
    return (
        <>
            <main className="pt-[5.5rem] lg:pt-24">
                {/* Page Title */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0 after:bg-jacarta-900/60"
                    style={{ backgroundImage: 'url("./../img/page-title/knowledge_base_banner.jpg")' }}
                >
                    <div className="container relative z-10">
                        <h1 className="text-center font-display text-4xl font-medium text-white">Get in touch</h1>
                    </div>
                </section>
                {/* Contact */}
                <section className="relative py-24 dark:bg-jacarta-800">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <div className="lg:flex">
                            {/* Contact Form */}
                            <div className="mb-12 lg:mb-0 lg:w-2/3 lg:pr-12">
                                <h2 className="mb-4 font-display text-xl text-jacarta-700 dark:text-white">
                                    Contact Us
                                </h2>
                                <p className="mb-16 text-lg leading-normal dark:text-jacarta-300">
                                    Have a question? Need help? Don&apos;t hesitate, drop us a line
                                </p>
                                <form id="contact-form" method="post">
                                    <div className="flex space-x-7">
                                        <div className="mb-6 w-1/2">
                                            <label
                                                htmlFor="name"
                                                className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                            >
                                                Name<span className="text-red">*</span>
                                            </label>
                                            <input
                                                name="name"
                                                className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                                id="name"
                                                type="text"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6 w-1/2">
                                            <label
                                                htmlFor="email"
                                                className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                            >
                                                Email<span className="text-red">*</span>
                                            </label>
                                            <input
                                                name="email"
                                                className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                                id="email"
                                                type="email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="message"
                                            className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                        >
                                            Message<span className="text-red">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                            required
                                            name="message"
                                            rows={5}
                                            defaultValue={''}
                                        />
                                    </div>
                                    <div className="mb-6 flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id="contact-form-consent-input"
                                            name="agree-to-terms"
                                            className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                                        />
                                        <label
                                            htmlFor="contact-form-consent-input"
                                            className="text-sm dark:text-jacarta-200"
                                        >
                                            I agree to the{' '}
                                            <a href="tos" className="text-accent">
                                                Terms of Service
                                            </a>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                        id="contact-form-submit"
                                    >
                                        Submit
                                    </button>
                                    <div
                                        id="contact-form-notice"
                                        className="relative mt-4 hidden rounded-lg border border-transparent p-4"
                                    />
                                </form>
                            </div>
                            {/* Info */}
                            <div className="lg:w-1/3 lg:pl-5">
                                <h2 className="mb-4 font-display text-xl text-jacarta-700 dark:text-white">
                                    Information
                                </h2>
                                <p className="mb-6 text-lg leading-normal dark:text-jacarta-300">
                                    Don&apos;t hesitaste, drop us a line Collaboratively administrate channels whereas
                                    virtual. Objectively seize scalable metrics whereas proactive e-services.
                                </p>
                                <div className="rounded-2.5xl border border-jacarta-100 bg-white p-10 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="fill-jacarta-400"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="block font-display text-base text-jacarta-700 dark:text-white">
                                                Phone
                                            </span>
                                            <a
                                                href="tel:123-123-456"
                                                className="text-sm hover:text-accent dark:text-jacarta-300"
                                            >
                                                (123) 123-456
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mb-6 flex items-center space-x-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="fill-jacarta-400"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="block font-display text-base text-jacarta-700 dark:text-white">
                                                Address
                                            </span>
                                            <address className="text-sm not-italic dark:text-jacarta-300">
                                                08 W 36th St, New YorkNY 10001
                                            </address>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-5">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                height={24}
                                                className="fill-jacarta-400"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                                            </svg>
                                        </span>
                                        <div>
                                            <span className="block font-display text-base text-jacarta-700 dark:text-white">
                                                Email
                                            </span>
                                            <a
                                                href="mailto:office@xhibiter.com"
                                                className="text-sm not-italic hover:text-accent dark:text-jacarta-300"
                                            >
                                                office@xhibiter.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end contact */}
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
        </>
    );
};

ContactPage.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { ContactPage };
