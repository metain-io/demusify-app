import { FormikProps } from 'formik/dist/types';
import React from 'react';

export enum CreateItemStatus {
    INITIALIZING,
    INITIALIZE_FAILED,
    INITIALIZE_SUCCEEDED,

    SUBMITTING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export enum CreateItemUploadAssetStatus {
    PENDING,
    UPLOADING,
    UPLOAD_FAILED,
    UPLOAD_SUCCEEDED,
}

export type CreateItemState = {
    status: CreateItemStatus;
    error?: string | null;
};

export type CreateItemFormState = FormikProps<{
    coverArtImage: string;
    music: string;
    musicFingerprint: string;

    name: string;
    externalLink: string;
    description: string;
    collectionId: string;
    supply: number;
    properties: Array<{
        id: string;
        name: string;
        value: string;
    }>;
    levels: Array<{
        id: string;
        name: string;
        value: string;
        total: string;
    }>;
    stats: Array<{
        id: string;
        name: string;
        value: string;
        total: string;
    }>;
}>;

export type CreateItemUploadAssetState = {
    status: CreateItemUploadAssetStatus;
    error?: string | null;
};

export type CreateItemContextValue = {
    id: string;
    collections: Array<any>;
    state: CreateItemState;
    form: CreateItemFormState;

    uploadCoverArtImageState: CreateItemUploadAssetState;
    uploadMusicState: CreateItemUploadAssetState;

    handleUploadCoverArtImage: (file?: File) => Promise<void>;
    handleUploadMusic: (file?: File) => Promise<void>;

    handleAddNewProperty: () => Promise<void>;
    handleUpdatePropertyName: (id: string, name: string) => Promise<void>;
    handleUpdatePropertyValue: (id: string, value: string) => Promise<void>;
    handleDeleteProperty: (id: string) => Promise<void>;

    handleAddNewLevel: () => Promise<void>;
    handleUpdateLevelName: (id: string, name: string) => Promise<void>;
    handleUpdateLevelValue: (id: string, value: string) => Promise<void>;
    handleUpdateLevelTotal: (id: string, total: string) => Promise<void>;
    handleDeleteLevel: (id: string) => Promise<void>;

    handleAddNewStat: () => Promise<void>;
    handleUpdateStatName: (id: string, name: string) => Promise<void>;
    handleUpdateStatValue: (id: string, value: string) => Promise<void>;
    handleUpdateStatTotal: (id: string, total: string) => Promise<void>;
    handleDeleteStat: (id: string) => Promise<void>;
};

export const CreateItemContext = React.createContext<CreateItemContextValue>({} as CreateItemContextValue);

export const useCreateItem = () => {
    const context = React.useContext(CreateItemContext);

    if (!Object.keys(context).length) {
        throw new Error('Missing wrap content with CreateItemContext.Provider');
    }

    return context;
};
