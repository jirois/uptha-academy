import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRouter,
} from "./sidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="course" onClick={toggle}>
            Courses
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRouter to="/login">Sign In</SidebarRouter>
          <SidebarRouter to="/register">Sign Up</SidebarRouter>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
