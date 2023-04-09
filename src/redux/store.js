import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import ReduxThunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import registerReducer from "./reducers/registerReducer";

const rootReducer = combineReducers({
    products: productReducer,
    regUser: registerReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
