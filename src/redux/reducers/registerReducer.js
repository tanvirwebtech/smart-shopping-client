const initialState = {
    user: {},
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REG_SUCCESS":
            return [...state, (state.user = action.payload)];
        case "REG_FAIL":
            return action.payload;
        default:
            return state;
    }
};
export default registerReducer;
