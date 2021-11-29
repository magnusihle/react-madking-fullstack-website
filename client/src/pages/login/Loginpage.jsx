import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import ProductNavbar from "../../components/navbar/ProductNavbar";
import Login from "./Login";



const Loginpage = () => {

    return (
        <Container>
            <ProductNavbar />
            <Login />
            <Footer />
        </Container>
    );
};

export default Loginpage;


const Container = styled.div`


`;