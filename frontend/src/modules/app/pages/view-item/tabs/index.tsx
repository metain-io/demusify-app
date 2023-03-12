import { TabActivities } from './tab-activities';
import { TabDetails } from './tab-detail';
import { TabLevels } from './tab-levels';
import { TabProperties } from './tab-properties';
import { TabStats } from './tab-stats';

type TabsProps = {
    item?: any;
};

export const Tabs = (props: TabsProps) => {
    const { item } = props;
    return (
        <div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">
            <div className="min-w-fit">
                {/* <!-- Tabs Nav --> */}
                <ul className="nav nav-tabs flex items-center" role="tablist">
                    {/* <!-- Properties --> */}
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="properties-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#properties"
                            type="button"
                            role="tab"
                            aria-controls="properties"
                            aria-selected="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 h-5 w-5 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                            </svg>
                            <span className="font-display text-base font-medium">Properties</span>
                        </button>
                    </li>

                    {/* <!-- Details --> */}
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#details"
                            type="button"
                            role="tab"
                            aria-controls="details"
                            aria-selected="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 h-5 w-5 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
                            </svg>
                            <span className="font-display text-base font-medium">Details</span>
                        </button>
                    </li>

                    {/* <!-- Activity --> */}
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="activity-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#activity"
                            type="button"
                            role="tab"
                            aria-controls="activity"
                            aria-selected="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 h-5 w-5 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                            </svg>
                            <span className="font-display text-base font-medium">Activity</span>
                        </button>
                    </li>

                    {/* <!-- Stats --> */}
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="stats-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#stats"
                            type="button"
                            role="tab"
                            aria-controls="activity"
                            aria-selected="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 h-5 w-5 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                            </svg>
                            <span className="font-display text-base font-medium">Stats</span>
                        </button>
                    </li>

                    {/* <!-- Levels --> */}
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="levels-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#levels"
                            type="button"
                            role="tab"
                            aria-controls="activity"
                            aria-selected="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mr-1 h-5 w-5 fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                            </svg>
                            <span className="font-display text-base font-medium">Levels</span>
                        </button>
                    </li>
                </ul>

                {/* <!-- Tab Content --> */}
                <div className="tab-content">
                    {/* <!-- Properties --> */}
                    <TabProperties item={item} />

                    {/* <!-- Details --> */}
                    <TabDetails item={item} />

                    {/* <!-- Activity --> */}
                    <TabActivities item={item} />

                    {/* <!-- Stats --> */}
                    <TabStats item={item} />

                    {/* <!-- Levels --> */}
                    <TabLevels item={item} />
                </div>
            </div>
        </div>
    );
};
