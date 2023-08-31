import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../common/productCard/ProductCard";
import Spinner from "../../common/spinners/Spinner";

const SearchResults = () => {
    const { loading, searchResult } = useSelector((state) => state.search);

    if (loading) {
        return <Spinner></Spinner>;
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="section-heading text-center py-2 md:py-4">
                    <h2 className="text-lg md:text-2xl lg:text-3xl">
                        Search Result
                    </h2>
                </div>
                <div className="result">
                    <div className="result-heading">
                        <p>Product Found: {searchResult?.length || 0}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                        {searchResult.map((product) => (
                            <div key={product._id}>
                                <ProductCard product={product}></ProductCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
