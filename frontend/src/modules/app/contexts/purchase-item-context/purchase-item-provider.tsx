import React from 'react';
import { PropsWithChildren } from 'react';
import { PurchaseItemContext, PurchaseItemState, PurchaseItemStatus } from './index';

export type PurchaseItemProviderProps = PropsWithChildren<{
    onPurchaseItemSucceeded: () => void;
}>;

export const PurchaseItemProvider = (props: PurchaseItemProviderProps) => {
    const { children, onPurchaseItemSucceeded } = props;

    const [state, setState] = React.useState<PurchaseItemState>({
        status: PurchaseItemStatus.PENDING,
        error: '',
    });

    const handlePurchase = async () => {
        setState({ status: PurchaseItemStatus.PROCESSING });

        setTimeout(() => {
            setState({ status: PurchaseItemStatus.PROCESS_SUCCEEDED });
            onPurchaseItemSucceeded?.();
        }, 2000);
    };

    return <PurchaseItemContext.Provider value={{ state, handlePurchase }}>{children}</PurchaseItemContext.Provider>;
};
