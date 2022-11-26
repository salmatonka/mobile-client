import React from 'react';
import Category from '../../Category/Category/Category';
import Banner from '../Banner/Banner';

import HomeBanner from '../HomeBanner/HomeBanner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Category></Category>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;