import axios from "axios";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../firebase/init.firebase";

// const router = createBrowserRouter(routes, { basename: "/" });

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
                    .post("/registerUser", userData)
                    .then((result) => {
                        updateProfile(auth.currentUser, {
                            displayName: userData.name,
                        })
                            .then(() => {
                                dispatch({
                                    type: "REG_SUCCESS",
                                    payload: userCredential.user,
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
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
                let errMsg = "";
                if (
                    error.message ===
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    errMsg = "Account already exists with this email.";
                }
                dispatch({
                    type: "REG_FAIL",
                    payload: error.message,
                });
                Swal.fire("Failed!", errMsg, "error");
            });
    };
};

// LOGIN WITH EMAIL PASS //

export const loginWithEmail = (userData, location, navigate) => {
    return (dispatch) => {
        // dispatch({
        //     type: "AUTH_PENDING",
        // });
        const from = location.state?.from?.pathname;

        signInWithEmailAndPassword(auth, userData.email, userData.loginPassword)
            .then((userCredential) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: userCredential.user,
                });
                Swal.fire("Success!", "You successfully logged in!", "success");
                // navigate(from, );
                navigate(from, { replace: true });
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

// Forgot Password / Reset Password
export const resetPassword = ({ email }) => {
    console.log(email);
    return (dispatch) => {
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire(
                    "Success!",
                    "Check your email. We have just sent a password reset link!",
                    "success"
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
            });
    };
};

// Sign in with Google

export const googleSignIn = (location, navigate) => {
    const provider = new GoogleAuthProvider();
    return (dispatch) => {
        const from = location.state?.from?.pathname;
        signInWithPopup(auth, provider)
            .then((result) => {
                axios
                    .post("/registerUser", result.user)
                    .then(function (response) {
                        console.log(response);
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: result.user,
                        });
                        navigate(from, { replace: true });
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

export const facebookSignIn = (location, navigate) => {
    const provider = new FacebookAuthProvider();
    return (dispatch) => {
        const from = location.state?.from?.pathname;
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                axios
                    .post("/registerUser", result.user)
                    .then(function (response) {
                        console.log(response);
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: result.user,
                        });
                        navigate(from, { replace: true });
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
//     .post("https://smart-server-pi.vercel.app/registerUser", userData)
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
