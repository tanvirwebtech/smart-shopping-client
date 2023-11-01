import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import Spinner from "./common/spinners/Spinner";
import AddProduct from "./pages/admin/addProduct/AddProduct";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import ManageUsers from "./pages/admin/manageUsers/ManageUsers";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults/SearchResults";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import AdminRoute from "./routes/adminRoute/AdminRoute";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";

const About = React.lazy(() => import("./pages/about/About"));
const Cart = React.lazy(() => import("./pages/cart/Cart"));
const Category = React.lazy(() => import("./pages/category/Category"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Product = React.lazy(() => import("./pages/product/Product"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const Shop = React.lazy(() => import("./pages/shop/Shop"));

export default function TheLayout() {
    return (
        <>
            <header className="w-full">
                <Header></Header>
            </header>
            <main className="mt-32  md:mt-44">
                <Suspense
                    fallback={
                        <>
                            <Spinner></Spinner>
                        </>
                    }
                >
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/all-products" element={<Shop />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route
                            path="/search-results"
                            element={<SearchResults />}
                        ></Route>
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        ></Route>
                        <Route
                            path="/checkout"
                            element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>
                            }
                        ></Route>
                        <Route
                            path="/product/:id"
                            element={<Product />}
                        ></Route>
                        <Route
                            path="/products/:category"
                            element={<Category />}
                        ></Route>
                        <Route
                            path="/terms-and-conditions"
                            element={<TermsAndConditions />}
                        ></Route>
                        <Route
                            path="/dashboard"
                            element={
                                <AdminRoute>
                                    <Dashboard></Dashboard>
                                </AdminRoute>
                            }
                        ></Route>
                        <Route
                            path="/add-product"
                            element={
                                <AdminRoute>
                                    <AddProduct></AddProduct>
                                </AdminRoute>
                            }
                        ></Route>
                        <Route
                            path="/add-product"
                            element={
                                <AdminRoute>
                                    <AddProduct></AddProduct>
                                </AdminRoute>
                            }
                        ></Route>
                        <Route
                            path="/manage-product"
                            element={
                                <AdminRoute>
                                    <ManageProduct></ManageProduct>
                                </AdminRoute>
                            }
                        ></Route>
                        <Route
                            path="/manage-users"
                            element={
                                <AdminRoute>
                                    <ManageUsers></ManageUsers>
                                </AdminRoute>
                            }
                        ></Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}
