const initialState = [];
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const findCart = state.find((pd) => pd.id === action.payload);
            if (findCart) {
                return [...state];
            } else {
                return [...state, action.payload];
            }
        case "CART":
            const cart = action.payload;
            return [...state, cart];

        case "REMOVE_FROM_CART":
            const filterCart = state.filter((pd) => pd.id !== action.payload);

            return filterCart;

        case "QUANTITY_INCREASE":
            const itemToUpdateIndex = state.findIndex(
                (item) => item._id === action.payload
            );
            if (itemToUpdateIndex >= 0) {
                const itemToUpdate = state[itemToUpdateIndex];
                const quantity = (itemToUpdate.quantity += 1);
                const updatedItem = { ...itemToUpdate, quantity };
                return [
                    ...state.slice(0, itemToUpdateIndex),
                    updatedItem,
                    ...state.slice(itemToUpdateIndex + 1),
                ];
            } else {
                return state;
            }
        case "QUANTITY_DECREASE":
            const itemToUpdateIndexDe = state.findIndex(
                (item) => item._id === action.payload
            );
            if (itemToUpdateIndexDe >= 0) {
                const itemToUpdate = state[itemToUpdateIndexDe];
                if (itemToUpdate.quantity === 1) {
                    return state;
                } else {
                    const quantity = (itemToUpdate.quantity -= 1);
                    const updatedItem = { ...itemToUpdate, quantity };
                    return [
                        ...state.slice(0, itemToUpdateIndexDe),
                        updatedItem,
                        ...state.slice(itemToUpdateIndexDe + 1),
                    ];
                }
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
