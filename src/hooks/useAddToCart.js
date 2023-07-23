import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../redux/actions/cartActions";

const useAddToCart = () => {
    const user = useSelector((state) => state.authState.user);
    const addProductToCart = (id, email, navigate) => {
        console.log(id, email);
        return (dispatch) => {
            if (!email) {
                Swal.fire({
                    title: "Please log in first!",
                    showCancelButton: true,
                    confirmButtonText: "Log in",
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        navigate("/login", { replace: true });
                    } else if (result.isDenied) {
                        Swal.fire("Canceled", "", "info");
                    }
                });
            } else {
                dispatch(addToCart(id, email));
            }
        };
    };
    return { addProductToCart };
};

export default useAddToCart;
