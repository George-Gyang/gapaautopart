import React, { useState } from "react";
import { Link } from "react-router-dom";


function DropdownSubCategory(props) {
    const [isShown, setIsShown] = useState(false);

    function handleMouseEnter() {
        setIsShown(true);
    }

    function handleMouseLeave() {
        setIsShown(false);
    }

    return (
        <div className="dropdown-submenu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="#">{props.category.name}</Link>
            {isShown && (
                <ul className="dropdown-menu">
                    {props.category.subCategory.map((category, index) => (
                        <li key={index}><Link to="#">{category}</Link></li>
                    ))}
                    {/* <li><Link to="#">Cerato</Link></li>
                    <li><Link to="#">Sportage</Link></li>
                    <li><Link to="#">Optima</Link></li> */}
                </ul>
            )}
        </div>
    );
}

export default DropdownSubCategory;