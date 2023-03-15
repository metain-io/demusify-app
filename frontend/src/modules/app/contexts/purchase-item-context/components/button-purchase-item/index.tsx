import { useViewItem, ViewItemMode, ViewItemStatus } from '@modules/app/contexts/view-item-context';
import { ModalPurchaseItem } from '../modal-purchase-item';

export const ButtonPurchaseItem = () => {
    const { state, selectedLicense, mode } = useViewItem();

    if (mode == ViewItemMode.VIEW_ONLY) {
        return <></>;
    }

    return (
        <>
            <button
                data-bs-toggle="modal"
                data-bs-target="#placeBidModal"
                className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                disabled={!selectedLicense || state.status == ViewItemStatus.LOADING}
            >
                PURCHASE LICENSE ({selectedLicense?.value || 0} SOL)
            </button>

            <ModalPurchaseItem />
        </>
    );
};
