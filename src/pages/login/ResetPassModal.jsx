import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../common/spinners/Spinner";
import { resetPassword } from "../../redux/actions/authActions";
import { useForm } from "react-hook-form";

export default function ResetPassModal(props) {
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
        console.log(data);
        dispatch(resetPassword(data));
        reset();
        setModalOpen();
    };

    return (
        <div>
            <div
                id="pass-reset-modal"
                tabIndex="-1"
                aria-hidden={modalToggle ? "false" : "true"}
                className={
                    modalToggle
                        ? "block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-siteGray-200 bg-opacity-60"
                        : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
                }
            >
                <div className="relative lg:p-4 p-3 w-11/12 max-w-[600px] h-full md:h-auto  mx-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="pass-reset-modal"
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
                                Enter your email address
                            </h3>
                            <div className="w-11/12 mx-auto">
                                <form
                                    className="mt-3"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div>
                                        <label
                                            htmlFor="fname"
                                            className="block mb-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-primaryYellow focus:border-primaryYellow block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="example@abc.com"
                                            {...register("email")}
                                        />
                                    </div>

                                    <div className="mt-2 flex justify-center">
                                        {loading ? (
                                            <Spinner></Spinner>
                                        ) : (
                                            <button
                                                type="submit"
                                                className=" text-white bg-primaryYellow hover:bg-primaryYellow focus:ring-4 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center dark:bg-primaryYellow dark:hover:bg-primaryYellow dark:focus:ring-primaryYellow"
                                            >
                                                Send
                                            </button>
                                        )}
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
