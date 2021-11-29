import styled from "styled-components";
import { musicCarouselleDummyData } from "../../data/data";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../reusableFunctions/Functions";
import { useNavigate } from 'react-router-dom';


const MusicCarouselle = () => {
  const { height, width } = useWindowDimensions();
  const [slideItem, setSlideItem] = useState({ id: 1, item: {} });
  const navigate = useNavigate();
  let path = "";


  const handleClick = (item) => {
    path = "/products/" + (item.id);
    // console.log(item.id);
    // console.log(path);
    navigate(path);
  };

  const handleRightClick = () => {
    if (slideItem.id === 5) {
      setSlideItem({ id: 1 });
    } else if (slideItem.id < 5) {
      setSlideItem({ id: slideItem.id + 1 });
    }
  };

  const handleLeftClick = () => {
    if (slideItem.id === 1) {
      setSlideItem({ id: 5 });
    } else if (slideItem.id > 1) {
      setSlideItem({ id: slideItem.id - 1 });
    }
  };

  return (
    <Container id="beats">
      <Title>Våre Beats</Title>

      <ImageBoxContainer>
        {width > 800 && (
          <AiOutlineArrowLeft
            fontSize="8em"
            color="white"
            onClick={() => handleLeftClick()}
          />
        )}

        {width > 800 && <ImageBox padding="1em 0" opacity=".8">
          {musicCarouselleDummyData[slideItem.id - 1].title}
          <Image
            padding="10em 8em"
            hoverPadding="11em 9em"
            img={musicCarouselleDummyData[slideItem.id - 1].img}
            onClick={() => {
              handleClick(musicCarouselleDummyData[slideItem.id - 1]);
              width > 1200 && handleLeftClick();
            }}
          ></Image>
          {/* <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={() => handleClick(musicCarouselleDummyData[slideItem.id - 1])}>
          Velg
        </Button> */}
        </ImageBox>}

        {width < 800 && (
          <ImageBox padding="1em 0" opacity="1">
            {musicCarouselleDummyData[slideItem.id].title}
            <Image
              padding="13em 10em"
              hoverPadding="14em 11em"
              img={musicCarouselleDummyData[slideItem.id].img}
              onClick={() =>
                handleClick(musicCarouselleDummyData[slideItem.id])
              }
            ></Image>
            <Button backgroundcolor="#cbd4d8" color="black" hover="#b7d8e6" onClick={() => { handleClick(musicCarouselleDummyData[slideItem.id]); console.log("link to ") }}>
              Velg
            </Button>
          </ImageBox>
        )}

        {width > 1200 && (
          <ImageBox padding="1em 0" opacity="1">
            {musicCarouselleDummyData[slideItem.id].title}
            <Image
              padding="13em 10em"
              hoverPadding="14em 11em"
              img={musicCarouselleDummyData[slideItem.id].img}
              onClick={() =>
                handleClick(musicCarouselleDummyData[slideItem.id])
              }
            ></Image>
            <Button backgroundcolor="#cbd4d8" color="black" hover="#b7d8e6" onClick={() => { handleClick(musicCarouselleDummyData[slideItem.id]); }}>
              Velg
            </Button>
          </ImageBox>
        )}

        {width > 800 && (
          <ImageBox padding="1em 0" opacity=".8">
            {musicCarouselleDummyData[slideItem.id + 1].title}
            <Image
              padding="10em 8em"
              hoverPadding="11em 9em"
              img={musicCarouselleDummyData[slideItem.id + 1].img}
              onClick={() => {
                handleClick(musicCarouselleDummyData[slideItem.id + 1]);
                width > 1200 && handleRightClick();
              }}
            ></Image>
            {/* <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={() => handleClick(musicCarouselleDummyData[slideItem.id + 1])}>
            Velg
          </Button> */}
          </ImageBox>
        )}

        {width > 800 && (
          <AiOutlineArrowRight
            fontSize="8em"
            color="white"
            onClick={() => handleRightClick()}
          />
        )}

        <ArrowContainer>
          {width < 800 && (
            <AiOutlineArrowLeft
              fontSize="3rem"
              color="white"
              onClick={() => handleLeftClick()}
            />
          )}
          {width < 800 && (
            <AiOutlineArrowRight
              fontSize="3rem"
              color="white"
              onClick={() => handleRightClick()}
            />
          )}
        </ArrowContainer>
      </ImageBoxContainer>
    </Container>
  );
};

export default MusicCarouselle;

const Container = styled.div`
  display: flex;
  height: auto;
  padding: 1em 1em 12em 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  background-color: var(--color-2);

  @media (max-width: 751px) {
    flex-direction: column;
    padding: 1em 1em 2em 1em;
  }
`;

const ImageBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 751px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 800;
`;

const ImageBox = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => props.padding};
  opacity: ${(props) => props.opacity};
  border-radius: 1em;
  margin: 0 .6em;
  background-color: var(--color-1);
  color: white;
  width: 100%;


  @media (max-width: 1200px) {
    opacity: 1;
    padding: 1em 0;
  }


 
`;

const Image = styled.div`
  flex: 2;
  transition: all 0.3s ease;
  padding: ${(props) => props.padding};
  margin-top: 1em;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
  background-position: 100%;
  width: 100%;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.5, transparent), to(white));

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: 1;
    background: transparent;
    -webkit-box-shadow: inset 0 0 2px #000000;
  }

  &:hover {
    padding: ${(props) => props.hoverPadding};
  }


`;



const Button = styled.button`
z-index: 1;
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px;
  margin-top: 1em;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }
`;

const ArrowContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;

  @media (max-width: 751px) {
    margin-top: 10em;
  }
`;
