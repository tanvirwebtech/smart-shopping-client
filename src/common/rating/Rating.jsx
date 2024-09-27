import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = () => {
    const totalRating = 50;
    const reviewCount = 10;

    const rating = totalRating / reviewCount;
    if (rating % reviewCount === 0) {
    }

    return (
        <div className="rating text-xs sm:text-sm flex py-2 text-primaryYellow items-center ">
            <FaStar className="stroke-primaryYellow"></FaStar>
            <FaStar className="stroke-primaryYellow"></FaStar>
            <FaStar className="stroke-primaryYellow"></FaStar>
            <FaStar className="stroke-primaryYellow"></FaStar>
            <FaStarHalf className="stroke-1 stroke-primaryYellow"></FaStarHalf>
            <span>5 reviews</span>
        </div>
    );
};

export default Rating;
