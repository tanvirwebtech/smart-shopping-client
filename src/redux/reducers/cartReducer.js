const initialState = { cart: [] };
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const findCart = state.cart.find((pd) => pd.id === action.payload);
            if (findCart) {
                return { ...state };
            } else {
                const newCartProduct = { id: action.payload, qty: 1 };
                const updatedCart1 = [...state.cart, newCartProduct];
                return { ...state, cart: updatedCart1 };
            }
        case "CART":
            const cart = action.payload;
            return { ...state, cart: cart };

        case "REMOVE_FROM_CART":
            const filterCart = state.cart.filter(
                (pd) => pd.id !== action.payload
            );

            return filterCart;

        case "QUANTITY_INCREASE":
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (itemToUpdateIndex >= 0) {
                const itemToUpdate = state.cart[itemToUpdateIndex];
                const quantity = (itemToUpdate.qty += 1);
                const updatedItem = { ...itemToUpdate, qty: quantity };
                const newCart = [
                    ...state.cart.slice(0, itemToUpdateIndex),
                    updatedItem,
                    ...state.cart.slice(itemToUpdateIndex + 1),
                ];
                return { ...state, cart: newCart };
            } else {
                return state;
            }
        case "QUANTITY_DECREASE":
            const itemToUpdateIndexDe = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (itemToUpdateIndexDe >= 0) {
                const itemToUpdate = state.cart[itemToUpdateIndexDe];
                const quantity =
                    itemToUpdate.qty > 1
                        ? (itemToUpdate.qty -= 1)
                        : itemToUpdate.qty;
                const updatedItem = { ...itemToUpdate, qty: quantity };
                const newCart = [
                    ...state.cart.slice(0, itemToUpdateIndexDe),
                    updatedItem,
                    ...state.cart.slice(itemToUpdateIndexDe + 1),
                ];
                return { ...state, cart: newCart };
            } else {
                return state;
            }

        case "CLEAR_CART":
            return (state = []);

        default:
            return state;
    }
};
export default cartReducer;
