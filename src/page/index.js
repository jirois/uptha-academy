import React from 'react';
import HeroSection from '../component/Hero';
import InfoSection from '../component/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../component/InfoSection/data'


const Home = () => {

    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
};

export default Home;
