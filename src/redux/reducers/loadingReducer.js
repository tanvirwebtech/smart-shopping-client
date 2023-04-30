const initialState = { loading: true };

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
            return { ...state, loading: false };
        default:
            return state;
    }
};
export default loadingReducer;
