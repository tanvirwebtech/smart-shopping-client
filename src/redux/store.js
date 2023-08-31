import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import ReduxThunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
import authReducer from "./reducers/authReducer";
import loadingReducer from "./reducers/loadingReducer";
import localStorageReducer from "./reducers/localStorageReducer";
import orderReducer from "./reducers/orderReducer";
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
});
// const persistedState = localStorage.getItem("pyml")
//     ? JSON.parse(localStorage.getItem("pyml"))
//     : {};
const store = createStore(
    rootReducer,

    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
