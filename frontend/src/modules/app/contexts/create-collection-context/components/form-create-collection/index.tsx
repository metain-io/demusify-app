import React from 'react';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { CreateCollectionStatus, CreateCollectionUploadImageStatus, useCreateCollection } from '../../index';

export const FormCreateCollection = () => {
    const {
        state,
        form,
        categories,
        uploadLogoImageState,
        uploadFeaturedImageState,
        uploadBannerImageState,
        handleUploadLogoImage,
        handleUploadFeaturedImage,
        handleUploadBannerImage,
    } = useCreateCollection();

    const onFileUploadLogoImageChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        handleUploadLogoImage(e.target.files?.[0]);
        e.target.value = '';
    };

    const onFileUploadFeaturedImageChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        handleUploadFeaturedImage(e.target.files?.[0]);
        e.target.value = '';
    };

    const onFileUploadBannerImageChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        handleUploadBannerImage(e.target.files?.[0]);
        e.target.value = '';
    };

    const onCategoryItemClicked = (value: string) => {
        form.setFieldValue('category', value);
    };

    const onButtonCreateClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        form.handleSubmit();
    };

    return (
        <form className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload Logo Image --> */}
            <div className="mb-6">
                <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Logo Image<span className="text-red">*</span>
                </label>
                <p className="mb-3 text-2xs dark:text-jacarta-300">
                    This image will also be used for navigation. 350 x 350 recommended.
                </p>

                <div
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700 overflow-hidden"
                    style={{ width: '175px', height: '175px', borderRadius: '50%' }}
                >
                    {form.values.logoImage && (
                        <img
                            className="absolute cursor-pointer rounded"
                            style={{ borderRadius: '50%', width: '175px', height: '175px', objectFit: 'cover' }}
                            src={form.values.logoImage}
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
                            {uploadLogoImageState.status == CreateCollectionUploadImageStatus.UPLOADING
                                ? 'Uploading...'
                                : 'JPG, PNG. Max size: 10 MB'}
                        </p>
                    </div>
                    <div
                        className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"
                        style={{ borderRadius: '50%' }}
                    ></div>
                    <input
                        type="file"
                        accept="image/*"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        onChange={onFileUploadLogoImageChanged}
                    />
                </div>

                {(form.errors.logoImage || uploadLogoImageState.error) && (
                    <p className="mt-1 text-2xs text-red">{uploadLogoImageState.error || form.errors.logoImage}</p>
                )}
            </div>

            {/* <!-- File Upload Featured Image --> */}
            <div className="mb-6">
                <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Featured Image<span className="text-red">*</span>
                </label>
                <p className="mb-3 text-2xs dark:text-jacarta-300">
                    This image will be used for featuring your collection on the homepage, category pages, or other
                    promotional areas of Demusify. 600 x 400 recommended.
                </p>

                <div
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700 overflow-hidden"
                    style={{ width: '300px', height: '200px' }}
                >
                    {form.values.featuredImage && (
                        <img
                            className="absolute cursor-pointer rounded"
                            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                            src={form.values.featuredImage}
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
                            {uploadFeaturedImageState.status == CreateCollectionUploadImageStatus.UPLOADING
                                ? 'Uploading...'
                                : 'JPG, PNG. Max size: 100 MB'}
                        </p>
                    </div>
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        onChange={onFileUploadFeaturedImageChanged}
                    />
                </div>

                {(form.errors.featuredImage || uploadFeaturedImageState.error) && (
                    <p className="mt-1 text-2xs text-red">
                        {uploadFeaturedImageState.error || form.errors.featuredImage}
                    </p>
                )}
            </div>

            {/* <!-- File Upload Banner Image --> */}
            <div className="mb-6">
                <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Banner Image<span className="text-red">*</span>
                </label>
                <p className="mb-3 text-2xs dark:text-jacarta-300">
                    This image will appear at the top of your collection page. Avoid including too much textin this
                    banner image, as the dimensions change on different devices. 1400 x 350 recommended.
                </p>

                <div
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700 overflow-hidden"
                    style={{ width: '700px', height: '175px' }}
                >
                    {form.values.bannerImage && (
                        <img
                            className="absolute cursor-pointer rounded"
                            style={{ width: '700px', height: '175px', objectFit: 'cover' }}
                            src={form.values.bannerImage}
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
                            {uploadBannerImageState.status == CreateCollectionUploadImageStatus.UPLOADING
                                ? 'Uploading...'
                                : 'JPG, PNG. Max size: 100 MB'}
                        </p>
                    </div>
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                        onChange={onFileUploadBannerImageChanged}
                    />
                </div>

                {(form.errors.bannerImage || uploadBannerImageState.error) && (
                    <p className="mt-1 text-2xs text-red">{uploadBannerImageState.error || form.errors.bannerImage}</p>
                )}
            </div>

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
                    placeholder="Collection Name"
                    required
                    value={form.values.name}
                    onChange={form.handleChange}
                />
                {form.errors.name && <p className="mt-1 text-2xs text-red">{form.errors.name}</p>}
            </div>

            {/* <!-- URL --> */}
            <div className="mb-6">
                <label
                    htmlFor="item-external-link"
                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                >
                    URL
                </label>
                <p className="mb-3 text-2xs dark:text-jacarta-300">
                    Customize your URL on Demusify. Must only contain lowercase letters, numbers and hyphens
                </p>
                <input
                    name="url"
                    type="url"
                    id="item-external-link"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="https://yoursite.io/item/123"
                    value={form.values.url}
                    onChange={form.handleChange}
                />

                {form.errors.url && <p className="mt-1 text-2xs text-red">{form.errors.url}</p>}
            </div>

            {/* <!-- Description --> */}
            <div className="mb-6">
                <label htmlFor="item-description" className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Description
                </label>
                <p className="mb-3 text-2xs dark:text-jacarta-300">
                    <a href="#">Markdown</a> syntax is supported. 0 of 1000 charaters used
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

            {/* <!-- Category --> */}
            <div className="mb-6 relative">
                <div>
                    <label className="mb-2 block font-display text-jacarta-700 dark:text-white">Category</label>
                    <div className="mb-3 flex items-center space-x-2">
                        <p className="text-2xs dark:text-jacarta-300">
                            Make your collection discoverable on Demusify by adding a category
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
                        <span className="">{form.values.category || 'Select Category'}</span>

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
                            {categories.map((category, index) => {
                                return (
                                    <li key={index} onClick={() => onCategoryItemClicked(category)}>
                                        <a className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                                            <span className="flex items-center space-x-3">
                                                <img
                                                    src="img/avatars/collection_ava_1.png"
                                                    className="h-8 w-8 rounded-full"
                                                    loading="lazy"
                                                    alt="avatar"
                                                />
                                                <span className="text-jacarta-700 dark:text-white">{category}</span>
                                            </span>

                                            {form.values.category == category && (
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
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {form.errors.category && <p className="mt-1 text-2xs text-red">{form.errors.category}</p>}
            </div>

            {/* <!-- Links --> */}
            <div className="mb-6">
                <label htmlFor="item-name" className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Links
                </label>

                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 fill-jacarta-300 dark:fill-jacarta-400"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                    </svg>
                    <input
                        name="links.personal"
                        type="text"
                        id="item-name"
                        className="w-full rounded-t-lg border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        // className="mb-2 w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="yoursite.io"
                        required
                        value={form.values.links?.personal}
                        onChange={form.handleChange}
                    />
                </div>
                {form.errors.links?.personal && <p className="mt-1 text-2xs text-red">{form.errors.links?.personal}</p>}

                <div className="relative">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="medium"
                        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 fill-jacarta-300 dark:fill-jacarta-400"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                    </svg>
                    <input
                        name="links.medium"
                        type="text"
                        id="item-name"
                        className="-mt-px w-full border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        // className="mb-2 w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="https://www.medium.com/@YourMediumHandle"
                        required
                        value={form.values.links?.medium}
                        onChange={form.handleChange}
                    />
                </div>
                {form.errors.links?.medium && <p className="mt-1 text-2xs text-red">{form.errors.links?.medium}</p>}

                <div className="relative">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="telegram"
                        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 fill-jacarta-300 dark:fill-jacarta-400"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                    </svg>
                    <input
                        name="links.telegram"
                        type="text"
                        id="item-name"
                        className="-mt-px w-full rounded-b-lg border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        // className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        placeholder="https://t.me/abcdef"
                        required
                        value={form.values.links?.telegram}
                        onChange={form.handleChange}
                    />
                </div>
                {form.errors.links?.telegram && <p className="mt-1 text-2xs text-red">{form.errors.links?.telegram}</p>}
            </div>

            {/* <!-- Submit --> */}
            <button
                className="mb-6 cursor-pointer rounded-full bg-accent hover:bg-accent-dark py-3 px-8 text-center font-semibold text-white transition-all"
                onClick={onButtonCreateClicked}
                disabled={
                    state.status == CreateCollectionStatus.INITIALIZING ||
                    state.status == CreateCollectionStatus.SUBMITTING
                }
            >
                {state.status == CreateCollectionStatus.INITIALIZING
                    ? 'Initializing...'
                    : state.status == CreateCollectionStatus.SUBMITTING
                    ? 'Submitting...'
                    : 'Create'}
            </button>

            {state.error && (
                <div className="mb-6">
                    <p className="mb-3 text-2xs text-red">{state.error}</p>
                </div>
            )}

            {!state.error && state.status == CreateCollectionStatus.SUBMIT_SUCCEEDED && (
                <div className="mb-6">
                    <p className="mb-3 text-2xs text-green">Submit succeeded!!</p>
                </div>
            )}
        </form>
    );
};
