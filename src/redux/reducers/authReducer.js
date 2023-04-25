const initialState = { loading: false, user: "", err: null };

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REG_PENDING":
            return {
                ...state,
                loading: true,
            };
        case "REG_SUCCESS":
            return {
                ...state,
                user: action.payload.email,
                loading: false,
            };
        case "REG_FAIL":
            return {
                ...state,
                user: null,
                err: action.payload,
                loading: false,
            };
        case "REG_CLEAR":
            return {
                ...state,
                user: "",
                err: null,
                loading: false,
            };
        default:
            return state;
    }
};
export default registerReducer;
