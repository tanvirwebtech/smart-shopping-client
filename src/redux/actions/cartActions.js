import axios from "axios";

// add to cart
export const addToCart = (productID, email) => {
    return (dispatch) => {
        dispatch({ type: "CART_LOADING_TRUE" });
        const cart = { id: productID, qty: 1 };

        axios.put(`/cart/${email}`, cart).then((res) => {
            dispatch({ type: "ADD_TO_CART", payload: productID });
            dispatch({ type: "CART_LOADING_FALSE" });
        });
    };
};

export const getCartProducts = (payload) => {
    return async (dispatch) => {
        const res = await axios.get(`/getCart/${payload}`);
        const data = await res.data;
        dispatch({
            type: "CART",
            payload: data,
        });
    };
};
// export const removeCartProduct = () => {
//     console.log();
//     return async (dispatch) => {
//         console.log();

//         const res = await fetch(`https://smart-server-pi.vercel.app/getCart/${payload}`);
//         const data = await res.json();
//         console.log(data);
//         dispatch({
//             type: "CART",
//             payload: data,
//         });
//     };
// };

export function removeFromCart(productID, email) {
    return (dispatch) => {
        const cart = { id: productID, del: true };
        axios.put(`/cart/${email}`, cart).then((res) => {
            if (res.data.modifiedCount > 0) {
                dispatch({ type: "REMOVE_FROM_CART", payload: productID });
                dispatch({ type: "CART_LOADING_FALSE" });
            }
        });
    };
}
export function clearCart() {
    return { type: "CLEAR_CART" };
}
export function quantityPlus(id) {
    // const localCart =  getLocalCart()
    return { type: "QUANTITY_INCREASE", payload: id };
}
export function quantityMinus(id) {
    return { type: "QUANTITY_DECREASE", payload: id };
}
