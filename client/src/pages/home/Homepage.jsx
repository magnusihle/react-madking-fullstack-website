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
import Fab from "@material-ui/core/Fab";


const Container = styled.div``;

const Homepage = () => {
    const [showFab, setFab] = useState(false);

    const { height, width } = useWindowDimensions();

    const makeFABVisible = () => {
        if (window.scrollY >= 100) {
            setFab(true);
        } else {
            setFab(false);
        }
    }
    window.addEventListener("scroll", makeFABVisible);

    return (
        <Container>

            <Fab className={showFab ? "fab-button active" : "fab-button"} color="primary" aria-label="add">
                <Link
                    to="hero"
                    className={"fab-link"}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={400}
                >
                    {showFab && <AiOutlineArrowUp className="fa-arrow-up" color="#214554" fontSize="3rem" />}
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


