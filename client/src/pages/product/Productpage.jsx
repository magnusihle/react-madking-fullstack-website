import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
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
