import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import useWindowDimensions from "../../reusableFunctions/Functions";


const ProcessOfWork = () => {
  const {  width } = useWindowDimensions();
  const [processText, setProcessText] = useState("Trykk på sirklene");

  const handleFirstStepContent = () => {
    setProcessText("Tekst for første del av prosessen")
  }

  const handleSecondStepContent = () => {
    setProcessText("Tekst for andre del av prosessen")

  }

  const handleThirdStepContent = () => {
    setProcessText("Tekst for tredje del av prosessen")

  }

  const handleFourthStepContent = () => {
    setProcessText("Tekst for fjerde del av prosessen")
  }


  return (
    <Container id="process">
      <Top>
        <Title>Hvordan Vi Jobber</Title>
      </Top>

      <Center>
        <Text>

          {width > 1000 ? (<><Circle hover="#558ba0" value="1" onClick={handleFirstStepContent}>1</Circle> ____________________  <Circle hover="#558ba0" value="2" onClick={handleSecondStepContent}>2</Circle> ____________________ <Circle hover="#558ba0" value="3" onClick={handleThirdStepContent}>3</Circle> ____________________  <Circle hover="#558ba0" value="4" onClick={handleFourthStepContent}>4</Circle>
          </>) : (<><Circle hover="#558ba0" value="1" onClick={handleFirstStepContent}>1</Circle>_____<Circle hover="#558ba0" value="2" onClick={handleSecondStepContent}>2</Circle>_____<Circle hover="#558ba0" value="3" onClick={handleThirdStepContent}>3</Circle>_____<Circle hover="#558ba0" value="4" onClick={handleFourthStepContent}>4</Circle>
          </>)}
        </Text>
        <ProcessText>{processText}</ProcessText>
        {/* <CircleTextContainer>
          {height > 1000 ? <CircleText color="red">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText> : <CircleText color="blue">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText>}
          <CircleText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText>
          <CircleText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText>
          <CircleText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText>
          <CircleText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, consequatur.
          </CircleText>
        </CircleTextContainer> */}
      </Center>

      <Bottom>
        <Link
          to="beats"
          className="nav-logo"
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
        >      <Button backgroundcolor="#3E768C" color="white" hover="#558ba0">
            Bestill Beat
          </Button>

        </Link>

      </Bottom>
    </Container>
  );
};

export default ProcessOfWork;

const Container = styled.div`
transition: all .3s ease;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: 80vh;
  background-color: var(--color-1);
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

/* const CircleTextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
background-color: #464646;
`; */

/* const CircleText = styled.p`
font-size: 1.2rem;
color: ${props => props.color};
`; */



const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Title = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 800;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Text = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
  color: var(--color-text);
  font-weight: 400;
  font-size: 1.3rem;
  padding: 3rem 0;
`;

const Circle = styled.h1`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin-top: 1em;
font-size: 1.5rem;
height: 2em;
width: 2em;
color: black;
  border-radius: 100%;
  background-color: var(--color-5);
  padding: .5em;


  &:hover {
    border-radius: 0.5em;

    background-color: ${(props) => props.hover};
  }
`;

const Bottom = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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


const ProcessText = styled.p`
color: var(--color-text);
font-size: 1.2rem;
`;