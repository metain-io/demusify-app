import React from 'react';
import type { NextPage } from 'next';
import Masonry from 'components/masonry';
import ReactTable from 'components/react-table';
// import Masonry from '@mui/lab/Masonry';

const Home: NextPage = () => {
    return (
        <>
            <h1>Hello world</h1>
            <ReactTable />
            <Masonry />
            {/* <Masonry columns={4} spacing={2}>
                {[
                    'http://placekitten.com/700/500',
                    'http://placekitten.com/500/600',
                    'http://placekitten.com/500/500',
                    'https://picsum.photos/700/500?grayscale',
                ].map((url, index) => (
                    <figure
                        className="artwork col-4 col-md-2"
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
            </Masonry> */}
        </>
    );
};

export default Home;
