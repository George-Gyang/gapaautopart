import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/nav/Header";
import Footer from "../component/footer/Footer";
import image4 from "../asset/images/car-accessories.png";
import image3 from "../asset/images/car-part.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Appstore from "../component/Main/AppStore";

const Checkout = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container my-5 py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <div>
                  <h5 className="text-secondary mb-5">Your Order Details</h5>
                </div>
                <div className="pb-4 table-responsive-md">
                  <table className="table table-hover">
                    <thead className=" table-secondary">
                      <tr>
                        <td className="fw-bold">IMAGE</td>
                        <td className="fw-bold">PRODUCT NAME</td>
                        <td className="fw-bold">TOTAL</td>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td style={{ height: "110px", width: "110px" }}>
                          <div>
                            <Link to="">
                              <img className="img-fluid" src={image4} alt="" />
                            </Link>
                          </div>
                        </td>
                        <td className="">
                          <Link to="" className="nav-link">
                            Bathing Product, - 402B0329 - 4059191320301
                          </Link>
                        </td>
                        <td>₦ 17,300</td>
                      </tr>
                      <tr>
                        <td style={{ height: "110px", width: "110px" }}>
                          <div>
                            <Link to="">
                              <img className="img-fluid" src={image3} alt="" />
                            </Link>
                          </div>
                        </td>
                        <td className="">
                          <Link to="" className="nav-link">
                            Bathing Product, - 402B0329 - 4059191320301
                          </Link>
                        </td>
                        <td>₦ 36,600</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="fw-semibold">
                        <td colspan="2">
                          VAT<b>7.5%</b>{" "}
                        </td>
                        <td colSpan="">₦ 4,047.5</td>
                      </tr>
                      <tr className="fw-semibold">
                        <td colspan="2">SUB-TOTAL</td>
                        <td>₦ 57,942.5</td>
                      </tr>
                      <tr className="fw-semibold">
                        <td colspan="2">DELIVERY FEE</td>
                        <td>₦ 1,700</td>
                      </tr>
                      <tr className="fw-semibold">
                        <td colspan="2">AMOUNT TO BE PAID</td>
                        <td>₦ 59,642.5</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="my-3">
                  <div class="d-grid gap-2">
                    <button
                      class="btn purple-text rounded-0 purple_border"
                      type="button"
                    >
                      Modify
                    </button>
                  </div>
                  <div class="d-grid gap-2 col-6 my-3">
                    <button
                      class="btn purple-btn rounded-0 text-light"
                      type="button"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <div className="mb-3">
                  <h5 className="text-secondary mb-3">Address Details</h5>
                  <h6 className="text-secondary">Billing Address</h6>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="email"
                      value="George"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      placeholder="Disabled input"
                      value="georgegyang3@gmail.com"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control
                      placeholder="Disabled input"
                      value="+234810046221"
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Your Address" />
                  </Form.Group>
                  <Button className="purple-bg rounded-0" type="submit">
                    Save Changes
                  </Button>
                </Form>
                <div>
                  <div className="orange-bg p-3">
                    <p>DoorStep Delivery</p>
                    <p>Get Your Items Directly at your doorstep</p>
                    <div>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email Address"
                            size="sm"
                          />
                        </Form.Group>
                        <Button className="purple-bg rounded-0" type="submit">
                          Save Changes
                        </Button>
                      </Form>
                    </div>
                  </div>
                  <div className="row me-0">
                    <div className="col-6 pe-0">
                      <div
                        className="purple-bg p-3 text-light pointed"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <p>
                          Pick up Station Pick up items from a GAPA store thats
                          convenient for you and save some amount for delivery
                          charges.
                        </p>
                      </div>
                    </div>
                    <div className="bg-black col-6 p-3 text-light">
                      <img
                        src="https://gapaautoparts.shop/images/allred.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    {/* OFF CANVAS BELOW  */}
                    <div
                      class="offcanvas offcanvas-end"
                      tabindex="-1"
                      id="offcanvasRight"
                      aria-labelledby="offcanvasRightLabel"
                    >
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">
                          Pick up Location
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="offcanvas-body">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select a location below</option>
                          <option value="1">Abuja</option>
                          <option value="2">Lagos</option>
                          <option value="3">Port-Harcourt</option>
                          <option value="1">Kaduna</option>
                          <option value="2">Kano</option>
                          <option value="3">Delta</option>
                          <option value="3">Ogun</option>
                          <option value="3">Benin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Appstore />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
