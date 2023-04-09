import React from "react";
import { useForm } from "react-hook-form";
import registerUser from "../../redux/actions/registerActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function RegisterModal(props) {
    const { modalToggle, setModalOpen } = props;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        setLoading(true);
        dispatch(registerUser(data));
        reset();
    };
    const reg = useSelector((state) => state.regUser);
    // useEffect(() => {
    //     reg.length
    //         ? setModalOpen(false) && setLoading(false)
    //         : setModalOpen(true);
    // }, [reg]);

    return (
        <div>
            <div
                id="authentication-modal"
                tabindex="-1"
                aria-hidden={modalToggle ? "false" : "true"}
                class={
                    modalToggle
                        ? "block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-siteGray-200 bg-opacity-60"
                        : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
                }
            >
                <div class="relative p-4 w-full max-w-md h-full md:h-auto  mx-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="authentication-modal"
                            onClick={setModalOpen}
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Register in to our platform
                            </h3>
                            <form
                                class="space-y-6"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <label
                                        for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Your Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Enter your name."
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.name && (
                                        <span className="text-red-600">
                                            Please enter your name!
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Your password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        {...register("confirm_pass", {
                                            required: true,
                                            validate: (val) => {
                                                if (watch("password") !== val) {
                                                    return "err";
                                                }
                                            },
                                        })}
                                    />
                                    {errors.confirm_pass && (
                                        <span className="text-red-600">
                                            Password does not matched!
                                        </span>
                                    )}
                                </div>

                                {loading ? (
                                    <button
                                        type="submit"
                                        class="w-full text-white bg-primaryYellow hover:bg-primaryYellow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-primaryYellow"
                                        disabled
                                    >
                                        Loading...
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        class="w-full text-white bg-primaryYellow hover:bg-primaryYellow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-primaryYellow"
                                    >
                                        Register
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
