import React from "react";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import brand1 from "../../asset/images/brands/kia.png"
import brand2 from "../../asset/images/brands/honda.png"
import brand3 from "../../asset/images/brands/benz.png"
import brand4 from "../../asset/images/brands/bmw.png"
import brand5 from "../../asset/images/brands/lexus.png"
import brand6 from "../../asset/images/brands/toyota.png"
import brand7 from "../../asset/images/brands/kia.png"
import { Link } from "react-router-dom";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const imgs = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand2, brand6, brand5]

const settings = {
    autoplay: true,
    lazyload: true,
    items: 2,
    // gutter: 200,
    // edgePadding: 20,
    slideBy: 1,
    controls: false,
    nav: false,
    // mouseDrag: true,
    autoplayButtonOutput: false,
    responsive: {
        768: {
            items: 6
        }
    }
};



const Brands = () => {
    // const loadingImage = "https://picsum.photos/400/200?blur=10";
    // onGoTo = dir => this.ts.slider.goTo(dir)


    return (
        <div className="my-5 position-relative">
            <TinySlider settings={settings}>
                {imgs.map((el, index) => (
                    <div key={index} style={{ position: "relative", padding: "2rem" }}>
                        <Link to="">
                            <img
                                className={`tns-lazy-img`}
                                src={el}
                                data-src={el}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </Link>
                    </div>
                ))}
            </TinySlider>

            {/* <div className="position-absolute top-50" id="controls">
                <button type="button" className=" " onClick={() => this.onGoTo('prev')}> <MdArrowBackIos /></button>
                <button type="button" className=" " onClick={() => this.onGoTo('next')}> <MdArrowForwardIos /></button>
            </div> */}


            {/* <div className="brands-slider">
                <TinySlider settings={settings}>
                    {imgs.map((el, index) => (
                        <div key={index} style={{ position: "relative" }}>
                            <img
                                className={`tns-lazy-img`}
                                src={el}
                                data-src={el}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                    ))}
                </TinySlider>
                <div className="position-absolute top-50" id="controls">
                    <button type="button" className="position-relative border-0 left-arrow prev" onClick={() => this.onGoTo('prev')}> <MdArrowBackIos /></button>
                    <button type="button" className="position-relative border-0 right-arrow next" onClick={() => this.onGoTo('next')}> <MdArrowForwardIos /></button>
                </div>
            </div> */}
        </div>
    )
}

export default Brands;