import { useFormik } from 'formik';
import React from 'react';
import { PropsWithChildren } from 'react';
import {
    CreateCollectionContext,
    CreateCollectionState,
    CreateCollectionStatus,
    CreateCollectionUploadImageState,
    CreateCollectionUploadImageStatus,
} from './index';
import { v4 as Uuid } from 'uuid';
import * as Yup from 'yup';

export type CreateCollectionProviderProps = PropsWithChildren;

export const CreateCollectionProvider = (props: CreateCollectionProviderProps) => {
    const { children } = props;

    const [id, setId] = React.useState(Uuid());

    const [state, setState] = React.useState<CreateCollectionState>({
        status: CreateCollectionStatus.INITIALIZING,
        error: '',
    });

    const [uploadLogoImageState, setUploadLogoImageState] = React.useState<CreateCollectionUploadImageState>({
        status: CreateCollectionUploadImageStatus.PENDING,
        error: '',
    });

    const [uploadFeaturedImageState, setUploadFeaturedImageState] = React.useState<CreateCollectionUploadImageState>({
        status: CreateCollectionUploadImageStatus.PENDING,
        error: '',
    });

    const [uploadBannerImageState, setUploadBannerImageState] = React.useState<CreateCollectionUploadImageState>({
        status: CreateCollectionUploadImageStatus.PENDING,
        error: '',
    });

    const form = useFormik({
        initialValues: {
            logoImage: '',
            featuredImage: '',
            bannerImage: '',
            name: '',
            url: '',
            description: '',
            category: '',
            links: {
                personal: '',
                medium: '',
                telegram: '',
            },
        },
        validationSchema: Yup.object({
            logoImage: Yup.string().required('Logo image is required'),
            featuredImage: Yup.string().required('Featured image is required'),
            bannerImage: Yup.string().required('Banner image is required'),
            name: Yup.string().required('Name is required'),
        }),
        onSubmit: (value) => handleSubmit(value),
        onReset: () => {
            setId(Uuid());
        },
    });

    const handleSubmit = async (value: any) => {
        console.log('handleSubmit:', id, value);

        setState(() => ({ status: CreateCollectionStatus.SUBMITTING }));

        setTimeout(() => {
            const r = Math.random() * 10;

            if (r > 5) {
                setState({
                    status: CreateCollectionStatus.SUBMIT_SUCCEEDED,
                });

                form.resetForm();
            } else {
                setState({
                    status: CreateCollectionStatus.SUBMIT_SUCCEEDED,
                    error: 'Something went wrong!!',
                });
            }
        }, 3000);
    };

    const handleUploadLogoImage = async (file?: File) => {
        setUploadLogoImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('logoImage', '');

        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 5) {
                setUploadLogoImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadLogoImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const base64 = await fileToBase64(file);
            form.setFieldValue('logoImage', base64);
        }, 4000);
    };

    const handleUploadFeaturedImage = async (file?: File) => {
        setUploadFeaturedImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('featuredImage', '');

        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 5) {
                setUploadFeaturedImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadFeaturedImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const base64 = await fileToBase64(file);
            form.setFieldValue('featuredImage', base64);
        }, 3000);
    };

    const handleUploadBannerImage = async (file?: File) => {
        setUploadBannerImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('bannerImage', '');

        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 5) {
                setUploadBannerImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadBannerImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const base64 = await fileToBase64(file);
            form.setFieldValue('bannerImage', base64);
        }, 3000);
    };

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setState({
                status: CreateCollectionStatus.INITIALIZE_SUCCEEDED,
                error: null,
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <CreateCollectionContext.Provider
            value={{
                id,
                categories: ['cat-1', 'cat-2', 'cat-3'],
                state,
                form,

                uploadLogoImageState,
                uploadFeaturedImageState,
                uploadBannerImageState,

                handleUploadLogoImage,
                handleUploadFeaturedImage,
                handleUploadBannerImage,
            }}
        >
            {children}
        </CreateCollectionContext.Provider>
    );
};

const fileToBase64 = (file?: File) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            return resolve('');
        }

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if (!reader.result || typeof reader.result != 'string') {
                return resolve('');
            }

            resolve(reader.result);
        };
    });
};
