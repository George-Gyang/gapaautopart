import React from "react";

const BlockBody = ()=>{

    return(
        <div className="block block-features block-features--layout--boxed">
        <div className="container">
            <div className="block-features__list">
                <div className="block-features__item">
                    <div className="block-features__icon">
                        <svg width="48px" height="48px">
                            <use xlinkHref="images/sprite.svg#fi-free-delivery-48"></use>
                        </svg>
                    </div>
                    <div className="block-features__content">
                        <div className="block-features__title">Free Shipping</div>
                        <div className="block-features__subtitle">For orders from $50</div>
                    </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                    <div className="block-features__icon">
                        <svg width="48px" height="48px">
                            <use xlinkHref="images/sprite.svg#fi-24-hours-48"></use>
                        </svg>
                    </div>
                    <div className="block-features__content">
                        <div className="block-features__title">Support 24/7</div>
                        <div className="block-features__subtitle">Call us anytime</div>
                    </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                    <div className="block-features__icon">
                        <svg width="48px" height="48px">
                            <use xlinkHref="images/sprite.svg#fi-payment-security-48"></use>
                        </svg>
                    </div>
                    <div className="block-features__content">
                        <div className="block-features__title">100% Safety</div>
                        <div className="block-features__subtitle">Only secure payments</div>
                    </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                    <div className="block-features__icon">
                        <svg width="48px" height="48px">
                            <use xlinkHref="images/sprite.svg#fi-tag-48"></use>
                        </svg>
                    </div>
                    <div className="block-features__content">
                        <div className="block-features__title">Hot Offers</div>
                        <div className="block-features__subtitle">Discounts up to 90%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlockBody;