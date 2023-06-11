import React from "react";
import "./Home.css";
import ProductSlider, {
    SampleNextArrow,
    SamplePrevArrow,
} from "./../../common/productSlider/ProductSlider";
import ProductCard from "./../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../redux/actions/productAction";
import Slider from "react-slick";
import banner1 from "../../assets/images/banners/3.jpg";
import banner2 from "../../assets/images/banners/4.jpg";
import banner3 from "../../assets/images/banners/5.jpg";

import sideBanner1 from "../../assets/images/banners/banner-1.jpg";
import sideBanner2 from "../../assets/images/banners/banner-2.jpg";
import sideBanner3 from "../../assets/images/banners/banner-3.jpg";
import { Link } from "react-router-dom";
import PromotionBanner from "./PromotionBanner";
import TabPanels from "./TabPanels";
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts("products"));
    }, []);
    const products = useSelector((state) => state.products);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    return (
        <>
            <section className="mt-8">
                <div className="container w-11/12 mx-auto">
                    <div className="category-cards">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 gap-4 ">
                            <div className="md:col-span-2 col-span-1 banner-slider">
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
                            <div className="col-span-1">
                                <div className="side-intro-banner relative pb-2">
                                    <img
                                        src={sideBanner1}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="content absolute top-1 left-1">
                                        <p className="ml-4">Top Product</p>
                                        <h4 className="font-semibold text-xl ml-4">
                                            Edifier <br /> Stereo Bluetooth
                                        </h4>
                                        <Link to="all-products">
                                            <button className="py-1 px-4 text-primaryYellow hover:bg-primaryYellow hover:text-siteGray-100 duration-300 leading-4 rounded-full">
                                                {" "}
                                                Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="side-intro-banner relative pb-2">
                                    <img
                                        src={sideBanner2}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="content absolute top-1 left-1">
                                        <p className="ml-4">Clearance</p>
                                        <h4 className="font-semibold text-xl ml-4">
                                            GoPro - Fusion 3160 <br /> Save $70
                                        </h4>
                                        <Link to="all-products">
                                            <button className="py-1 px-4 text-primaryYellow hover:bg-primaryYellow hover:text-siteGray-100 duration-300 leading-4 rounded-full">
                                                {" "}
                                                Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="side-intro-banner relative pb-2">
                                    <img
                                        src={sideBanner3}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="content absolute top-1 left-1">
                                        <p className="ml-4">Featured</p>
                                        <h4 className="font-semibold text-xl ml-4">
                                            Apple Watch 4 <br /> Our hottest
                                            Deal
                                        </h4>
                                        <Link to="/all-products">
                                            <button className="py-1 px-4 text-primaryYellow hover:bg-primaryYellow hover:text-siteGray-100 duration-300 leading-4 rounded-full">
                                                {" "}
                                                Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductSlider
                products={products}
                sectionHeading="Latest Products"
            ></ProductSlider>

            <section>
                <TabPanels />
            </section>
            <section>
                <PromotionBanner />
            </section>
        </>
    );
}
