import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [cardErr, setCardErr] = useState("");
    const userProfile = useSelector((state) => state.profile);

    useEffect(() => {
        axios
            .post("/create-payment-intent", { price })
            .then((res) => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardErr(error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
        }

        const { paymentIntent, error: confirmPaymentErr } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userProfile?.name || "unknown",
                    },
                },
            });
        if (confirmPaymentErr) {
            console.log(confirmPaymentErr);
            setCardErr(confirmPaymentErr);
        }

        console.log(paymentIntent);
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            padding: "8px 0",
                            margin: "8px 0",
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button
                className="border mt-2 border-primaryYellow px-4 py-1 disabled:bg-gray-400 disabled:text-white disabled:border-0 rounded-sm"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
            {cardErr && <p className="text-red-600 my-3">{cardErr.message}</p>}
        </form>
    );
};

export default CheckoutForm;
