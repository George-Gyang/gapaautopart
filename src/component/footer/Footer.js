import React from "react";
import { FaArrowRight, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail, IconName } from "react-icons/ai";

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from "react-router-dom";

function Footer() {

    function FooterInput() {
        return (
            <>

                <InputGroup size="" className="mb-3">
                    <Form.Control
                        placeholder="Your Email"
                        aria-label="What part do you want today? Part Number or Name"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="purple-bg text-light" variant="outline-seconary" id="button-addon2">
                        <FaArrowRight className="" />
                    </Button>
                </InputGroup>
            </>
        );
    }

    let year = new Date();
   const currentYear = year.getFullYear();




    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="text-center pt-3 text-lg-start bg-black" style={{ color: "#bbb" }}>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-white fs-5 mb-4">
                                    Contact US
                                </h6>
                                <p>
                                    <Link className="nav-link" to="">
                                        Walk In Store: GAPA Naija (First Floor) Sunset Plaza, Ademola Adetokunbo Crescent, Wuse II, F.C.T - Abuja, Nigeria
                                    </Link>
                                </p>
                                <p>
                                    <Link className="nav-link" to="tel:+2347088885242">
                                        <FaPhoneAlt /> Phone: +234 708 888 5242
                                    </Link>
                                </p>
                                <p>
                                    <Link className="nav-link" to="mailto:sales@gapaautoparts.com">
                                        <AiOutlineMail /> sales@gapaautoparts.com
                                    </Link>
                                </p>

                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-white fs-5 mb-4">
                                    Information
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">ABout Us</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Contact Us</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Terms and Conditions</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Privacy</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-white fs-5 mb-4">
                                    My  Account
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">My Account</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">My Cart</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Wishlist</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Order History</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-white fs-5 mb-4">
                                    Categories
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Engine Oil</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Car Parts</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Car Care</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset nav-link">Car Accessories</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-white fs-5 mb-4">
                                    News Letter
                                </h6>
                                <div>
                                    <FooterInput />
                                </div>
                                <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                    <label class="form-check-label" for="form2Example33">
                                        Subscribe to our newsletter
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className=" bg-light">
                    <div className="text-dark container p-4">
                        GAPA NAIJA © {currentYear} All Reserve. Redesigned by
                        <Link className="text-reset fw-bold" target="_blank" to="https://geoteck.vercel.app/"> GeoTeck</Link>
                    </div>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}
export default Footer;