import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUser } from "react-icons/fa"
import { Dropdown } from "react-bootstrap";



import { Link } from "react-router-dom";
import "../../asset/style.css"





function DropdownButton() {
    return (
        <Dropdown>
            <Dropdown.Toggle className="text-light border-0" variant="black" id="dropdown-basic">
                My Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

// export default BasicExample;

const HeaderTop = () => {

    return (
        <div className="header-top">
            <div className="container py-2">
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <Link className="text-white mx-1" to="">
                                <span className="border rounded p-1 "> <FaFacebookF /> </span>
                            </Link>
                            <Link className="text-white mx-1" to="">
                                <span className="border rounded p-1 "> <FaTwitter /> </span>
                            </Link>
                            <Link className="text-white mx-1" to="">
                                <span className="border rounded p-1 "> <FaInstagram /> </span>
                            </Link>
                            <Link className="text-white mx-1" to="">
                                <span className="border rounded p-1 "> <FaLinkedinIn /> </span>
                            </Link>
                        </div>
                        <div className="text-light d-flex">
                            <div className="d-flex align-items-center pe-5">
                                <p className="mb-0 mx-5">Welcome Mr Nelson</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <Link to="">
                                    <span className="orange-text"><FaUser /> </span>
                                </Link>
                                <DropdownButton />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default HeaderTop;