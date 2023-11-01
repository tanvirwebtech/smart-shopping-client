import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import loadingReducer from "./reducers/loadingReducer";
import localStorageReducer from "./reducers/localStorageReducer";
import orderReducer from "./reducers/orderReducer";
import paymentReducer from "./reducers/paymentReducer";
import productReducer from "./reducers/productReducer";
import profileReducer from "./reducers/profileReducer";
import searchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    products: productReducer,
    authState: authReducer,
    cart: cartReducer,
    siteLoading: loadingReducer,
    pymlList: localStorageReducer,
    order: orderReducer,
    profile: profileReducer,
    search: searchReducer,
    payment: paymentReducer,
});
// const persistedState = localStorage.getItem("pyml")
//     ? JSON.parse(localStorage.getItem("pyml"))
//     : {};
const store = createStore(
    rootReducer,

    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
