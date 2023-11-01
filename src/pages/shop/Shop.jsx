import React from "react";
import { useSelector } from "react-redux";
import ProductSlider from "../../common/productSlider/ProductSlider";
import Spinner from "../../common/spinners/Spinner";

export default function Shop() {
    const products = useSelector((state) => state.products);
    let categories = [];
    for (const product of products) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    }
    const getCategorizedProduct = () => {
        const categorizedPRoducts = [];
        categories.forEach((category) => {
            categorizedPRoducts.push(
                ([category] = products.filter((pd) => pd.category === category))
            );
        });
        return categorizedPRoducts;
    };
    const loading = useSelector((state) => state.siteLoading.loading);

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className="container">
            <div className="heading">
                <h2 className="section-heading text-center font-semibold py-2 sm:py-4 md:py-4 text-xl md:text-2xl font-poppins">
                    Shop
                </h2>
            </div>
            <hr />
            {getCategorizedProduct().map((a, index) => (
                <div className="" key={index}>
                    <ProductSlider
                        products={a}
                        categoryHeading={a[0].category}
                    ></ProductSlider>
                </div>
            ))}
        </div>
    );
}
