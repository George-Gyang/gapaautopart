import React from "react";
import { Link } from "react-router-dom";


import "../../asset/styles.css"


const SliderBody = () => {

    return (
        <div className="block-slideshow block-slideshow--layout--full block">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-slideshow__body">
                            <div className="owl-carousel">
                                <Link className="block-slideshow__slide carousel-swiper" to="">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop">
                                        <img src="https://res.cloudinary.com/gyang/image/upload/v1677260128/gapaautoasset/Banner-1_aif1jf.png" alt=""/>
                                    </div>
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{ backgroundImage: `url('images/slides/brakepad.png')` }}></div>
                                    
                                </Link>
                                <Link className="block-slideshow__slide carousel-swiper" to="">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop">
                                    <img src="https://res.cloudinary.com/gyang/image/upload/v1677260128/gapaautoasset/Banner-2_pn055b.png" alt=""/>
                                    </div>
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{ backgroundImage: `url('images/slides/battery.png')` }}></div>
                                    
                                </Link>
                                <Link className="block-slideshow__slide carousel-swiper" to="">
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop">
                                    <img src="https://res.cloudinary.com/gyang/image/upload/v1677260129/gapaautoasset/Banner-3_zlorzn.png" alt=""/>
                                    </div>
                                    <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{ backgroundImage: `url('images/slides/car-part.png')` }}></div>
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBody;