import { useViewItem } from '../../index';

export const ItemCoverArtImage = () => {
    const { item } = useViewItem();

    return (
        <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
            <img
                src={item?.coverArtImage}
                alt="item"
                className="cursor-pointer rounded-2.5xl"
                // data-bs-toggle="modal"
                // data-bs-target="#imageModal"
                width={'100%'}
                height={'100%'}
            />

            {/* <!-- Modal --> */}
            <div className="modal fade" id="imageModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                    <img src="img/products/item_single_full.jpg" alt="item" />
                </div>

                <button
                    type="button"
                    className="btn-close absolute top-6 right-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-6 w-6 fill-white"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                </button>
            </div>
        </figure>
    );
};
