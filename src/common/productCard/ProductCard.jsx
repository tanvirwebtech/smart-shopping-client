import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
export default function ProductCard(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart);
    const user = useSelector((state) => state.authState);
    return (
        <div className="product-card border m-2">
            <div className="product-wrapper">
                <div className="product p-2">
                    <div className="product-img">
                        <img
                            src={product?.img}
                            alt=""
                            className={props.imgCls}
                        />
                    </div>
                    <div className="product-info p-2 mt-4">
                        <div className="category">
                            <small>{product?.category}</small>
                        </div>
                        <div className="title my-2">
                            <Link to={`/product/${product?._id}`}>
                                <h4 className="font-medium text-2xl">
                                    {product?.productName}
                                </h4>
                            </Link>
                        </div>
                        <div className="price-rating mt-4 flex justify-between">
                            <div className="price text-primaryYellow font-medium">
                                <h4>
                                    Price: $<span>{product?.price}</span>
                                </h4>
                            </div>
                            <div className="rating">
                                <h4>
                                    Rating: <span>5</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="product-footer p-2 flex justify-between">
                        <div className="add-to-cart-btn">
                            {cartProduct?.find(
                                (pd) => pd._id === product?._id
                            ) ? (
                                <Link to="/cart">
                                    <button className="py-2 px-4 bg-primaryYellow text-gray-900 border-0 text-sm rounded-sm">
                                        View Cart
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        dispatch(
                                            addToCart(product, user.user.email)
                                        )
                                    }
                                >
                                    Add to cart
                                </button>
                            )}
                        </div>
                        <div className="add-to-wishlist-btn">
                            <button className="cart-btn">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
