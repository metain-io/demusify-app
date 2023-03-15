import React from 'react';
import { PropsWithChildren } from 'react';
import { ViewItemContext, ViewItemMode, ViewItemState, ViewItemStatus } from './index';
import { DEFAULT_ITEM_DATA } from './data';
import { database } from '@modules/app/database';

export type ViewItemProviderProps = PropsWithChildren<{
    itemId?: string;
    mode?: ViewItemMode;
}>;

export const ViewItemProvider = (props: ViewItemProviderProps) => {
    const { children, itemId, mode } = props;

    const [state, setState] = React.useState<ViewItemState>({
        status: ViewItemStatus.LOADING,
        error: '',
    });

    const [item, setItem] = React.useState<any | null>(null);

    const [selectedLicense, setSelectedLicense] = React.useState<any>(null);

    const fetchItem = async (itemId?: string) => {
        return new Promise((resolve, reject) => {
            if (!itemId) {
                setTimeout(() => {
                    resolve(DEFAULT_ITEM_DATA);
                }, 3000);
                return;
            }

            database.loadItems().then((items: Array<any>) => {
                const item = items.find((item) => item.id == itemId);
                resolve(item);
            });
            return DEFAULT_ITEM_DATA;
        });
    };

    const handleReload = async () => {
        setState({ status: ViewItemStatus.LOADING });

        const item = await fetchItem(itemId);

        setState({
            status: ViewItemStatus.LOAD_SUCCEEDED,
        });

        setItem(item);
    };

    const handleSelectedLicenseChanged = async (license: any) => {
        setSelectedLicense(license);
    };

    React.useEffect(() => {
        // TODO: Check if need any initial process
        setState({ status: ViewItemStatus.LOADING });

        fetchItem(itemId).then((item) => {
            setState({
                status: ViewItemStatus.LOAD_SUCCEEDED,
            });

            setItem(item);
        });
    }, []);

    return (
        <ViewItemContext.Provider
            value={{ state, mode, item, selectedLicense, handleReload, handleSelectedLicenseChanged }}
        >
            {children}
        </ViewItemContext.Provider>
    );
};
