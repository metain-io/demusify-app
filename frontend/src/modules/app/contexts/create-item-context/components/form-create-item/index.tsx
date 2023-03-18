import React from 'react';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { CreateItemStatus, CreateItemUploadAssetStatus, useCreateItem } from '../../index';
import { ModalSubmitFailed } from '../modal-submit-failed';

const LeftSide = () => {
    const { form, uploadCoverArtImageState, uploadMusicState, handleUploadCoverArtImage, handleUploadMusic } =
        useCreateItem();

    const onFileUploadCoverArtImageChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        handleUploadCoverArtImage(e.target.files?.[0]);
        e.target.value = '';
    };

    const onFileUploadMusicChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        handleUploadMusic(e.target.files?.[0]);
        e.target.value = '';
    };

    return (
        <div className="w-full md:w-1/3 mx-auto">
            {/* <!-- File Upload Cover Art Image --> */}
            <div className="mb-6">
                <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Cover Art<span className="text-red">*</span>
                </label>

                <div
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700 overflow-hidden"
                    style={{ height: '200px' }}
                >
                    {form.values.coverArtImage && (
                        <img
                            className="absolute cursor-pointer rounded object-cover w-full h-full"
                            src={form.values.coverArtImage}
                        />
                    )}
                    <div className="relative z-10 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mb-4 inline-block fill-jacarta-500 dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                        </svg>
                        <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">
                            {uploadCoverArtImageState.status == CreateItemUploadAssetStatus.UPLOADING
                                ? 'Uploading...'
                                : 'JPG, PNG. Max size: 10 MB'}
                        </p>
                    </div>
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        onChange={onFileUploadCoverArtImageChanged}
                    />
                </div>

                {(form.errors.coverArtImage || uploadCoverArtImageState.error) && (
                    <p className="mt-1 text-2xs text-red">
                        {uploadCoverArtImageState.error || form.errors.coverArtImage}
                    </p>
                )}
            </div>

            {/* <!-- File Upload Music --> */}
            <div className="mb-6">
                <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Music<span className="text-red">*</span>
                </label>

                <div
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700"
                    style={{ height: '100px' }}
                >
                    {form.values.music && (
                        <img
                            className="absolute cursor-pointer rounded p-2 object-cover w-full h-full inset-2"
                            src={'img/logo_white.png'}
                        />
                    )}

                    {!form.values.music && (
                        <div className="relative z-10 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="mb-4 inline-block fill-jacarta-500 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                            </svg>
                            <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">
                                {uploadMusicState.status == CreateItemUploadAssetStatus.UPLOADING
                                    ? 'Uploading...'
                                    : 'Max size: 10 MB'}
                            </p>
                        </div>
                    )}
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        onChange={onFileUploadMusicChanged}
                    />
                </div>

                {(form.errors.music || uploadMusicState.error) && (
                    <p className="mt-1 text-2xs text-red">{uploadMusicState.error || form.errors.music}</p>
                )}
            </div>
        </div>
    );
};

declare var $: any;

const RightSide = () => {
    const { state, form, collections } = useCreateItem();

    const onButtonCreateClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        form.handleSubmit();

        // setTimeout(() => {
        //     (document!.querySelector('#buttonShowSubmitFailed')! as any).click();
        // }, 3000);
    };

    const handleSelectCollection = (collection: { id: string; name: string }) => {
        form.setFieldValue('collection', collection);
    };

    return (
        <>
            {/* Right Column */}
            <div className="w-full md:w-2/3 mx-auto">
                {/* <!-- Name --> */}
                <div className="mb-6">
                    <label htmlFor="item-name" className="mb-2 block font-display text-jacarta-700 dark:text-white">
                        Name<span className="text-red">*</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="item-name"
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="Item name"
                        required
                        value={form.values.name}
                        onChange={form.handleChange}
                    />
                    {form.errors.name && <p className="mt-1 text-2xs text-red">{form.errors.name}</p>}
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
                        Demusify will include a link to this URL on this item&apos;s detail page, so that user can click
                        to learn more about it. You are welcome to link to your own webpage with nmore detail.
                    </p>
                    <input
                        name="externalLink"
                        type="url"
                        id="item-external-link"
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="https://yoursite.io/item/123"
                        value={form.values.externalLink}
                        onChange={form.handleChange}
                    />
                    {form.errors.externalLink && <p className="mt-1 text-2xs text-red">{form.errors.externalLink}</p>}
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
                        The description will be included on the item&apos;s detail page underneath its image. Markdown
                        syntax is supported.
                    </p>
                    <textarea
                        name="description"
                        id="item-description"
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        rows={4}
                        required
                        placeholder="Provide a detailed description of your item."
                        value={form.values.description}
                        onChange={form.handleChange}
                    ></textarea>
                    {form.errors.description && <p className="mt-1 text-2xs text-red">{form.errors.description}</p>}
                </div>

                {/* <!-- Collection --> */}
                <div className="mb-6 relative">
                    <div>
                        <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                            Collection<span className="text-red">*</span>
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
                            <span className="">
                                {form.values.collection ? form.values.collection.name : 'Select collection'}
                            </span>
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
                                {collections.map((collection) => (
                                    <li key={collection.id} onClick={() => handleSelectCollection(collection)}>
                                        <a className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <span className="flex items-center space-x-3">
                                                <img
                                                    src="img/avatars/collection_ava_1.png"
                                                    className="h-8 w-8 rounded-full"
                                                    loading="lazy"
                                                    alt="avatar"
                                                />
                                                <span className="text-jacarta-700 dark:text-white">
                                                    {collection.name}
                                                </span>
                                            </span>

                                            {form.values.collection?.id == collection.id && (
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
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {form.errors.collection && <p className="mt-1 text-2xs text-red">{form.errors.collection}</p>}
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
                                <p className="dark:text-jacarta-300">Textual traits that show up as rectangles.</p>
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
                                <label className="block font-display text-jacarta-700 dark:text-white">Levels</label>
                                <p className="dark:text-jacarta-300">Numerical traits that show as a progress bar.</p>
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
                                <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
                            </svg>

                            <div>
                                <label className="block font-display text-jacarta-700 dark:text-white">Stats</label>
                                <p className="dark:text-jacarta-300">Numerical traits that just show as numbers.</p>
                            </div>
                        </div>
                        <button
                            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                            type="button"
                            id="item-stats"
                            data-bs-toggle="modal"
                            data-bs-target="#statsModal"
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

                {/* <!-- Licences & Monetization --> */}
                <div className="mb-6 relative border-b border-jacarta-100 py-6 dark:border-jacarta-600">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                width="24"
                                height="24"
                                className="mr-2 mt-px h-4 w-4 shrink-0 fill-jacarta-700 dark:fill-white"
                            >
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                            </svg>

                            <div>
                                <label className="block font-display text-jacarta-700 dark:text-white">
                                    Licences & Monetization<span className="text-red">*</span>
                                </label>
                                <p className="dark:text-jacarta-300">Pricing for each specific license.</p>
                            </div>
                        </div>
                        <button
                            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent bg-white hover:border-transparent hover:bg-accent dark:bg-jacarta-700"
                            type="button"
                            id="item-license-monetization"
                            data-bs-toggle="modal"
                            data-bs-target="#licencesMonetizationModal"
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

                    {form.errors.licenseMonetizations && (
                        <p className="mt-1 text-2xs text-red">{'Setting license monetization is required'}</p>
                    )}
                </div>

                {/* <!-- Submit --> */}
                <button
                    className="mb-6 cursor-pointer rounded-full bg-accent hover:bg-accent-dark py-3 px-8 text-center font-semibold text-white transition-all"
                    onClick={onButtonCreateClicked}
                    disabled={
                        state.status == CreateItemStatus.INITIALIZING || state.status == CreateItemStatus.SUBMITTING
                    }
                >
                    {state.status == CreateItemStatus.INITIALIZING
                        ? 'Initializing...'
                        : state.status == CreateItemStatus.SUBMITTING
                        ? 'Submitting...'
                        : 'Create'}
                </button>

                <button
                    data-bs-toggle="modal"
                    data-bs-target="#modalSubmitFailed"
                    id="buttonShowSubmitFailed"
                >
                </button>

                {state.error && (
                    <div className="mb-6">
                        <p className="mb-3 text-2xs text-red">{state.error}</p>
                    </div>
                )}

                {!state.error && state.status == CreateItemStatus.SUBMIT_SUCCEEDED && (
                    <div className="mb-6">
                        <p className="mb-3 text-2xs text-green">Submit succeeded!!</p>
                    </div>
                )}
            </div>

            <ModalSubmitFailed />
        </>
    );
};

export const FormCreateItem = () => {
    return (
        <>
            <LeftSide />
            <RightSide />
        </>
    );
};
