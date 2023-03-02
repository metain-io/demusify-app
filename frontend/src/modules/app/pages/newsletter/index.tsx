import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';
import Image from 'next/image';

const PageNewsletter = () => {
    return (
        <main className="pt-[5.5rem] lg:pt-24">
            {/* <!-- Newsletter --> */}
            <section className="relative py-24 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <Image src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        {/* <!-- Info --> */}
                        <div className="pb-10 lg:w-[45%] lg:py-20 lg:pr-16">
                            <h2 className="mb-6 font-display text-2xl text-jacarta-700 dark:text-white">
                                Sign up for The Tide, Xhibiter&apos;s newsletter!
                            </h2>
                            <p className="mb-10 text-lg leading-normal dark:text-jacarta-300">
                                Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
                                and tips and tricks for navigating Xhibiter
                            </p>

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

                        {/* <!-- Image --> */}
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
                                            ></path>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clipping)">
                                        {/* <!-- Bg image --> */}
                                        <image
                                            href="img/about/story.jpg"
                                            width="200"
                                            height="200"
                                            clip-path="url(#clipping)"
                                        />
                                    </g>
                                </svg>
                                <Image src="img/hero/3D_elements.png" alt="" className="absolute top-0 animate-fly" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end newsletter --> */}
        </main>
    );
};

PageNewsletter.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageNewsletter };
