import TheLayout from "./TheLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/init.firebase";
import { useEffect } from "react";
import getProducts from "./redux/actions/productAction";
import { getPyml } from "./redux/actions/pymlActions";
import { clearCart, getCartProducts } from "./redux/actions/cartActions";
import { getProfile } from "./redux/actions/profileActions";
import axios from "axios";
import AdminRoute from "./routes/adminRoute/AdminRoute";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import ManageUsers from "./pages/admin/manageUsers/ManageUsers";
import AddProduct from "./pages/admin/addProduct/AddProduct";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
    // AXIOS DEFAULTS
    axios.defaults.baseURL = "https://smart-server-pi.vercel.app"; // https://smart-server-pi.vercel.app
    axios.defaults.withCredentials = true;

    const dispatch = useDispatch();
    const user = useSelector((state) => state.authState.user);
    useEffect(() => {
        dispatch(getProducts("products"));
        if (user?.email) {
            dispatch(getCartProducts(user?.email));
        } else {
            dispatch(clearCart());
        }
        dispatch(getPyml());
    }, [user]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(getProfile(user.email));
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: user,
            });
            dispatch({
                type: "USER",
            });
        } else {
            dispatch({
                type: "USER",
            });
        }
    });
    // useEffect(() => {
    //     dispatch(getCartProducts("getCart"));
    // }, []);
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <TheLayout></TheLayout>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
