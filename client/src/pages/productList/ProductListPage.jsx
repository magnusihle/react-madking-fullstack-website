import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import ProductNavbar from "../../components/navbar/ProductNavbar";
import Products from "./Products";


const ProductListPage = () => {

    return (
        <Container>
            <ProductNavbar />
            <Products />
            <Footer />
        </Container>
    );
};

export default ProductListPage;



const Container = styled.div``;
