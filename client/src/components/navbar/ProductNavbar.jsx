import React, { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { mobile } from "../../reusableFunctions/responsive";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const ProductNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Nav>
      <Link
        to="/">
        <Logo >MadKing</Logo>
      </Link>

      {width < 800 && (
        <Hamburger
          color="white"
          onToggle={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}

      <Menu isOpen={isOpen}>
        <Link
          to="/">
          {" "}
          <MenuLink>Hjem</MenuLink>
        </Link>
        <Link
          to="/productlist">
          {" "}
          <MenuLink>Våre Beats</MenuLink>
        </Link>

        <Link
          to="/login">
          {" "}
          <MenuLink>Logg Inn</MenuLink>
        </Link>

        <Link
          to="/orders"
        > <MenuLink><AiOutlineShoppingCart fontSize="1.2rem" />({quantity})</MenuLink>

        </Link>
      </Menu>
    </Nav>
  );
};

export default ProductNavbar;

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

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.5px;
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
  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
