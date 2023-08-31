import store from "../store";

const search = ({ searchString }) => {
    return (dispatch) => {
        dispatch({ type: "SEARCH_START" });
        const products = store.getState()?.products;
        // const searchStrLowerCase = searchString.toLowerCase();
        const result = products.filter((product) => {
            // Convert all searchable properties to lowercase for case-insensitive search
            const searchableProperties = [
                "productName",
                "description",
                "category",
            ];
            return searchableProperties.some((prop) => {
                const propValue = product[prop]?.toString().toLowerCase();
                return propValue.includes(searchString.toLowerCase());
            });
        });
        if (result.length > 0) {
            dispatch({ type: "SEARCH_SUCCESS", payload: result });
        }
    };
};

export default search;
