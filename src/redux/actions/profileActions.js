export const editProfile = (userData) => {
    return async (dispatch) => {
        const res = await fetch(
            `https://smart-server-pi.vercel.app/users/${userData.email}`,
            {
                method: "PUT",
                body: JSON.stringify(userData),
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
        const data = await res.json();

        dispatch({
            type: "UPDATE_PROFILE",
            payload: userData,
        });
    };
};
export const getProfile = (email) => {
    return async (dispatch) => {
        const res = await fetch(
            `https://smart-server-pi.vercel.app/getUsers/${email}`
        );
        const data = await res.json();

        dispatch({
            type: "GET_PROFILE",
            payload: data,
        });
    };
};
