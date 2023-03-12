type TabActivitiesProps = {
    item?: any;
};

export const TabActivities = (props: TabActivitiesProps) => {
    return (
        <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
            {/* <!-- Filter --> */}
            <div className="border border-b-0 border-jacarta-100 bg-light-base px-4 pt-5 pb-2.5 dark:border-jacarta-600 dark:bg-jacarta-700">
                <div className="flex flex-wrap">
                    <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"></path>
                        </svg>
                        <span className="text-2xs font-medium">Listing</span>
                    </button>
                    <button className="mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent bg-accent px-4 py-3 hover:bg-accent-dark dark:hover:bg-accent-dark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
                        </svg>
                        <span className="text-2xs font-medium text-white">Bids</span>
                    </button>
                    <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>
                        </svg>
                        <span className="text-2xs font-medium">Transfers</span>
                    </button>
                    <button className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
                        </svg>
                        <span className="text-2xs font-medium">Sales</span>
                    </button>
                </div>
            </div>

            <div
                role="table"
                className="scrollbar-custom max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
            >
                <div className="sticky top-0 flex bg-light-base dark:bg-jacarta-600" role="row">
                    <div className="w-[17%] py-2 px-4" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Event
                        </span>
                    </div>
                    <div className="w-[17%] py-2 px-4" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Price
                        </span>
                    </div>
                    <div className="w-[22%] py-2 px-4" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            From
                        </span>
                    </div>
                    <div className="w-[22%] py-2 px-4" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            To
                        </span>
                    </div>
                    <div className="w-[22%] py-2 px-4" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Date
                        </span>
                    </div>
                </div>
                <div className="flex" role="row">
                    <div
                        className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>
                        </svg>
                        Bid
                    </div>
                    <div
                        className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <span className="-ml-1" data-tippy-content="ETH">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 1920 1920"
                                xmlSpace="preserve"
                                className="mr-1 h-4 w-4"
                            >
                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                <path
                                    fill="#62688F"
                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                ></path>
                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                            </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight text-green">30 ETH</span>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            AD496A
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            Polymorph: MORPH Token
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a
                            href="#"
                            className="flex flex-wrap items-center text-accent"
                            target="_blank"
                            rel="nofollow noopener"
                            title="Opens in a new window"
                            data-tippy-content="March 13 2022, 2:32 pm"
                        >
                            <span className="mr-1">19 days ago</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex" role="row">
                    <div
                        className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>
                        </svg>
                        Transfer
                    </div>
                    <div
                        className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <span className="-ml-1" data-tippy-content="ETH">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 1920 1920"
                                xmlSpace="preserve"
                                className="mr-1 h-4 w-4"
                            >
                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                <path
                                    fill="#62688F"
                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                ></path>
                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                            </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight text-green">.00510 ETH</span>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            The_vikk
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            Polymorph: MORPH Token
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <span className="mr-1 dark:text-jacarta-300">16 days ago</span>
                    </div>
                </div>
                <div className="flex" role="row">
                    <div
                        className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>
                        </svg>
                        Sale
                    </div>
                    <div
                        className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <span className="-ml-1" data-tippy-content="ETH">
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                viewBox="0 0 1920 1920"
                                xmlSpace="preserve"
                                className="mr-1 h-4 w-4"
                            >
                                <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z"></path>
                                <path
                                    fill="#62688F"
                                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                                ></path>
                                <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path>
                                <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path>
                                <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path>
                            </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight text-green">1.50 ETH</span>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            CryptoGuysNFT
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a href="user" className="text-accent">
                            Polymorph: MORPH Token
                        </a>
                    </div>
                    <div
                        className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                        role="cell"
                    >
                        <a
                            href="#"
                            className="flex flex-wrap items-center text-accent"
                            target="_blank"
                            rel="nofollow noopener"
                            title="Opens in a new window"
                            data-tippy-content="March 13 2022, 2:32 pm"
                        >
                            <span className="mr-1">19 days ago</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-4 w-4 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
