const getProducts = (payload) => {
    return (dispatch) => {
        fetch(`http://localhost:5000/${payload}`)
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: "PRODUCTS",
                    payload: data,
                })
            );
    };
};
export default getProducts;
