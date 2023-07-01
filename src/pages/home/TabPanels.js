import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductSlider from "./../../common/productSlider/ProductSlider";
import { useSelector } from "react-redux";

const TabPanels = () => {
    const products = useSelector((state) => state.products);
    const featured = products.filter((pd) => pd.category === "camera");
    const topRated = products.filter((pd) => pd.category === "laptop");

    return (
        <div className="container">
            <Tabs className={"lg:py-8 md:py-4 py-2"}>
                <TabList className={"flex justify-center"}>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl text-xl ">
                            Featured
                        </h3>
                    </Tab>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl text-xl ">
                            On Sale
                        </h3>
                    </Tab>
                    <Tab
                        className={
                            "home-tab-title text-gray-300 mx-4 cursor-pointer focus:outline-0"
                        }
                    >
                        <h3 className="font-bold lg:text-3xl md:text-2xl text-xl ">
                            Top Rated
                        </h3>
                    </Tab>
                </TabList>

                <TabPanel>
                    <ProductSlider products={featured}></ProductSlider>
                </TabPanel>
                <TabPanel>
                    <ProductSlider products={products}></ProductSlider>
                </TabPanel>
                <TabPanel>
                    <ProductSlider products={topRated}></ProductSlider>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabPanels;
