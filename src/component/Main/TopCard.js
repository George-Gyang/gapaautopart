import React, { useState } from "react";
// import TopProductOne from "../../asset/images/brakepad.png"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



function TopCard( props) {

    const [display, setDisplay] = useState(false)

    function handleMouseEnter() {
        setDisplay(true);
    }
    function handleMouseLeave() {
        setDisplay(false);
    }
    return (
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className="position-relative border-bottom">
                <div></div>
                <Link className="py-5" to="">
                    <Card.Img variant="top" src={props.image} />
                </Link>
                {display && (<span className="skew bg-primary"></span>)}
                {display && (<div className="top-tag">
                    <span className="bg-prmary text-uppercase label-span">top</span>
                    {/* <span className="skew bg-primary"></span> */}
                </div>)}
            </div>
            {display && (<div className="d-flex ">
                <button className=" cart-btn border-0 py-2 px-3 border-end">
                    <FaHeart className="text-light" />
                </button>
                <button className=" border-0 rounded-0  cart-btn w-100 py-2 text-white">ADD TO CART</button>
            </div>)}
            <Card.Body>
                <Card.Link className="text-uppercase text-center nav-link" href="#">Brake pad Set, Disc Brake </Card.Link>
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
                <ListGroup.Item>
                    <BsStarFill className="orange-text me-1" />
                    <BsStarFill className="orange-text me-1" />
                    <BsStarFill className="orange-text me-1" />
                    <BsStar className="me-1" />
                    <BsStar className="me-1" />
                </ListGroup.Item>
                <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default TopCard;