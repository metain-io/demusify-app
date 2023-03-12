export const HeroSlider = () => {
    return (
        <section className="relative h-screen">
            <div className="after:absolute after:inset-0 after:bg-jacarta-900/60">
                <div className="container relative z-10 h-full pt-40">
                    <h1
                        className="font-display font-semibold text-white text-5xl"
                        style={{ textTransform: 'uppercase', maxWidth: '30rem', fontSize: '72px' }}
                    >
                        <span>The World&apos;s&nbsp;</span>
                        #1 Marketplace to buy &amp; sell music licenses
                    </h1>

                    <div
                        className="text-xl"
                        style={{
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center',
                            justifyContent: 'flext-start',
                            flexWrap: 'wrap',
                        }}
                    >
                        <h2 className="font-bold text-2xl text-dark">Trending:</h2>
                        <a className="text-md md:text-xl block rounded-xl border border-jacarta-100 bg-white p-1 px-3 dark:border-jacarta-700 dark:bg-jacarta-700 dark:text-jacarta-300">
                            trap
                        </a>
                        <a className="text-md md:text-xl block rounded-xl border border-jacarta-100 bg-white p-1 px-3 dark:border-jacarta-700 dark:bg-jacarta-700 dark:text-jacarta-300">
                            drake
                        </a>
                        <a className="text-md md:text-xl block rounded-xl border border-jacarta-100 bg-white p-1 px-3 dark:border-jacarta-700 dark:bg-jacarta-700 dark:text-jacarta-300">
                            big scarr
                        </a>
                        <a className="text-md md:text-xl block rounded-xl border border-jacarta-100 bg-white p-1 px-3 dark:border-jacarta-700 dark:bg-jacarta-700 dark:text-jacarta-300">
                            juice wrld type beat
                        </a>
                        <a className="text-md md:text-xl block rounded-xl border border-jacarta-100 bg-white p-1 px-3 dark:border-jacarta-700 dark:bg-jacarta-700 dark:text-jacarta-300">
                            lil baby
                        </a>
                    </div>
                </div>

                <video className="absolute inset-0 h-full w-full object-cover" playsInline autoPlay loop>
                    <source _ngcontent-lua-c431="" src="/video/beatstars-home.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};
