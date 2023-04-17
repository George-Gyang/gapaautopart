import React from "react";

import image1 from "../../asset/images/Electricals.png"
import image2 from "../../asset/images/Car-care-2 (1).png"
import image3 from "../../asset/images/Car-care-2.png"
import image4 from "../../asset/images/car-accessories.png"

function MoreProduct() {
    return (
        <div className=" my-3">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div><img alt="product images" src={image1} className="w-100" /> </div>
                    <p className="text-center">accessories</p>
                </div>
                <div className="col-md-3 col-6">
                    <div><img alt="product images" src={image2} className="w-100" /> </div>
                    <p className="text-center">accessories</p>
                </div>
                <div className="col-md-3 col-6">
                    <div><img alt="product images" src={image3} className="w-100" /> </div>
                    <p className="text-center">accessories</p>
                </div>
                <div className="col-md-3 col-6">
                    <div><img alt="product images" src={image4} className="w-100" /> </div>
                    <p className="text-center">accessories</p>
                </div>
            </div>
        </div>
    )
}

export default MoreProduct;