import axios from "axios";

// add to cart
export function addToCart(product, email) {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/addToCart/${email}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        if (data.modifiedCount) {
            dispatch({ type: "ADD_TO_CART", payload: product });
        }
    };

    //     console.log(product, email);
    //     if (product.quantity !== undefined) {
    //         fetch(`http://localhost:5000/addToCart/${email}`, { product })
    //             .then(function (response) {
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //         return { type: "ADD_TO_CART", payload: product };
    //     } else {
    //         const quantity = 1;
    //         const upDatePd = { ...product, quantity };
    //         return { type: "ADD_TO_CART", payload: upDatePd };
    //     }
}
export function removeFromCart(product) {
    return { type: "REMOVE_FROM_CART", payload: product };
}
export function clearCart() {
    return { type: "CLEAR_CART" };
}
export function quantityPlus(product) {
    return { type: "QUANTITY_INCREASE", payload: product._id };
}
export function quantityMinus(product) {
    return { type: "QUANTITY_DECREASE", payload: product._id };
}
