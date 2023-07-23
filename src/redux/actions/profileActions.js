export const editProfile = (userData) => {
    return async (dispatch) => {
        const res = await fetch(
            `http://localhost:5000/users/${userData.email}`,
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
        const res = await fetch(`http://localhost:5000/getUsers/${email}`);
        const data = await res.json();

        dispatch({
            type: "GET_PROFILE",
            payload: data,
        });
    };
};
