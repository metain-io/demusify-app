import { useViewItem } from '../../../index';

export const TabDetails = () => {
    const { item } = useViewItem();

    return (
        <div className="tab-pane fade active show" id="details" role="tabpanel" aria-labelledby="details-tab">
            <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10">
                <div className="mb-2 flex items-center">
                    <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">Token Mint Address</span>
                    <a
                        href={`https://solscan.io/address/${item.tokenMintAddress}?cluster=devnet`}
                        className="text-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.tokenMintAddress}
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 min-w-[9rem] dark:text-jacarta-300">Blockchain:</span>
                    <span className="text-jacarta-700 dark:text-white">SOLANA</span>
                </div>
            </div>
        </div>
    );
};
