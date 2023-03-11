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

export type CreateCollectionState = {
    status: CreateCollectionStatus;
    error: string;
};

export type CreateCollectionFormState = FormikProps<{
    collectionId: string;
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

export type CreateCollectionContextValue = {
    state: CreateCollectionState;
    form: CreateCollectionFormState;
    categories: Array<string>;
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
