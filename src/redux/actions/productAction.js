import axios from "axios";

const getProducts = (payload) => {
    return async (dispatch) => {
        const res = await axios.get(`/${payload}`);
        const data = await res.data;
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
