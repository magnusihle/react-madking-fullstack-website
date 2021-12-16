import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import ProductNavbar from "../../components/navbar/ProductNavbar";
import Product from "./Product";

const Container = styled.div``;

const Productpage = () => {

    return (
        <Container>
            <ProductNavbar />
            <Product />
            <Footer />
        </Container>
    );
};

export default Productpage;
