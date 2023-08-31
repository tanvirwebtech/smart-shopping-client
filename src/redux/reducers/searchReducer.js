const initialState = { loading: false, searchResult: [], error: null };

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_START":
            return {
                ...state,
                loading: true,
                searchResult: [],
                error: null,
            };
        case "SEARCH_SUCCESS":
            return {
                ...state,
                loading: false,
                searchResult: action.payload,
                error: null,
            };
        case "SEARCH_FAILED":
            return {
                ...state,
                loading: false,
                searchResult: [],
                error: "error",
            };

        default:
            return state;
    }
};
export default searchReducer;
