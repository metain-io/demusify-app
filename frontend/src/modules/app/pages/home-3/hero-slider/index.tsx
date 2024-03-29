import styles from "./heroSlider.module.css";

export const HeroSlider = () => {
    return (
        <section className="relative h-screen">
            <div className="after:absolute after:inset-0 after:bg-jacarta-900/60">
                <div className="container relative z-10 h-full pt-40">
                    <h1
                        className="font-display font-semibold text-white text-5xl"
                    >
                        <span className={styles.bigTitle}>
                            The<br/>
                            World's #1<br/>
                            music nft platform<br/>
                            licensing &amp; monetization<br/>
                        </span>
                        <span className={styles.smallTitle}>for independent creators</span>
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

                <video className="absolute inset-0 h-full w-full object-cover" playsInline autoPlay loop muted>
                    <source _ngcontent-lua-c431="" src="/video/home.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    );
};
