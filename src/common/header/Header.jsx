import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./headerComponents/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import { useEffect } from "react";
import logo from "../../assets/images/logo3.png";

export default function Header() {
    const [navToggle, setNavToggle] = useState(false);
    const [userOption, setUserOption] = useState(false);
    const profile = useSelector((state) => state.profile);
    const authState = useSelector((state) => state.authState);
    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const handleNavToggle = () => {
        setNavToggle(!navToggle);
    };

    useEffect(() => {
        if (userOption) {
            setTimeout(() => {
                setUserOption(false);
            }, 3000);
        }
    }, [userOption]);

    const handleUserOption = () => {
        setUserOption(!userOption);
    };
    useEffect(() => {
        return () => {
            window.addEventListener("resize", () => {
                if (window.innerWidth >= 768) {
                    setNavToggle(false);
                }
            });
        };
    }, []);

    return (
        <div className="w-full relative">
            <nav className="bg-siteGray-100 border-b border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-700 fixed top-0 w-full z-50">
                <div className="container flex items-center mx-auto justify-between w-full">
                    {/* Brand Logo  */}
                    <div className="w-1/3 sm:w-1/4">
                        <Link to="/" className="">
                            <div className="w-full">
                                <img
                                    src={logo}
                                    className="mr-3 w-full"
                                    alt="Smart Shopping Logo"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Search Box  */}

                    <SearchBox></SearchBox>

                    {/* Icons  */}
                    <div className="useful-icons w-1/3 flex justify-end">
                        <ul className="flex bg-siteGray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0  dark:bg-gray-700 dark:border-gray-900">
                            <li className="font-sans ml-2 sm:ml-0 p-1 md:inline-block lg:mt-0 w-full">
                                {/* Cart Icon  */}
                                <Link to="/cart" className="relative">
                                    <svg
                                        className="w-5 md:w-6 text-primaryYellow"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                    <span className="absolute -right-2 top-0 rounded-full bg-primaryYellow w-4 h-4 top right p-0 m-0 text-gray-900 font-mono text-sm  leading-tight text-center">
                                        {cart?.length ? cart?.length : 0}
                                    </span>
                                </Link>
                            </li>
                            <li className="font-sans ml-2 sm:ml-0 p-1 md:inline-block lg:mt-0 w-full ">
                                {/* Wishlist Icon  */}

                                <svg
                                    className="w-5 md:w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </li>
                            {/* Profile Options */}
                            <li className="font-sans ml-2 md:ml-0 p-1 md:inline-block lg:mt-0 relative w-full text-white">
                                <div
                                    className={`${
                                        authState.user && userOption
                                            ? "absolute right-4 top-8 z-30 px-2 py-1 bg-slate-500"
                                            : "hidden absolute right-4 top-8"
                                    }`}
                                >
                                    <div className="text-center p-2">
                                        <p>
                                            <small>Name:{profile?.name}</small>
                                        </p>
                                        <p>
                                            <small>
                                                Email:{profile?.email}
                                            </small>
                                        </p>
                                    </div>
                                    <ul className="text-center">
                                        <li>
                                            <Link
                                                to={"/profile"}
                                                className="inline-block py-2 px-4 my-1  hover:text-primaryYellow hover:border-primaryYellow  duration-300 cursor-pointer border rounded-md"
                                                onClick={handleUserOption}
                                            >
                                                View Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-block py-2 px-4 my-1  hover:text-primaryYellow hover:border-primaryYellow duration-300 cursor-pointer border rounded-md "
                                                onClick={() =>
                                                    dispatch(logout())
                                                }
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {/* {userOption && !authState.user && (
                                    <div className="absolute w-[120px] -right-full top-8 z-30 px-2 py-1 bg-slate-500 animate-pulse duration-300">
                                        Please Login
                                    </div>
                                )} */}
                                {/* // */}

                                {/* User Icon */}
                                {/* // */}
                                <button onClick={handleUserOption}>
                                    <svg
                                        className={
                                            userOption && !authState.user
                                                ? "animate-[wiggle_0.5s_ease-in-out] duration-100 w-5 md:w-6 text-primaryYellow"
                                                : "w-5 md:w-6 text-primaryYellow"
                                        }
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="container relative w-full">
                    <div className="flex items-center mx-auto">
                        {/* Mobile Menu Button */}
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-1 ml-3 mt-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            onClick={handleNavToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={
                                    navToggle ? "hidden w-6 h-6" : "w-6 h-6"
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className={
                                    navToggle ? "w-6 h-6" : "hidden w-6 h-6"
                                }
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>{" "}
                    {/* Menu  */}
                    <div
                        className={
                            navToggle
                                ? "justify-between absolute top-8 left-0 items-center w-full md:flex md:w-auto md:order-1"
                                : "hidden justify-center items-center w-full md:flex md:w-auto md:order-1"
                        }
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-2 mt-4 bg-siteGray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0  dark:bg-gray-700 dark:border-primaryYellow">
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/all-products"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/smartphone"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Smart Phones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products/laptop"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    Accessories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    All Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="headerNavLink"
                                    aria-current="page"
                                >
                                    About
                                </Link>
                            </li>
                            {!authState.user && (
                                <li>
                                    <Link
                                        to="/login"
                                        className="headerNavLink"
                                        aria-current="page"
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
