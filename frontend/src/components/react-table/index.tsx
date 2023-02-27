import React from 'react';
import { useTable } from "react-table";

import styles from './styles.module.scss';

const ReactTable = () => {
    const [isLoading, setIsLoading] = React.useState(false);

    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        [],
    );

    const columns = React.useMemo<any>(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        [],
    );

    const tableInstance = useTable({ columns, data });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    const LoadingRow = (colSpan: number = 1) => {
        return (
            <tr key={`Table-Browser-Row-Loading`}>
                <td key={`Table-Mobile-Column-Loading`} className="table-loading-row" colSpan={colSpan}>
                    {/*<Image className={[styles.image_1, styles.loading_row].join(" ")} src="/gif/animation-loading.gif" width={24} height={24} />*/}
                    <div className="mLoading"></div>
                </td>
            </tr>
        );
    };

    const EmptyRow = (colSpan: number = 1) => {
        return (
            <tr key={`Table-Browser-Row-Empty`}>
                <td
                    key={`Table-Mobile-Column-Empty`}
                    className={'empty_row'}
                    colSpan={colSpan}
                    style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748B88' }}
                >
                    <span>{'Empty data'}</span>
                </td>
            </tr>
        );
    };

    const BrowserWrapper = () => {
        return (
            <table {...getTableProps()} className={styles.browser_wrapper}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                    {/* <tr>
                        {Object.entries(columnArray).map(([columnKey, columnValue]: any) => {
                            return (
                                <th key={`Table-Browser-Head-${columnKey}`} className={styles[columnValue.value]}>
                                    {columnValue.label}
                                </th>
                            );
                        })}
                    </tr> */}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {isLoading ? (
                        <>{LoadingRow(columns.length)}</>
                    ) : data.length > 0 ? (
                        rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    ) : (
                        // Object.entries(S_tableArray).map(([rowKey, rowValue]: any) => {
                        //     return (
                        //         <tr
                        //             key={`Table-Browser-Row-${rowKey}`}
                        //             className={rowValue.disabled ? styles.disabled : ''}
                        //             onClick={() => C_onClick(rowValue)}
                        //         >
                        //             {Object.entries(columnArray).map(([columnKey, columnValue]: any) => (
                        //                 <td
                        //                     key={`Table-Mobile-Column-${rowKey}-${columnKey}`}
                        //                     className={styles[columnValue.value]}
                        //                     data-column={columnValue.value}
                        //                 >
                        //                     {ColumnDOM(columnValue, rowValue)}
                        //                 </td>
                        //             ))}
                        //         </tr>
                        //     );
                        // })
                        <>{EmptyRow(columns.length)}</>
                    )}
                </tbody>
            </table>
        );
    };

    return (
        <div
            className={[
                styles.pwTable,
                // styles[theme],
                // mobileLayout ? styles[deviceType] : styles.browser,
                styles.browser
                // className,
            ].join(' ')}
        >
            <BrowserWrapper />
        </div>
    );
};

export default ReactTable;
