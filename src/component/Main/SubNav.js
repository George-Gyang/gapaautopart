import React from "react";
import { NavLink } from "react-router-dom";

function SubNav(){

    return(
        <div>
             <div className="text-secondary p-2">
              <p>My Account</p>
              <NavLink className="nav-link" to="">
                My Account
              </NavLink>
              <NavLink className="nav-link" to="">
                Wish list
              </NavLink>
              <NavLink className="nav-link" to="">
                Order history
              </NavLink>
            </div>
        </div>
    )
}

export default SubNav;