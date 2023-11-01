import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

export default function Checkout() {
    const profile = useSelector((state) => state.profile);
    const order = useSelector((state) => state.order.order);
    const [shippingFee, setShippingFee] = useState(0);

    const stripePromise = loadStripe(
        "pk_test_51NomvgBcH4c1CmxuwXF9MtPUaSDbkxygl0H2TaaK2o0rOpSxPy3ErIyQl7hngQPOIc4z3AMogDpqsP4GOzyLrPJC00ZYFFDkA7"
    );

    return (
        <div className="container">
            <div className=" md:py-4 lg:py-6">
                <h2 className="text-base md:text-2xl lg:text-4xl font-medium text-center lg:mt-6 lg:py-4">
                    Checkout
                </h2>
                <hr />

                {order ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {/* User Info Column */}
                            <div className="mb-4 md:mb-0">
                                <h2 className="text-sm md:text-base lg:text-xl font-bold mb-2">
                                    User Info
                                </h2>
                                <div className="text-xs sm:text-sm md:text-base">
                                    <p>Name: {profile?.name}</p>
                                    <p>Email: {profile?.email}</p>
                                    <p>Phone: {profile?.phone}</p>
                                    <p>
                                        Shipping Address:{" "}
                                        {profile.shippingAddress}
                                    </p>
                                    <p>
                                        Billing Address:{" "}
                                        {profile.billingAddress}
                                    </p>
                                    <br />
                                    <p className="italic text-red-500 font-medium">
                                        "If you want to change your addresses or
                                        any info please go to{" "}
                                        <Link to={"/profile"}>
                                            <span className="font-medium text-primaryYellow">
                                                Profile
                                            </span>
                                        </Link>
                                        "
                                    </p>
                                </div>
                                {/* <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={displayName}
                                    className="block  w-full p-2 border bg-gray-200 border-gray-300 rounded"
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    readOnly
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="address"
                                    className="text-gray-700"
                                >
                                    Shipping Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="address"
                                    className="text-gray-700"
                                >
                                    Billing Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                        </form> */}
                            </div>

                            {/* Order Details Column */}
                            <div className="p-2 border">
                                <h2 className="text-sm md:text-base lg:text-lg font-bold mb-2 text-center">
                                    Your Order
                                </h2>
                                <div className="bg-white p-4 border border-gray-300 rounded">
                                    {/* Render order details dynamically */}
                                    <div className="flex justify-between mb-2">
                                        <div className="w-1/3">
                                            <h5 className="text-left text-sm md:text-base font-semibold">
                                                Product
                                            </h5>
                                        </div>
                                        <div className="w-1/3 ">
                                            <h5 className=" text-sm md:text-base text-center font-semibold">
                                                Quantity
                                            </h5>
                                        </div>
                                        <div className="w-1/3">
                                            <h5 className="text-right text-sm md:text-base font-semibold">
                                                Unit Price
                                            </h5>
                                        </div>
                                    </div>
                                    <hr />
                                    {order?.cart?.length
                                        ? order.cart.map((pd) => (
                                              <div
                                                  key={pd._id}
                                                  className="flex justify-between my-2 border-b pb-2"
                                              >
                                                  <div className="product w-1/3">
                                                      <span className="text-left text-xs md:text-base">
                                                          {pd.productName}
                                                      </span>
                                                  </div>
                                                  <div className="qty w-1/3 text-xs md:text-base text-center ">
                                                      <span>{pd.qty}</span>
                                                  </div>
                                                  <div className="unitPrice w-1/3 text-xs md:text-base text-right">
                                                      <span>${pd.price}</span>
                                                  </div>
                                              </div>
                                          ))
                                        : ""}
                                </div>
                                {/* Total Price */}
                                <div className="flex text-sm md:text-base justify-between border-t pt-2">
                                    <span>Sub Total</span>
                                    <span className="">${order?.subtotal}</span>
                                </div>
                                {/* Shipping Fee */}
                                <div className="flex text-sm md:text-base justify-between mt-2">
                                    <span>Shipping Fee</span>
                                    <span className="">${shippingFee}</span>
                                </div>
                                {/* Total */}
                                <div className="flex text-sm md:text-base justify-between  mt-2">
                                    <span className="font-bold">Pay Total</span>
                                    <span className="font-bold text-green-600">
                                        {" "}
                                        ${order?.subtotal + shippingFee}
                                    </span>
                                </div>
                                <hr />
                                <div className=" mt-2">
                                    <div className="payment-methods text-sm md:text-base">
                                        <h4 className="font-bold">
                                            Payment methods
                                        </h4>
                                        {/* <form>
                                            <div className="input">
                                                <div
                                                    className="text-xs md:text-base
                                                "
                                                >
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        id="cod"
                                                        value={
                                                            "Cash on delivery"
                                                        }
                                                    />
                                                    <label htmlFor="cod">
                                                        Cash On Delivery
                                                    </label>
                                                </div>
                                                <div className="text-xs md:text-base">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        id="pypl"
                                                        value={"Paypal"}
                                                    />
                                                    <label htmlFor="pypl">
                                                        Paypal
                                                    </label>
                                                </div>
                                                <div className="text-xs md:text-base">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        id="cc"
                                                        value={"Credit Cart"}
                                                    />
                                                    <label htmlFor="cc">
                                                        Credit Card
                                                    </label>
                                                </div>
                                            </div>
                                        </form> */}
                                    </div>
                                    {/* <div className="">
                                        <button className="cart-btn">
                                            Confirm Order
                                        </button>
                                    </div> */}
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm
                                            price={order?.subtotal}
                                        ></CheckoutForm>
                                    </Elements>
                                    {/* // */}

                                    {/* // */}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="py-4">
                            <p className="font-medium lg:text-xl text-center flex items-center justify-center">
                                Please go to <FaArrowRight />{" "}
                                <Link to="/cart">
                                    {" "}
                                    <span className="ml-4">CART</span>
                                </Link>
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
