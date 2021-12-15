import styled from "styled-components";
import ProductNavbar from "../../components/navbar/ProductNavbar";
import Footer from "../../components/footer/Footer";
import Order from "./Order";

const Orderpage = () => {
    return (
        <Container>
            <ProductNavbar />
            <Order />
            <Footer />
        </Container>
    );
};

export default Orderpage;

const Container = styled.div``;
