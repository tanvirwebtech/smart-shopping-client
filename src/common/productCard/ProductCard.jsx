import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { addToPYML } from "../../redux/actions/pymlActions";
import ViewCartBtn from "../buttons/ViewCartBtn";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import Spinner from "../spinners/Spinner";
import Swal from "sweetalert2";
import useAddToCart from "../../hooks/useAddToCart";
export default function ProductCard(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.authState.user);
    const loading = useSelector((state) => state.siteLoading.loading);
    const location = useLocation();
    const navigate = useNavigate();
    const { addProductToCart } = useAddToCart();
    if (loading) {
        return <Spinner></Spinner>;
    }

    const handleAddToCart = (id, email) => {
        console.log(id, email);
        dispatch(addProductToCart(id, email, navigate));
    };
    return (
        <div className="product-card  h-full border">
            <div
                className="product-wrapper h-full"
                onClick={() => addToPYML(product?._id)}
            >
                <div className="product h-full flex flex-col justify-between sm:p-2 p-0">
                    <div className="product-img">
                        <img
                            src={product?.img}
                            alt=""
                            className={props.imgCls}
                        />
                    </div>
                    <div className="product-info p-2">
                        <div className="category">
                            <small>{product?.category}</small>
                        </div>
                        <div className="title my-2">
                            <Link to={`/product/${product?._id}`}>
                                <h4 className="font-medium text-xs sm:text-base lg:text-xl">
                                    {product?.productName}
                                </h4>
                            </Link>
                        </div>
                        <div className="price-rating mt-2 flex justify-between">
                            <div className="price text-primaryYellow font-medium">
                                <h4 className="text-xs sm:text-base">
                                    Price: $<span>{product?.price}</span>
                                </h4>
                            </div>
                            <div className="rating">
                                <h4 className="text-xs sm:text-base">
                                    Rating: <span>5</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="product-footer p-0 sm:p-2 flex justify-between items-center flex-col md:flex-row">
                        <div className="add-to-cart-btn  mb-1 md:mr-2">
                            {cartProduct?.find(
                                (pd) => pd.id === product?._id
                            ) ? (
                                <ViewCartBtn sz={"sm"}></ViewCartBtn>
                            ) : (
                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        handleAddToCart(
                                            product?._id,
                                            user?.email
                                        )
                                    }
                                >
                                    <div className="flex items-center">
                                        Add to cart{" "}
                                        <FaCartPlus className="ml-2" />
                                    </div>
                                </button>
                            )}
                            {/* {cartProduct?.find((pd) => pd === product?._id) ? (
                                <Link to="/cart">
                                    <button className="py-2 px-4 bg-primaryYellow text-gray-900 border-0 text-sm rounded-sm">
                                        View Cart
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        dispatch(addToCart(product._id))
                                    }
                                >
                                    Add to cart
                                </button>
                            )} */}
                        </div>
                        <div className="add-to-wishlist-btn">
                            <button className="cart-btn">
                                <div className="flex items-center">
                                    Add to Wishlist
                                    <FaHeart className="ml-2" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    );
}
