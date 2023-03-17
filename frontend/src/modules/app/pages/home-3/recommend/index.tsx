import { selectUserNftData } from '@modules/auth/redux/login/slice';
import { useSelector } from 'react-redux';
import { recommnededItems } from './data';

export const Recommend = () => {
    const userNftData = useSelector(selectUserNftData);

    const getNRandomElement = (arr: Array<any>, n: number) => {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len) n = len;
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    };

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
                    Recommended Tracks
                </h2>
                <div className="relative">
                    {/* Slider */}
                    <div className="swiper card-slider-4-columns !py-5">
                        <div className="swiper-wrapper">
                            {/* Slides */}
                            {userNftData?.items?.length &&
                                getNRandomElement(userNftData.items, 6).map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <article>
                                            <div className="block rounded-2.5xl border border-jacarta-900 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-900">
                                                <figure>
                                                    <a href={`view-item?itemId=${item.itemID}`}>
                                                        <img
                                                            src={item.coverArtImage}
                                                            alt={item.name}
                                                            className="w-full rounded-[0.625rem]"
                                                            loading="lazy"
                                                            style={{
                                                                width: '230px',
                                                                height: '230px',
                                                                objectFit: 'cover',
                                                            }}
                                                        />
                                                    </a>
                                                </figure>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <a
                                                        href={`view-item?itemId=${item.itemID}`}
                                                        style={{
                                                            maxWidth: '10rem',
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">
                                                            {item.name}
                                                        </span>
                                                    </a>
                                                    <span className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                                                        <span className="text-sm font-medium tracking-tight text-green">
                                                            {item.licenseMonetizations[0].value} SOL
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mt-2 text-sm">
                                                    <span className="dark:text-jacarta-300">
                                                        {item?.username?.substring(0, 12)}...
                                                    </span>
                                                    {/* <span className="text-jacarta-700 dark:text-jacarta-100">1.3 ETH</span> */}
                                                </div>
                                                <div className="mt-8 flex items-center justify-between">
                                                    <a
                                                        href={`view-item?itemId=${item.itemID}`}
                                                        // type="button"
                                                        className="font-display text-sm font-semibold text-accent"
                                                        // data-bs-toggle="modal"
                                                        // data-bs-target="#placeBidModal"
                                                    >
                                                        Get it now
                                                    </a>
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
                                                        <span className="text-sm dark:text-jacarta-200">
                                                            {item.liked || 0}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
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
    );
};
