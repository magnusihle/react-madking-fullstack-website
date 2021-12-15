import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { Link } from "react-scroll";


const Hero = () => {
  const { height, width } = useWindowDimensions();


  return (
    <Container id="hero">

      <Left>
        <Title>Finn beaten som passer for ditt prosjekt!</Title>
        <ButtonContainer>
          <Link
            to="about"
            className="nav-logo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >   <Button backgroundcolor="#3E768C" color="white" hover="#558ba0">Om oss</Button>
          </Link>
          <Link
            to="beats"
            className="nav-logo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >           <Button backgroundcolor="#cbd4d8" color="black" hover="#b7d8e6">Våre beats</Button>

          </Link>

        </ButtonContainer>

      </Left>

      <Right>
        {/* <Image /> */}
        {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus totam a eum voluptates molestias sint asperiores pariatur ex tenetur!</Text> */}
      </Right>
    </Container>
  );
};

export default Hero;



const Container = styled.div`
  padding: 5rem 1rem 2rem 1rem;
  display: flex;
  transition: all .3s ease;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: url('/assets/images/music-images/img4.jpg') no-repeat;
  background-size: cover;
  background-position: 100%;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;    
  background-color: var(--color-1);


  @media (max-width: 800px) {
    flex-direction: column;
    height: 70vh;    

  }


`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: 2.8em;
  font-weight: 300;
  font-family: 'Montserrat', cursive ;
`;

const Left = styled.div`
z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(200, 200,200, .05);   
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 1em;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 


  @media (max-width: 800px) {
    background-color: transparent;  
  backdrop-filter: blur(3px);

  }
`;


const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`;

const Button = styled.button`
  padding: 14px 18px;
  transition: all .2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px;
  background-color: ${(props) =>
    props.backgroundcolor};
  color: ${(props) => props.color};


  &:hover{
    background-color: ${(props) =>
    props.hover};
  border-radius: .5em;
  box-shadow: .2rem .2rem 0 0 rgba(255, 255, 255, .15); 

      
  }

`;

const Right = styled.div`
  flex: 1;
  min-height: 36vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Text = styled.p`
  color:  var(--color-5);
  font-weight: 400;
  font-size: 1.1rem;
  padding: 3rem 0;

`;

const Image = styled.image`
  color:  var(--color-5);
  font-weight: 400;
  font-size: 1.1rem;
  padding: 3rem 0;

`;





