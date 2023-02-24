import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="site__footer">
            <div className="site-footer">
                <div className="container">
                    <div className="site-footer__widgets">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="site-footer__widget footer-contacts">
                                    <h5 className="footer-contacts__title">Contact Us</h5>
                                    <div className="footer-contacts__text">
                                        <Link className="footer-link" to="#">Walk In Store: GAPA Naija (First Floor) Sunset Plaza, Ademola Adetokunbo Crescent, Wuse II, F.C.T - Abuja, Nigeria</Link>
                                    </div>
                                    <ul className="footer-contacts__contacts">
                                        {/* <li><i className="footer-contacts__icon fas fa-globe-americas"></i> 715 Fake Street, New York 10021 USA</li> */}
                                        <li>
                                            <Link to="https:www.georgegyang3@gmail"><i className="footer-contacts__icon far fa-envelope"></i> <span>georgegyang3@gmail.com</span></Link>
                                        </li>
                                        <li><i className="footer-contacts__icon fas fa-mobile-alt"></i> (800) 060-0730, (800) 060-0730</li>
                                        <li><i className="footer-contacts__icon far fa-clock"></i> Mon-Sat 10:00pm - 7:00pm</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">Information</h5>
                                    <ul className="footer-links__list">
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">About Us</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Delivery Information</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Privacy Policy</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Brands</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Contact Us</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Returns</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Site Map</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 col-lg-2">
                                <div className="site-footer__widget footer-links">
                                    <h5 className="footer-links__title">My Account</h5>
                                    <ul className="footer-links__list">
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Store Location</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Order History</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Wish List</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Newsletter</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Specials</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Gift Certificates</Link></li>
                                        <li className="footer-links__item"><Link to="" className="footer-links__link">Affiliate</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="site-footer__widget footer-newsletter">
                                    <h5 className="footer-newsletter__title">Newsletter</h5>
                                    <div className="footer-newsletter__text">
                                        Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.
                                    </div>
                                    <form action="" className="footer-newsletter__form">
                                        <label className="sr-only" for="footer-newsletter-address">Email Address</label>
                                        <input type="text" className="footer-newsletter__form-input form-control" id="footer-newsletter-address" placeholder="Email Address..." />
                                        <button className="footer-newsletter__form-button btn btn-primary">Subscribe</button>
                                    </form>
                                    <div className="footer-newsletter__text footer-newsletter__text--social">
                                        Follow us on social networks
                                    </div>
                                    {/* <!-- social-links --> */}
                                    <div className="social-links footer-newsletter__social-links social-links--shape--circle">
                                        <ul className="social-links__list">
                                            <li className="social-links__item">
                                                <Link className="social-links__link social-links__link--type--rss" to="" target="_blank">
                                                    <i className="fas fa-rss"></i>
                                                </Link>
                                            </li>
                                            <li className="social-links__item">
                                                <Link className="social-links__link social-links__link--type--youtube" to="" target="_blank">
                                                    <i className="fab fa-youtube"></i>
                                                </Link>
                                            </li>
                                            <li className="social-links__item">
                                                <Link className="social-links__link social-links__link--type--facebook" to="" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li className="social-links__item">
                                                <Link className="social-links__link social-links__link--type--twitter" to="" target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li className="social-links__item">
                                                <Link className="social-links__link social-links__link--type--instagram" to="" target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- social-links / end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="site-footer__copyright">
                            {/* <!-- copyright --> */}
                            Powered by HTML — Design by <Link to="https://geotech-ten.vercel.app/" target="_blank">GeoTech</Link>
                            {/* <!-- copyright / end --> */}
                        </div>
                        {/* <div className="site-footer__payments">
                            <img src="images/payments.png" alt="" />
                        </div> */}
                    </div>
                </div>
                <div className="totop">
                    <div className="totop__body">
                        <div className="totop__start"></div>
                        <div className="totop__container container"></div>
                        <div className="totop__end">
                            <button type="button" className="totop__button">
                                <svg width="13px" height="8px">
                                    <use xlinkHref="images/sprite.svg#arrow-rounded-up-13x8"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;