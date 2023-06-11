import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../common/productCard/ProductCard";

export default function Category() {
    const { category } = useParams();
    const products = useSelector((state) => state.products);

    const getCategoryProducts = () => {
        console.log(products);
        return products.filter((pd) => pd.category === category);
    };
    console.log(getCategoryProducts());
    return (
        <div className="container w-11/12 mx-auto">
            <div className="page-heading">
                <h2 className="capitalize text-3xl text-center">
                    Category:{" "}
                    <span className="text-primaryYellow">{category}</span>
                </h2>
            </div>
            <div className="category-products mt-8 py-8">
                <div className="grid grid-cols-4 gap-4">
                    {getCategoryProducts().map((pd) => (
                        <ProductCard key={pd._id} product={pd}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
