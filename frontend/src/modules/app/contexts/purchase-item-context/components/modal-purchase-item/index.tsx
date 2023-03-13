import { useViewItem, ViewItemMode } from '@modules/app/contexts/view-item-context';
import { MouseEventHandler } from 'react';
import { PurchaseItemStatus, usePurchaseItem } from '../../index';

export const ModalPurchaseItem = () => {
    const { state, handlePurchase } = usePurchaseItem();
    const { selectedLicense } = useViewItem();

    const onButtonConfirmClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        handlePurchase();
    };

    return (
        <div className="modal fade" id="placeBidModal" tabIndex={-1} aria-labelledby="placeBidLabel" aria-hidden="true">
            <div className="modal-dialog max-w-2xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="placeBidLabel">
                            Confirm Purchase
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="modal-body p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="font-display text-sm font-semibold text-jacarta-700 dark:text-white">
                                Price
                            </span>
                        </div>

                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600">
                            <div className="flex flex-1 items-center self-stretch border-r border-jacarta-100 bg-jacarta-50 px-2">
                                <span className="font-display text-sm text-jacarta-700">SOL</span>
                            </div>

                            <input
                                readOnly
                                type="text"
                                className="h-12 w-full flex-[3] border-0 focus:ring-inset focus:ring-accent"
                                placeholder="Amount"
                                value={selectedLicense?.value || 'N/A'}
                            />
                        </div>

                        <div className="text-right">
                            <span className="text-sm dark:text-jacarta-400">Balance: 10.0000 SOL</span>
                        </div>

                        {/* <!-- Terms --> */}
                        <div className="mt-4 flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                            />
                            <label htmlFor="terms" className="text-sm dark:text-jacarta-200">
                                By checking this box, I agree to Demusify&apos;s{' '}
                                <a href="#" className="text-accent">
                                    Terms of Service
                                </a>
                            </label>
                        </div>
                    </div>
                    {/* <!-- end body --> */}

                    <div className="modal-footer">
                        <div className="flex items-center justify-center space-x-4">
                            <button
                                type="button"
                                className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                                onClick={onButtonConfirmClicked}
                                disabled={state.status == PurchaseItemStatus.PROCESSING}
                            >
                                {state.status == PurchaseItemStatus.PROCESSING ? 'Processing...' : 'Confirm'}
                                {state.error && <p className="mb-3 text-2xs text-red">{state.error}</p>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
