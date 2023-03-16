import { useViewItem, ViewItemMode, ViewItemStatus } from '@modules/app/contexts/view-item-context';
import { PurchaseItemStatus, usePurchaseItem } from '../..';
import { ModalPurchaseItem } from '../modal-purchase-item';

export const ButtonPurchaseItem = () => {
    const { state, selectedLicense, mode } = useViewItem();
    const { state: purchaseState } = usePurchaseItem();

    if (mode == ViewItemMode.VIEW_ONLY) {
        return <></>;
    }

    return (
        <>
            <button
                data-bs-toggle="modal"
                data-bs-target="#placeBidModal"
                className="mb-6 inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                disabled={!selectedLicense || state.status == ViewItemStatus.LOADING}
            >
                {purchaseState.status == PurchaseItemStatus.PROCESSING
                    ? 'Processing...'
                    : `PURCHASE LICENSE (${selectedLicense?.value || 0} SOL)`}
            </button>

            {purchaseState.error && <p className="mb-3 text-2xs text-red">{purchaseState.error}</p>}

            <ModalPurchaseItem />
        </>
    );
};
