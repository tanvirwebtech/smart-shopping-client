import Swal from "sweetalert2";
import { addToCart } from "../redux/actions/cartActions";
import useCardLoading from "./useCardLoading";

const useAddToCart = () => {
    const { toggleLoading } = useCardLoading();
    const addProductToCart = (id, email, navigate) => {
        return (dispatch) => {
            if (!email) {
                Swal.fire({
                    title: "Please log in first!",
                    confirmButtonText: "Log in",
                    showDenyButton: true,
                    denyButtonText: "Cancel",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login", { replace: true });
                    } else if (result.isDenied) {
                        Swal.fire("Canceled", "", "info");
                        toggleLoading(id);
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
