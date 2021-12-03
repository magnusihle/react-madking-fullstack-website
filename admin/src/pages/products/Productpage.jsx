import styled from "styled-components";
import Navbar from "../../components/Navbar";
import ProductHandler from "./ProductHandler";
import Footer from "../../components/Footer";



const Productpage = () => {
    return (
        <Container>
            <Navbar />
            <ProductHandler />
            <Footer />
        </Container>
    )
}

export default Productpage


const Container = styled.div``;
