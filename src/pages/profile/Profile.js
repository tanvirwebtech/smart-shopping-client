import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Spinner from "./../../common/spinners/Spinner";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
    const authState = useSelector((state) => state.authState);
    const profile = useSelector((state) => state.profile);
    const profileLoading = useSelector(
        (state) => state.siteLoading.profileLoading
    );

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const { user } = authState;

    return (
        <>
            <EditProfileModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                user={profile ? profile : user}
            />
            <div className="max-w-screen-lg mx-auto px-2 py-2 lg:px-4 lg:py-8">
                {profileLoading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className="flex flex-col md:flex-row items-center justify-between lg:mb-8 mb-2 md:mb-6">
                        <div className="flex items-center mb-2 md:mb-0">
                            <img
                                className="lg:w-24 lg:h-24 w-16 h-16 rounded-full mr-4"
                                src={
                                    user?.photoURL
                                        ? `${user.photoURL}`
                                        : "https://via.placeholder.com/150"
                                }
                                alt="Profile"
                            />
                            <div>
                                <h1 className="text-sm sm:text-base md:text-2xl lg:text-4xl font-bold text-gray-800 mb-2">
                                    {profile ? profile.name : user?.displayName}
                                </h1>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-1">
                                    Email: <span>{user?.email}</span>
                                </p>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-1">
                                    Contact No.: {profile?.phone}
                                </p>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                    Billing Address: {profile?.billingAddress}{" "}
                                </p>
                                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                    Shipping Address: {profile?.shippingAddress}{" "}
                                </p>
                            </div>
                        </div>
                        <button
                            className="bg-primaryYellow text-white text-xs sm:text-sm md:text-base px-2 py-1 lg:px-4 lg:py-2 rounded-lg flex items-center gap-2"
                            onClick={handleOpenModal}
                        >
                            Edit Profile <FaUserEdit></FaUserEdit>
                        </button>
                    </div>
                )}
                <hr />
                <div className="flex flex-col md:flex-row">
                    <div className="w-full ">
                        <div className="">
                            <Tabs className={"lg:py-8 md:py-4 py-2"}>
                                <TabList className={"flex justify-center"}>
                                    <Tab
                                        className={
                                            "lg:py-4 lg:px-6 px-2 py-1 bg-white rounded-lg mb-4 lg:mb-8"
                                        }
                                    >
                                        <button className="text-sm md:text-base lg:text-lg font-medium text-gray-800 hover:text-primaryYellow focus:outline-none">
                                            Orders
                                        </button>
                                    </Tab>
                                    <Tab
                                        className={
                                            "lg:py-4 lg:px-6 px-2 py-1 bg-white rounded-lgmb-4 lg:mb-8"
                                        }
                                    >
                                        <button className="text-sm md:text-base lg:text-lg font-medium text-gray-800 hover:text-primaryYellow focus:outline-none">
                                            Reviews
                                        </button>
                                    </Tab>
                                </TabList>

                                <TabPanel>
                                    <ul className="divide-y divide-gray-200">
                                        <li className="lg:py-4 lg:px-6 px-2 py-1">
                                            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
                                                Order #12345
                                            </p>
                                            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                Status: Processing
                                            </p>
                                        </li>
                                        <li className="lg:py-4 lg:px-6 px-2 py-1">
                                            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
                                                Order #67890
                                            </p>
                                            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                Status: Shipped
                                            </p>
                                        </li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <ul className="divide-y divide-gray-200">
                                        <li className="lg:py-4 lg:px-6 px-2 py-1">
                                            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
                                                Review #12345
                                            </p>
                                            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                Status: Processing
                                            </p>
                                        </li>
                                        <li className="lg:py-4 lg:px-6 px-2 py-1">
                                            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
                                                Review #67890
                                            </p>
                                            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                Status: Shipped
                                            </p>
                                        </li>
                                    </ul>
                                </TabPanel>
                            </Tabs>
                            {/* <Tabs className={"lg:py-8 md:py-4 py-2"}>
                                <div className="grid grid-cols-4">
                                    <div className="col-span-1">
                                        <TabList
                                            className={"flex justify-center"}
                                        >
                                            <ul className="divide-y divide-gray-200"></ul>
                                        </TabList>
                                    </div>
                                    <div className="col-span-3 border"></div>
                                </div>
                            </Tabs> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profile;
