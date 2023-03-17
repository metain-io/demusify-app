import { useViewItem } from '../../../index';

export const TabProperties = () => {
    const { item } = useViewItem();

    return (
        <div className="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="properties-tab">
            <div className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                    {item?.properties?.map((stat: any, index: number) => (
                        <a
                            key={index}
                            href="#"
                            className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800"
                        >
                            <span className="text-sm uppercase text-accent">{stat.name}</span>
                            <span className="text-base text-jacarta-700 dark:text-white">{stat.value}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
