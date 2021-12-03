import { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
    const [productToDelete, setProductToDelete] = useState({});


    //Get input values
    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        setProductToDelete({ ...productToDelete, [e.target.name]: value });
    };


    const handleClick = (e) => {
        e.preventDefault();
        console.log(productToDelete);
    }



    return (
        <Container>
            <Title>Slett Produkt</Title>

            <Form>

                <FormTitle>Slett Produkt Fra Lageret</FormTitle>

                <Select></Select>



                <Button backgroundcolor="red" color="white" hover="#ff4949" onClick={(e) => handleClick(e)}>
                    Slett
                </Button>            </Form>


        </Container>
    )
}

export default AddProduct


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
width: 100%;
`;

const Title = styled.h1`
font-size: 2rem;
color: black;
`;

const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 0px 15px 5px #000000;
width: 80%;
padding: 1em;
border-radius: 1em;
`;
const FormTitle = styled.h1`
font-size: 1.5rem;
color: black;
`;

const Select = styled.select`
padding: 1em;
width: 90%;
margin: 1em;
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