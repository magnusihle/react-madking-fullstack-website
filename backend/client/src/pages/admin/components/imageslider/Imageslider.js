

/*https://dev.to/holdmypotion/react-3d-image-slider-5g6*/

import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./imageslider.css";

const NextArrow = ({ onClick }) => {
    return (
        <div className="nextArrow" onClick={onClick}>
            <BsChevronRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="prevArrow" onClick={onClick}>
            <BsChevronLeft />
        </div>
    );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        centerMode: true,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: slidesToShow,
        centerPadding: "0",
        swipeToSlide: true,
        focusOnSelect: true,
        nextArrow: <NextArrow onClick />,
        prevArrow: <PrevArrow onClick />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const templateImages = images.map((image, idx) => {
        if (image !== null) {
            return (
                <div className="imageslider-container" key={image.id}>
                    <div
                        className={idx === imageIndex ? "activeSlide" : "slide"}
                        key={image.id}
                    >
                        <div className="slideWrapper">
                            {image.code ? (
                                image.code
                            ) : (
                                <img src={image.src} alt={image.alt} />
                            )}
                        </div>
                    </div>
                    <div className="slideText text">
                        {idx === imageIndex ? <p>{image.text}</p> : <p></p>}
                    </div>
                </div>
            );
        }
        return null;
    });

    return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
