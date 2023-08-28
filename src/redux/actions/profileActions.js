import axios from "axios";

export const editProfile = (userData) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`/users/${userData.email}`, userData);
            const data = await res.data;
            if (data.modifiedCount > 0) {
                dispatch({
                    type: "UPDATE_PROFILE",
                    payload: userData,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
export const getProfile = (email) => {
    return async (dispatch) => {
        const res = await axios.get(`/getUsers/${email}`);
        console.log(res.data);
        const data = res.data;
        dispatch({
            type: "GET_PROFILE",
            payload: data,
        });
    };
};
