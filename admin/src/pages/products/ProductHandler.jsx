import { useState } from "react";
import styled from "styled-components";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct"
import EditProduct from "./EditProduct";


const ProductHandler = () => {


    return (
        <Container>
            <Title>Legg til, endre eller slett produkter</Title>
            <AddProduct />
            <DeleteProduct />
            <EditProduct />
        </Container>
    )
}

export default ProductHandler


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 5em;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 2rem;
color: black;
`;
