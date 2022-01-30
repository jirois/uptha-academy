import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height: 70px;
    margin-top: 0;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    color: #fff;

`

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    max-width: 1100px;
    z-index: 1;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-left: 24px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 90%);
        cursor: pointer;
        font-size: 1.5rem;
        
    }

`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
    

`

export const NavItem = styled.li`
    height: 70px;

`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #ffb300
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
    
`
export const NavBtnLinkOne = styled(LinkR)`
    border-radius: 50px;
    background:  #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #ffb300;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 10px;
  

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffb300;
        color: #010606;
    }

`
export const NavBtnLinkTwo = styled(LinkR)`
    border-radius: 50px;
    background:  #ffb300;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #ffb300;
    }

`