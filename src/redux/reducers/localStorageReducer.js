const initialState = [];

const localStorageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_PYML_LIS":
            return {
                ...state,
                productIds: action.payload,
            };
        default:
            return state;
    }
};
export default localStorageReducer;
