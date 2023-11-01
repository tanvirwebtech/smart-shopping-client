import React from "react";
import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductSlider from "../../../common/productSlider/ProductSlider";
import Spinner from "../../../common/spinners/Spinner";

const TabPanels = () => {
    const products = useSelector((state) => state.products);
    const featured = products.filter((pd) => pd.category === "camera");
    const topRated = products.filter((pd) => pd.category === "laptop");

    return (
        <div className="container mt-4 sm:mt-6">
            <Tabs className={"lg:py-8 md:py-4 py-2"}>
                <TabList className={"flex justify-center"}>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl sm:text-base text-xs  ">
                            Featured
                        </h3>
                    </Tab>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl sm:text-base text-xs  ">
                            On Sale
                        </h3>
                    </Tab>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl sm:text-base text-xs  ">
                            Top Rated
                        </h3>
                    </Tab>
                </TabList>

                <TabPanel>
                    {!products.length ? (
                        <Spinner></Spinner>
                    ) : (
                        <ProductSlider products={featured}></ProductSlider>
                    )}
                </TabPanel>
                <TabPanel>
                    {!products.length ? (
                        <Spinner></Spinner>
                    ) : (
                        <ProductSlider products={products}></ProductSlider>
                    )}
                </TabPanel>
                <TabPanel>
                    {!products.length ? (
                        <Spinner></Spinner>
                    ) : (
                        <ProductSlider products={topRated}></ProductSlider>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabPanels;
