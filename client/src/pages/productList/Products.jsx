import styled from "styled-components";
import { useState, useEffect } from "react";
import { musicCarouselleDummyData } from "../../data/data";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { useNavigate } from "react-router-dom";
import {
  BsPlayBtn
} from "react-icons/bs";

const Products = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();




  let path = "";
  const handleClick = (item) => {
    path = "/products/" + item.id;
    navigate(path);
  };

  return (
    <Container>
      <SectionTitle>   Alle Våre Produkter</SectionTitle>

      <ProductListContainer>
        {musicCarouselleDummyData.map((prod, index) => (
          < ProductContainer key={index}>
            <Title>{prod.title}</Title>
            <Image src={prod.img} alt={index} />
            <Price>{prod.price} kr</Price>
            <Buttons>  <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={() => handleClick(prod)}>
              Velg
            </Button>
              <BsPlayBtn
                color="white"
                fontSize="3.4em"
                fontWeight="100"

              // onClick={() => {
              //   handlePlaySong(musicCarouselleDummyData[slideItem.id - 1])
              // }}
              />
            </Buttons>
          </ProductContainer>

        ))}
      </ProductListContainer>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:5em 1em 1em 1em;
  min-height: 80vh;
  height: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 7em;
  } ;
`;



const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  max-width: 95em;

`;


const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 5px;
  padding: 1em;
  min-width: 20em;
  max-width: 30em;
  max-height: 40em;
  border-radius: 1em;
  height: auto;
  background-color: #00a27f4b;
  position: relative;


background-color: var(--color-1);

&:hover {
    box-shadow: 0px -8px 20px 1px #767676;
  }
`;

const SectionTitle = styled.h1`
font-size: 3rem;
color: black;
padding-top: 1em;
`;

const Title = styled.h1`
font-size: 1.5rem;
color: white;
`;


const Image = styled.img`
width: 100%;
height: 70%;
`;

const Price = styled.p`
color: white;
font-size: 1.2rem;
font-weight: 200;
`;



const Buttons = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }
`;



