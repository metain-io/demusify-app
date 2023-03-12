import { MouseEventHandler } from 'react';
import { useCreateItem } from '../../index';

export const ModalLevels = () => {
    const {
        form,
        handleAddNewLevel,
        handleUpdateLevelName,
        handleUpdateLevelValue,
        handleUpdateLevelTotal,
        handleDeleteLevel,
    } = useCreateItem();

    const onButtonAddMoreClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        handleAddNewLevel();
    };

    return (
        <div className="modal fade" id="levelsModal" tabIndex={-1} aria-labelledby="addLevelsLabel" aria-hidden="true">
            <div className="modal-dialog max-w-2xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addLevelsLabel">
                            Add levels
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Body --> */}
                    <div className="modal-body p-6">
                        <p className="mb-8 dark:text-jacarta-300">
                            Levels show up underneath your item, are clickable, and can be filtered in your
                            collection&apos;s sidebar.
                        </p>

                        <div className="relative flex items-center">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-l-lg bg-jacarta-50 hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700"></div>

                            <div className="flex-1">
                                <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                    Name
                                </label>
                            </div>

                            <div className="flex-1">
                                <label className="mb-3 block font-display text-base font-semibold text-jacarta-700 dark:text-white">
                                    Value
                                </label>
                            </div>
                        </div>

                        {form.values.levels.length == 0 && (
                            <div className="relative flex items-center justify-center">
                                <p>No Levels</p>
                            </div>
                        )}

                        {form.values.levels.map((level) => (
                            <div key={level.id} className="relative my-3 flex items-center">
                                <button
                                    className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-l-lg border border-r-0 border-jacarta-100 bg-jacarta-50 hover:bg-jacarta-100 dark:border-jacarta-600 dark:bg-jacarta-700"
                                    onClick={(e) => {
                                        handleDeleteLevel(level.id);
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-6 w-6 fill-jacarta-500 dark:fill-jacarta-300"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                                    </svg>
                                </button>

                                <div className="w-1/2">
                                    <input
                                        type="text"
                                        className="h-12 w-full border border-r-0 border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                        placeholder="Speed"
                                        value={level.name}
                                        onChange={(e) => handleUpdateLevelName(level.id, e.target.value)}
                                    />
                                </div>

                                <div className="flex w-1/2 items-end">
                                    <div className="flex-1">
                                        <input
                                            type="number"
                                            className="h-12 w-full border border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                            placeholder="3"
                                            value={level.value}
                                            onChange={(e) => handleUpdateLevelValue(level.id, e.target.value)}
                                        />
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center self-end border-y border-jacarta-100 bg-jacarta-50 px-2 dark:border-jacarta-600 dark:bg-jacarta-800 dark:text-jacarta-400">
                                        Of
                                    </div>

                                    <div className="flex-1 self-end">
                                        <input
                                            type="number"
                                            className="h-12 w-full rounded-r-lg border border-jacarta-100 focus:ring-inset focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-jacarta-300"
                                            placeholder="10"
                                            value={level.total}
                                            onChange={(e) => handleUpdateLevelTotal(level.id, e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            className="mt-2 rounded-full border-2 border-accent py-2 px-8 text-center text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white"
                            onClick={onButtonAddMoreClicked}
                        >
                            Add More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
