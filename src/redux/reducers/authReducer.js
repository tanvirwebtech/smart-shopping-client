const initialState = { loading: false, user: "", err: null };

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_PENDING":
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
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload.email,
                loading: false,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                user: "",
                err: action.payload,
                loading: false,
            };
        case "LOGOUT":
            return {
                ...state,
                user: "",
            };
        case "LOGOUT_FAIL":
            return {
                ...state,
                err: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
export default registerReducer;
