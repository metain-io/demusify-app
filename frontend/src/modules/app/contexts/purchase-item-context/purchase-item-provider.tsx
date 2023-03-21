import { selectLoginData } from '@modules/auth/redux/login/slice';
import { DemusifyApi } from '@modules/common/api';
import React from 'react';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { useViewItem } from '../view-item-context';
import { PurchaseItemContext, PurchaseItemState, PurchaseItemStatus } from './index';
import CryptoWalletService from '@modules/crypto-wallet/services/crypto-wallet-service';

export type PurchaseItemProviderProps = PropsWithChildren<{
    onPurchaseItemSucceeded: () => void;
}>;

export const PurchaseItemProvider = (props: PurchaseItemProviderProps) => {
    const { children, onPurchaseItemSucceeded } = props;
    const { item, selectedLicense } = useViewItem();
    const loginData = useSelector(selectLoginData);

    const [state, setState] = React.useState<PurchaseItemState>({
        status: PurchaseItemStatus.PENDING,
        error: '',
    });

    const handlePurchase = async () => {
        if (!item || !item.itemID || !selectedLicense || !loginData) {
            console.log('Not enough condition to run this function');
            return;
        }

        try {
            setState(() => ({ status: PurchaseItemStatus.PROCESSING }));

            const signature = await CryptoWalletService.transferSol(
                process.env.NEXT_PUBLIC_DEMUSIFY_SOLANA_TREASURY_WALLET as string,
                selectedLicense.value,
            );
            console.log('handlePurchase', { signature });
            await DemusifyApi.itemPayment.createItemPayment({
                itemId: item.itemID,
                licenseId: selectedLicense.id,
                payerAddress: loginData.walletAddress,
                paymentSignature: signature,
            });

            setState(() => ({ status: PurchaseItemStatus.PROCESS_SUCCEEDED }));
            onPurchaseItemSucceeded?.();
        } catch (error: any) {
            setState(() => ({ status: PurchaseItemStatus.PROCESS_FAILED, error: error.message }));
        }
    };

    return <PurchaseItemContext.Provider value={{ state, handlePurchase }}>{children}</PurchaseItemContext.Provider>;
};
