import React from "react";
import promBanner from "../../assets/images/bg-1.jpg";

const promBannerStyle = {
    backgroundImage: `url(${promBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
const PromotionBanner = () => {
    return (
        <div className="container p-4" style={promBannerStyle}>
            <div className="promotion-banner p-4 bg-siteGray-100">
                <div className="grid md:grid-cols-3 py-4 items-center">
                    <div className="info text-center md:text-right ">
                        <h3 className="font-bold text-xl sm:text-2xl ">
                            <span className="text-primaryYellow">New Deal</span>
                            <br /> Start Daily at 12 PM{" "}
                        </h3>
                    </div>
                    <div className="info ml-4 text-center md:text-left">
                        <p className="p-2 text-sm sm:text-base">
                            Get FREE SHIPPING* & 5% rewards on every order with
                            Molla Theme rewards program
                        </p>
                    </div>
                    <div className="info text-center flex justify-center items-center">
                        <button className="cart-btn ">
                            Add To cart for $50/year
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionBanner;
