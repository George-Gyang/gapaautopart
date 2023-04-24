import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeadTop";
import NavLinks from "./NavLinks";

function Header() {

    return (
        <div className="main-nav">
            <HeaderTop />
            <HeaderMiddle />
            <NavLinks/>
        </div>
    )
}

export default Header;