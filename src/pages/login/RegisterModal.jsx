import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../../redux/actions/authActions";
import Spinner from "../../common/spinners/Spinner";
import { AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function RegisterModal(props) {
    const { modalToggle, setModalOpen } = props;
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authState.loading);
    // const authState = useSelector((state) => state.authState);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const name = `${data.firstName} ${data.lastName}`;
        dispatch(registerUser({ ...data, name }));
        reset();
        setModalOpen();
    };

    return (
        <div>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden={modalToggle ? "false" : "true"}
                className={
                    modalToggle
                        ? "block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-siteGray-200 bg-opacity-60"
                        : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
                }
            >
                <div className="relative lg:p-4 p-3 w-11/12 max-w-[800px] h-full md:h-auto  mx-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="authentication-modal"
                            onClick={setModalOpen}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-sm sm:text-base lg:text-xl font-medium text-gray-900 dark:text-white flex items-center gap-2 justify-center">
                                Register in to our platform
                                <AiOutlineForm />
                            </h3>
                            <div className="w-11/12 mx-auto">
                                <form
                                    className="mt-3"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-7">
                                        <div className="left-form space-y-4 flex flex-col justify-between">
                                            <div>
                                                <label
                                                    htmlFor="fname"
                                                    className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    id="fname"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="First name."
                                                    {...register("firstName")}
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="lname"
                                                    className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    id="lname"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="Last name."
                                                    {...register("lastName", {
                                                        required: true,
                                                    })}
                                                />
                                                {errors.lastName && (
                                                    <span className="text-red-600">
                                                        Please enter your name!
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="Enter your email."
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
                                        </div>
                                        <div className="right-form space-y-4 flex flex-col justify-between">
                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Your password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="••••••••"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    required
                                                    {...register("password", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="confirmPassword"
                                                    className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Confirm password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="confirmPassword"
                                                    placeholder="••••••••"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    {...register(
                                                        "confirm_pass",
                                                        {
                                                            required: true,
                                                            validate: (val) => {
                                                                if (
                                                                    watch(
                                                                        "password"
                                                                    ) !== val
                                                                ) {
                                                                    return "err";
                                                                }
                                                            },
                                                        }
                                                    )}
                                                />
                                                {errors.confirm_pass && (
                                                    <span className="text-red-600">
                                                        Password does not
                                                        matched!
                                                    </span>
                                                )}
                                            </div>
                                            <div className="t-and-c">
                                                <input
                                                    type="checkbox"
                                                    name="t-and-c"
                                                    id="t-and-c"
                                                    {...register("tAndC", {
                                                        required: true,
                                                    })}
                                                />
                                                <label
                                                    htmlFor="t-and-c"
                                                    className=" ml-2  mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    I have read and agree with
                                                    all the{" "}
                                                    <Link
                                                        className="text-primaryYellow"
                                                        to={
                                                            "/terms-and-conditions"
                                                        }
                                                    >
                                                        terms and conditions
                                                    </Link>
                                                    .
                                                </label>
                                            </div>
                                            <div>
                                                {loading ? (
                                                    <Spinner></Spinner>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="w-full text-white bg-primaryYellow hover:bg-primaryYellow focus:ring-4 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-primaryYellow"
                                                    >
                                                        Register
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
