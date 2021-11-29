import styled from "styled-components";
import { cartData } from "../../data/data";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Order = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderList, setOrderList] = useState(cartData);

  const removeItemFromOrder = (id) => {
    setOrderList(orderList.filter(x => x.id !== id));
  }

  useEffect(() => {
    const getAndSetTotalPriceOfOrder = () => {
      let price = 0;
      for (let i = 0; i < orderList.length; i++) {
        price += orderList[i].price;
      }
      setTotalPrice(price);
    }

    getAndSetTotalPriceOfOrder()
  }, [totalPrice])


  return (
    <Container>
      <OrderContainer>
        <Title>Order</Title>

        <OrderDetailsContainer>
          {orderList.map((item, index) => (
            <OrderDetails key={item.id}>
              <Image src={item.img} />
              <Detail>
                <DetailTitle>Tittel</DetailTitle>
                <DetailInfo> {item.title}</DetailInfo>
              </Detail>
              <Detail>
                <DetailTitle>Pris</DetailTitle>
                <DetailInfo> {item.price} Kr</DetailInfo>
              </Detail>
              <DeleteArea>
                <AiOutlineDelete color="red" fontSize="1.5rem" onClick={() => removeItemFromOrder(item.id)} />
              </DeleteArea>
            </OrderDetails>
          ))}
        </OrderDetailsContainer>

        <OrderSummary>
          <SummaryPrice>Total pris: {totalPrice} Kr</SummaryPrice>
        </OrderSummary>
        <Button backgroundcolor="#3E768C" color="white" hover="#558ba0">
          Sjekk Ut
        </Button>            </OrderContainer>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  position: relative;
  display: flex;
  padding-top: 8em;
  padding-bottom: 2em;
  align-items: center;
  justify-content: center;
`;

const OrderDetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 3px 15px 5px var(--color-5);
  border-radius: 1em;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const OrderDetails = styled.div`
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin: 0.5em auto;
`;

const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0.5em;
  font-size: 1.5rem;
  margin: 0 0.5em;
  color: black;
  min-width: 12vh;

  @media (max-width: 800px) {
    min-width: 8vh;

  } ;

  @media (max-width: 500px) {
    min-width: 6vh;

  } ;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 10em;
  max-width: 10em;

  @media (max-width: 800px) {
    min-width: 8em;
    min-height: 8em;
  } ;

  @media (max-width: 500px) {
    max-width: 3em;
    max-height: 3em;
  } ;
`;

const DetailTitle = styled.h1`
flex: 1;
color: ${props => props.color};
font-size: 1.7rem;

@media (max-width: 500px) {
  font-size: 1.2rem;
  } ;
`;

const DetailInfo = styled.p`
flex: 1;
color: black;
font-size: 1.2rem;

@media (max-width: 500px) {
  font-size: 1rem;
  } ;

`;

const DeleteArea = styled.div`
display: flex;
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

const OrderSummary = styled.div`

`;

const SummaryPrice = styled.p`
font-size: 24px;
`;