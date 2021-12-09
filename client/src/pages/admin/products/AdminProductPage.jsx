import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductHandler from "./ProductsHandler";

const AdminProductpage = () => {
    return (
        <Container>
            <Navbar />
            <ProductHandler />
            <Footer />
        </Container>
    )
}

export default AdminProductpage


const Container = styled.div``;
