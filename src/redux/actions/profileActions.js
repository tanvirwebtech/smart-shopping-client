import axios from "axios";

export const editProfile = (userData) => {
    return async (dispatch) => {
        dispatch({
            type: "PROFILE_LOADING_TRUE",
        });
        try {
            const res = await axios.put(`/users/${userData.db_id}`, userData);
            const data = await res.data;
            if (data.modifiedCount > 0) {
                dispatch({
                    type: "UPDATE_PROFILE",
                    payload: userData,
                });
            }
            dispatch({
                type: "PROFILE_LOADING_FALSE",
            });
        } catch (error) {
            dispatch({
                type: "PROFILE_LOADING_FALSE",
            });
            console.log(error);
        }
    };
};
export const getProfile = (email) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "PROFILE_LOADING_TRUE",
            });
            const res = await axios.get(`/getUsers/${email}`);
            const data = res.data;
            dispatch({
                type: "GET_PROFILE",
                payload: data,
            });
            dispatch({
                type: "PROFILE_LOADING_FALSE",
            });
        } catch (error) {
            dispatch({
                type: "PROFILE_LOADING_FALSE",
            });
            console.log(error);
        }
    };
};
