import React, { useState } from "react";
import { Link } from "react-router-dom";


function DropdownSubMenu(props) {
    const [isShown, setIsShown] = useState(false);

    function handleMouseEnter() {
        setIsShown(true);
    }

    function handleMouseLeave() {
        setIsShown(false);
    }

    return (
        <div className="dropdown-submenu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <Link to="#"><li  className="py-2 border-bottom"> {props.myBrands.name} </li></Link>
            {isShown && (
                <ul className="dropdown-menu">
                    {props.myBrands.subModels.map((model, index) => (
                        <li className="py-2 border-bottom" key={model.index}><Link to="#">{model}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownSubMenu;