const getProducts = (payload) => {
    return async (dispatch) => {
        console.log(payload);
        const res = await fetch(`http://localhost:5000/${payload}`);
        const data = await res.json();
        dispatch({
            type: "PRODUCTS",
            payload: data,
        });
        // dispatch({
        //     type: "USER",
        // });
    };
};
export default getProducts;
