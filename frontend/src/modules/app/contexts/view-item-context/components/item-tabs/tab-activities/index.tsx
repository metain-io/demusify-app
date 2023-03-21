import { DemusifyApi } from '@modules/common/api';
import React from 'react';
import { useViewItem } from '../../../index';

export const TabActivities = () => {
    const { item } = useViewItem();

    const [transactions, setTransactions] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        if (!item) return;

        DemusifyApi.items.getListItemTransactions(item.itemID).then((transactions) => setTransactions(transactions));
    }, [item]);

    return (
        <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
            <div
                role="table"
                className="scrollbar-custom grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                style={{
                    gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                }}
            >
                <div className="contents" role="row">
                    {/* TYPE */}
                    <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Type
                        </span>
                    </div>

                    {/* TxID */}
                    <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            TxID
                        </span>
                    </div>

                    {/* Date */}
                    <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Date
                        </span>
                    </div>

                    {/* Price */}
                    <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            Price
                        </span>
                    </div>

                    {/* State */}
                    <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                        <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">
                            State
                        </span>
                    </div>
                </div>

                {transactions &&
                    transactions.map((item: any, index: number) => {
                        return (
                            <>
                                <div className="contents" role="row">
                                    {/* TYPE */}
                                    <div
                                        className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                        role="cell"
                                    >
                                        <span className="text-sm font-medium tracking-tight text-green uppercase">
                                            {item.type}
                                        </span>
                                    </div>

                                    {/* TxID  */}
                                    <div
                                        className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                        role="cell"
                                    >
                                        <a
                                            href={`https://solscan.io/tx/${item.txId}?cluster=devnet`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.txId?.substring(0, 12)}
                                        </a>
                                    </div>

                                    {/* Date */}
                                    <div
                                        className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                        role="cell"
                                    >
                                        {item.createdAt && new Date(item.createdAt)?.toDateString()}
                                    </div>

                                    {/* Price */}
                                    <div
                                        className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                        role="cell"
                                    >
                                        {item.price && (
                                            <>
                                                <span className="-ml-1" data-tippy-content="SOL">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 397.7 311.7"
                                                        style={{
                                                            height: '10px',
                                                            width: '10px',
                                                            marginRight: '2px',
                                                        }}
                                                        xmlSpace="preserve"
                                                    >
                                                        <style
                                                            type="text/css"
                                                            dangerouslySetInnerHTML={{
                                                                __html: '\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:url(#SVGID_2_);}\n\t.st2{fill:url(#SVGID_3_);}\n',
                                                            }}
                                                        />
                                                        <linearGradient
                                                            id="SVGID_1_"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="360.8791"
                                                            y1="351.4553"
                                                            x2="141.213"
                                                            y2="-69.2936"
                                                            gradientTransform="matrix(1 0 0 -1 0 314)"
                                                        >
                                                            <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                                            <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                                        </linearGradient>
                                                        <path
                                                            className="st0"
                                                            d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
                                                        />
                                                        <linearGradient
                                                            id="SVGID_2_"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="264.8291"
                                                            y1="401.6014"
                                                            x2="45.163"
                                                            y2="-19.1475"
                                                            gradientTransform="matrix(1 0 0 -1 0 314)"
                                                        >
                                                            <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                                            <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                                        </linearGradient>
                                                        <path
                                                            className="st1"
                                                            d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
                                                        />
                                                        <linearGradient
                                                            id="SVGID_3_"
                                                            gradientUnits="userSpaceOnUse"
                                                            x1="312.5484"
                                                            y1="376.688"
                                                            x2="92.8822"
                                                            y2="-44.061"
                                                            gradientTransform="matrix(1 0 0 -1 0 314)"
                                                        >
                                                            <stop offset={0} style={{ stopColor: '#00FFA3' }} />
                                                            <stop offset={1} style={{ stopColor: '#DC1FFF' }} />
                                                        </linearGradient>
                                                        <path
                                                            className="st2"
                                                            d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="text-sm font-medium tracking-tight text-green">
                                                    {item.price} SOL
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    {/* State  */}
                                    <div
                                        className="flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600"
                                        role="cell"
                                    >
                                        {!item.state || item.state == 'COMPLETED' ? 'Completed' : 'Processing'}
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>
    );
};
