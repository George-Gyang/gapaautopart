import React from "react";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import "../../asset/css/style.css"
import { Link } from "react-router-dom";

function SearchInput() {
    return (
        <>

            <InputGroup size="" className="mb-3">
                <Form.Control
                    placeholder="What part do you want today? Part Number or Name"
                    aria-label="What part do you want today? Part Number or Name"
                    aria-describedby="basic-addon2"
                />
                <Button className="purple-bg text-light" variant="outline-seconary" id="button-addon2">
                    <FaSearch className="mx-4" />
                </Button>
            </InputGroup>
        </>
    );
}



function HeaderMiddle() {

    return (
        <div className="orange-bg py-4">
            <div className="container">
                <div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3">
                            <div>
                                <Link to="#">
                                <img className=" w-100" src="images/logos/gapalogo.png" alt="website logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <SearchInput />
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <Link className="purple-border rounded p-2 purple-text" to=""> <FaHeart /> </Link></div>
                                <div className="d-flex">
                                    <Link className="purple-border rounded-start p-2 purple-text" to=""> <FaShoppingCart /> </Link>
                                    <Link className="purple-border rounded-end py-2 px-3 border-start-0 purple-text nav-link" to=""> My Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeaderMiddle;

// function SearchButton() {

//     const inputBtn = {backgroundColor: "#4c4892", color: "white"}
//     const inputStyle = {height: "3rem"}

//     return (
//         <>

//             <InputGroup className="mt-3">
//                 <Form.Control
//                 style={inputStyle}
//                     placeholder="What part do you want today? Part number or Name?"
//                     aria-label="Recipient's username"
//                     aria-describedby="basic-addon2"
//                 />
//                 <Button className="py-2 px-4" style={inputBtn} variant="outline-secondary" id="button-addon2">
//                     <FaSearch/>
//                 </Button>
//             </InputGroup>

//         </>
//     );
// }


// const HeaderMiddle = () => {

//     return (
//         <div className="header_middle">
//             <div className="middle-content">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <img
//                             className="d-block w-100"
//                             src="images/logos/gapalogo.png"
//                             alt="website logo"
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <SearchButton />
//                     </div>
//                     <div className="col-md-3">
//                         <div className="row">
//                             <div className="col-3">
//                                 <ul className="ul_wishlist">
//                                     <li className="li_wishlist"><FaHeart /></li>
//                                 </ul>
//                             </div>
//                             <div className="col-7"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeaderMiddle;