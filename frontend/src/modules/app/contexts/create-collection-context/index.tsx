import { FormikProps } from 'formik/dist/types';
import React from 'react';

export enum CreateCollectionStatus {
    INITIALIZING,
    INITIALIZE_FAILED,
    INITIALIZE_SUCCEEDED,

    SUBMITTING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export enum CreateCollectionUploadImageStatus {
    PENDING,
    UPLOADING,
    UPLOAD_FAILED,
    UPLOAD_SUCCEEDED,
}

export type CreateCollectionState = {
    status: CreateCollectionStatus;
    error?: string | null;
};

export type CreateCollectionFormState = FormikProps<{
    logoImage: string;
    featuredImage: string;
    bannerImage: string;
    name: string;
    url: string;
    description: string;
    category: string;
    links: {
        personal: string;
        medium: string;
        telegram: string;
    };
}>;

export type CreateCollectionUploadImageState = {
    status: CreateCollectionUploadImageStatus;
    error?: string | null;
};

export type CreateCollectionContextValue = {
    id: string;
    categories: Array<string>;
    state: CreateCollectionState;
    form: CreateCollectionFormState;

    uploadLogoImageState: CreateCollectionUploadImageState;
    uploadFeaturedImageState: CreateCollectionUploadImageState;
    uploadBannerImageState: CreateCollectionUploadImageState;

    handleUploadLogoImage: (file?: File) => Promise<void>;
    handleUploadFeaturedImage: (file?: File) => Promise<void>;
    handleUploadBannerImage: (file?: File) => Promise<void>;
};

export const CreateCollectionContext = React.createContext<CreateCollectionContextValue>(
    {} as CreateCollectionContextValue,
);

export const useCreateCollection = () => {
    const context = React.useContext(CreateCollectionContext);

    if (!Object.keys(context).length) {
        throw new Error('Missing wrap content with CreateCollectionContext.Provider');
    }

    return context;
};
