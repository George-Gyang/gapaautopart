import React from "react";
import BodySlider from "./BodySlider";
import LanddingForm from "./LandingForm";
import TopProduct from "./TopProduct";
import Products from "./Products";
import MoreProduct from "./MoreProduct";
import Brands from "./Brands";
import Shipping from "./Shipping";
import Appstore from "./AppStore";


function MainBody() {

    return (
        <div className="Main_body">
            <BodySlider />
            <div className="container">
                <LanddingForm />
                <TopProduct />
                <Products />
                <MoreProduct />
                <MoreProduct />
                <Shipping />
                <Brands />
                <Appstore />
            </div>
        </div>
    )
}

export default MainBody;