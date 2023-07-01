import React from "react";
import { useSelector } from "react-redux";
import Product from "./../../pages/product/Product";
import { useEffect } from "react";
import ProductSlider from "./../productSlider/ProductSlider";
import { useState } from "react";

const Pylm = () => {
    const pylmIds = useSelector((state) => state.pymlList);
    const products = useSelector((state) => state.products);
    const [sugProducts, setSugProducts] = useState([]);
    useEffect(() => {
        pylmIds.productIds.forEach((element) => {
            products.forEach((pd_el) => {
                if (element === pd_el._id) {
                    console.log(sugProducts);
                    const newSug = [...sugProducts, pd_el];
                    setSugProducts(newSug);
                    console.log(newSug);
                }
            });
        });
    }, [pylmIds, products]);

    console.log(sugProducts);

    return (
        <div>
            <ProductSlider products={sugProducts}></ProductSlider>
        </div>
    );
};

export default Pylm;

// const arr1 = [2, 3, 56, 78, 8, 7, 8];
// const arr2 = [1, 2, 34, 5, 6, 7, 8, 9, 10];
// let arr3 = [];
// arr1.forEach((el) => {
//     arr2.forEach((ele) => {
//         if (el === ele) {
//             console.log(ele);
//             const newarr = [...arr3, ele];
//             arr3 = newarr;
//         }
//     });
// });
// console.log(arr3);
