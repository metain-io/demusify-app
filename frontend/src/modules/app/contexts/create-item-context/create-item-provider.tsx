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
import { useRouter } from 'next/router';

export type CreateItemProviderProps = PropsWithChildren;

export const CreateItemProvider = (props: CreateItemProviderProps) => {
    const { children } = props;

    const [id, setId] = React.useState(Uuid());

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
            musicFingerprint: '',

            name: '',
            externalLink: '',
            description: '',
            collection: {
                id: 'default',
                name: 'Default',
            } as { id: string; name: string } | undefined | null,
            supply: 1,
            properties: [] as Array<{ id: string; name: string; value: string }>,
            levels: [] as Array<{ id: string; name: string; value: string; total: string }>,
            stats: [] as Array<{ id: string; name: string; value: string; total: string }>,
            licenseMonetizations: [
                {
                    id: 'streamingPerCopy',
                    name: 'Streaming (per copy)',
                    value: '',
                },
                {
                    id: 'synchronizationPerProduct',
                    name: 'Synchronization (per product)',
                    value: '',
                },
            ],
        },
        validationSchema: Yup.object({
            coverArtImage: Yup.string().required('Cover art image is required'),
            music: Yup.string().required('Music is required'),
            name: Yup.string().required('Name is required'),
            collection: Yup.mixed().required('Collection is required'),
        }),
        onSubmit: (value) => handleSubmit(value),
        onReset: () => {
            setId(Uuid());
        },
    });

    const handleSubmit = async (value: any) => {
        console.log('handleSubmit:', id, value);

        setState(() => ({ status: CreateItemStatus.SUBMITTING }));

        // TODO: Replace with real api call
        setTimeout(() => {
            const r = Math.random() * 10;

            if (r < 0) {
                setState({
                    status: CreateItemStatus.SUBMIT_FAILED,
                    error: 'Something went wrong!!',
                });
                return;
            }

            database.addItem({ id: id, createdAt: Date.now(), updatedAt: Date.now(), ...value });

            setState({
                status: CreateItemStatus.SUBMIT_SUCCEEDED,
            });
        }, 3000);
    };

    const handleUploadCoverArtImage = async (file?: File) => {
        if (!file) {
            return;
        }

        setUploadCoverArtImageState(() => ({
            status: CreateItemUploadAssetStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('coverArtImage', '');

        // TODO: Replace with real api call
        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 0) {
                setUploadCoverArtImageState(() => ({
                    status: CreateItemUploadAssetStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadCoverArtImageState(() => ({
                status: CreateItemUploadAssetStatus.UPLOAD_SUCCEEDED,
            }));

            const url = URL.createObjectURL(file);
            // const url = await getBase64(file);
            form.setFieldValue('coverArtImage', url);
        }, 4000);
    };

    const handleUploadMusic = async (file?: File) => {
        if (!file) {
            return;
        }

        setUploadMusicState(() => ({
            status: CreateItemUploadAssetStatus.UPLOADING,
            error: '',
        }));

        form.setFieldValue('music', '');
        form.setFieldValue('musicFingerprint', '');

        // TODO: Replace with real api call
        setTimeout(async () => {
            const r = Math.random() * 10;
            if (r < 0) {
                setUploadMusicState(() => ({
                    status: CreateItemUploadAssetStatus.UPLOAD_FAILED,
                    error: 'Something went wrong!',
                }));
                return;
            }

            setUploadMusicState(() => ({
                status: CreateItemUploadAssetStatus.UPLOAD_SUCCEEDED,
            }));

            const url = URL.createObjectURL(file);

            form.setFieldValue('music', url);
            form.setFieldValue('musicFingerprint', url.substring(0, 120));
        }, 3000);
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
                item.value = value;
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
