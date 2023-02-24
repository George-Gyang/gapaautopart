import React from "react";
import { Link } from "react-router-dom";

function MoreProduct() {

    return (
        // <>
        //     <div className="block block-banner">
        //         <div className="container">
        //             <Link to="" className="block-banner__body">
        //                 <div className="block-banner__image block-banner__image--desktop" style={{backgroundImage: `url('images/banners/banner-1.jpg')`}}></div>
        //                 <div className="block-banner__image block-banner__image--mobile" style={{backgroundImage: `url('images/banners/banner-1-mobile.jpg')`}}></div>
        //                 <div className="block-banner__title">Hundreds <br className="block-banner__mobile-br"/> Hand Tools</div>
        //                 <div className="block-banner__text">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>
        //                 <div className="block-banner__button">
        //                     <span className="btn btn-sm btn-primary">Shop Now</span>
        //                 </div>
        //             </Link>
        //         </div>
        //     </div>

            //  .block-banner / end 
            //  .block-products 
            
            <div className="block block-products block-products--layout--large-last" data-mobile-grid-columns="2">
                <div className="container">
                    <div className="block-header">
                        <h3 className="block-header__title">Bestsellers</h3>
                        <div className="block-header__divider"></div>
                    </div>
                    <div className="block-products__body">
                        <div className="block-products__list">
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--hot">Hot</div>
                                    </div>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">11 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $1,019.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $850.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--sale">Sale</div>
                                    </div>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">7 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            <span className="product-card__new-price">$949.00</span>
                                            <span className="product-card__old-price">$1189.00</span>
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Brandix Router Power Tool 2017ERXPK</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $1,700.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Brandix Drilling Machine DM2019KW4 4kW</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">7 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $3,199.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-products__list-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/battery.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Brandix Pliers</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">4 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $24.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-products__featured">
                            <div className="block-products__featured-item">
                                <div className="product-card product-card--hidden-actions ">
                                    <button className="product-card__quickview" type="button">
                                        <svg width="16px" height="16px">
                                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                                        </svg>
                                        <span className="fake-svg-icon"></span>
                                    </button>
                                    <div className="product-card__badges-list">
                                        <div className="product-card__badge product-card__badge--new">New</div>
                                    </div>
                                    <div className="product-card__image product-image">
                                        <Link to="product.html" className="product-image__body">
                                            <img className="product-image__img" src="images/products/car-part.png" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="product-card__info">
                                        <div className="product-card__name">
                                            <Link to="product.html">Electric Planer Brandix KL370090G 300 Watts</Link>
                                        </div>
                                        <div className="product-card__rating">
                                            <div className="product-card__rating-stars">
                                                <div className="rating">
                                                    <div className="rating__body">
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star rating__star--active" width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge rating__star--active">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                        <svg className="rating__star " width="13px" height="12px">
                                                            <g className="rating__fill">
                                                                <use xlinkHref="images/sprite.svg#star-normal"></use>
                                                            </g>
                                                            <g className="rating__stroke">
                                                                <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                                            </g>
                                                        </svg>
                                                        <div className="rating__star rating__star--only-edge ">
                                                            <div className="rating__fill">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                            <div className="rating__stroke">
                                                                <div className="fake-svg-icon"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-card__rating-legend">9 Reviews</div>
                                        </div>
                                        <ul className="product-card__features-list">
                                            <li>Speed: 750 RPM</li>
                                            <li>Power Source: Cordless-Electric</li>
                                            <li>Battery Cell Type: Lithium</li>
                                            <li>Voltage: 20 Volts</li>
                                            <li>Battery Capacity: 2 Ah</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__actions">
                                        <div className="product-card__availability">
                                            Availability: <span className="text-success">In Stock</span>
                                        </div>
                                        <div className="product-card__prices">
                                            $749.00
                                        </div>
                                        <div className="product-card__buttons">
                                            <button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button>
                                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                                            </button>
                                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                                                <svg width="16px" height="16px">
                                                    <use xlinkHref="images/sprite.svg#compare-16"></use>
                                                </svg>
                                                <span className="fake-svg-icon fake-svg-icon--compare-16"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </>
    )
}

export default MoreProduct;