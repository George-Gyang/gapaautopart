import React from "react";
import BlockBody from "./BlockBody";
import BlockProduct from "./BlockProduct";
import Forms from "./Form";
import MoreProduct from "./MoreProduct";
import SliderBody from "./SliderBody";

const Main = ()=>{

    return(
        <div classNames="site__body">
            <SliderBody/>
            <Forms/>
            <BlockProduct/>
            <MoreProduct/>
            <BlockBody/>
        </div>

    )
}
export default Main;