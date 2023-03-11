import { useFormik } from 'formik';
import React from 'react';
import { PropsWithChildren } from 'react';
import { CreateCollectionContext, CreateCollectionState, CreateCollectionStatus } from './index';
import { v4 as uuid } from 'uuid';

export type CreateCollectionProviderProps = PropsWithChildren;

export const CreateCollectionProvider = (props: CreateCollectionProviderProps) => {
    const { children } = props;

    const [state, setState] = React.useState<CreateCollectionState>({
        status: CreateCollectionStatus.INITIALIZING,
        error: '',
    });

    const form = useFormik({
        initialValues: {
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

    const handleSubmit = async (value: any) => {
        console.log('handleSubmit:', value);

        setState(() => ({ status: CreateCollectionStatus.SUBMITTING }));

        setTimeout(() => {
            const r = Math.random() * 10;

            if (r > 5) {
                setState({
                    status: CreateCollectionStatus.SUBMIT_SUCCEEDED,
                });
            } else {
                setState({
                    status: CreateCollectionStatus.SUBMIT_SUCCEEDED,
                    error: 'Something went wrong!!',
                });
            }
        }, 3000);
    };

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setState({
                status: CreateCollectionStatus.INITIALIZE_SUCCEEDED,
                error: null,
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <CreateCollectionContext.Provider
            value={{
                id: uuid(),
                categories: ['cat-1', 'cat-2', 'cat-3'],
                state,
                form,
            }}
        >
            {children}
        </CreateCollectionContext.Provider>
    );
};
