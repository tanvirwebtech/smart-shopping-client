import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../../redux/actions/cartActions";

export default function Product() {
    const products = useSelector((state) => state.products);
    const cartProduct = useSelector((state) => state.cart);
    const { id } = useParams();
    const [newProduct, setNewProduct] = useState({});

    useEffect(() => {
        setNewProduct(products.find((pd) => pd._id === id));
    }, [products, id]);

    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-3 gap-2">
                    <div className="product-thumb">
                        {newProduct && (
                            <>
                                <img src={newProduct.img} alt="" />{" "}
                            </>
                        )}
                    </div>
                    <div className="product-details col-span-2">
                        {newProduct && <h2>{newProduct.productName} </h2>}
                        <div className="product-btns">
                            <button className="cart-btn mr-2">Buy Now</button>
                            {cartProduct?.includes(newProduct?._id) ? (
                                <Link to="/cart">
                                    <button className="py-2 px-4 bg-primaryYellow text-gray-900 border-0 text-sm rounded-sm">
                                        View Cart
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        dispatch(addToCart(newProduct))
                                    }
                                >
                                    Add to cart
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="more-info"></div>
                </div>
            </div>
        </div>
    );
}
