import React from 'react';

export enum PurchaseItemStatus {
    PENDING,
    PROCESSING,
    PROCESS_FAILED,
    PROCESS_SUCCEEDED,
}

export type PurchaseItemState = {
    status: PurchaseItemStatus;
    error?: string | null;
};

export type PurchaseItemContextValue = {
    state: PurchaseItemState;

    handlePurchase: () => Promise<void>;
};

export const PurchaseItemContext = React.createContext<PurchaseItemContextValue>({} as PurchaseItemContextValue);

export const usePurchaseItem = () => {
    const context = React.useContext(PurchaseItemContext);

    if (!Object.keys(context).length) {
        throw new Error('Missing wrap content with PurchaseItemContext.Provider');
    }

    return context;
};
