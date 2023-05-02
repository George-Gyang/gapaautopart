import React from "react";
import Logistic from "./logidtics";

function Shipping() {

    const items = [
        {
            id: 1,
            title: "NATIONWIDE SHIPPNG",
            desc: "Shipping To All Parts of The Country"
        },
        {
            id: 2,
            title: "SAFE SHOPPING",
            desc: "Payment 100% secure"
        },
        {
            id: 3,
            title: "ONLINE SUPPORT",
            desc: "Contact us 24 hours a day"
        }
    ]

    const ShippinOptions = items.map((item) =>(
            <Logistic key={item.id} {...item}  />
        )
    )

    return (
        <div>
            <div className="d-md-flex mt-5 justify-content-between">
                {ShippinOptions}
            </div>
        </div>
    )
}

export default Shipping;