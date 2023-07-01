import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    quantityMinus,
    quantityPlus,
} from "./../../redux/actions/cartActions";
import AddToCartBtn from "../../common/buttons/AddToCartBtn";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductSlider from "./../../common/productSlider/ProductSlider";

export default function Product() {
    const products = useSelector((state) => state.products);
    const cartProduct = useSelector((state) => state.cart);
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const [newProduct, setNewProduct] = useState({});

    useEffect(() => {
        setNewProduct(products.find((pd) => pd._id === id));
    }, [products, id]);

    const dispatch = useDispatch();

    const handleQty = (e) => {
        setQty(e.target.value);
    };

    return (
        <div className="relative">
            <div className="container">
                <div className="breadcrumbs flex">
                    {
                        <div className="flex items-center">
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
                            <h2 className="font-semibold lg:text-3xl sm:text-2xl text-xl">
                                {newProduct?.productName}{" "}
                            </h2>
                        )}
                        <div className="rating flex py-2 text-primaryYellow items-center">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <span>(2 reviews)</span>
                        </div>
                        <div className="price text-3xl">
                            <p>${newProduct?.price}</p>
                        </div>
                        <div className="short-des text-stone-500 py-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aperiam, voluptas odio? Ipsum
                                magnam magni officiis culpa, totam temporibus
                                quam porro labore
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
                            <div className="quantity py-4">
                                <div className="quantity">
                                    <form action="">
                                        <p className="qty ">
                                            <label htmlFor="qty">
                                                Quantity:
                                            </label>

                                            <button
                                                className="qtyminus ml-2 py-2 px-4 bg-siteGray-100"
                                                aria-hidden="true"
                                                type="button"
                                                onClick={() =>
                                                    dispatch(
                                                        quantityMinus(
                                                            newProduct
                                                        )
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <input
                                                name="qty"
                                                id="qty"
                                                value={qty}
                                                onChange={handleQty}
                                                className="w-11 mx-2 border p-2"
                                            />
                                            <button
                                                className="qtyplus py-2 px-4 bg-siteGray-100"
                                                type="button"
                                                onClick={() =>
                                                    dispatch(
                                                        quantityPlus(newProduct)
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="product-btns">
                            <button className="cart-btn mr-2">Buy Now</button>
                            {cartProduct?.includes(newProduct?._id) ? (
                                <Link to="/cart">
                                    <button className="py-2 px-4 bg-primaryYellow text-gray-900 border-0 text-sm rounded-sm">
                                        View Cart
                                    </button>
                                </Link>
                            ) : (
                                <AddToCartBtn
                                    sz={"md"}
                                    onclick={addToCart(newProduct)}
                                ></AddToCartBtn>
                            )}
                        </div>
                    </div>
                    <div className="more-info"></div>
                </div>
                <div className="more-info">
                    <Tabs className={"lg:py-8 md:py-4 py-2"}>
                        <TabList className={"flex justify-center"}>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className="md:text-2xl text-xl ">
                                    Description
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-xl ">
                                    Additional Information
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-xl ">
                                    Shipping & Returns
                                </h3>
                            </Tab>
                            <Tab
                                className={
                                    "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                                }
                            >
                                <h3 className=" md:text-2xl text-xl ">
                                    Reviews (2)
                                </h3>
                            </Tab>
                        </TabList>
                        <div className="border lg:p-4 p-2 mt-4">
                            <TabPanel>
                                <h4>Product Information</h4>
                                <p>
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
                                <h4>Information</h4>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt architecto eum
                                    rerum quo delectus. Voluptate assumenda vero
                                    soluta, ullam tenetur accusamus enim beatae
                                    id aliquam, minima, quae magni sint.
                                    Voluptas!
                                </p>
                                <h4>Brand</h4>
                                <p>
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
                                <h4>Delivery & Return</h4>
                                <p>
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
                                <h4>Reviews (2)</h4>
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
                    <h2 className="text-center font-semibold text-3xl ">
                        You may also like
                    </h2>
                    <ProductSlider products={products}></ProductSlider>
                </div>
            </section>
            <div className="product-footer bg-slate-100 w-full fixed bottom-0 left-0">
                <div className="container">
                    <div className="product-footer-wrap py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="product-info flex items-center">
                                <div className="product-img">
                                    <div className="img w-20">
                                        <img
                                            src={newProduct?.img}
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="product-name ml-4">
                                    <h3 className="text-2xl font-medium">
                                        {newProduct?.productName}{" "}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="price">
                                    <h4 className="text-2xl">
                                        ${newProduct?.price}
                                    </h4>
                                </div>
                                <div className="add-to-cart ml-4">
                                    {cartProduct?.find(
                                        (pd) => pd._id === id
                                    ) ? (
                                        <Link to="/cart">
                                            <button className="py-2 px-4 bg-primaryYellow text-gray-900 border-0 text-sm rounded-sm">
                                                View Cart
                                            </button>
                                        </Link>
                                    ) : (
                                        <AddToCartBtn
                                            sz={"lg"}
                                            onClick={() =>
                                                dispatch(addToCart())
                                            }
                                        />
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
