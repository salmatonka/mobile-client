import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Categories></Categories>
          <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;