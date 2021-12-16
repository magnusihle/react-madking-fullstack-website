import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import useWindowDimensions from "../../reusableFunctions/Functions";

const About = () => {
  const {  width } = useWindowDimensions();

  return (
    <Container id="about">
      <Left>
        <Title>Om Oss</Title>
        {width > 800 && (
          <TextAndButtonContainer>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              temporibus totam a eum voluptates molestias sint asperiores
              pariatur ex tenetur!
            </Text>

            <Link
              to="contact"
              className="nav-logo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              {" "}
              <Button backgroundcolor="#3E768C" color="white" hover="#558ba0">
                Kontakt Oss
              </Button>
            </Link>
          </TextAndButtonContainer>
        )}
      </Left>

      <Right>
        <Image src="/assets/images/music-images/img5.jpg" alt="about-img" />
        {width < 800 && (
          <TextAndButtonContainer>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              temporibus totam a eum voluptates molestias sint asperiores
              pariatur ex tenetur!
            </Text>{" "}
            <Link
              to="contact"
              className="nav-logo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              {" "}
              <Button backgroundcolor="#3E768C" color="white" hover="#558ba0">
                Kontakt Oss
              </Button>
            </Link>
          </TextAndButtonContainer>
        )}
      </Right>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: 80vh;
  background-color: var(--color-2);
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Title = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 800;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = styled.p`
  color: var(--color-text);
  font-weight: 400;
  font-size: 1.3rem;
  padding: 3rem 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Image = styled.img`
  max-height: 70vh;
  max-width: 50vh;
  border-radius: 1em;
`;
