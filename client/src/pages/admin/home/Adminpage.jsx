import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "./Hero"
import About from "./About"
import WorkProcess from "./Workprocess"



const Adminpage = () => {
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

export default Adminpage


const Container = styled.div``;
