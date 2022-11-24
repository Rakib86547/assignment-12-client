import React from 'react';
import Advantege from '../Advantege/Advantege';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categorie from '../Categorie/Categorie';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Advertised />
            <Categorie />
            <Advantege />
        </div>
    );
};

export default Home;