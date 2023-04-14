import React from "react";
// import { FaStar } from "react-icons/fa";
import TopProductOne from "../../asset/images/brakepad.png"
import TopProductTwo from "../../asset/images/car-part.png"
import TopProductThree from "../../asset/images/battery.png"

import "../../asset/css/style.css"
import TopCard from "./TopCard";


function Products() {


    return (
        <div className="py-5">
            <div className="mb-5">
                <h4 className="text-center display-6 ">Products You may be interested in</h4>
                <p className="text-center ">Hand picked Quality product</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <TopCard image={TopProductOne} />
                </div>
                <div className="col-md-3">
                    <TopCard image={TopProductOne} />
                </div>
                <div className="col-md-3">
                    <TopCard image={TopProductOne} />
                </div>
                <div className="col-md-3">
                    <TopCard image={TopProductOne} />
                </div>

            </div>
        </div>
    )
}

export default Products;