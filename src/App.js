import TheLayout from "./TheLayout";
import { BrowserRouter } from "react-router-dom";
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

function App() {
    // AXIOS DEFAULTS
    axios.defaults.baseURL = "http://localhost:5000"; // https://smart-server-pi.vercel.app
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
