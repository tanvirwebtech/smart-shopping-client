import React from "react";
import "./Spinner.css";
const Spinner = () => {
    return (
        <div className="container">
            <div className="spinner w-full flex justify-center items-center">
                <div className="spinner-body w-10 h-10 border-l-4 border-primaryYellow animate-spin rounded-full box-border"></div>
            </div>
        </div>
    );
};

export default Spinner;
