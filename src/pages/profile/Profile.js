import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";
import { useState } from "react";

const Profile = () => {
    const authState = useSelector((state) => state.authState);
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        setTimeout(() => {
            if (!authState.user) {
                return navigate("/login");
            }
        }, 2000);
    }, [authState]);
    const { user } = authState;

    return (
        <>
            <EditProfileModal isOpen={isOpen} onClose={handleCloseModal} />
            <div className="max-w-screen-lg mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            className="w-24 h-24 rounded-full mr-4"
                            src={
                                user?.photoURL
                                    ? `${user?.photoURL}`
                                    : "https://via.placeholder.com/150"
                            }
                            alt="Profile"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {user?.displayName}
                            </h1>
                            <p className="text-gray-700 mb-1">
                                Email: <span>{user?.email}</span>
                            </p>
                            <p className="text-gray-700 mb-1">
                                Contact No.: 123-456-7890
                            </p>
                            <p className="text-gray-700">
                                Address: 123 Main St, Anytown, USA
                            </p>
                        </div>
                    </div>
                    <button
                        className="bg-primaryYellow text-white px-4 py-2 rounded-lg"
                        onClick={handleOpenModal}
                    >
                        Edit Profile
                    </button>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-lg shadow-lg mb-8">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4 px-6">
                                    <button className="text-lg font-medium text-gray-800 hover:text-primaryYellow focus:outline-none">
                                        Orders
                                    </button>
                                </li>
                                <li className="py-4 px-6">
                                    <button className="text-lg font-medium text-gray-800 hover:text-primaryYellow focus:outline-none">
                                        Reviews
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Orders
                        </h2>
                        <ul className="divide-y divide-gray-200">
                            <li className="py-4 px-6">
                                <p className="text-lg font-medium text-gray-800">
                                    Order #12345
                                </p>
                                <p className="text-gray-700">
                                    Status: Processing
                                </p>
                            </li>
                            <li className="py-4 px-6">
                                <p className="text-lg font-medium text-gray-800">
                                    Order #67890
                                </p>
                                <p className="text-gray-700">Status: Shipped</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;
