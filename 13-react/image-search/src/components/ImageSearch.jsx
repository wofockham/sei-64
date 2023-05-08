import { useState } from 'react';
import axios from 'axios';

import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

const ImageSearch = () => {
    const [images, setImages] = useState([]);

    const fetchImages = (q) => {
        console.log('searching flickr for', q);

        const flickrURL = 'https://api.flickr.com/services/rest';

        const flickrParams = {
            method: 'flickr.photos.search',
            api_key: '2f5ac274ecfac5a455f38745704ad084',
            text: q,
            format: 'json',
            nojsoncallback: 1 // don't bother looking this up: JSONP
        };

        const generateURL = function (p) {
            return [
                'http://farm',
                p.farm,
                '.static.flickr.com/',
                p.server,
                '/',
                p.id,
                '_',
                p.secret,
                '_q.jpg' // change 'q' to something else for different sizes (see documentation)
            ].join('');
        };

        axios(flickrURL, { params: flickrParams }).then((response) => {
            const imageURLs = response.data.photos.photo.map(generateURL);
            setImages(imageURLs);
        });
    };

    return (
        <div>
            <h1>Image Search</h1>
            <SearchForm onSubmit={ fetchImages } />
            <Gallery images={ images } />
        </div>
    );
};

export default ImageSearch;