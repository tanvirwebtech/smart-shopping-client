import React from "react";
import logo from "../../assets/images/logo.png";
import paymentImg from "../../assets/images/payments.png";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
// dark:bg-siteGray-200 dark:text-siteGray-100
export default function Footer() {
    return (
        <div
            className="md:py-10
         sm:py-8 py-6 border-t-2 mt-6"
        >
            <div className="container">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-4 gap-4 pb-4 md:pb-10">
                    <div className="site-info">
                        <div className="info-wrap">
                            <div className="logo">
                                <img
                                    src={logo}
                                    alt="Smart Shopping Logo"
                                    className="mx-auto sm:mx-0"
                                />
                            </div>
                            <div className="info-text text-xs sm:text-sm md-text-base text-center sm:text-left text-justify">
                                <p>
                                    Welcome to Smart Shopping, your one-stop
                                    destination for all your online shopping
                                    needs! We bring you a diverse and extensive
                                    range of high-quality products to cater to
                                    your every requirement. Whether you're
                                    searching for the latest gadgets, stylish
                                    fashion trends, home essentials, or unique
                                    gifts, we have it all.
                                </p>
                            </div>
                            <div className="contact">
                                <div className="flex p-4 border m-2">
                                    <div className="icon flex items-center mr-2">
                                        <FaPhone className="text-xl text-primaryYellow md:text-2xl lg:Text-3xl"></FaPhone>
                                    </div>
                                    <div className="">
                                        <p className="text-sm md:text-base ">
                                            Got Question? Call us 24/7
                                        </p>
                                        <p className="text-xl md:text-2xl lg:text-3xl ">
                                            +0123 456 789
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links text-center sm:text-left">
                        <h5 className="font-semibold text-base pb-2 md:p-4 lg:pb-8">
                            Useful Links
                        </h5>
                        <ul className="text-sm">
                            <li>About Smart Shopping</li>
                            <li>Our Services</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="customer-services text-center sm:text-left">
                        <h5 className="font-semibold text-base pb-2 md:p-4 lg:pb-8">
                            Customer Services
                        </h5>
                        <ul className="text-sm">
                            <li>Payment Methods</li>
                            <li>Money-back guarantee</li>
                            <li>Returns</li>
                            <li>Shipping</li>
                            <li>
                                {" "}
                                <Link to={"/terms-and-conditions"}>
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-my-account text-center sm:text-left">
                        <h5 className="font-semibold text-base pb-2 md:p-4 lg:pb-8">
                            My Account
                        </h5>
                        <ul className="text-sm">
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>My Wishlist </li>
                            <li>Track My Order</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 md:mt-8 border-t-2 pt-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="copyright md:text-left text-center">
                            <p className="text-sm md:text-base">
                                Copyright &copy; 2023 | Smart Shopping
                            </p>
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
