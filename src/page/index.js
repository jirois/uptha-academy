import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSide = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggleSide} />
            <Navbar toggle={toggleSide} />
        </>
    )
};

export default Home;
