import { ChangeEventHandler, MouseEventHandler } from 'react';
import { useCreateCollection } from '../../index';

export const FormCreateCollection = () => {
    const { state, form, categories } = useCreateCollection();

    const onInputNameChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        form.setFieldValue('name', e.target.value);
    };

    const onInputUrlChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        form.setFieldValue('url', e.target.value);
    };

    const onTextAreaDescriptionChanged: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        form.setFieldValue('description', e.target.value);
    };

    const handleOnCategoryItemClicked = (value: string) => {
        form.setFieldValue('category', value);
    };

    const onInputLinkPersonalChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        form.setFieldValue('links.personal', e.target.value);
    };

    const onInputLinkMediumChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        form.setFieldValue('links.medium', e.target.value);
    };

    const onInputLinkTelegramChanged: ChangeEventHandler<HTMLInputElement> = (e) => {
        form.setFieldValue('links.telegram', e.target.value);
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
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700"
                    style={{ width: '175px', height: '175px', borderRadius: '50%' }}
                >
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
                        <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">JPG, PNG. Max size: 10 MB</p>
                    </div>
                    <div
                        className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"
                        style={{ borderRadius: '50%' }}
                    ></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                    />
                </div>
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
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700"
                    style={{ width: '300px', height: '200px' }}
                >
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
                        <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">JPG, PNG. Max size: 100 MB</p>
                    </div>
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                    />
                </div>
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
                    className="group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed border-jacarta-100 bg-white py-20 px-5 text-center dark:border-jacarta-600 dark:bg-jacarta-700"
                    style={{ width: '700px', height: '175px' }}
                >
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
                        <p className="mx-auto max-w-xs text-xs dark:text-jacarta-300">JPG, PNG. Max size: 100 MB</p>
                    </div>
                    <div className="absolute inset-4 cursor-pointer rounded bg-jacarta-50 opacity-0 group-hover:opacity-100 dark:bg-jacarta-600"></div>
                    <input
                        type="file"
                        accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                        id="file-upload"
                        className="absolute inset-0 z-20 cursor-pointer opacity-0"
                    />
                </div>
            </div>

            {/* <!-- Name --> */}
            <div className="mb-6">
                <label htmlFor="item-name" className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Name<span className="text-red">*</span>
                </label>
                <input
                    type="text"
                    id="item-name"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="Collection Name"
                    required
                    onChange={onInputNameChanged}
                />
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
                    type="url"
                    id="item-external-link"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="https://yoursite.io/item/123"
                    onChange={onInputUrlChanged}
                />
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
                    id="item-description"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    rows={4}
                    required
                    placeholder="Provide a detailed description of your item."
                    onChange={onTextAreaDescriptionChanged}
                ></textarea>
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
                            {categories.map((category) => {
                                return (
                                    <li onClick={() => handleOnCategoryItemClicked(category)}>
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
            </div>

            {/* <!-- Links --> */}
            <div className="mb-6">
                <label htmlFor="item-name" className="mb-2 block font-display text-jacarta-700 dark:text-white">
                    Links
                </label>
                <input
                    type="text"
                    id="item-name"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="yoursite.io"
                    required
                    onChange={onInputLinkPersonalChanged}
                />
                <input
                    type="text"
                    id="item-name"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="https://www.medium.com/@YourMediumHandle"
                    required
                    onChange={onInputLinkMediumChanged}
                />
                <input
                    type="text"
                    id="item-name"
                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                    placeholder="https://t.me/abcdef"
                    required
                    onChange={onInputLinkTelegramChanged}
                />
            </div>

            {/* <!-- Submit --> */}
            <button
                className="cursor-default rounded-full bg-accent-lighter py-3 px-8 text-center font-semibold text-white transition-all"
                onClick={onButtonCreateClicked}
            >
                Create
            </button>
        </form>
    );
};
