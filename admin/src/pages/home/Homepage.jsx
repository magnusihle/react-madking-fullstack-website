import styled from "styled-components";
import Hero from "./Hero";
import Navbar from "../../components/Navbar"
import About from "./About";
import WorkProcess from "./WorkProcess";
import Footer from "../../components/Footer";



const Homepage = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
            <WorkProcess />
            <Footer />
        </Container>
    )
}

export default Homepage


const Container = styled.div``;
