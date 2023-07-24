import { useState } from "react";
import { useForm } from "react-hook-form";
import RegisterModal from "./RegisterModal";
import { useDispatch, useSelector } from "react-redux";

import { googleSignIn, loginWithEmail } from "../../redux/actions/authActions";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const authState = useSelector((state) => state.authState);
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    if (authState.user) {
        <Navigate to="/" replace={true} />;
    }
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Login With Email and Password
    const onSubmit = (data) => {
        dispatch(loginWithEmail(data, location, navigate)); //data: {email, loginPassword}
        reset();
    };

    // Google Login
    const handleGoogleLogin = () => {
        dispatch(googleSignIn(location, navigate));
    };

    // Register Modal Toggle
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    if (authState.user) {
        return (
            <div className="container">
                <div className="page-heading mt-20 text-center ">
                    <h2 className="font-medium text-green-600 text-sm md:text-2xl lg:text-3xl">
                        Already logged in.
                    </h2>
                    <p className="text-xs sm:text-sm">
                        If you want to log in with a different account please
                        logout first.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="container">
                <div className="page-heading mt-20">
                    <h2 className="text-center text-sm sm:text-base md:text-xl lg:text-3xl">
                        Welcome to Smart Shopping! Please Login
                    </h2>
                </div>
                <div className="login-methods md:p-8 md:mt-8 p-2 mt-4 border bg-slate-300 dark:bg-slate-700 md:w-8/12 mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-2 md:mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primaryYellow dark:focus:border-primaryYellow"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-600 text-xs sm:text-sm md:text-base">
                                            Please enter your email!
                                        </span>
                                    )}
                                </div>
                                <div className="mb-2 md:mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-slate-300 dark:text-white dark:focus:ring-primaryYellow dark:focus:border-primaryYellow"
                                        placeholder="******"
                                        {...register("loginPassword", {
                                            required: true,
                                        })}
                                    />
                                    {errors.password && (
                                        <span className="text-red-600 text-xs sm:text-sm md:text-base">
                                            Please enter your password!
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-primaryYellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 duration-300 font-medium rounded-md text-xs sm:text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-yellow-600"
                                >
                                    Log in
                                </button>
                            </form>
                        </div>
                        <div className="login-with-accounts border-l pl-4">
                            <h4 className="dark:text-gray-300 text-slate-800 text-xs sm:text-sm md:text-base">
                                or login with
                            </h4>
                            <div className="login-methods-wrap mt-4 md:mt-8">
                                <div className="google-login">
                                    <button
                                        className="bg-siteGray-200 text-white border-0 rounded-sm py-1 px-2 md:py-4 md:px-4 hover:bg-primaryYellow hover:text-siteGray-400 duration-300 w-full text-xs sm:text-sm md:text-base"
                                        onClick={handleGoogleLogin}
                                    >
                                        Google
                                    </button>
                                </div>
                                <div className="facebook-login mt-2 md:mt-4">
                                    <button className="bg-siteGray-200 text-white border-0 rounded-sm py-1 px-2 md:py-4 md:px-4  hover:bg-primaryYellow hover:text-siteGray-400 duration-300 w-full text-xs sm:text-sm md:text-base">
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register mt-2 md:mt-4 text-center text-xs sm:text-sm md:text-base">
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
