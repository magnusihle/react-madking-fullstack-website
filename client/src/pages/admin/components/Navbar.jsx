import React, { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from 'hamburger-react'
import useWindowDimensions from "../../../reusableFunctions/Functions";
import { Link as DomLink } from "react-router-dom";
import { logout } from '../../../redux/userRedux';
import { useDispatch } from "react-redux";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();


  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }


  return (
    <Nav>

      <Logo href="">
        MadKing
      </Logo>


      {width < 930 && <Hamburger color="white" onToggle={() => {
        setIsOpen(!isOpen)
      }} />}


      <Menu isOpen={isOpen}>
        <DomLink
          to="/">
          {" "}
          <MenuLink href="">Hjem</MenuLink>
        </DomLink>

        <DomLink
          to="/producthandler">
          {" "}
          <MenuLink href="">Produkter</MenuLink>
        </DomLink>
        <DomLink
          to="/">
          {" "}
          <MenuLink onClick={handleLogout}>Logg Ut</MenuLink>      </DomLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;



const Nav = styled.div`
  z-index: 100;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--color-1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const MenuLink = styled.p`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.2rem;
  display: inline-block;
  position: relative;

  &::after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: .5px;
  bottom: 1vh;
  left: 0;
  background-color: var(--color-text);
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
  }

  &:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
  }


`;

const Logo = styled.p`
  padding: .1rem 0;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width:930px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;



