import React from 'react';
// import Masonry from '@mui/lab/Masonry';
import Shuffle from 'shufflejs';

import styles from './styles.module.scss';

const Masonry = () => {
    const sizerRef = React.useRef<any>(null);
    const elementRef = React.useRef<any>(null);
    const shuffleRef = React.useRef<any>(null);

    React.useEffect(() => {
        // @ts-ignore
        console.log('Shuffle: ', Shuffle);
        if (Shuffle && document) {
            // <div ref={elementRef} className="row my-shuffle">
            //     {photos.map((image) => (
            //         <PhotoItem {...image} />
            //     ))}
            //     <div ref={sizerRef} className="sizer"></div>
            // </div>
            shuffleRef.current = new Shuffle(document.getElementById(styles.grid) as any, {
                itemSelector: '.photo-item',
                sizer: sizerRef.current,
            });
        }
    }, []);

    return (
        <>
            <div ref={elementRef} id={styles.grid} className="row">
                {[
                    'http://placekitten.com/700/500',
                    'http://placekitten.com/500/600',
                    'http://placekitten.com/500/500',
                    'https://picsum.photos/700/500?grayscale',
                    'http://placekitten.com/500/500',
                ].map((url, index) => (
                    <figure
                        className="photo-item column"
                        data-selected=""
                        data-genre="Cat"
                        data-status="available"
                        data-date="2020/09/25"
                        data-title="Cat two"
                        data-size="44"
                        itemProp="associatedMedia"
                        itemScope
                        itemType="http://schema.org/ImageObject"
                        key={index}
                    >
                        <a href="" itemProp="contentUrl">
                            <img src={url} itemProp="thumbnail" />
                        </a>
                        <figcaption itemProp="caption description">Cat {index}</figcaption>
                    </figure>
                ))}
                <div ref={sizerRef} className="sizer"></div>
            </div>
        </>
    );
};

export default Masonry;
