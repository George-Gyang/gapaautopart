import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TopProductOne from "../../asset/images/brakepad.png"
import TopProductTwo from "../../asset/images/car-part.png"
import TopProductThree from "../../asset/images/battery.png"
import { Link } from "react-router-dom";

function TopProduct() {

    return (
        <div className="py-5">
            <div className="mb-5">
                <h4 className="text-center display-6 ">Our Top Product</h4>
                <p className="text-center ">Hand picked Quality product</p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Card>
                        <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductOne} />
                        </Link>

                        <Card.Body>
                            <Card.Link href="#">Brake pad Set, Disc Brake </Card.Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card>
                        <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductOne} />
                        </Link>
                        <Card.Body>
                            <Card.Link href="#">Brake pad Set, Disc Brake </Card.Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductTwo} />
                        </Link>
                        <Card.Body>
                            <Card.Link href="#">Car Parts</Card.Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-3 position-relative">
                    <Card>
                        <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductThree} />
                        </Link>
                        <Card.Body>
                            <Card.Link href="#">Brake pad Set, Disc Brake </Card.Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card>
                        <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductOne} />
                        </Link>
                        <Card.Body>
                            <Card.Link href="#">Brake pad Set, Disc Brake </Card.Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>₦ 21,700.00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <span className="label-app">top</span>
                </div>
            </div>
        </div>
    )
}

export default TopProduct;