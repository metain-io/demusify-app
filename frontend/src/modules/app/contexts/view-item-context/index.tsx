import React from 'react';

export enum ViewItemStatus {
    LOADING,
    LOAD_FAILED,
    LOAD_SUCCEEDED,
}

export enum ViewItemMode {
    VIEW_ONLY,
    PURCHASABLE,
}

export type ViewItemState = {
    status: ViewItemStatus;
    error?: string | null;
};

export type ViewItemContextValue = {
    state: ViewItemState;
    mode?: ViewItemMode;
    item: any;
    selectedLicense?: any;

    handleReload: () => Promise<void>;
    handleSelectedLicenseChanged: (license: any) => Promise<void>;
};

export const ViewItemContext = React.createContext<ViewItemContextValue>({} as ViewItemContextValue);

export const useViewItem = () => {
    const context = React.useContext(ViewItemContext);

    if (!Object.keys(context).length) {
        throw new Error('Missing wrap content with ViewItemContext.Provider');
    }

    return context;
};
