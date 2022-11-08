import React from 'react';
import Carousel from '../Carousel/Carousel';
import HomeLast from './HeroHome';
import HomeExtra from './HomeExtra';
import HomeMain from './HomeMain';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <HomeMain></HomeMain>
            <HomeLast></HomeLast>
            <HomeExtra></HomeExtra>
        </div>
    );
};

export default Home;