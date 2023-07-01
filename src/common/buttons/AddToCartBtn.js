import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddToCartBtn = ({ sz, onclick }) => {
    console.log(onclick);
    const dispatch = useDispatch();

    const [lg, md, sm] = [
        "capitalize py-4 px-8 bg-siteGray-400 text-white border-0 font-medium text-lg rounded-sm hover:bg-primaryYellow duration-300",
        "capitalize py-3 px-5 bg-siteGray-400 text-white border-0 text-md font-medium rounded-sm hover:bg-primaryYellow duration-300",
        "capitalize py-2 px-4  bg-siteGray-400 text-white border-0 text-sm font-medium rounded-sm hover:bg-primaryYellow duration-300",
    ];
    return (
        <button
            className={sz === "lg" ? lg : sz === "md" ? md : sm}
            onClick={() => dispatch(onclick)}
        >
            <div className="flex items-center">
                Add to cart <FaCartPlus className="ml-2" />
            </div>
        </button>
    );
};

export default AddToCartBtn;
