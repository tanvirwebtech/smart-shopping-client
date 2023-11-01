export const paymentStart = () => {
    return { type: "PAYMENT_PROCESSING" };
};
export const paymentSuccess = (data) => {
    return { type: "PAYMENT_SUCCESS", payload: data };
};
export const paymentFailed = (data) => {
    return { type: "PAYMENT_FAILED", payload: data };
};
