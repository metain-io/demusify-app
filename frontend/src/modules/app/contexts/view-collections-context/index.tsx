import React from 'react';

export enum ViewCollectionsStatus {
    LOADING,
    LOAD_FAILED,
    LOAD_SUCCEEDED,
}

export type ViewCollectionsState = {
    status: ViewCollectionsStatus;
    error?: string | null;
    filterQuery?: any;
};

export type ViewCollectionsContextValue = {
    state: ViewCollectionsState;
    collections: Array<any>;

    handleReload: () => Promise<void>;
    handleLoadingMore: () => Promise<void>;
    handleFilter: (filterQuery: any) => Promise<void>;
};

export const ViewCollectionsContext = React.createContext<ViewCollectionsContextValue>(
    {} as ViewCollectionsContextValue,
);

export const useViewCollections = () => {
    const context = React.useContext(ViewCollectionsContext);

    if (!Object.keys(context).length) {
        throw new Error('Missing wrap content with ViewCollectionsContext.Provider');
    }

    return context;
};
