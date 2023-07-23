const getProducts = (payload) => {
    return async (dispatch) => {
        const res = await fetch(
            `https://smart-server-pi.vercel.app/${payload}`
        );
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
