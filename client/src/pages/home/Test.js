import styled from "styled-components";

const Test = () => {
  return <Container>Test section</Container>;
};

export default Test;

const Container = styled.div`
  display: flex;
  padding: 10em;
  background-color: white;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

/* const Item = styled.div`
flex: ${props => props.flex};
padding: 10em;
background-color: ${props => props.bc};
`; */
