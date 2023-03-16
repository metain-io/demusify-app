import React from 'react';
import { PropsWithChildren } from 'react';
import { ViewItemContext, ViewItemMode, ViewItemState, ViewItemStatus } from './index';
import { DemusifyApi } from '@modules/common/api';

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
        if (!itemId) {
            return null;
        }

        const item = await DemusifyApi.walletApp.getItem(itemId);

        return item;
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
