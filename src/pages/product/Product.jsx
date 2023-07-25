import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAddToCart from "../../hooks/useAddToCart";
import Pylm from "./../../common/productYouMayLike.js/Pylm";
import ViewCartBtn from "../../common/buttons/ViewCartBtn";

export default function Product() {
    const products = useSelector((state) => state.products);
    const cartProduct = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.authState.user);

    const { id } = useParams();
    const [newProduct, setNewProduct] = useState({});
    const navigate = useNavigate();
    const { addProductToCart } = useAddToCart();
    useEffect(() => {
        setNewProduct(products.find((pd) => pd._id === id));
    }, [products, id]);

    const dispatch = useDispatch();

    const handleAddToCart = (id, email) => {
        dispatch(addProductToCart(id, email, navigate));
    };

    return (
        <div className="relative mt-8">
            <div className="container ">
                <div className="breadcrumbs flex">
                    {
                        <div className="flex items-center text-xs sm:text-sm">
                            <p>
                                <Link to={"/"}>Home</Link>
                            </p>{" "}
                            <IoIosArrowForward />{" "}
                            <p>
                                <Link to={`/products/${newProduct?.category}`}>
                                    {newProduct?.category}
                                </Link>
                            </p>{" "}
                            <IoIosArrowForward />{" "}
                            <p>{newProduct?.productName}</p>
                        </div>
                    }
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="product-thumb">
                        {newProduct && (
                            <>
                                <img src={newProduct?.img} alt="" />{" "}
                            </>
                        )}
                    </div>
                    <div className="product-details ">
                        {newProduct && (
                            <h2 className="font-semibold lg:text-3xl sm:text-2xl text-sm">
                                {newProduct?.productName}{" "}
                            </h2>
                        )}
                        <div className="rating text-xs sm:text-sm flex py-2 text-primaryYellow items-center">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <span>(2 reviews)</span>
                        </div>
                        <div className="price text-sm sm:text-base lg:text-3xl">
                            <p>${newProduct?.price}</p>
                        </div>
                        <div className="short-des text-stone-500 py-4 text-xs sm:text-sm">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aperiam, voluptas odio?
                            </p>
                        </div>
                        <div className="customization">
                            <div className="colors">
                                Color:{" "}
                                {newProduct?.colors
                                    ? newProduct?.colors?.map((col) => (
                                          <span>{col + ", "}</span>
                                      ))
                                    : ""}
                            </div>
                        </div>
                        <div className="product-btns">
                            {cartProduct?.find(
                                (pd) => pd.id === newProduct?._id
                            ) ? (
                                <ViewCartBtn sz={"sm"}></ViewCartBtn>
                            ) : (
                                <button
                                    className="cart-btn"
                                    onClick={() =>
                                        handleAddToCart(
                                            newProduct._id,
                                            user?.email
                                        )
                                    }
                                >
                                    <div className="flex items-center">
                                        Add to cart{" "}
                                        <FaCartPlus className="ml-2" />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="more-info ">
                    <Tabs className={"lg:py-8 md:py-4 py-2 px-2"}>
                        <TabList className={"flex justify-center"}>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className="md:text-2xl sm:text-base text-xs ">
                                    Description
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-sm ">
                                    Additional Information
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-xs sm:text-base ">
                                    Shipping & Returns
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-xs sm:text-base ">
                                    Reviews (2)
                                </h3>
                            </Tab>
                        </TabList>
                        <div className="border lg:p-4 p-2 mt-4">
                            <TabPanel>
                                <h4 className="font-medium md:text-2xl text-sm pb-2">
                                    Product Information
                                </h4>
                                <p className="text-xs sm:text-sm">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quasi pariatur, nesciunt
                                    ratione quod possimus rerum voluptatum,
                                    expedita modi accusamus molestias at error
                                    ipsa aliquid. Blanditiis perferendis aliquam
                                    sunt? Quisquam accusantium ratione vero
                                    voluptates, quaerat, ipsa itaque quos
                                    tempore cum illum aperiam nam eos? Rerum,
                                    maxime. Vero architecto omnis reiciendis
                                    perferendis?
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Amet natus id eligendi
                                    odit commodi ipsum placeat cum quidem, ipsam
                                    ex neque cumque ratione ipsa nesciunt, sit
                                    error expedita minima vel.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4 className="font-medium md:text-2xl text-sm pb-2">
                                    Information
                                </h4>
                                <p className="text-xs sm:text-sm">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt architecto eum
                                    rerum quo delectus. Voluptate assumenda vero
                                    soluta, ullam tenetur accusamus enim beatae
                                    id aliquam, minima, quae magni sint.
                                    Voluptas!
                                </p>
                                <h4>Brand</h4>
                                <p className="text-xs sm:text-sm">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Tempora, cum.
                                </p>
                                <h4>colors</h4>
                                <ul>
                                    <li>Red</li>
                                    <li>Green</li>
                                    <li>Blue</li>
                                </ul>
                            </TabPanel>
                            <TabPanel>
                                <h4 className="font-medium md:text-2xl text-sm pb-2">
                                    Delivery & Return
                                </h4>
                                <p className="text-xs sm:text-sm">
                                    Delivery & returns We deliver to over 100
                                    countries around the world. For full details
                                    of the delivery options we offer, please
                                    view our Delivery information We hope you’ll
                                    love every purchase, but if you ever need to
                                    return an item you can do so within a month
                                    of receipt. For full details of how to make
                                    a return, please view our Returns
                                    information
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h4 className="font-medium md:text-2xl text-sm pb-2">
                                    Reviews (2)
                                </h4>
                                <div className="grid grid-cols-6 gap-2">
                                    <div className="col-span-1">
                                        <div className="reviewer">
                                            <h3 className="name">Jhon</h3>
                                            <div className="rating flex py-2 text-primaryYellow items-center">
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                                <FaStar></FaStar>
                                            </div>
                                            <span>6 Days ago</span>
                                        </div>
                                    </div>
                                    <div className="col-span-5">
                                        <div className="review">
                                            <div className="re-head">
                                                <h3>Great product</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Autem natus quaerat
                                                    quas vitae sunt delectus quo
                                                    et aspernatur accusamus
                                                    culpa?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
            {/* // WILL DO  */}
            {/* <section>
                <Pylm></Pylm>
            </section> */}
            <section>
                <div className="container">
                    <h2 className="text-center font-semibold text-sm sm:text-base md:text-xl lg:text-3xl capitalize">
                        Products you may like
                    </h2>
                    <Pylm id={id}></Pylm>
                    {/* <ProductSlider products={products}></ProductSlider> */}
                </div>
            </section>
            <div className="product-footer bg-slate-100 w-full fixed bottom-0 left-0">
                <div className="container">
                    <div className="product-footer-wrap py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="product-info flex items-center">
                                <div className="product-img">
                                    <div className="img w-12 md:w-20">
                                        <img
                                            src={newProduct?.img}
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="product-name ml-4">
                                    <h3 className="text-xs md:text-2xl font-medium">
                                        {newProduct?.productName}{" "}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="price">
                                    <h4 className="text-xs md:text-2xl">
                                        ${newProduct?.price}
                                    </h4>
                                </div>
                                <div className="add-to-cart ml-4">
                                    {cartProduct?.find(
                                        (pd) => pd.id === newProduct?._id
                                    ) ? (
                                        <ViewCartBtn sz="sm"></ViewCartBtn>
                                    ) : (
                                        <button
                                            className="cart-btn"
                                            onClick={() =>
                                                handleAddToCart(
                                                    newProduct._id,
                                                    user?.email
                                                )
                                            }
                                        >
                                            <div className="flex items-center">
                                                Add to cart{" "}
                                                <FaCartPlus className="ml-2" />
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
