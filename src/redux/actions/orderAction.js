export const addOrder = (cart, subtotal, email) => {
    const order = { email, cart, subtotal };

    return (dispatch) => {
        dispatch({ type: "ADD_ORDER", payload: order });
    };
};
