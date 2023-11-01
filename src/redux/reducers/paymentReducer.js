const initialState = {
    loading: false,
    paymentInfo: {},
    status: "",
    error: null,
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAYMENT_PROCESSING":
            return {
                ...state,
                loading: true,
                status: "processing",
                error: null,
            };
        case "PAYMENT_SUCCESS":
            return {
                ...state,
                loading: false,
                paymentInfo: action.payload,
                status: "succeed",
                error: null,
            };
        case "PAYMENT_FAILED":
            return {
                ...state,
                loading: false,
                paymentInfo: {},
                status: "failed",
                error: action.payload,
            };

        default:
            return state;
    }
};

export default paymentReducer;
