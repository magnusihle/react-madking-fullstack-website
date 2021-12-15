
import styled from "styled-components";



const Footer = () => {
    return (
        <Container>
            <Title>MadKing Admin Senter</Title>
        </Container>
    );
};

export default Footer;



const Container = styled.div`
  display: flex;
  margin-top: 3em;
  text-align: center;
align-items: center;
justify-content: center;
background-color: var(--color-1);
`;

const Title = styled.h1`
font-size: 2em;
color: white;
`;
