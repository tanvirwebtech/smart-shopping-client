import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import auth from "../../firebase/init.firebase";
import Swal from "sweetalert2";

// REGISTER WITH EMAIL AND PASS
export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "AUTH_PENDING",
        });
        Swal.fire("Loading!", "Registration in process!", "pending");
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
                Swal.fire(
                    "Congratulations!",
                    "Registration successful!",
                    "success"
                );
            })
            .catch((error) => {
                dispatch({
                    type: "REG_FAIL",
                    payload: error.message,
                });
                Swal.fire("Failed!", "Registration unsuccessful!", "error");
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
                Swal.fire("Success!", "You successfully logged in!", "success");
            })
            .catch((error) => {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: error.message,
                });
                Swal.fire("Failed!", "Login Unsuccessful. Try again!", "error");
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
                Swal.fire("Success!", "Successfully logged out!", "success");
            })
            .catch((error) => {
                dispatch({
                    type: "LOGOUT_FAIL",
                    payload: error.message,
                });
                Swal.fire("Failed!", "something went wrong!", "error");
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
