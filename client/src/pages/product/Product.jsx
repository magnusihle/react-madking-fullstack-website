import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";



const Product = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const [product, setProduct] = useState({});
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  console.log("ID: ", id)


  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const getProduct = () => {
      try {
        const res = products.filter((x) => x._id === id);
        console.log("Result: ", res);
        setProduct(res[0]);
      } catch (e) {
        console.log(e);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(
      addProduct({ ...product })
    );
  };



  return (
    <Container>
      {width > 800 && (
        <ProductContainer>
          <ProductTitle color="white">
            {product.title}
          </ProductTitle>
          <ProductImage src={product.img} alt="test" />
        </ProductContainer>
      )}

      {width < 800 && (
        <ProductImage src={product.img} alt="test" />
      )}

      <ProductInformationContainer>
        <ProductTitle color="black">
          {product.title}
        </ProductTitle>
        <ProductDesc>{product.description}</ProductDesc>
        <ProductPrice>
          Pris: {product.price} Kr
        </ProductPrice>
        <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={handleClick}>
          Legg til i handleliste
        </Button>{" "}
      </ProductInformationContainer>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 3em 1em 1em 1em;
  height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 7em;
  } ;
`;

const ProductContainer = styled.div`
  flex: 1;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: var(--color-2);
  max-width: 50%;
  max-height: 80%;
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

const ProductImage = styled.img`
  max-height: 70vh;
  max-width: 100%;
  border-radius: 1em;
  box-shadow: 0px 11px 15px 5px #000000;

  @media (max-width: 800px) {
    max-height: 40vh;
    max-width: 35vh;
    box-shadow: 0px 11px 15px 5px #636363;
  }

  &:hover {
    box-shadow: 0px 11px 15px 5px #636363;
  }
`;

const ProductInformationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const ProductDesc = styled.p`
  font-size: 1.2rem;
  color: black;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  color: black;
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
