const initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PROFILE":
            const upadatedData = action.payload;
            return { ...state, ...upadatedData };
        case "GET_PROFILE":
            const profile = action.payload;
            return { ...state, ...profile };
        default:
            return state;
    }
};

export default profileReducer;
