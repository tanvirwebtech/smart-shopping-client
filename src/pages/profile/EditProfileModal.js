import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProfile } from "../../redux/actions/profileActions";

const EditProfileModal = ({ isOpen, onClose, user }) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    console.log(user);
    useEffect(() => {
        setName(user.name);
    }, [user]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const updateData = { ...user, ...data };
        console.log(updateData);
        dispatch(editProfile(updateData));
        onClose();
    };
    const handleOnChange = (event) => {
        return setName(event.target.value);
    };
    return (
        <div>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden={isOpen ? "false" : "true"}
                className={
                    isOpen
                        ? "block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-siteGray-200 bg-opacity-60"
                        : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
                }
            >
                <div className="relative p-4 w-full max-w-lg h-full md:h-auto  mx-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="authentication-modal"
                            onClick={onClose}
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
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Edit Your Profile
                            </h3>

                            {/* // FORM // */}

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 dark:text-siteGray-100 font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primaryYellow"
                                        {...register("name")}
                                        value={name}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 dark:text-siteGray-100 font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primaryYellow"
                                        value={user.email}
                                        onChange={handleOnChange}
                                        {...register("email")}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="contactNo"
                                        className="block text-gray-700 dark:text-siteGray-100 font-medium mb-2"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        id="contactNo"
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primaryYellow"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="shippingAddress"
                                        className="block text-gray-700 dark:text-siteGray-100 font-medium mb-2"
                                    >
                                        Shipping Address
                                    </label>
                                    <textarea
                                        id="shippingAddress"
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primaryYellow"
                                        {...register("shippingAddress", {
                                            required: true,
                                        })}
                                    ></textarea>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Please provide your complete shipping
                                        address.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="billingAddress"
                                        className="block text-gray-700 dark:text-siteGray-100 font-medium mb-2"
                                    >
                                        Billing Address
                                    </label>
                                    <textarea
                                        id="billingAddress"
                                        rows="3"
                                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-primaryYellow"
                                        {...register("billingAddress", {
                                            required: true,
                                        })}
                                    ></textarea>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Please provide your complete billing
                                        address.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-primaryYellow text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primaryYellow"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="ml-4 px-4 py-2 bg-gray-300 text-gray-700 dark:text-siteGray-100 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        /////////////////////////////////
        // <div
        //     className={`fixed top-0 left-1/2 bg-gray-900 bg-opacity-75 transition-opacity ${
        //         isOpen ? "visible" : "invisible"
        //     }`}
        //     onClick={onClose}
        // >
        //     <div
        //         className="bg-white rounded-lg overflow-hidden shadow-lg modal-content"
        //         onClick={handleModalClick}
        //     >
        //         <div className="p-4 m-10 z-40">

        //         </div>
        //     </div>
        // </div>
    );
};

export default EditProfileModal;
