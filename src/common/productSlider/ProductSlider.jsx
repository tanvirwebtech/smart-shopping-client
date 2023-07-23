import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "./../productCard/ProductCard";

export function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="p-2 inline-block z-40 hover:bg-siteGray-100 hover:cursor-pointer duration-300 rounded-full border border-primaryYellow bg-transparent absolute -left-8 top-1/2 -translate-y-1/2 "
            onClick={onClick}
        >
            {" "}
            <svg
                className="md:w-10 sm:w-8 w-6 text-primaryYellow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    );
}
export function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="p-2 inline-block absolute hover:bg-siteGray-100 hover:cursor-pointer duration-300 rounded-full border border-primaryYellow bg-transparent -right-6 top-1/2 -translate-y-1/2"
            onClick={onClick}
        >
            <svg
                className="md:w-10 sm:w-6 w-4 text-primaryYellow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
}

export default function ProductSlider(props) {
    // const products = useSelector((state) => state.products);
    const { products, sectionHeading, categoryHeading } = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,

                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
        ],
    };

    return (
        <div className="container mt-4 sm:mt-6 md:mt-10">
            <div className="section-heading mt-2 flex justify-between items-center">
                <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl p-2 text-siteGray-400 capitalize">
                    {categoryHeading ? categoryHeading + "s" : sectionHeading}
                </h2>
                {categoryHeading ? (
                    <Link to={`/products/${categoryHeading}`}>
                        <span className="text-primaryYellow text-xs  sm:text-sm md:text-base">
                            See All
                        </span>
                    </Link>
                ) : (
                    <Link to={`/all-products`}>
                        <span className="text-primaryYellow text-xs sm:text-sm md:text-base">
                            See All
                        </span>
                    </Link>
                )}
            </div>

            <div>
                {products.length > 4 ? (
                    <Slider {...settings}>
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                imgCls="w-1/2 mx-auto"
                                product={product}
                            ></ProductCard>
                        ))}
                    </Slider>
                ) : (
                    <div className="grid lg:grid-cols-4 md:grid-clos-3 sm:grid-cols-2 grid-cols-2 md:gap-4 lg:gap-8 gap-2">
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                imgCls="w-1/2 mx-auto"
                                product={product}
                            ></ProductCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
