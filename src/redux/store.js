import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import ReduxThunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    products: productReducer,
    authState: authReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
