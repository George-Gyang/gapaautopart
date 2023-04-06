import React from "react";
import { Link } from "react-router-dom";



function MobileToggle() {

    return (
        <>
            <div id="quickview-modal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content"></div>
                </div>
            </div>
            {/* <!-- quickview-modal / end --> */}
            {/* <!-- mobilemenu --> */}
            <div className="mobilemenu">
                <div className="mobilemenu__backdrop"></div>
                <div className="mobilemenu__body">
                    <div className="mobilemenu__header">
                        <div className="mobilemenu__title">Menu</div>
                        <button type="button" className="mobilemenu__close">
                            <svg width="20px" height="20px">
                                <use xlinkHref="images/sprite.svg#cross-20"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="mobilemenu__content">
                        <ul className="mobile-links mobile-links--level--0" data-collapse data-collapse-opened-class="mobile-links__item--open">
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="index.html" className="mobile-links__item-link">Home</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="index.html" className="mobile-links__item-link">Home 1</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="index-2.html" className="mobile-links__item-link">Home 2</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="index-3.html" className="mobile-links__item-link">Home 1 Finder</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="index-4.html" className="mobile-links__item-link">Home 2 Finder</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="offcanvas-cart.html" className="mobile-links__item-link">Offcanvas Cart</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="" className="mobile-links__item-link">Categories</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">Power Tools</Link>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Engravers</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Wrenches</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Wall Chaser</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Pneumatic Tools</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">Machine Tools</Link>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Thread Cutting</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Chip Blowers</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Sharpening Machines</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Pipe Cutters</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Slotting machines</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="" className="mobile-links__item-link">Lathes</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop Grid</Link>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">3 Columns Sidebar</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="shop-grid-4-columns-full.html" className="mobile-links__item-link">4 Columns Full</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="shop-grid-5-columns-full.html" className="mobile-links__item-link">5 Columns Full</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="shop-list.html" className="mobile-links__item-link">Shop List</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="shop-right-sidebar.html" className="mobile-links__item-link">Shop Right Sidebar</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="product.html" className="mobile-links__item-link">Product</Link>
                                                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                                    <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="mobile-links__item-sub-links" data-collapse-content>
                                                <ul className="mobile-links mobile-links--level--2">
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="product.html" className="mobile-links__item-link">Product</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="product-alt.html" className="mobile-links__item-link">Product Alt</Link>
                                                        </div>
                                                    </li>
                                                    <li className="mobile-links__item" data-collapse-item>
                                                        <div className="mobile-links__item-title">
                                                            <Link to="product-sidebar.html" className="mobile-links__item-link">Product Sidebar</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="cart.html" className="mobile-links__item-link">Cart</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="cart-empty.html" className="mobile-links__item-link">Cart Empty</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="checkout.html" className="mobile-links__item-link">Checkout</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="order-success.html" className="mobile-links__item-link">Order Success</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="wishlist.html" className="mobile-links__item-link">Wishlist</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="compare.html" className="mobile-links__item-link">Compare</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="track-order.html" className="mobile-links__item-link">Track Order</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="account-login.html" className="mobile-links__item-link">Account</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-login.html" className="mobile-links__item-link">Login</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-dashboard.html" className="mobile-links__item-link">Dashboard</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-profile.html" className="mobile-links__item-link">Edit Profile</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-orders.html" className="mobile-links__item-link">Order History</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-order-details.html" className="mobile-links__item-link">Order Details</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-addresses.html" className="mobile-links__item-link">Address Book</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-edit-address.html" className="mobile-links__item-link">Edit Address</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="account-password.html" className="mobile-links__item-link">Change Password</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="blog-classic.html" className="mobile-links__item-link">Blog</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="blog-classic.html" className="mobile-links__item-link">Blog Classic</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="blog-grid.html" className="mobile-links__item-link">Blog Grid</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="blog-list.html" className="mobile-links__item-link">Blog List</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="blog-left-sidebar.html" className="mobile-links__item-link">Blog Left Sidebar</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="post.html" className="mobile-links__item-link">Post Page</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="post-without-sidebar.html" className="mobile-links__item-link">Post Without Sidebar</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link to="" className="mobile-links__item-link">Pages</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="about-us.html" className="mobile-links__item-link">About Us</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="contact-us.html" className="mobile-links__item-link">Contact Us</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="contact-us-alt.html" className="mobile-links__item-link">Contact Us Alt</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="404.html" className="mobile-links__item-link">404</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="terms-and-conditions.html" className="mobile-links__item-link">Terms And Conditions</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="faq.html" className="mobile-links__item-link">FAQ</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="components.html" className="mobile-links__item-link">Components</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="typography.html" className="mobile-links__item-link">Typography</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link data-collapse-trigger className="mobile-links__item-link">Currency</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">€ Euro</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">£ Pound Sterling</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">$ US Dollar</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">₽ Russian Ruble</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile-links__item" data-collapse-item>
                                <div className="mobile-links__item-title">
                                    <Link data-collapse-trigger className="mobile-links__item-link">Language</Link>
                                    <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                                        <svg className="mobile-links__item-arrow" width="12px" height="7px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mobile-links__item-sub-links" data-collapse-content>
                                    <ul className="mobile-links mobile-links--level--1">
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">English</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">French</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">German</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">Russian</Link>
                                            </div>
                                        </li>
                                        <li className="mobile-links__item" data-collapse-item>
                                            <div className="mobile-links__item-title">
                                                <Link to="" className="mobile-links__item-link">Italian</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- mobilemenu / end --> */}
            {/* <!-- photoswipe --> */}
            <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="pswp__bg"></div>
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter"></div>
                            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            {/* <!--<button className="pswp__button pswp__button&#45;&#45;share" title="Share"></button>--> */}
                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>
                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileToggle;