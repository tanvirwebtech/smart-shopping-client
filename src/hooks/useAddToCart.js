import Swal from "sweetalert2";
import { addToCart } from "../redux/actions/cartActions";

const useAddToCart = () => {
    const addProductToCart = (id, email, navigate) => {
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
