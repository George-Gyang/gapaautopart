import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeadTop";
import NavLinks from "./NavLinks";

function Navbar() {

    return (
        <div>
            <HeaderTop />
            <HeaderMiddle />
            <NavLinks/>
        </div>
    )
}

export default Navbar;