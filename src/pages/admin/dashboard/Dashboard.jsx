// Dashboard.js
import React, { useState } from "react";

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1>Dashboard</h1>
            </div>
            {/* Mobile Drawer */}
            <div className="fixed top-0 left-0 h-full z-30"></div>
            {/* Mobile Drawer Toggle */}
            <button
                className="block md:hidden absolute top-4 right-4 z-10"
                onClick={toggleDrawer}
            >
                Open Menu
            </button>
        </div>
    );
};

export default Dashboard;
