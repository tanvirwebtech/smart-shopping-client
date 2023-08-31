import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./../../common/spinners/Spinner";

const AdminRoute = ({ children }) => {
    const authUser = useSelector((state) => state.authState.user);
    const { loading } = useSelector((state) => state.siteLoading);
    const location = useLocation();
    const admin = "Admin";

    if (loading) {
        return (
            <>
                <Spinner></Spinner>
            </>
        );
    }
    if (!authUser && !admin) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // authorized so return child components
    return children;
};

export default AdminRoute;
