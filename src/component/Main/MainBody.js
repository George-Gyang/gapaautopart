import React from "react";
import BodySlider from "./BodySlider";
import LanddingForm from "./LandingForm";
import TopProduct from "./TopProduct";

function MainBody(){

    return(
        <div className="Main_body">
            <BodySlider/>
            <div className="container">
            <LanddingForm/>
            <TopProduct />
            </div>
        </div>
    )
}

export default MainBody;