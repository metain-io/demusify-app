import React from 'react';
import { ModalItemHistoryTransaction } from '../modal-item-transaction-history';
import { TabCreations } from './tab-creations';
import { TabLicenses } from './tab-licenses';

export const Tabs = () => {
    const [selectedItem, setSelectedItem] = React.useState<any>(null);

    const onItemSelected = (item: any) => {
        setSelectedItem(item);
    };

    return (
        <>
            <section className="relative py-24 pt-20">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>
                <div className="container">
                    {/* <!-- Tabs Nav --> */}
                    <ul
                        className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                id="owned-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#owned"
                                type="button"
                                role="tab"
                                aria-controls="owned"
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
                                    <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 8h3l-4 4-4-4h3V9h2v4z" />
                                </svg>
                                <span className="font-display text-base font-medium">Licensed</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                                id="created-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#created"
                                type="button"
                                role="tab"
                                aria-controls="created"
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
                                    <path d="M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z" />
                                </svg>
                                <span className="font-display text-base font-medium">Created</span>
                            </button>
                        </li>
                    </ul>

                    {/* <!-- Tabs Content --> */}
                    <div className="tab-content">
                        {/* <!-- Licensed Tab --> */}
                        <TabLicenses onItemSelected={onItemSelected} />

                        {/* <!-- Created Tab --> */}
                        <TabCreations onItemSelected={onItemSelected} />
                    </div>
                </div>
            </section>

            <ModalItemHistoryTransaction item={selectedItem} />
        </>
    );
};
