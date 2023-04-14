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

            <Link to="#">{props.myBrands.name}</Link>
            {isShown && (
                <ul className="dropdown-menu">
                    {props.myBrands.subModels.map((model, index) => (
                        <li key={model.index}><Link to="#">{model}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownSubMenu;