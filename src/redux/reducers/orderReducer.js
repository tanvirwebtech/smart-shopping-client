const initialState = { order: null };

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ORDER":
            const newState = { ...state, order: action.payload };
            return newState;
        default:
            return state;
    }
};
export default orderReducer;
