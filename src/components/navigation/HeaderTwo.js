import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTwo = () => {

    return (
        <header className="site__header d-lg-block d-none">
            <div className="site-header">
                {/* .topbar */}
                <div className="site-header__topbar topbar">
                    <div className="topbar__container container">
                        <div className="topbar__row">
                            <div className="topbar__item topbar__item--link">
                                <NavLink className="topbar-link" to="about-us.html">About Us</NavLink>
                            </div>
                            <div className="topbar__item topbar__item--link">
                                <NavLink className="topbar-link" to="contact-us.html">Contacts</NavLink>
                            </div>
                            <div className="topbar__item topbar__item--link">
                                <NavLink className="topbar-link" to="">Store Location</NavLink>
                            </div>
                            <div className="topbar__item topbar__item--link">
                                <NavLink className="topbar-link" to="track-order.html">Track Order</NavLink>
                            </div>
                            <div className="topbar__item topbar__item--link">
                                <NavLink className="topbar-link" to="blog-classic.html">Blog</NavLink>
                            </div>
                            <div className="topbar__spring"></div>
                            <div className="topbar__item">
                                <div className="topbar-dropdown">
                                    <button className="topbar-dropdown__btn" type="button">
                                        My Account
                                        <svg width="7px" height="5px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5"></use>
                                        </svg>
                                    </button>
                                    <div className="topbar-dropdown__body">
                                        {/* <!-- .menu --> */}
                                        <div className="menu menu--layout--topbar ">
                                            <div className="menu__submenus-container"></div>
                                            <ul className="menu__list">
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-dashboard.html">
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-profile.html">
                                                        Edit Profile
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-orders.html">
                                                        Order History
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-addresses.html">
                                                        Addresses
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-password.html">
                                                        Password
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="account-login.html">
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* .menu / end */}
                                    </div>
                                </div>
                            </div>
                            <div className="topbar__item">
                                <div className="topbar-dropdown">
                                    <button className="topbar-dropdown__btn" type="button">
                                        Currency: <span className="topbar__item-value">USD</span>
                                        <svg width="7px" height="5px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5"></use>
                                        </svg>
                                    </button>
                                    <div className="topbar-dropdown__body">
                                        {/* .menu */}
                                        <div className="menu menu--layout--topbar ">
                                            <div className="menu__submenus-container"></div>
                                            <ul className="menu__list">
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        € Euro
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        £ Pound Sterling
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        $ US Dollar
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        ₽ Russian Ruble
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* .menu / end */}
                                    </div>
                                </div>
                            </div>
                            <div className="topbar__item">
                                <div className="topbar-dropdown">
                                    <button className="topbar-dropdown__btn" type="button">
                                        Language: <span className="topbar__item-value">EN</span>
                                        <svg width="7px" height="5px">
                                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5"></use>
                                        </svg>
                                    </button>
                                    <div className="topbar-dropdown__body">

                                        {/* .menu */}
                                        <div className="menu menu--layout--topbar  menu--with-icons ">
                                            <div className="menu__submenus-container"></div>
                                            <ul className="menu__list">
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        <div className="menu__item-icon"><img srcset="images/languages/language-1.png 1x, images/languages/language-1@2x.png 2x" src="images/languages/language-1.png" alt=""/></div>
                                                        English
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        <div className="menu__item-icon"><img srcset="images/languages/language-2.png 1x, images/languages/language-2@2x.png 2x" src="images/languages/language-2.png" alt=""/></div>
                                                        French
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        <div className="menu__item-icon"><img srcset="images/languages/language-3.png 1x, images/languages/language-3@2x.png 2x" src="images/languages/language-3.png" alt=""/></div>
                                                        German
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        <div className="menu__item-icon"><img srcset="images/languages/language-4.png 1x, images/languages/language-4@2x.png 2x" src="images/languages/language-4.png" alt=""/></div>
                                                        Russian
                                                    </NavLink>
                                                </li>
                                                <li className="menu__item">
                                                    {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                    <div className="menu__item-submenu-offset"></div>
                                                    <NavLink className="menu__item-link" to="">
                                                        <div className="menu__item-icon"><img srcset="images/languages/language-5.png 1x, images/languages/language-5@2x.png 2x" src="images/languages/language-5.png" alt=""/></div>
                                                        Italian
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* .menu / end */}
 class
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* .topbar /  */}

                <div className="site-header__nav-panel">
                    {/* data-sticky-mode - one of [pullToShow, alwaysOn  */}

                    <div className="nav-panel nav-panel--sticky" style={{height: "100px"}} data-sticky-mode="pullToShow">
                        <div className="nav-panel__container container">
                            <div className="nav-panel__row">
                                <div className="nav-panel__logo">
                                    <NavLink to="index.html">
                                        {/*   */}

                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="20px">
                                            <path d="M118.5,20h-1.1c-0.6,0-1.2-0.4-1.4-1l-1.5-4h-6.1l-1.5,4c-0.2,0.6-0.8,1-1.4,1h-1.1c-1,0-1.8-1-1.4-2l1.1-3
                                 l1.5-4l3.6-10c0.2-0.6,0.8-1,1.4-1h1.6c0.6,0,1.2,0.4,1.4,1l3.6,10l1.5,4l1.1,3C120.3,19,119.5,20,118.5,20z M111.5,6.6l-1.6,4.4
                                 h3.2L111.5,6.6z M99.5,20h-1.4c-0.4,0-0.7-0.2-0.9-0.5L94,14l-2,3.5v1c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17
                                 C88,0.7,88.7,0,89.5,0h1C91.3,0,92,0.7,92,1.5v8L94,6l3.2-5.5C97.4,0.2,97.7,0,98.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3L96.3,10l4.5,7.8
                                 C101.4,18.8,100.7,20,99.5,20z M80.3,11.8L80,12.3v6.2c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-6.2l-0.3-0.5l-5.5-9.5
                                 c-0.6-1,0.2-2.3,1.3-2.3h1.4c0.4,0,0.7,0.2,0.9,0.5L76,4.3l2,3.5l2-3.5l2.2-3.8C82.4,0.2,82.7,0,83.1,0h1.4c1.2,0,1.9,1.3,1.3,2.3
                                 L80.3,11.8z M60,20c-5.5,0-10-4.5-10-10S54.5,0,60,0s10,4.5,10,10S65.5,20,60,20z M60,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6
                                 S63.3,4,60,4z M47.8,17.8c0.6,1-0.2,2.3-1.3,2.3h-2L41,14h-4v4.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5v-17
                                 C33,0.7,33.7,0,34.5,0H41c0.3,0,0.7,0,1,0.1c3.4,0.5,6,3.4,6,6.9c0,2.4-1.2,4.5-3.1,5.8L47.8,17.8z M42,4.2C41.7,4.1,41.3,4,41,4h-3
                                 c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h3c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5C43.6,8.8,44,7.9,44,7C44,5.7,43.2,4.6,42,4.2z
                                  M29.5,4H25v14.5c0,0.8-0.7,1.5-1.5,1.5h-1c-0.8,0-1.5-0.7-1.5-1.5V4h-4.5C15.7,4,15,3.3,15,2.5v-1C15,0.7,15.7,0,16.5,0h13
                                 C30.3,0,31,0.7,31,1.5v1C31,3.3,30.3,4,29.5,4z M6.5,20c-2.8,0-5.5-1.7-6.4-4c-0.4-1,0.3-2,1.3-2h1c0.5,0,0.9,0.3,1.2,0.7
                                 c0.2,0.3,0.4,0.6,0.8,0.8C4.9,15.8,5.8,16,6.5,16c1.5,0,2.8-0.9,2.8-2c0-0.7-0.5-1.3-1.2-1.6C7.4,12,7,11,7.4,10.3l0.4-0.9
                                 c0.4-0.7,1.2-1,1.8-0.6c0.6,0.3,1.2,0.7,1.6,1.2c1,1.1,1.7,2.5,1.7,4C13,17.3,10.1,20,6.5,20z M11.6,6h-1c-0.5,0-0.9-0.3-1.2-0.7
                                 C9.2,4.9,8.9,4.7,8.6,4.5C8.1,4.2,7.2,4,6.5,4C5,4,3.7,4.9,3.7,6c0,0.7,0.5,1.3,1.2,1.6C5.6,8,6,9,5.6,9.7l-0.4,0.9
                                 c-0.4,0.7-1.2,1-1.8,0.6c-0.6-0.3-1.2-0.7-1.6-1.2C0.6,8.9,0,7.5,0,6c0-3.3,2.9-6,6.5-6c2.8,0,5.5,1.7,6.4,4C13.3,4.9,12.6,6,11.6,6
                                 z"></path>
                                        </svg> */}
                                        {/* logo / end  */}
                                        <img src="images/logos/gapalogo.png" style={{height: "80px"}} alt=""/>

                                    </NavLink>
                                </div>
                                {/* .nav-links  */}

                                <div className="nav-panel__nav-links nav-links">
                                    <ul className="nav-links__list">
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="index.html">
                                                <div className="nav-links__item-body">
                                                    Home
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div className="nav-links__submenu nav-links__submenu--type--menu">
                                                {/* .menu  */}

                                                <div className="menu menu--layout--classic ">
                                                    <div className="menu__submenus-container"></div>
                                                    <ul className="menu__list">
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="index.html">
                                                                {/* Home 1 Slideshow */}

                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="index-2.html">
                                                                Home 2 Slideshow
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="index-3.html">
                                                                Home 1 Finder
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="index-4.html">
                                                                Home 2 Finder
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="offcanvas-cart.html">
                                                                Offcanvas Cart
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .menu / end --> */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="">
                                                <div className="nav-links__item-body">
                                                    Megamenu
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div className="nav-links__submenu nav-links__submenu--type--megamenu nav-links__submenu--size--nl">

                                                {/* <!-- .megamenu --> */}
                                                <div className="megamenu ">
                                                    <div className="megamenu__body">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <ul className="megamenu__links megamenu__links--level--0">
                                                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                                                        <NavLink to="">Power Tools</NavLink>
                                                                        <ul className="megamenu__links megamenu__links--level--1">
                                                                            <li className="megamenu__item"><NavLink to="">Engravers</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Wrenches</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Pneumatic Tools</NavLink></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                                                        <NavLink to="">Machine Tools</NavLink>
                                                                        <ul className="megamenu__links megamenu__links--level--1">
                                                                            <li className="megamenu__item"><NavLink to="">Thread Cutting</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Chip Blowers</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Sharpening Machines</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Pipe Cutters</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Slotting machines</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Lathes</NavLink></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-6">
                                                                <ul className="megamenu__links megamenu__links--level--0">
                                                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                                                        <NavLink to="">Hand Tools</NavLink>
                                                                        <ul className="megamenu__links megamenu__links--level--1">
                                                                            <li className="megamenu__item"><NavLink to="">Screwdrivers</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Handsaws</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Knives</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Axes</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Multitools</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Paint Tools</NavLink></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="megamenu__item  megamenu__item--with-submenu ">
                                                                        <NavLink to="">Garden Equipment</NavLink>
                                                                        <ul className="megamenu__links megamenu__links--level--1">
                                                                            <li className="megamenu__item"><NavLink to="">Motor Pumps</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Chainsaws</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Electric Saws</NavLink></li>
                                                                            <li className="megamenu__item"><NavLink to="">Brush Cutters</NavLink></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- .megamenu / end -->
                                                 */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="shop-grid-3-columns-sidebar.html">
                                                <div className="nav-links__item-body">
                                                    Shop
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div className="nav-links__submenu nav-links__submenu--type--menu">
                                                {/*  */}
                                                {/* <!-- .menu --> */}
                                                <div className="menu menu--layout--classic ">
                                                    <div className="menu__submenus-container"></div>
                                                    <ul className="menu__list">
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="shop-grid-3-columns-sidebar.html">
                                                                Shop Grid
                                                                <svg className="menu__item-arrow" width="6px" height="9px">
                                                                    <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                                                </svg>
                                                            </NavLink>
                                                            <div className="menu__submenu">
                                                                {/* <!-- .menu --> */}
                                                                <div className="menu menu--layout--classic ">
                                                                    <div className="menu__submenus-container"></div>
                                                                    <ul className="menu__list">
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="shop-grid-3-columns-sidebar.html">
                                                                                3 Columns Sidebar
                                                                            </NavLink>
                                                                        </li>
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="shop-grid-4-columns-full.html">
                                                                                4 Columns Full
                                                                            </NavLink>
                                                                        </li>
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="shop-grid-5-columns-full.html">
                                                                                5 Columns Full
                                                                            </NavLink>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* <!-- .menu / end --> */}
                                                            </div>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="shop-list.html">
                                                                Shop List
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="shop-right-sidebar.html">
                                                                Shop Right Sidebar
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="product.html">
                                                                Product
                                                                <svg className="menu__item-arrow" width="6px" height="9px">
                                                                    <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>
                                                                </svg>
                                                            </NavLink>
                                                            <div className="menu__submenu">
                                                                {/* <!-- .menu --> */}
                                                                <div className="menu menu--layout--classic ">
                                                                    <div className="menu__submenus-container"></div>
                                                                    <ul className="menu__list">
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="product.html">
                                                                                Product
                                                                            </NavLink>
                                                                        </li>
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="product-alt.html">
                                                                                Product Alt
                                                                            </NavLink>
                                                                        </li>
                                                                        <li className="menu__item">
                                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                                            <div className="menu__item-submenu-offset"></div>
                                                                            <NavLink className="menu__item-link" to="product-sidebar.html">
                                                                                Product Sidebar
                                                                            </NavLink>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/* <!-- .menu / end --> */}
                                                            </div>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="cart.html">
                                                                Cart
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="cart-empty.html">
                                                                Cart Empty
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="checkout.html">
                                                                Checkout
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="order-success.html">
                                                                Order Success
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="wishlist.html">
                                                                Wishlist
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="compare.html">
                                                                Compare
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="track-order.html">
                                                                Track Order
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .menu / end --> */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="account-login.html">
                                                <div className="nav-links__item-body">
                                                    Account
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div className="nav-links__submenu nav-links__submenu--type--menu">
                                                {/* <!-- .menu --> */}
                                                <div className="menu menu--layout--classic ">
                                                    <div className="menu__submenus-container"></div>
                                                    <ul className="menu__list">
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-login.html">
                                                                Login
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-dashboard.html">
                                                                Dashboard
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-profile.html">
                                                                Edit Profile
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-orders.html">
                                                                Order History
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-order-details.html">
                                                                Order Details
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-addresses.html">
                                                                Address Book
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-edit-address.html">
                                                                Edit Address
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="account-password.html">
                                                                Change Password
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .menu / end --> */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="blog-classic.html">
                                                <div className="nav-links__item-body">
                                                    Blog
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div className="nav-links__submenu nav-links__submenu--type--menu">
                                                {/* <!-- .menu --> */}
                                                <div className="menu menu--layout--classic ">
                                                    <div className="menu__submenus-container"></div>
                                                    <ul className="menu__list">
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="blog-classic.html">
                                                                Blog Classic
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="blog-grid.html">
                                                                Blog Grid
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="blog-list.html">
                                                                Blog List
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="blog-left-sidebar.html">
                                                                Blog Left Sidebar
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="post.html">
                                                                Post Page
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="post-without-sidebar.html">
                                                                Post Without Sidebar
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .menu / end --> */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item  nav-links__item--has-submenu ">
                                            <NavLink className="nav-links__item-link" to="">
                                                <div className="nav-links__item-body">
                                                    Pages
                                                    <svg className="nav-links__item-arrow" width="9px" height="6px">
                                                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6"></use>
                                                    </svg>
                                                </div>
                                            </NavLink>
                                            <div class="nav-links__submenu nav-links__submenu--type--menu">
                                                {/* <!-- .menu --> */}
                                                <div className="menu menu--layout--classic ">
                                                    <div className="menu__submenus-container"></div>
                                                    <ul className="menu__list">
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="about-us.html">
                                                                About Us
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="contact-us.html">
                                                                Contact Us
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="contact-us-alt.html">
                                                                Contact Us Alt
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="404.html">
                                                                404
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="terms-and-conditions.html">
                                                                Terms And Conditions
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="faq.html">
                                                                FAQ
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="components.html">
                                                                Components
                                                            </NavLink>
                                                        </li>
                                                        <li className="menu__item">
                                                            {/* <!-- This is a synthetic element that allows to adjust the vertical offset of the submenu using CSS. --> */}
                                                            <div className="menu__item-submenu-offset"></div>
                                                            <NavLink className="menu__item-link" to="typography.html">
                                                                Typography
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .menu / end --> */}
                                            </div>
                                        </li>
                                        <li className="nav-links__item ">
                                            <NavLink className="nav-links__item-link" to="https://themeforest.net/item/stroyka-tools-store-html-template/23326943">
                                                <div className="nav-links__item-body">
                                                    Buy Theme
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- .nav-links / end --> */}
                                <div className="nav-panel__indicators">
                                    <div className="indicator indicator--trigger--click">
                                        <button type="button" className="indicator__button">
                                            <span className="indicator__area">
                                                <svg className="indicator__icon" width="20px" height="20px">
                                                    <use xlinkHref="images/sprite.svg#search-20"></use>
                                                </svg>
                                                <svg className="indicator__icon indicator__icon--open" width="20px" height="20px">
                                                    <use xlinkHref="images/sprite.svg#cross-20"></use>
                                                </svg>
                                            </span>
                                        </button>
                                        <div className="indicator__dropdown">
                                            <div className="search search--location--indicator ">
                                                <div className="search__body">
                                                    <form className="search__form" action="">
                                                        <input className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autocomplete="off" />
                                                        <button className="search__button search__button--type--submit" type="submit">
                                                            <svg width="20px" height="20px">
                                                                <use xlinkHref="images/sprite.svg#search-20"></use>
                                                            </svg>
                                                        </button>
                                                        <div className="search__border"></div>
                                                    </form>
                                                    <div className="search__suggestions suggestions suggestions--location--indicator"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="indicator">
                                        <NavLink to="wishlist.html" className="indicator__button">
                                            <span className="indicator__area">
                                                <svg width="20px" height="20px">
                                                    <use xlinkHref="images/sprite.svg#heart-20"></use>
                                                </svg>
                                                <span className="indicator__value">0</span>
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div className="indicator indicator--trigger--click">
                                        <NavLink to="cart.html" className="indicator__button">
                                            <span className="indicator__area">
                                                <svg width="20px" height="20px">
                                                    <use xlinkHref="images/sprite.svg#cart-20"></use>
                                                </svg>
                                                <span className="indicator__value">3</span>
                                            </span>
                                        </NavLink>
                                        <div className="indicator__dropdown">
                                            {/* <!-- .dropcart --> */}
                                            <div className="dropcart dropcart--style--dropdown">
                                                <div className="dropcart__body">
                                                    <div className="dropcart__products-list">
                                                        <div className="dropcart__product">
                                                            <div className="product-image dropcart__product-image">
                                                                <NavLink to="product.html" className="product-image__body">
                                                                    <img className="product-image__img" src="images/products/product-1.jpg" alt="" />
                                                                </NavLink>
                                                            </div>
                                                            <div className="dropcart__product-info">
                                                                <div className="dropcart__product-name"><NavLink to="product.html">Electric Planer Brandix KL370090G 300 Watts</NavLink></div>
                                                                <ul className="dropcart__product-options">
                                                                    <li>Color: Yellow</li>
                                                                    <li>Material: Aluminium</li>
                                                                </ul>
                                                                <div className="dropcart__product-meta">
                                                                    <span className="dropcart__product-quantity">2</span> ×
                                                                    <span className="dropcart__product-price">$699.00</span>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                                                <svg width="10px" height="10px">
                                                                    <use xlinkHref="images/sprite.svg#cross-10"></use>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="dropcart__product">
                                                            <div className="product-image dropcart__product-image">
                                                                <NavLink href="product.html" className="product-image__body">
                                                                    <img className="product-image__img" src="images/products/product-2.jpg" alt="" />
                                                                </NavLink>
                                                            </div>
                                                            <div className="dropcart__product-info">
                                                                <div className="dropcart__product-name"><NavLink href="product.html">Undefined Tool IRadix DPS3000SY 2700 watts</NavLink></div>
                                                                <div className="dropcart__product-meta">
                                                                    <span className="dropcart__product-quantity">1</span> ×
                                                                    <span className="dropcart__product-price">$849.00</span>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                                                <svg width="10px" height="10px">
                                                                    <use xlinkHref="images/sprite.svg#cross-10"></use>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="dropcart__product">
                                                            <div className="product-image dropcart__product-image">
                                                                <NavLink to="product.html" className="product-image__body">
                                                                    <img className="product-image__img" src="images/products/product-5.jpg" alt="" />
                                                                </NavLink>
                                                            </div>
                                                            <div className="dropcart__product-info">
                                                                <div className="dropcart__product-name"><NavLink to="product.html">Brandix Router Power Tool 2017ERXPK</NavLink></div>
                                                                <ul className="dropcart__product-options">
                                                                    <li>Color: True Red</li>
                                                                </ul>
                                                                <div className="dropcart__product-meta">
                                                                    <span className="dropcart__product-quantity">3</span> ×
                                                                    <span className="dropcart__product-price">$1,210.00</span>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                                                                <svg width="10px" height="10px">
                                                                    <use xlinkHref="images/sprite.svg#cross-10"></use>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="dropcart__totals">
                                                        <table>
                                                            <tr>
                                                                <th>Subtotal</th>
                                                                <td>$5,877.00</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Shipping</th>
                                                                <td>$25.00</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Tax</th>
                                                                <td>$0.00</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Total</th>
                                                                <td>$5,902.00</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <div className="dropcart__buttons">
                                                        <NavLink className="btn btn-secondary" to="cart.html">View Cart</NavLink>
                                                        <NavLink className="btn btn-primary" to="checkout.html">Checkout</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .dropcart / end --> */}
                                        </div>
                                    </div>
                                    <div className="indicator indicator--trigger--click">
                                        <NavLink to="account-login.html" className="indicator__button">
                                            <span className="indicator__area">
                                                <svg width="20px" height="20px">
                                                    <use xlinkHref="images/sprite.svg#person-20"></use>
                                                </svg>
                                            </span>
                                        </NavLink>
                                        <div className="indicator__dropdown">
                                            <div className="account-menu">
                                                <form className="account-menu__form">
                                                    <div className="account-menu__form-title">Log In to Your Account</div>
                                                    <div className="form-group">
                                                        <label for="header-signin-email" className="sr-only">Email address</label>
                                                        <input id="header-signin-email" type="email" className="form-control form-control-sm" placeholder="Email address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="header-signin-password" className="sr-only">Password</label>
                                                        <div className="account-menu__form-forgot">
                                                            <input id="header-signin-password" type="password" className="form-control form-control-sm" placeholder="Password" />
                                                            <NavLink to="" className="account-menu__form-forgot-link">Forgot?</NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="form-group account-menu__form-button">
                                                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                                                    </div>
                                                    <div className="account-menu__form-link"><NavLink to="account-login.html">Create An Account</NavLink></div>
                                                </form>
                                                <div className="account-menu__divider"></div>
                                                <NavLink to="account-dashboard.html" className="account-menu__user">
                                                    <div className="account-menu__user-avatar">
                                                        <img src="images/avatars/avatar-3.jpg" alt="" />
                                                    </div>
                                                    <div className="account-menu__user-info">
                                                        <div className="account-menu__user-name">Helena Garcia</div>
                                                        <div className="account-menu__user-email">stroyka@example.com</div>
                                                    </div>
                                                </NavLink>
                                                <div className="account-menu__divider"></div>
                                                <ul className="account-menu__links">
                                                    <li><NavLink to="account-profile.html">Edit Profile</NavLink></li>
                                                    <li><NavLink to="account-orders.html">Order History</NavLink></li>
                                                    <li><NavLink to="account-addresses.html">Addresses</NavLink></li>
                                                    <li><NavLink to="account-password.html">Password</NavLink></li>
                                                </ul>
                                                <div className="account-menu__divider"></div>
                                                <ul className="account-menu__links">
                                                    <li><NavLink to="account-login.html">Logout</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderTwo;