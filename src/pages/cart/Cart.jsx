import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    quantityMinus,
    quantityPlus,
    removeFromCart,
} from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { addOrder } from "../../redux/actions/orderAction";
import Spinner from "../../common/spinners/Spinner";
export default function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const products = useSelector((state) => state.products);
    const user = useSelector((state) => state.authState.user);
    const [localCart, setLocalCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPrice = () => {
            let price = 0;

            for (const pd of localCart) {
                price = price + pd.price * pd.qty;
            }
            return price;
        };
        setSubtotal(getPrice);
    }, [localCart]);

    useEffect(() => {
        if (cart?.length) {
            let newCart = [];
            if (products.length) {
                cart.forEach((el) => {
                    const addedPd = products.find((pd) => pd._id === el.id);
                    const qty = el.qty;
                    const productWithQty = { ...addedPd, qty: qty };
                    newCart.push(productWithQty);
                });
            }
            setLocalCart(newCart);
        } else {
            clearCart();
            setLocalCart([]);
        }
    }, [products, cart]);

    const handleCheckOut = () => {
        dispatch(addOrder(localCart, subtotal, user.email));
    };

    return (
        <div className="container">
            <h2 className="text-4xl font-medium text-center mt-8 py-4">
                Shopping Cart
            </h2>
            <hr />
            <div className="card-body mt-4 border rounded-sm relative">
                <div className="grid grid-cols-3 ">
                    <div className="col-span-2 ">
                        <h4 className="text-center font-medium text-2xl">
                            {localCart?.length
                                ? "Products"
                                : "No Products in Cart"}
                        </h4>
                        <hr />
                        <div className="cart-products">
                            {!localCart?.length && (
                                <>
                                    <Spinner></Spinner>
                                </>
                            )}
                            {localCart?.map((cartProduct) => (
                                <div
                                    key={cartProduct._id}
                                    className="cart-product border rounded-sm p-2 m-2"
                                >
                                    <div className="cart-product-body flex items-center justify-between">
                                        <div className="cart-product-thumb">
                                            <img
                                                src={cartProduct?.img}
                                                className="w-2/5"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cart-product-details">
                                            <h4>{cartProduct?.productName}</h4>
                                            <h5>{cartProduct?.category}</h5>
                                            <div className="addition-info flex gap-2">
                                                <h5>
                                                    Price:{" "}
                                                    <span>
                                                        {cartProduct?.price}
                                                    </span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="quantity ml-4">
                                            <form action="">
                                                <p className="qty  text-center">
                                                    <label htmlFor="qty">
                                                        Quantity:
                                                    </label>
                                                    <br />
                                                    <button
                                                        className="qtyminus ml-2 py-2 px-4 bg-siteGray-100"
                                                        aria-hidden="true"
                                                        type="button"
                                                        onClick={() =>
                                                            dispatch(
                                                                quantityMinus(
                                                                    cartProduct._id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        name="qty"
                                                        id="qty"
                                                        value={cartProduct.qty}
                                                        readOnly
                                                        className="w-3/12 mx-2 border p-2"
                                                    />
                                                    <button
                                                        className="qtyplus py-2 px-4 bg-siteGray-100"
                                                        type="button"
                                                        onClick={() =>
                                                            dispatch(
                                                                quantityPlus(
                                                                    cartProduct._id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </p>
                                            </form>
                                        </div>
                                        <div className="cart-product-price">
                                            <h4>Total</h4>

                                            <h4>
                                                $
                                                <span>
                                                    {cartProduct.price *
                                                        cartProduct.qty}
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="remove-from-cart">
                                            <button
                                                className="trash-btn mx-4"
                                                title="Remove Product"
                                                onClick={() =>
                                                    dispatch(
                                                        removeFromCart(
                                                            cartProduct._id,
                                                            user.email
                                                        )
                                                    )
                                                }
                                            >
                                                {/* Trash Icon  */}
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-summary sticky bottom-10 right-0">
                        <div className="order-summary-heading">
                            <h4>Order Summary</h4>
                        </div>
                        <div className="mt-4 p-2">
                            <p>Total Items: {localCart?.length}</p>
                            <p>
                                Subtotal: <span>{subtotal}</span>
                            </p>
                        </div>
                        <div className="apply-voucher">
                            <form>
                                <div className="">
                                    <input
                                        type="text"
                                        className="border py-2 px-2"
                                        placeholder="Enter Coupon"
                                    />
                                    <button className="cart-btn mx-0">
                                        Apply Coupon
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="checkout">
                            <Link to={"/checkout"}>
                                <button
                                    className="capitalize w-full px-4 py-4 bg-orange-500 text-siteGray-400 font-semibold mt-4 hover:shadow-lg duration-300 hover:bg-orange-800 hover:text-white"
                                    onClick={handleCheckOut}
                                >
                                    Proceed to checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
