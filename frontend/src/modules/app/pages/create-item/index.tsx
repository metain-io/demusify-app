import { MainLayout } from '@modules/app/layouts';
import { ReactElement } from 'react';

const PageCreateItem = () => {
    return (
        <>
            <main className="columns-2">
                {/* <!-- Create --> */}
                <section className="relative py-24">
                    <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                        <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                    </picture>
                    <div className="container">
                        <h1 className="py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                            Create Item
                        </h1>

                        <div className="mx-auto max-w-[48.125rem]">
                            {/* <!-- Name --> */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-name"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Name<span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="item-name"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="Item name"
                                    required
                                />
                            </div>

                            {/* <!-- External Link --> */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-external-link"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    External link
                                </label>
                                <p className="mb-3 text-2xs dark:text-jacarta-300">
                                    Demusify will include a link to this URL on this item's detail page, so that user
                                    can click to learn more about it. You are welcome to link to your own webpage with
                                    nmore detail.
                                </p>
                                <input
                                    type="url"
                                    id="item-external-link"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="https://yoursite.io/item/123"
                                />
                            </div>

                            {/* <!-- Description --> */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-description"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Description
                                </label>
                                <p className="mb-3 text-2xs dark:text-jacarta-300">
                                    The description will be included on the item&apos;s detail page underneath its
                                    image. Markdown syntax is supported.
                                </p>
                                <textarea
                                    id="item-description"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    rows={4}
                                    required
                                    placeholder="Provide a detailed description of your item."
                                ></textarea>
                            </div>

                            {/* <!-- Collection --> */}
                            <div className="mb-6 relative">
                                <div>
                                    <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                                        Collection
                                    </label>
                                    <div className="mb-3 flex items-center space-x-2">
                                        <p className="text-2xs dark:text-jacarta-300">
                                            This is the collection where your item will appear.
                                            <span
                                                className="inline-block"
                                                data-tippy-content="Moving items to a different collection may take up to 30 minutes."
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    className="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                                                </svg>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="dropdown my-1 cursor-pointer">
                                    <div
                                        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3 px-3 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-jacarta-300"
                                        role="button"
                                        id="item-collection"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="">Select collection</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                        </svg>
                                    </div>

                                    <div
                                        className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                                        aria-labelledby="item-collection"
                                    >
                                        <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_1.png"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            CryptoKitties
                                                        </span>
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        className="mb-[3px] h-4 w-4 fill-accent"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_2.jpg"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            KaijuKings
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_3.png"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            Kumo x World
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_4.jpg"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            Irene DAO
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_5.png"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            GenerativeDungeon
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_6.jpg"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            ENS Domains
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                                                >
                                                    <span className="flex items-center space-x-3">
                                                        <img
                                                            src="img/avatars/collection_ava_7.png"
                                                            className="h-8 w-8 rounded-full"
                                                            loading="lazy"
                                                            alt="avatar"
                                                        />
                                                        <span className="text-jacarta-700 dark:text-white">
                                                            Cozy Penguin
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Supply --> */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-supply"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Supply
                                </label>

                                <div className="mb-3 flex items-center space-x-2">
                                    <p className="text-2xs dark:text-jacarta-300">
                                        The number of items that can be minted. No gas cost to you!
                                        <span
                                            className="inline-block"
                                            data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                                            </svg>
                                        </span>
                                    </p>
                                </div>

                                <input
                                    type="text"
                                    id="item-supply"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="1"
                                />
                            </div>

                            {/* <!-- Properties --> */}
                            <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                                        </svg>

                                        <div>
                                            <label className="block font-display text-jacarta-700 dark:text-white">
                                                Properties
                                            </label>
                                            <p className="dark:text-jacarta-300">
                                                Textual traits that show up as rectangles.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                                        type="button"
                                        id="item-properties"
                                        data-bs-toggle="modal"
                                        data-bs-target="#propertiesModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="fill-accent group-hover:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Levels --> */}
                            <div className="relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                                        </svg>

                                        <div>
                                            <label className="block font-display text-jacarta-700 dark:text-white">
                                                Levels
                                            </label>
                                            <p className="dark:text-jacarta-300">
                                                Numerical traits that show as a progress bar.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                                        type="button"
                                        id="item-levels"
                                        data-bs-toggle="modal"
                                        data-bs-target="#levelsModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="fill-accent group-hover:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Stats --> */}
                            <div className="mb-6 relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
                                        </svg>

                                        <div>
                                            <label className="block font-display text-jacarta-700 dark:text-white">
                                                Stats
                                            </label>
                                            <p className="dark:text-jacarta-300">
                                                Numerical traits that just show as numbers.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                                        type="button"
                                        id="item-stats"
                                        data-bs-toggle="modal"
                                        data-bs-target="#levelsModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="fill-accent group-hover:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Submit --> */}
                            <button className="cursor-default rounded-full bg-accent-lighter py-3 px-8 text-center font-semibold text-white transition-all">
                                Create
                            </button>
                        </div>
                    </div>
                </section>
                {/* <!-- end create --> */}
            </main>

            {/* <!-- Properties Modal --> */}
            <div
                className="modal fade"
                id="propertiesModal"
                tabIndex={-1}
                aria-labelledby="addPropertiesLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog max-w-2xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addPropertiesLabel">
                                Add properties
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Body --> */}
                        <div className="modal-body p-6">
                            <p className="mb-8 dark:text-jacarta-300">
                                Item Properties show up underneath your item, are clickable, and can be filtered in your
                                collection's sidebar.
                            </p>

                            <div className="relative my-3 flex items-center">
                                <button className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-l-lg border border-r-0 border-jacarta-100 bg-jacarta-50 hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-6 w-6 fill-jacarta-500 dark:fill-jacarta-300"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                                    </svg>
                                </button>

                                <div className="flex-1">
                                    <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                        Type
                                    </label>
                                    <input
                                        type="text"
                                        className="h-12 w-full border border-r-0 border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                        placeholder="Character"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-12 w-full rounded-r-lg border border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                        placeholder="Male"
                                    />
                                </div>
                            </div>

                            <button className="mt-2 rounded-full border-2 border-accent py-2 px-8 text-center text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white">
                                Add More
                            </button>
                        </div>
                        {/* <!-- end body --> */}

                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Levels Modal --> */}
            <div
                className="modal fade"
                id="levelsModal"
                tabIndex={-1}
                aria-labelledby="addLevelsLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog max-w-2xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addLevelsLabel">
                                Add levels
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Body --> */}
                        <div className="modal-body p-6">
                            <p className="mb-8 dark:text-jacarta-300">
                                Levels show up underneath your item, are clickable, and can be filtered in your
                                collection's sidebar.
                            </p>

                            <div className="relative my-3 flex items-center">
                                <button className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-l-lg border border-r-0 border-jacarta-100 bg-jacarta-50 hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-6 w-6 fill-jacarta-500 dark:fill-jacarta-300"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                                    </svg>
                                </button>

                                <div className="w-1/2">
                                    <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="h-12 w-full border border-r-0 border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                        placeholder="Speed"
                                    />
                                </div>

                                <div className="flex w-1/2 items-end">
                                    <div className="flex-1">
                                        <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                            Value
                                        </label>
                                        <input
                                            type="number"
                                            className="h-12 w-full border border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                            placeholder="3"
                                        />
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center self-end border-y border-jacarta-100 bg-jacarta-50 px-2 dark:border-jacarta-600 dark:bg-jacarta-800 dark:text-jacarta-400">
                                        Of
                                    </div>

                                    <div className="flex-1 self-end">
                                        <input
                                            type="number"
                                            className="h-12 w-full rounded-r-lg border border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                            placeholder="10"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className="mt-2 rounded-full border-2 border-accent py-2 px-8 text-center text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white">
                                Add More
                            </button>
                        </div>
                        {/* <!-- end body --> */}

                        <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                                <button
                                    type="button"
                                    className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

PageCreateItem.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageCreateItem };
