import axios from "axios";

export const editProfile = (userData) => {
    return async (dispatch) => {
        const res = await axios.put(`/users/${userData.email}`, userData);
        const data = await res.data;
        console.log(data);
        // {
        //             method: "PUT",
        //             body: JSON.stringify(userData),
        //             headers: {
        //                 "Content-type": "application/json",
        //             },
        //         }
        dispatch({
            type: "UPDATE_PROFILE",
            payload: userData,
        });
    };
};
export const getProfile = (email) => {
    return async (dispatch) => {
        const res = await axios.get(`/getUsers/${email}`);
        console.log(res.data);
        const data = await res.data;
        dispatch({
            type: "GET_PROFILE",
            payload: data,
        });
    };
};
