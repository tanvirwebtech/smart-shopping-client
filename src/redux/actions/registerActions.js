import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/init.firebase";

const registerUser = (userData) => {
    console.log(userData);
    return (dispatch) => {
        createUserWithEmailAndPassword(
            auth,
            userData.email,
            userData.confirm_pass
        )
            .then((userCredential) => {
                // Signed in
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
export default registerUser;

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
