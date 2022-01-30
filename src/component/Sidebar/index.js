import React from 'react';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRouter

} from './sidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="course">
                        Courses
                    </SidebarLink>
                    <SidebarLink to="service">
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRouter to="/signin">Sign In</SidebarRouter>
                    <SidebarRouter to="/signup">Sign Up</SidebarRouter>
                </SidebarBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
};

export default Sidebar;
