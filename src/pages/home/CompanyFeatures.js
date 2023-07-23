import React from "react";
import {
    MdInfoOutline,
    MdLocalShipping,
    MdOutlineRotateLeft,
    MdOutlineSupport,
} from "react-icons/md";
const CompanyFeatures = () => {
    return (
        <div>
            <div className="container lg:py-10 py-6">
                <div className="feature-wrap">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-6 gap-4 items-start sm:items-center">
                        <div className="single-ft flex justify-center sm:justify-start  items-center">
                            <div className="ft-icon">
                                <MdLocalShipping className="lg:text-5xl md:text-4xl text-2xl" />
                            </div>
                            <div className="ft-details ml-2 md:ml-5">
                                <h4 className="lg:text-xl md:text-base text-sm font-semibold">
                                    Free Shipping
                                </h4>
                                <span className="lg:text-xl md:text-base text-sm font-light">
                                    Order $50 or more
                                </span>
                            </div>
                        </div>
                        <div className="single-ft flex justify-center sm:justify-start items-center">
                            <div className="ft-icon">
                                <MdOutlineRotateLeft className="lg:text-5xl md:text-4xl text-2xl" />
                            </div>
                            <div className="ft-details ml-2 md:ml-5">
                                <h4 className="lg:text-xl md:text-base text-sm  font-semibold">
                                    Free Returns
                                </h4>
                                <span className="lg:text-xl md:text-base text-sm  font-light">
                                    Within 30 days
                                </span>
                            </div>
                        </div>
                        <div className="single-ft flex justify-center sm:justify-start items-center">
                            <div className="ft-icon">
                                <MdInfoOutline className="lg:text-5xl md:text-4xl text-2xl" />
                            </div>
                            <div className="ft-details ml-2 md:ml-5">
                                <h4 className="lg:text-xl md:text-base text-sm font-semibold">
                                    Get 20% Off 1 Item
                                </h4>
                                <span className="lg:text-xl md:text-base text-sm  font-light">
                                    when you sign up
                                </span>
                            </div>
                        </div>
                        <div className="single-ft flex justify-center sm:justify-start items-center">
                            <div className="ft-icon">
                                <MdOutlineSupport className="lg:text-5xl md:text-4xl text-2xl" />
                            </div>
                            <div className="ft-details ml-2 md:ml-5">
                                <h4 className="lg:text-xl md:text-base text-sm  font-semibold">
                                    We Support
                                </h4>
                                <span className="lg:text-xl md:text-base text-sm  font-light">
                                    24/7 amazing services
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyFeatures;
