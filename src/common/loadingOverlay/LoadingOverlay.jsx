import React from "react";
import Spinner from "../spinners/Spinner";

const LoadingOverlay = () => {
    return (
        <div className="spinner-overlay w-screen h-screen absolute bg-slate-900 bg-opacity-30 z-30 flex items-center justify-center">
            <div className="spinner relative z-50">
                <Spinner></Spinner>
            </div>
        </div>
    );
};

export default LoadingOverlay;
