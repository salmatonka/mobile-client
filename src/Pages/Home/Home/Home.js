import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
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