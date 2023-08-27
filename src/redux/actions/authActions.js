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
                dispatch({
                    type: "REG_FAIL",
                    payload: error.message,
                });
                Swal.fire("Failed!", "Registration unsuccessful!", "error");
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

// Sign in with Google

export const googleSignIn = (location, navigate) => {
    const provider = new GoogleAuthProvider();
    return (dispatch) => {
        const from = location.state?.from?.pathname;
        signInWithRedirect(auth, provider)
            .then((result) => {
                axios
                    .post("/registerUser", result.user)
                    .then(function (response) {
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
