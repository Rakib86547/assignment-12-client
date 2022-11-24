import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categorie from '../Categorie/Categorie';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Advertised />
            <Categorie />
        </div>
    );
};

export default Home;