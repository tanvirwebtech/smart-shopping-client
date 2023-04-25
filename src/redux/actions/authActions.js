import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/init.firebase";

export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch({
            type: "REG_PENDING",
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
            type: "REG_PENDING",
        });
        signInWithEmailAndPassword(auth, userData.email, userData.password)
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
