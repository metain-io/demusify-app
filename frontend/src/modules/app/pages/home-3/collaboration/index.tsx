export const Collaboration = () => {
    return (
        <section className="relative py-24 dark:bg-jacarta-900">
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
                    The Power of<span className="highlight-text"> Collaboration</span>
                    <br /> <span style={{ fontSize: '24px' }}>with Demusify Splits</span>
                </h2>
                <div className="relative" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p>
                            It’s time for all of your collaborators to get paid easily. Split streaming & download
                            royalties between all contributors on any track or album.
                        </p>
                        <p>Breakout Artists, Rising Artists, and Pros get Splits free, with no commission fees.</p>
                    </div>

                    <div
                        className="frame circle"
                        style={{ width: '30%', position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ width: '300px', height: '150px', position: 'relative' }}>
                            <video
                                loop={true}
                                muted={true}
                                playsInline={true}
                                autoPlay={true}
                                className="img-resp frame-overlay-circle play-video-on-visible"
                                style={{ maxWidth: '100%' }}
                            >
                                <source type="video/mp4" src="/img/landing/cash_loop.mp4" />
                            </video>
                            <img
                                decoding="async"
                                src="/img/landing/collaboration.png"
                                className="frame-image circle"
                                alt="circle frame"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};