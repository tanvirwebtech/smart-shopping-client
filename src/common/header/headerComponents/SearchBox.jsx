import React, { useState } from "react";
import { MdOutlineCancel, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SearchBox() {
    const [searchToggle, setSearchToggle] = useState(true);
    const handleSearchToggle = () => {
        setSearchToggle(!searchToggle);
    };
    return (
        <div className="flex w-full mx-2 justify-end">
            <div className="search-btn inline-block sm:hidden text-right">
                <button
                    className="flex items-center"
                    onClick={handleSearchToggle}
                >
                    {searchToggle ? (
                        <>
                            <MdSearch className="text-2xl"></MdSearch>
                        </>
                    ) : (
                        <MdOutlineCancel className="text-xl"></MdOutlineCancel>
                    )}
                </button>
            </div>
            <form
                className={
                    searchToggle
                        ? " w-full md:inline-block hidden sm:inline-block lg:inline-block"
                        : "w-full md:inline-block lg:inline-block "
                }
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                    Search
                </label>
                <div className="relative w-full">
                    <input
                        type="search"
                        id="default-search"
                        className="block px-1 sm:py-2 py-1 md:px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-primaryYellow dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primaryYellow  focus-visible:border-border-primaryYellow focus-visible:outline-0"
                        placeholder="Search..."
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-1 bottom-1 sm:right-2.5 sm:bottom-1 bg-siteGray-400 hover:bg-primaryYellow  focus:outline-none duration-300 font-medium rounded-lg text-sm p-2 dark:bg-siteGray-200 dark:hover:bg-primaryYellow "
                    >
                        <svg
                            aria-hidden="true"
                            className="w-2 sm:w-3 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
