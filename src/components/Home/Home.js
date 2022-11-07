import React from 'react';
import Carousel from '../Carousel/Carousel';
import HomeLast from './HeroHome';
import HomeMain from './HomeMain';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeMain></HomeMain>
            <HomeLast></HomeLast>
        </div>
    );
};

export default Home;