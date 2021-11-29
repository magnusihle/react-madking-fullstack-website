import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "./Hero";
import About from "./About";
import ProcessOfWork from "./ProcessOfWork";
import MusicCarouselle from "./MusicCarouselle";
import Contact from "./Contact";
// import Fab from "@material-ui/core/Fab";
import { Link } from "react-scroll";
import "./homepage.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import useWindowDimensions from "../../reusableFunctions/Functions";
import Test from "./Test";

const Container = styled.div``;

const Homepage = () => {
    const { height, width } = useWindowDimensions();

    console.log(window.screenY);

    return (
        <Container>

            <Fab>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
                    <AiOutlineArrowUp fontSize="3em" color="#214554" />
                </Link>
            </Fab>

            <Navbar />
            <Hero />
            <About />
            <ProcessOfWork />
            <MusicCarouselle />
            <Contact />
            {/* <Test /> */}
            <Footer />
        </Container>
    );
};

export default Homepage;

const Fab = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  height: 3em;
  width: 3em;
  bottom: 0.5em;
  right: 0.51em;
  border-radius: 50%;
  background-color: white;
`;
