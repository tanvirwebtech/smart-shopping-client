import React from "react";
import camera from "../../assets/images/camera.jpg";
import headphones from "../../assets/images/headphone.jpg";
import watch from "../../assets/images/smart-watch.jpg";
import "./Home.css";
import ProductSlider from "./../../common/productSlider/ProductSlider";
import ProductCard from "./../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../redux/actions/productAction";
export default function Home() {
    const cards = [
        { id: 1, img: camera, title: "cameras" },
        { id: 2, img: headphones, title: "headphones" },
        { id: 3, img: watch, title: "smart watches" },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts("products"));
    }, []);
    const products = useSelector((state) => state.products);
    return (
        <>
            <section className="mt-8">
                <div className="container w-10/12 mx-auto">
                    <div className="category-cards">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:grid-cols-2">
                            {cards?.map((card) => (
                                <div
                                    className="card-wrapper relative overflow-hidden"
                                    key={card.id}
                                >
                                    <div className="card-overlay w-full py-4 bg-primaryYellow absolute top-0 left-0 opacity-60 ">
                                        <h3 className="capitalize ml-4 text-siteGray-400 text-3xl relative z-50">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <div className="card">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full mx-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ProductSlider
                products={products}
                sectionHeading="Latest Products"
            ></ProductSlider>
            <section className="mt-10 py-10">
                <div className="container w-10/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-2">
                        <ProductCard imgCls="w-full"></ProductCard>
                        <ProductCard imgCls="w-full"></ProductCard>
                        <ProductCard imgCls="w-full"></ProductCard>
                        <ProductCard imgCls="w-full"></ProductCard>
                        <ProductCard imgCls="w-full"></ProductCard>
                    </div>
                </div>
            </section>
        </>
    );
}
