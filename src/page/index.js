import React from "react";
import Courses from "../component/Course";
import Footer from "../component/Footer";
import HeroSection from "../component/Hero";
import InfoSection from "../component/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../component/InfoSection/data";
import NavbarHome from "../component/Navbar/NavbarHome";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Courses />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
