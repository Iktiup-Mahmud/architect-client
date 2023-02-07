import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../Carousel/Carousel';
import HomeLast from './HeroHome';
import HomeContact from './HomeContact';
import HomeExtra from './HomeExtra';
import HomeMain from './HomeMain';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Carousel></Carousel>
            <HomeMain></HomeMain>
            <HomeLast></HomeLast>
            <HomeExtra></HomeExtra>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;