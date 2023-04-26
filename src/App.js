import TheLayout from "./TheLayout";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Swal from "sweetalert2";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/init.firebase";
function App() {
    const dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: user,
            });
        } else {
        }
    });
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
