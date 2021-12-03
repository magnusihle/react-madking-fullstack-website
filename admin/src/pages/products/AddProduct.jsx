import { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        img: "",
        desc: "",
        category: [],
        price: "",
    });





    //Get input values
    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        setUserInput({ ...userInput, [e.target.name]: value });
    };


    const handleClick = (e) => {
        e.preventDefault();
        console.log(userInput);
    }



    return (
        <Container>
            <Title>Legg til nytt produkt</Title>

            <Form>

                <FormTitle>Legg til nytt produkt</FormTitle>
                <Input type="text" name="title" placeholder="navn.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="img" placeholder="beskrivelse.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="desc" placeholder="kategori.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="category" placeholder="pris.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="price" placeholder="bilde.." onChange={(e) => handleChange(e)} />


                <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={(e) => handleClick(e)}>
                    Legg Til
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
const Input = styled.input`
flex: 1;
width: 90%;
padding: 1.5em;
margin: .5em 0 .5em 0;
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