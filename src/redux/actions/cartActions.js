import store from "../store";

// add to cart
export const addToCart = (productID, email) => {
    console.log(productID);

    return (dispatch) => {
        console.log(email);

        // dispatch({ type: "CART_LOADING_TRUE" });
        const cart = { id: productID, qty: 1 };

        fetch(`http://localhost:5000/cart/${email}`, {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => console.log(res));

        // setLocalCart(productID);
        dispatch({ type: "ADD_TO_CART", payload: productID });
        dispatch({ type: "CART_LOADING_FALSE" });
        window.location.reload();
    };

    // const products = store.getState().products;
    //  const getLocalCart = localStorage.getItem("cart");
    //  if (getLocalCart) {
    //      const cart = JSON.parse(getLocalCart);
    //      console.log(cart);
    //      let newCart = [];
    //      if (products.length) {
    //          cart.forEach((el) => {
    //              const addedPd = products.find((pd) => pd._id === el.id);
    //              const qty = el.qty;
    //              const productWithQty = { ...addedPd, qty: qty };
    //              newCart.push(productWithQty);
    //          });
    //      }
    //      setLocalCart(newCart);

    //      console.log(newCart);
    //  }

    // -----
    // const getLocalCart = () => {
    //     const localCart = localStorage.getItem("cart");
    //     if (localCart) {
    //         const cartItems = JSON.parse(localCart);
    //         return cartItems;
    //     } else {
    //         return {};
    //     }
    // };
    // const setLocalCart = (id) => {
    //     console.log(id);
    //     const isLocalCart = getLocalCart();
    //     console.log(isLocalCart);
    //     if (isLocalCart) {
    //         console.log("got legth");

    //         const checkProduct = isLocalCart.includes(id);
    //         console.log(checkProduct);
    //         if (checkProduct) {
    //             return;
    //         } else {
    //             const newCartPd = { id: id, qty: 1 };
    //             const newCart = [...isLocalCart, newCartPd];

    //             const strCart = JSON.stringify(newCart);
    //             return localStorage.setItem("cart", strCart);
    //         }
    //     } else {
    //         console.log(id);
    //         const cart = [{ id: id, qty: 1 }];
    //         const strCart = JSON.stringify(cart);
    //         return localStorage.setItem("cart", strCart);
    //     }
    // };
};

export const getCartProducts = (payload) => {
    console.log(payload);
    return async (dispatch) => {
        console.log(payload);

        const res = await fetch(`http://localhost:5000/getCart/${payload}`);
        const data = await res.json();
        console.log(data);
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

//         const res = await fetch(`http://localhost:5000/getCart/${payload}`);
//         const data = await res.json();
//         console.log(data);
//         dispatch({
//             type: "CART",
//             payload: data,
//         });
//     };
// };

export function removeFromCart(productID, email) {
    return async (dispatch) => {
        const cart = { id: productID, del: true };

        fetch(`http://localhost:5000/cart/${email}`, {
            method: "PUT",
            body: JSON.stringify(cart),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => console.log(res));

        // setLocalCart(productID);
        dispatch({ type: "REMOVE_FROM_CART", payload: productID });
        dispatch({ type: "CART_LOADING_FALSE" });
        window.location.reload();
    };
}
export function clearCart() {
    return { type: "CLEAR_CART" };
}
export function quantityPlus(id) {
    // const localCart =  getLocalCart()
    // return { type: "QUANTITY_INCREASE", payload: product._id };
}
export function quantityMinus(product) {
    return { type: "QUANTITY_DECREASE", payload: product._id };
}
