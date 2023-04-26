import { useState } from "react";
import { useForm } from "react-hook-form";
import RegisterModal from "./RegisterModal";
import { useDispatch } from "react-redux";
// import Swal from "sweetalert2";
import { loginWithEmail } from "../../redux/actions/authActions";

export default function Login() {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(loginWithEmail(data)); //data: {email, loginPassword}
        reset();
    };
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="page-heading mt-20">
                    <h2 className="text-center text-3xl">
                        Welcome to Smart Shopping! Please Login
                    </h2>
                </div>
                <div className="login-methods p-8 mt-8 border bg-slate-300 dark:bg-slate-700 w-8/12 mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6">
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryYellow dark:focus:border-primaryYellow"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-600">
                                            Please enter your email!
                                        </span>
                                    )}
                                </div>
                                <div className="mb-6">
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-300 dark:text-white dark:focus:ring-primaryYellow dark:focus:border-primaryYellow"
                                        placeholder="******"
                                        {...register("loginPassword", {
                                            required: true,
                                        })}
                                    />
                                    {errors.password && (
                                        <span className="text-red-600">
                                            Please enter your password!
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-primaryYellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 duration-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-yellow-600"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="login-with-accounts border-l pl-4">
                            <h4 className="dark:text-gray-300 text-slate-800">
                                or login with
                            </h4>
                            <div className="login-methods-wrap mt-8">
                                <div className="google-login">
                                    <button className="bg-siteGray-200 text-white border-0 rounded-sm py-4 px-4 hover:bg-primaryYellow hover:text-siteGray-400 duration-300 w-full">
                                        Google
                                    </button>
                                </div>
                                <div className="facebook-login mt-4">
                                    <button className="bg-siteGray-200 text-white border-0 rounded-sm py-4 px-4 hover:bg-primaryYellow hover:text-siteGray-400 duration-300 w-full">
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register mt-4 text-center">
                        <span className="dark:text-gray-300 text-slate-800">
                            New to Smart Shopping?{" "}
                        </span>
                        <button
                            className="text-primaryYellow"
                            type="button"
                            onClick={toggleModal}
                            data-modal-toggle="authentication-modal"
                        >
                            Register Here!
                        </button>
                        <RegisterModal
                            modalToggle={modalOpen}
                            setModalOpen={toggleModal}
                        ></RegisterModal>
                    </div>
                </div>
            </div>

            {/* Register Modal  */}
        </>
    );
}
