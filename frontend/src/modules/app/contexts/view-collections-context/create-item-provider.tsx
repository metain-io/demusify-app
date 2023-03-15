import React from 'react';
import { PropsWithChildren } from 'react';
import { ViewCollectionsContext, ViewCollectionsState, ViewCollectionsStatus } from './index';
import { collectionsData } from './data';

export type ViewCollectionsProviderProps = PropsWithChildren<{ filterQuery?: any }>;

export const ViewCollectionsProvider = (props: ViewCollectionsProviderProps) => {
    const { children, filterQuery } = props;

    const [state, setState] = React.useState<ViewCollectionsState>({
        status: ViewCollectionsStatus.LOADING,
        error: '',
        filterQuery,
    });

    const [collections, setCollections] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        // TODO: Check if need any initial process
        setState({ status: ViewCollectionsStatus.LOADING });

        const timeout = setTimeout(() => {
            const fetchedCollections: Array<any> = collectionsData;

            setState({
                status: ViewCollectionsStatus.LOAD_SUCCEEDED,
            });

            setCollections(fetchedCollections);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const handleReload = async () => {
        setState({ status: ViewCollectionsStatus.LOADING });

        setTimeout(() => {
            const fetchedCollections: Array<any> = collectionsData;

            setState({
                status: ViewCollectionsStatus.LOAD_SUCCEEDED,
            });

            setCollections(fetchedCollections);
        }, 2000);
    };

    const handleLoadingMore = async () => {
        setState({ status: ViewCollectionsStatus.LOADING });

        setTimeout(() => {
            const fetchedCollections: Array<any> = collectionsData;

            setState({
                status: ViewCollectionsStatus.LOAD_SUCCEEDED,
            });

            setCollections([...collections, ...fetchedCollections]);
        }, 2000);
    };

    const handleFilter = async (filterQuery: any) => {
        setState({ status: ViewCollectionsStatus.LOADING, filterQuery });

        setTimeout(() => {
            const fetchedCollections: Array<any> = collectionsData;

            setState({
                status: ViewCollectionsStatus.LOAD_SUCCEEDED,
            });

            setCollections(fetchedCollections);
        }, 2000);
    };

    return (
        <ViewCollectionsContext.Provider value={{ state, collections, handleReload, handleLoadingMore, handleFilter }}>
            {children}
        </ViewCollectionsContext.Provider>
    );
};
