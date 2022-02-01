import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules';



import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLinkOne,
    NavBtnLinkTwo

} from './navbarELements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])



    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer >
                <NavLogo to='/' onClick={toggleHome}>
                    Uptha
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-70}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-70}
                        >
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="course"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-70}
                        >
                            Courses
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact={true}
                            offset={-70}
                        >
                            Sign Up
                        </NavLinks>
                    </NavItem>

                </NavMenu>
                <NavBtn>
                    <NavBtnLinkOne to="/signin">
                        Sign In
                    </NavBtnLinkOne>
                    <NavBtnLinkTwo to="/signin">
                        Sign Up
                    </NavBtnLinkTwo>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    );
};



export default Navbar;
