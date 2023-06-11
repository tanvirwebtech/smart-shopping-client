import React from "react";
import logo from "../../assets/images/logo.png";
import paymentImg from "../../assets/images/payments.png";
// dark:bg-siteGray-200 dark:text-siteGray-100
export default function Footer() {
    return (
        <div
            className="md:py-10
         sm:py-8 py-6 border-t-2 mt-6"
        >
            <div className="container  w-11/12">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4 gap-4 pb-10">
                    <div className="site-info">
                        <div className="info-wrap">
                            <div className="logo">
                                <img src={logo} alt="Smart Shopping Logo" />
                            </div>
                            <div className="info-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Soluta esse adipisci
                                accusantium facilis debitis tempore magni nobis,
                                cumque error quasi incidunt perferendis
                            </div>
                            <div className="contact">
                                <div className="flex">
                                    <div className="icon"></div>
                                    <div className="p-4 border m-2">
                                        <p className="text-md">
                                            Got Question? Call us 24/7
                                        </p>
                                        <p className="text-3xl">
                                            +0123 456 789
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <h5 className="font-semibold text-md pb-8">
                            Useful Links
                        </h5>
                        <ul className="">
                            <li>About Smart Shopping</li>
                            <li>Our Services</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="customer-services">
                        <h5 className="font-semibold text-md pb-8">
                            Customer Services
                        </h5>
                        <ul>
                            <li>Payment Methods</li>
                            <li>Money-back guarantee</li>
                            <li>Returns</li>
                            <li>Shipping</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="customer-services">
                        <h5 className="font-semibold text-md pb-8">
                            My Account
                        </h5>
                        <ul>
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>My Wishlist </li>
                            <li>Track My Order</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t-2 pt-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="copyright md:text-left text-center">
                            <p>Copyright &copy; 2023 | Smart Shopping</p>
                        </div>
                        <div className="payment">
                            <div className="payment-img flex md:justify-end justify-center">
                                <img src={paymentImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
