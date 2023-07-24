import React from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import ProductSlider from "./../productSlider/ProductSlider";
import { useState } from "react";

const Pylm = ({ id }) => {
    const products = useSelector((state) => state.products);
    const [sugProducts, setSugProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let selectedProduct;
            products.forEach((element) => {
                if (element._id === id) {
                    selectedProduct = element;
                }
            });
            const filterProducts = products.filter(
                (pd) => pd.category === selectedProduct.category
            );
            setSugProducts(filterProducts);
        }
    }, [products, id]);

    return (
        <div>
            <ProductSlider products={sugProducts}></ProductSlider>
        </div>
    );
};

export default Pylm;
