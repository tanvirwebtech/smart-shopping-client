export const addToPYML = (productId) => {
    const getPYML = localStorage.getItem("pyml");
    // PYML = Products you may like

    if (!getPYML) {
        const products = JSON.stringify([productId]);
        localStorage.setItem("pyml", products);
    } else if (getPYML) {
        const PYML = JSON.parse(getPYML);
        const checkForDuplicate = PYML.find((pd) => pd === productId);
        if (!checkForDuplicate) {
            const newPyml = [productId, ...PYML];
            localStorage.setItem("pyml", JSON.stringify(newPyml));
        } else {
            return;
        }
    }

    // return {
    //     type: "ADD_TO_LOCAL_STORAGE",
    //     action: productId,
    // };
};

export const getPyml = () => {
    const getPYML = localStorage.getItem("pyml");
    return (dispatch) => {
        if (getPYML) {
            const productIds = localStorage.getItem("pyml");

            dispatch({
                type: "ADD_TO_PYML_LIS",
                payload: JSON.parse(productIds),
            });
        } else {
            return;
        }
    };
};
