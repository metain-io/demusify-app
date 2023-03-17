import React from 'react';
import { PropsWithChildren } from 'react';
import { ViewCollectionsContext, ViewCollectionsState, ViewCollectionsStatus } from './index';
import { collectionsData } from './data';
import { useSelector } from 'react-redux';
import { selectUserNftData } from '@modules/auth/redux/login/slice';

export type ViewCollectionsProviderProps = PropsWithChildren<{ filterQuery?: any }>;

export const ViewCollectionsProvider = (props: ViewCollectionsProviderProps) => {
    const { children, filterQuery } = props;
    const userNFTData = useSelector(selectUserNftData)

    const [state, setState] = React.useState<ViewCollectionsState>({
        status: ViewCollectionsStatus.LOADING,
        error: '',
        filterQuery,
    });

    const [collections, setCollections] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        if (!userNFTData.items || userNFTData.items.length == 0) return;

        setState({ status: ViewCollectionsStatus.LOADING });

        setState({
            status: ViewCollectionsStatus.LOAD_SUCCEEDED,
        });

        setCollections(userNFTData.items.slice(0, 20));
    }, [userNFTData]);

    const handleReload = async () => {
        // setState({ status: ViewCollectionsStatus.LOADING });

        // setState({
        //     status: ViewCollectionsStatus.LOAD_SUCCEEDED,
        // });

        // setCollections(userNFTData.items);
    };

    const handleLoadingMore = async () => {
        // setState({ status: ViewCollectionsStatus.LOADING });

        // setTimeout(() => {
        //     const fetchedCollections: Array<any> = collectionsData;

        //     setState({
        //         status: ViewCollectionsStatus.LOAD_SUCCEEDED,
        //     });

        //     setCollections([...collections, ...fetchedCollections]);
        // }, 2000);
    };

    const handleFilter = async (filterQuery: any) => {
        // setState({ status: ViewCollectionsStatus.LOADING, filterQuery });

        // setTimeout(() => {
        //     const fetchedCollections: Array<any> = collectionsData;

        //     setState({
        //         status: ViewCollectionsStatus.LOAD_SUCCEEDED,
        //     });

        //     setCollections(fetchedCollections);
        // }, 2000);
    };

    return (
        <ViewCollectionsContext.Provider value={{ state, collections, handleReload, handleLoadingMore, handleFilter }}>
            {children}
        </ViewCollectionsContext.Provider>
    );
};
