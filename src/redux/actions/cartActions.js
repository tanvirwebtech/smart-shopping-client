// add to cart
export function addToCart(product) {
    if (product.quantity !== undefined) {
        return { type: "ADD_TO_CART", payload: product };
    } else {
        const quantity = 1;
        const upDatePd = { ...product, quantity };
        return { type: "ADD_TO_CART", payload: upDatePd };
    }
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
