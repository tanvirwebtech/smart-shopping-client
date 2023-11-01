import React from "react";
import { useSelector } from "react-redux";
import { getPyml } from "../../redux/actions/pymlActions";
import ProductSlider from "./../../common/productSlider/ProductSlider";
import "./Home.css";
import {
    CompanyFeatures,
    Deals,
    HomeCarousel,
    PromotionBanner,
    SideBanners,
    TabPanels,
} from "./components/";
export default function Home() {
    const products = useSelector((state) => state.products);

    getPyml();

    return (
        <>
            <section className="mt-8">
                <div className="container">
                    <div className="category-cards">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 gap-4 ">
                            <div className="md:col-span-2 col-span-1 banner-slider">
                                <HomeCarousel />
                            </div>
                            <div className="col-span-1 mt-4 md:mt-0">
                                <SideBanners />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductSlider
                products={products}
                sectionHeading="Latest Products"
            ></ProductSlider>

            <section>
                <TabPanels />
            </section>
            <section>
                <PromotionBanner />
            </section>

            <section
                id="deals-outlet"
                className="bg-yellow-100 py-4 lg:mt-6 mt-4"
            >
                <Deals></Deals>
            </section>
            <section>
                <CompanyFeatures></CompanyFeatures>
            </section>
        </>
    );
}
