import { MainLayout } from '@modules/app/layouts';
import { selectLoginData } from '@modules/auth/redux/login/slice';
import React from 'react';
import { ReactElement } from 'react';
import { useFormik, useFormikContext } from 'formik';
import { useSelector } from 'react-redux';
import { DemusifyApi } from '@modules/common/api';
import logger from '@libs/logger';

const PageEditProfile = () => {
    const loginData = useSelector(selectLoginData)
    const [previewUrl, setPreviewUrl] = React.useState('');
    const [previewCoverImageUrl, setPreviewCoverImageUrl] = React.useState('');

    const userProfileFormik = useFormik({
        initialValues: {
            name: '',
            bio: '',
            email: '',
            twitterLink: '',
            instagramLink: '',
            yourSiteLink: '',
            avatarUrl: '',
            coverImageUrl: ''
        },
        onSubmit: async (values) => {
            try {
                await DemusifyApi.walletApp.updateCreator(loginData.username, {
                    name: userProfileFormik.values.name,
                    bio: userProfileFormik.values.bio,
                    email: userProfileFormik.values.email,
                    twitterLink: userProfileFormik.values.twitterLink,
                    instagramLink: userProfileFormik.values.instagramLink,
                    yourSiteLink: userProfileFormik.values.yourSiteLink,
                    avatarUrl: userProfileFormik.values.avatarUrl,
                    coverImageUrl: userProfileFormik.values.coverImageUrl
                });
                alert('Update success');
            } catch (err: any) {
                logger.debug('updateCreator --- ERROR: ', err);
                alert('Something went wrong. Update failed');
            }
        },
    });

    React.useEffect(() => {
        if (loginData && loginData.username) {
            userProfileFormik.setFieldValue('name', loginData.name);
            userProfileFormik.setFieldValue('bio', loginData.bio);
            userProfileFormik.setFieldValue('email', loginData.email);
            userProfileFormik.setFieldValue('twitterLink', loginData.twitterLink);
            userProfileFormik.setFieldValue('instagramLink', loginData.instagramLink);
            userProfileFormik.setFieldValue('yourSiteLink', loginData.yourSiteLink);
            userProfileFormik.setFieldValue('avatarUrl', loginData.avatarUrl);
        }
    }, [loginData])

    const changeAvatarImageHandler = (event: any) => {
        const previewUrl = URL.createObjectURL(event.target.files[0])
        console.log('changeAvatarImageHandler: ', previewUrl)
        previewUrl && userProfileFormik.setFieldValue('avatarUrl', previewUrl);
        setPreviewUrl(previewUrl);
    };

    const changeCoverImageHandler = (event: any) => {
        const previewUrl = URL.createObjectURL(event.target.files[0])
        console.log('changeCoverImageHandler: ', previewUrl)
        previewUrl && userProfileFormik.setFieldValue('coverImageUrl', previewUrl);
        setPreviewCoverImageUrl(previewUrl);
    };

    return (
        <main className="pt-[5.5rem] lg:pt-24">
            {/* <!-- Banner --> */}
            <div className="relative">
                <img
                    src={previewCoverImageUrl || 'img/user/banner.jpg'}
                    alt="banner"
                    className="h-[18.75rem] object-cover"
                    style={{width: '100%'}}
                />
                <div className="container relative -translate-y-4">
                    <div className="group absolute right-0 bottom-4 flex items-center rounded-lg bg-white py-2 px-4 font-display text-sm hover:bg-accent">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 cursor-pointer opacity-0"
                            onChange={changeCoverImageHandler}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-1 h-4 w-4 fill-jacarta-400 group-hover:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"></path>
                        </svg>
                        <span className="mt-0.5 block group-hover:text-white">Edit cover photo</span>
                    </div>
                </div>
            </div>
            {/* <!-- end banner --> */}

            {/* <!-- Edit Profile --> */}
            <section className="relative py-16 dark:bg-jacarta-800">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
                </picture>

                <form className="container" onSubmit={userProfileFormik.handleSubmit}>
                    <div className="mx-auto max-w-[48.125rem] md:flex">
                        {/* <!-- Form --> */}
                        <div className="mb-12 md:w-1/2 md:pr-8">
                            <div className="mb-6">
                                <label
                                    htmlFor="profile-username"
                                    className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                >
                                    Username<span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="Enter username"
                                    // required
                                    onChange={userProfileFormik.handleChange}
                                    value={userProfileFormik.values.name}
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="profile-bio"
                                    className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                >
                                    Bio<span className="text-red">*</span>
                                </label>
                                <textarea
                                    id="bio"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    // required
                                    placeholder="Tell the world your story!"
                                    value={userProfileFormik.values.bio}
                                    onChange={userProfileFormik.handleChange}
                                ></textarea>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="profile-email"
                                    className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                >
                                    Email address<span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="Enter email"
                                    // required
                                    onChange={userProfileFormik.handleChange}
                                    value={userProfileFormik.values.email}
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="profile-twitter"
                                    className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white"
                                >
                                    Links<span className="text-red">*</span>
                                </label>
                                <div className="relative">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="twitter"
                                        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 fill-jacarta-300 dark:fill-jacarta-400"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                    <input
                                        type="text"
                                        id="twitterLink"
                                        className="w-full rounded-t-lg border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="Twitter link"
                                        onChange={userProfileFormik.handleChange}
                                        value={userProfileFormik.values.twitterLink}
                                    />
                                </div>
                                <div className="relative">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 fill-jacarta-300 dark:fill-jacarta-400"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                    <input
                                        type="text"
                                        id="instagramLink"
                                        className="-mt-px w-full border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="Instagram link"
                                        onChange={userProfileFormik.handleChange}
                                        value={userProfileFormik.values.instagramLink}
                                    />
                                </div>
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
                                        type="url"
                                        id="yourSiteLink"
                                        className="-mt-px w-full rounded-b-lg border-jacarta-100 py-3 pl-10 hover:ring-2 hover:ring-accent/10 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="yoursitename.com"
                                        onChange={userProfileFormik.handleChange}
                                        value={userProfileFormik.values.yourSiteLink}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">
                                    Wallet Address
                                </label>
                                <span
                                    className="js-copy-clipboard flex w-full select-none items-center rounded-lg border border-jacarta-100 bg-white py-3 px-4 hover:bg-jacarta-50 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-jacarta-300"
                                    data-tippy-content="Copy"
                                >
                                    <span style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        {loginData.walletAddress}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="ml-auto mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"></path>
                                    </svg>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                            >
                                Update Profile
                            </button>
                        </div>

                        {/* <!-- Avatar --> */}
                        <div className="flex space-x-5 md:w-1/2 md:pl-8">
                            <div className="shrink-0">
                                <figure className="relative inline-block">
                                    <img
                                        src={previewUrl || loginData?.avatarUrl || 'img/user/user_avatar.gif'}
                                        alt="collection avatar"
                                        className="rounded-xl border-[5px] border-white dark:border-jacarta-600"
                                        style={{ height: '100px', width: '100px' }}
                                    />
                                    <div className="group absolute -right-3 -bottom-2 h-8 w-8 overflow-hidden rounded-full border border-jacarta-100 bg-white text-center hover:border-transparent hover:bg-accent">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute top-0 left-0 w-full cursor-pointer opacity-0"
                                            onChange={changeAvatarImageHandler}
                                        />
                                        <div className="flex h-full items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                className="h-4 w-4 fill-jacarta-400 group-hover:fill-white"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" />
                                            </svg>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="mt-4">
                                <span className="mb-3 block font-display text-sm text-jacarta-700 dark:text-white">
                                    Profile Image
                                </span>
                                <p className="text-sm leading-normal dark:text-jacarta-300">
                                    We recommend an image of at least 300x300. Gifs work too. Max 5mb.
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            {/* <!-- end edit profile --> */}
        </main>
    );
};

PageEditProfile.getLayout = (page: ReactElement) => {
    return <MainLayout>{page}</MainLayout>;
};

export { PageEditProfile };
