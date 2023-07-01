import React from "react";
import dealbg from "../../assets/images/deal/bg-1.jpg";
import { Link } from "react-router-dom";
import ProductCard from "./../../common/productCard/ProductCard";
import { useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
const Deals = () => {
    const products = useSelector((state) => state.products);
    return (
        <div>
            <div className="container ">
                <div className="section-heading text-center md:py-6 py-4">
                    <h2 className="text-2xl font-bold ">Deals & Outlet</h2>
                    <span className="mt-4 font-light text-siteGray-200">
                        Today deal and more
                    </span>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
                    <div className="col-span-2">
                        <div
                            className="deal lg:px-10 md:px-8 sm:px-5 px-4 lg:py-10 md:py-8 sm:py-5 py-4 h-full flex flex-col justify-between"
                            style={{
                                backgroundImage: `url(${dealbg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="deal-head">
                                <h4 className="text-2xl font-semibold text-red-400">
                                    Deal of the Day
                                </h4>
                                <span className="text-siteGray-200">
                                    Limited quantities.
                                </span>
                            </div>
                            <div className="deal-product">
                                <h4 className="text-xl">
                                    Home Smart Speaker with <br /> Google
                                    Assistant
                                </h4>
                                <p className="py-1 text-2xl font-light text-gray-400">
                                    <span className="text-red-300">
                                        $129.00
                                    </span>{" "}
                                    Was <span>$159.00</span>
                                </p>
                                <Link to={"/"} className="text-primaryYellow">
                                    Shop Now
                                </Link>
                            </div>
                            <div className="timer flex">
                                <div className="hour mx-2 text-center">
                                    <span className="font-bold p-2 text-2xl leading-6 bg-primaryYellow relative text-siteGray-100 rounded-md block after:content-[':'] after:-right-3 after:text-siteGray-400 after:absolute top-0">
                                        23
                                    </span>
                                    <span>
                                        <small className="mt-6 text-xs">
                                            Hour
                                        </small>
                                    </span>
                                </div>
                                <div className="mx-2 minutes text-center">
                                    <span className="font-bold p-2 text-2xl leading-6 bg-primaryYellow text-siteGray-100 rounded-md block relative after:content-[':'] after:-right-3 after:text-siteGray-400 after:absolute top-0">
                                        45
                                    </span>
                                    <span className="mt-6 text-xs">
                                        minutes
                                    </span>
                                </div>
                                <div className="mx-2 seconds text-center">
                                    <span className="font-bold p-2 text-2xl leading-6 bg-primaryYellow text-siteGray-100 rounded-md block">
                                        12
                                    </span>
                                    <span className="mt-6 text-xs">
                                        seconds
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ProductCard
                            product={products[0]}
                            imgCls={"w-full"}
                        ></ProductCard>
                    </div>
                    <div className="">
                        <ProductCard product={products[2]}></ProductCard>
                    </div>
                </div>
                <div className="deal-navigate-button lg:my-10 pt-2 md:my-6 my-4 text-center">
                    <button className="border rounded-3xl px-5 py-3 hover:text-primaryYellow hover:bg-white duration-300 ">
                        <span className="flex items-center">
                            Shop More Outlet Deals{" "}
                            <BsArrowRight className="ml-4"></BsArrowRight>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deals;
