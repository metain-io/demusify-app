import { useFormik } from 'formik';
import React from 'react';
import { PropsWithChildren } from 'react';
import {
    CreateItemContext,
    CreateItemState,
    CreateItemStatus,
    CreateItemUploadAssetState,
    CreateItemUploadAssetStatus,
} from './index';
import { v4 as Uuid } from 'uuid';
import * as Yup from 'yup';
import { database } from '@modules/app/database';
import { DemusifyApi } from '@modules/common/api';
import { useSelector } from 'react-redux';
import { selectLoginData } from '@modules/auth/redux/login/slice';
import axios from 'axios';

export type CreateItemProviderProps = PropsWithChildren<{
    onCreateItemSucceeded?: (item: any) => void;
}>;

export const CreateItemProvider = (props: CreateItemProviderProps) => {
    const { children, onCreateItemSucceeded } = props;

    const [id, setId] = React.useState(Uuid());

    const loginData = useSelector(selectLoginData);

    const [collections, setCollections] = React.useState<Array<any>>([
        {
            id: 'default',
            name: 'Default',
        },
    ]);

    const [state, setState] = React.useState<CreateItemState>({
        status: CreateItemStatus.INITIALIZING,
        error: '',
    });

    const [uploadCoverArtImageState, setUploadCoverArtImageState] = React.useState<CreateItemUploadAssetState>({
        status: CreateItemUploadAssetStatus.PENDING,
        error: '',
    });

    const [uploadMusicState, setUploadMusicState] = React.useState<CreateItemUploadAssetState>({
        status: CreateItemUploadAssetStatus.PENDING,
        error: '',
    });

    const form = useFormik({
        initialValues: {
            coverArtImage: '',
            music: '',
            name: '',
            externalLink: '',
            description: '',
            collection: {
                id: 'default',
                name: 'Default',
            } as { id: string; name: string } | undefined | null,
            properties: [] as Array<{ id: string; name: string; value: string }>,
            levels: [] as Array<{ id: string; name: string; value: string; total: string }>,
            stats: [] as Array<{ id: string; name: string; value: string; total: string }>,
            licenseMonetizations: [
                {
                    id: 'streamingPerCopy',
                    name: 'Lite',
                    value: 0,
                },
                {
                    id: 'synchronizationPerProduct',
                    name: 'Advanced',
                    value: 0,
                },
            ],
        },
        validationSchema: Yup.object({
            coverArtImage: Yup.string().required('Cover art image is required'),
            music: Yup.string().required('Music is required'),
            name: Yup.string().required('Name is required'),
            collection: Yup.mixed().required('Collection is required'),
            licenseMonetizations: Yup.array().of(
                Yup.object({
                    id: Yup.string().required(),
                    name: Yup.string().required(),
                    value: Yup.number().positive(),
                }),
            ),
        }),
        onSubmit: (value) => handleSubmit(value),
        onReset: () => {
            setId(Uuid());
        },
    });

    const handleSubmit = async (value: any) => {
        try {
            setState(() => ({ status: CreateItemStatus.SUBMITTING }));

            const item = {
                itemID: id,
                collectionID: value.collection.id,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                ...value,
            };

            await DemusifyApi.walletApp.createItem({ item, userWalletAddress: loginData.walletAddress });

            setState(() => ({ status: CreateItemStatus.SUBMIT_SUCCEEDED }));

            onCreateItemSucceeded?.(item);
        } catch (error: any) {
            setState(() => ({ status: CreateItemStatus.SUBMIT_FAILED, error: error.toString() }));
        }
    };

    const handleUploadCoverArtImage = async (file?: File) => {
        if (!file) {
            return;
        }

        try {
            setUploadCoverArtImageState(() => ({ status: CreateItemUploadAssetStatus.UPLOADING, error: '' }));

            form.setFieldValue('coverArtImage', '');

            const { signedUrl, s3Url } = await DemusifyApi.s3.getSignedUrl('items', id, file.type);

            await axios.put(signedUrl, file, {
                headers: {
                    'content-type': encodeURIComponent(file.type),
                    'x-amz-acl': 'public-read',
                },
            });

            form.setFieldValue('coverArtImage', s3Url);

            setUploadCoverArtImageState(() => ({ status: CreateItemUploadAssetStatus.UPLOAD_SUCCEEDED }));
        } catch (error) {
            setUploadCoverArtImageState(() => ({
                status: CreateItemUploadAssetStatus.UPLOAD_FAILED,
                error: 'Something went wrong!',
            }));
        }
    };

    const handleUploadMusic = async (file?: File) => {
        if (!file) {
            return;
        }

        try {
            setUploadMusicState(() => ({ status: CreateItemUploadAssetStatus.UPLOADING, error: '' }));

            form.setFieldValue('music', '');

            const { signedUrl, s3Url } = await DemusifyApi.s3.getSignedUrl('items', id, file.type);

            await axios.put(signedUrl, file, {
                headers: {
                    'content-type': encodeURIComponent(file.type),
                    'x-amz-acl': 'public-read',
                },
            });

            form.setFieldValue('music', s3Url);

            setUploadCoverArtImageState(() => ({ status: CreateItemUploadAssetStatus.UPLOAD_SUCCEEDED }));
        } catch (error) {
            setUploadCoverArtImageState(() => ({
                status: CreateItemUploadAssetStatus.UPLOAD_FAILED,
                error: 'Something went wrong!',
            }));
        }
    };

    const handleAddNewProperty = async () => {
        const properties = [...form.values.properties, { id: Uuid(), name: '', value: '' }];
        form.setFieldValue('properties', properties);
    };

    const handleUpdatePropertyName = async (id: string, name: string) => {
        const properties = form.values.properties.map((propperty) => {
            if (propperty.id == id) {
                propperty.name = name;
            }

            return propperty;
        });
        form.setFieldValue('properties', properties);
    };

    const handleUpdatePropertyValue = async (id: string, value: string) => {
        const properties = form.values.properties.map((propperty) => {
            if (propperty.id == id) {
                propperty.value = value;
            }

            return propperty;
        });
        form.setFieldValue('properties', properties);
    };

    const handleDeleteProperty = async (id: string) => {
        const properties = form.values.properties.filter((propperty) => {
            return propperty.id != id;
        });
        form.setFieldValue('properties', properties);
    };

    const handleAddNewLevel = async () => {
        const levels = [...form.values.levels, { id: Uuid(), name: '', value: '', total: '' }];
        form.setFieldValue('levels', levels);
    };

    const handleUpdateLevelName = async (id: string, name: string) => {
        const levels = form.values.levels.map((level) => {
            if (level.id == id) {
                level.name = name;
            }

            return level;
        });
        form.setFieldValue('levels', levels);
    };

    const handleUpdateLevelValue = async (id: string, value: string) => {
        const levels = form.values.levels.map((level) => {
            if (level.id == id) {
                level.value = value;
            }

            return level;
        });
        form.setFieldValue('levels', levels);
    };

    const handleUpdateLevelTotal = async (id: string, total: string) => {
        const levels = form.values.levels.map((level) => {
            if (level.id == id) {
                level.total = total;
            }

            return level;
        });
        form.setFieldValue('levels', levels);
    };

    const handleDeleteLevel = async (id: string) => {
        const levels = form.values.levels.filter((level) => {
            return level.id != id;
        });
        form.setFieldValue('levels', levels);
    };

    const handleAddNewStat = async () => {
        const stats = [...form.values.stats, { id: Uuid(), name: '', value: '', total: '' }];
        form.setFieldValue('stats', stats);
    };

    const handleUpdateStatName = async (id: string, name: string) => {
        const stats = form.values.stats.map((stat) => {
            if (stat.id == id) {
                stat.name = name;
            }

            return stat;
        });
        form.setFieldValue('stats', stats);
    };

    const handleUpdateStatValue = async (id: string, value: string) => {
        const stats = form.values.stats.map((stat) => {
            if (stat.id == id) {
                stat.value = value;
            }

            return stat;
        });
        form.setFieldValue('stats', stats);
    };

    const handleUpdateStatTotal = async (id: string, total: string) => {
        const stats = form.values.stats.map((stat) => {
            if (stat.id == id) {
                stat.total = total;
            }

            return stat;
        });
        form.setFieldValue('stats', stats);
    };

    const handleDeleteStat = async (id: string) => {
        const stats = form.values.stats.filter((stat) => {
            return stat.id != id;
        });
        form.setFieldValue('stats', stats);
    };

    const handleUpdateLicenseMonetizationValue = async (id: string, value: string) => {
        const licenseMonetizations = form.values.licenseMonetizations.map((item) => {
            if (item.id == id) {
                item.value = +value;
            }

            return item;
        });
        form.setFieldValue('licenseMonetizations', licenseMonetizations);
    };

    React.useEffect(() => {
        // TODO: Check if need any initial process
        const timeout = setTimeout(() => {
            setState({
                status: CreateItemStatus.INITIALIZE_SUCCEEDED,
                error: null,
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <CreateItemContext.Provider
            value={{
                id,
                collections,
                state,
                form,

                uploadCoverArtImageState,
                uploadMusicState,

                handleUploadCoverArtImage,
                handleUploadMusic,

                handleAddNewProperty,
                handleUpdatePropertyName,
                handleUpdatePropertyValue,
                handleDeleteProperty,

                handleAddNewLevel,
                handleUpdateLevelName,
                handleUpdateLevelValue,
                handleUpdateLevelTotal,
                handleDeleteLevel,

                handleAddNewStat,
                handleUpdateStatName,
                handleUpdateStatValue,
                handleUpdateStatTotal,
                handleDeleteStat,

                handleUpdateLicenseMonetizationValue,
            }}
        >
            {children}
        </CreateItemContext.Provider>
    );
};

async function getBase64(file?: File) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve('');
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            resolve('');
        };
    });
}
