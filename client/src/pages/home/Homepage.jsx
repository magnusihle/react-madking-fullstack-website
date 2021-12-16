import Fab from "@material-ui/core/Fab";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// import Fab from "@material-ui/core/Fab";
import { Link } from "react-scroll";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import "./homepage.css";
import MusicCarouselle from "./MusicCarouselle";
import ProcessOfWork from "./ProcessOfWork";


const Container = styled.div``;

const Homepage = () => {
    const [showFab, setFab] = useState(false);

    //const { height, width } = useWindowDimensions();

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


