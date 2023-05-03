import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUser } from "react-icons/fa"
import { Dropdown } from "react-bootstrap";



import { Link } from "react-router-dom";
import "../../asset/css/style.css"





function DropdownButton() {
    return (
        <Dropdown>
            <Dropdown.Toggle className="text-light bg-dark border-0" id="dropdown-basic">
                My Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/account">Account</Dropdown.Item>
                <Dropdown.Item href="login">Login</Dropdown.Item>
                <Dropdown.Item href="register">Register</Dropdown.Item>
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
                        <div className="d-none d-md-flex">
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
                        <div className="text-light d-md-flex">
                            <div className="d-flex align-items-center pe-5">
                                <p className="mb-0 mx-5">Welcome Mr Nelson</p>
                            </div>
                            <div className="d-flex ms-5 ms-md-auto align-items-center">
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