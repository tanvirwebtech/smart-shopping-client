import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPYML } from "../../redux/actions/pymlActions";
import ViewCartBtn from "../buttons/ViewCartBtn";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import Spinner from "../spinners/Spinner";
import useAddToCart from "../../hooks/useAddToCart";
export default function ProductCard(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.authState.user);

    const navigate = useNavigate();
    const { addProductToCart } = useAddToCart();

    const handleAddToCart = (id, email) => {
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
                                <h4 className="font-medium text-xs sm:text-base lg:text-xl cursor-pointer">
                                    {product?.productName}
                                </h4>
                            </Link>
                        </div>
                        <div className="price-rating mt-2 ">
                            <div className="rating text-xs sm:text-sm flex py-2 text-primaryYellow items-center">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <span>({product?.maxOrder} reviews)</span>
                            </div>
                            <div className="price text-green-700 font-medium">
                                <h4 className="text-xs sm:text-base">
                                    Price: $<span>{product?.price}</span>
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
