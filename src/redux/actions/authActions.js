import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../../firebase/init.firebase";
import Swal from "sweetalert2";
import axios from "axios";

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
                axios
                    .post("http://localhost:5000/registerUser", userData)
                    .then(function (response) {
                        updateProfile(auth.currentUser, {
                            displayName: userData.name,
                        })
                            .then(() => {
                                dispatch({
                                    type: "REG_SUCCESS",
                                    payload: userCredential.user,
                                });
                            })
                            .catch((error) => {});
                    })
                    .catch(function (error) {
                        dispatch({
                            type: "REG_FAIL",
                            payload: error.message,
                        });
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

// Sign in with Google

export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                axios
                    .post("http://localhost:5000/registerUser", result.user)
                    .then(function (response) {
                        console.log(response);
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: result.user,
                        });
                        Swal.fire(
                            "Success!",
                            "You successfully logged in!",
                            "success"
                        );
                    });
            })
            .catch((error) => {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: error.message,
                });
                Swal.fire("Failed!", "Login Unsuccessful. Try again!", "error");
            })
            .finally({});
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
