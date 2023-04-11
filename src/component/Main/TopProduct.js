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
                        </Link>                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                    <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductTwo} />
                        </Link>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 position-relative">
                    <Card>
                    <Link className="py-5" to="">
                            <Card.Img variant="top" src={TopProductThree} />
                        </Link>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                    <span className="label-app">top</span>
                </div>
            </div>
        </div>
    )
}

export default TopProduct;