import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dealbg from "../../../assets/images/deal/bg-1.jpg";
import ProductCard from "../../../common/productCard/ProductCard";

const Deals = () => {
    const products = useSelector((state) => state.products);
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24); // Set target time to 24 hours from now

    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTimeRemaining = calculateTimeRemaining(targetTime);
            setTimeRemaining(updatedTimeRemaining);

            if (updatedTimeRemaining.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const calculateTimeRemaining = (targetTime) => {
        const now = new Date().getTime();
        const timeDifference = targetTime - now;

        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            total: timeDifference,
            hours,
            minutes,
            seconds,
        };
    };
    return (
        <div>
            <div className="container ">
                <div className="section-heading text-center md:py-6 py-4">
                    <h2 className="text-xl md:text-2xl font-bold ">
                        Deals & Outlet
                    </h2>
                    <span className="mt-2 md:mt-4 font-light text-siteGray-200 text-xs sm:text-base">
                        Today deal and more
                    </span>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2">
                    <div className="md:col-span-2 col-span-1">
                        <div
                            className="deal lg:px-10 md:px-8 sm:px-5 px-4 lg:py-10 md:py-8 sm:py-5 py-4 h-full flex flex-col justify-between sm:bg-cover"
                            style={{
                                backgroundImage: `url(${dealbg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="deal-head">
                                <h4 className="text-base md:text-2xl font-semibold text-red-400">
                                    Deal of the Day
                                </h4>
                                <span className="text-siteGray-200 text-xs md:text-base">
                                    Limited quantities.
                                </span>
                            </div>
                            <div className="deal-product">
                                <h4 className="text-base md:text-xl ">
                                    Home Smart Speaker with <br /> Google
                                    Assistant
                                </h4>
                                <p className="py-1 text-base md:text-2xl font-light text-gray-400">
                                    <span className="text-red-300">
                                        $129.00
                                    </span>{" "}
                                    Was <span>$159.00</span>
                                </p>
                                <Link to={"/"}>
                                    <button className="py-1 px-4 text-primaryYellow hover:bg-primaryYellow hover:text-siteGray-100 duration-300 leading-4 rounded-full flex items-center text-xs sm:text-sm border border-primaryYellow">
                                        {" "}
                                        <span>Shop Now</span>{" "}
                                        <BsArrowRight className="ml-2" />
                                    </button>
                                </Link>
                            </div>
                            <div className="timer flex mt-2 ">
                                <div className="hour mx-2 text-center">
                                    <span className="font-bold p-1 sm:p-2 text-base md:text-2xl leading-6 bg-primaryYellow relative text-siteGray-100 rounded-md block after:content-[':'] after:-right-3 after:text-siteGray-400 after:absolute top-0">
                                        {timeRemaining.hours}
                                    </span>
                                    <span>
                                        <small className="mt-6 text-xs">
                                            Hour
                                        </small>
                                    </span>
                                </div>
                                <div className="mx-2 minutes text-center">
                                    <span className="font-bold p-1 sm:p-2 text-base md:text-2xl leading-6 bg-primaryYellow text-siteGray-100 rounded-md block relative after:content-[':'] after:-right-3 after:text-siteGray-400 after:absolute top-0">
                                        {timeRemaining.minutes}
                                    </span>
                                    <span className="">
                                        <small className="mt-6 text-xs">
                                            minutes
                                        </small>
                                    </span>
                                </div>
                                <div className="mx-2 seconds text-center">
                                    <span className="font-bold p-1 sm:p-2 text-base md:text-2xl leading-6 bg-primaryYellow text-siteGray-100 rounded-md block">
                                        {timeRemaining.seconds}
                                    </span>
                                    <span className="">
                                        <small className="mt-6 text-xs">
                                            seconds
                                        </small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 deal-products flex gap-2">
                        <div className="">
                            <ProductCard
                                product={products[0]}
                                imgCls={"w-full"}
                            ></ProductCard>
                        </div>
                        <div className="">
                            <ProductCard
                                product={products[2]}
                                imgCls={"w-full"}
                            ></ProductCard>
                        </div>
                    </div>
                </div>
                <div className="deal-navigate-button lg:my-10 pt-2 md:my-6 my-4 text-center">
                    <button className="border rounded-3xl px-3 md:px-5 py-1 md:py-3 hover:text-primaryYellow hover:bg-white duration-300 ">
                        <span className="flex items-center text-xs sm:text-base">
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
