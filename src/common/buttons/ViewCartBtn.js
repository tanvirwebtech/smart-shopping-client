import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ViewCartBtn = ({ sz }) => {
    const [lg, md, sm] = [
        "capitalize py-4 px-8 bg-primaryYellow text-white border-0 font-medium text-lg rounded-sm hover:bg-yellow-700 duration-300",
        "capitalize py-3 px-5 bg-primaryYellow text-white border-0 text-md font-medium rounded-sm hover:bg-yellow-700 duration-300",
        "capitalize py-2 px-4  bg-primaryYellow text-white border-0 text-sm font-medium rounded-sm hover:bg-yellow-700 duration-300",
    ];
    return (
        <Link to={"/cart"}>
            <button className={sz === "lg" ? lg : sz === "md" ? md : sm}>
                <div className="flex items-center ">
                    View cart <BsArrowBarRight className="ml-2" />
                </div>
            </button>
        </Link>
    );
};

export default ViewCartBtn;
