import { useFormik } from 'formik';
import React from 'react';
import { PropsWithChildren } from 'react';
import { CreateCollectionContext, CreateCollectionState, CreateCollectionStatus } from './index';

export type CreateCollectionProviderProps = PropsWithChildren;

export const CreateCollectionProvider = (props: CreateCollectionProviderProps) => {
    const { children } = props;

    const [state, setState] = React.useState<CreateCollectionState>({
        status: CreateCollectionStatus.INITIALIZING,
        error: '',
    });

    const form = useFormik({
        initialValues: {
            collectionId: '',
            logoImage: '',
            featuredImage: '',
            bannerImage: '',
            name: '',
            url: '',
            description: '',
            category: '',
            links: {
                personal: '',
                medium: '',
                telegram: '',
            },
        },
        onSubmit: (value) => handleSubmit(value),
    });

    const handleSubmit = (value: any) => {
        console.log('handleSubmit:', value);
    };

    return (
        <CreateCollectionContext.Provider
            value={{
                state,
                form,
                categories: ['cat-1', 'cat-2', 'cat-3'],
            }}
        >
            {children}
        </CreateCollectionContext.Provider>
    );
};
