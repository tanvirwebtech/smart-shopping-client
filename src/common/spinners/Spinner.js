import React from "react";
import "./Spinner.css";
const Spinner = () => {
    return (
        <div className="container">
            <div className="spinner w-full flex justify-center items-center">
                <div className="spinner-body w-8 h-8 border-4 border-gray-300 border-l-primaryYellow rounded-full animate-spin rounded-r-full box-border"></div>
            </div>
        </div>
    );
};

export default Spinner;
