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

        // TODO: Replace with real api call
        setTimeout(() => {
            const r = Math.random() * 10;

            if (r < 3) {
                setState({
                    status: CreateCollectionStatus.SUBMIT_FAILED,
                    error: 'Something went wrong!!',
                });
                return;
            }

            setState({
                status: CreateCollectionStatus.SUBMIT_SUCCEEDED,
            });

            form.resetForm();
        }, 3000);
    };

    const handleUploadLogoImage = async (file?: File) => {
        if (!file) {
            return;
        }

        setUploadLogoImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('logoImage', '');

        // TODO: Replace with real api call
        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 3) {
                setUploadLogoImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadLogoImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const url = URL.createObjectURL(file);
            form.setFieldValue('logoImage', url);
        }, 4000);
    };

    const handleUploadFeaturedImage = async (file?: File) => {
        if (!file) {
            return;
        }

        setUploadFeaturedImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('featuredImage', '');

        // TODO: Replace with real api call
        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 3) {
                setUploadFeaturedImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadFeaturedImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const url = URL.createObjectURL(file);
            form.setFieldValue('featuredImage', url);
        }, 3000);
    };

    const handleUploadBannerImage = async (file?: File) => {
        if (!file) {
            return;
        }

        setUploadBannerImageState(() => ({
            status: CreateCollectionUploadImageStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('bannerImage', '');

        // TODO: Replace with real api call
        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 3) {
                setUploadBannerImageState(() => ({
                    status: CreateCollectionUploadImageStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadBannerImageState(() => ({
                status: CreateCollectionUploadImageStatus.UPLOAD_SUCCEEDED,
            }));

            const url = URL.createObjectURL(file);
            form.setFieldValue('bannerImage', url);
        }, 3000);
    };

    React.useEffect(() => {
        // TODO: Check if need any initial process
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
