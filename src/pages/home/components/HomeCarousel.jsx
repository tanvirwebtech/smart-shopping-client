import React from "react";
import Slider from "react-slick";
import banner1 from "../../../assets/images/banners/3.jpg";
import banner2 from "../../../assets/images/banners/4.jpg";
import banner3 from "../../../assets/images/banners/5.jpg";
import {
    NextArrow,
    PrevArrow,
} from "../../../common/productSlider/ProductSlider";
const HomeCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    nextArrow: false,
                    prevArrow: false,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="banner1">
                    <img src={banner1} alt="Banner01" />
                </div>
                <div className="banner2">
                    <img src={banner2} alt="Banner01" />
                </div>
                <div className="banner3">
                    <img src={banner3} alt="Banner01" />
                </div>
                <div className="banner3">
                    <img src={banner3} alt="Banner01" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeCarousel;
