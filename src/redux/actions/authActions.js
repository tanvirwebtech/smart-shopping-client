import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import auth from "../../firebase/init.firebase";

// REGISTER WITH EMAIL AND PASS
export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "AUTH_PENDING",
        });
        createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.confirm_pass
        )
            .then((userCredential) => {
                dispatch({
                    type: "REG_SUCCESS",
                    payload: userCredential.user,
                });
            })
            .catch((error) => {
                dispatch({
                    type: "REG_FAIL",
                    payload: error.message,
                });
            });
    };
};

// LOGIN WITH EMAIL PASS //

export const loginWithEmail = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "AUTH_PENDING",
        });
        signInWithEmailAndPassword(auth, userData.email, userData.loginPassword)
            .then((userCredential) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: userCredential.user,
                });
            })
            .catch((error) => {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: error.message,
                });
            });
    };
};

// LOG OUT
export const logout = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch({
                    type: "LOGOUT",
                });
            })
            .catch((error) => {
                dispatch({
                    type: "LOGOUT_FAIL",
                    payload: error.message,
                });
            });
    };
};

// axios
//     .post("http://localhost:5000/registerUser", userData)
//     .then((res) =>
//         dispatch({
//             type: "REG_SUCCESS",
//             payload: res,
//         })
//     )
//     .catch((err) =>
//         dispatch({
//             type: "REG_FAIL",
//             payload: err,
//         })
//     );
