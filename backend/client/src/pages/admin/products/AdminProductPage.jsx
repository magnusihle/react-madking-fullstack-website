import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductHandler from "./ProductsHandler";
import EditProduct from "./EditProduct";

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
