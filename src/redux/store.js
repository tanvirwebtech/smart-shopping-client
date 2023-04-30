import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import ReduxThunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import authReducer from "./reducers/authReducer";
import loadingReducer from "./reducers/loadingReducer";

const rootReducer = combineReducers({
    products: productReducer,
    authState: authReducer,
    cart: cartReducer,
    siteLoading: loadingReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
