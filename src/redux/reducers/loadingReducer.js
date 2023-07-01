const initialState = { loading: true, cartLoading: false };

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
            return { ...state, loading: false };
        case "CART_LOADING_TRUE":
            return { ...state, cartLoading: true };
        case "CART_LOADING_FALSE":
            return { ...state, cartLoading: false };
        default:
            return state;
    }
};
export default loadingReducer;
