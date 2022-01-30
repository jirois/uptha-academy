import React from 'react';
import { FaBars } from 'react-icons/fa'


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
    return (
        <Nav>
            <NavbarContainer onClick={toggle}>
                <NavLogo to='/'>
                    Uptha
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="courses">
                            Courses
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">
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
