import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import sideBanner1 from "../../../assets/images/banners/banner-1.jpg";
import sideBanner2 from "../../../assets/images/banners/banner-2.jpg";
import sideBanner3 from "../../../assets/images/banners/banner-3.jpg";

const SideBanners = () => {
    const sideBanners = [
        {
            id: 1,
            title: "Edifier \n Stereo Bluetooth",
            subTitle: "Top Product",
            link: "",
            img: sideBanner1,
        },
        {
            id: 2,
            title: "GoPro - Fusion  3160 Save $70",
            subTitle: "Clearance",
            link: "",
            img: sideBanner2,
        },
        {
            id: 3,
            title: "Apple Watch 4 Our hottest Deal",
            subTitle: "Featured",
            link: "",
            img: sideBanner3,
        },
    ];
    return (
        <div>
            {sideBanners.map((banner) => (
                <div
                    key={banner.id}
                    className="side-intro-banner relative pb-2"
                >
                    <img src={banner.img} alt="" className="w-full" />
                    <div className="content absolute top-1 left-1">
                        <p className="ml-4 text-xs sm:text-sm md:text-base">
                            {banner.subTitle}
                        </p>
                        <h4 className="font-semibold text-base sm:text-xl ml-4 w-[208px]">
                            {banner.title}
                        </h4>
                        <Link to="all-products">
                            <button className="py-1 px-4 text-primaryYellow hover:bg-primaryYellow hover:text-siteGray-100 duration-300 leading-4 rounded-full flex items-center text-xs sm:text-sm">
                                {" "}
                                <span>Shop Now</span>{" "}
                                <BsArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBanners;
