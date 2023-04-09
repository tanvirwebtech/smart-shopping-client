import React from "react";
import ProductSlider from "../../common/productSlider/ProductSlider";
import { useSelector } from "react-redux";

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
    console.log(getCategorizedProduct());

    return (
        <div>
            {getCategorizedProduct().map((a) => (
                <div className="">
                    <ProductSlider
                        products={a}
                        categoryHeading={a[0].category}
                    ></ProductSlider>
                </div>
            ))}
        </div>
    );
}
