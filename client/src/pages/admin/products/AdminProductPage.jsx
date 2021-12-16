import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductHandler from "./ProductsHandler";

const AdminProductpage = () => {
    return (
        <Container>
            <Navbar />
            <ProductHandler />
            {/* <EditProduct /> */}
            <Footer />
        </Container>
    )
}

export default AdminProductpage


const Container = styled.div``;
