import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/nav/Header";
import Footer from "../component/footer/Footer";
import { AiFillHome, AiOutlineCamera } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SubNav from "../component/Main/SubNav";
import Appstore from "../component/Main/AppStore";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div>
        <div className="py-2 container">
          <AiFillHome className="text-secondary" />
          <MdOutlineKeyboardArrowRight className="text-secondary fs-3" />
          <span>
            <Link className=" text-decoration-none purple-text" to="">
              Account
            </Link>
          </span>
          <MdOutlineKeyboardArrowRight className="text-secondary fs-3" />
          <span>
            <Link className=" text-decoration-none purple-text" to="">
              Account
            </Link>
          </span>
        </div>
        <div className="container">
          <h6 className="text-secondary">My Account</h6>
          <div className="row">
            <div className="col-md-9">
              <div className="rounded orange-bg text-light position-relative">
                <div className="d-flex p-3 align-items-center">
                  <div
                    className="border"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  >
                    <img alt="" src="" className="img-fluid" />
                  </div>
                  <p className="ms-3 fs-4">
                    Hello, George - View and Edit your account information.
                  </p>
                </div>
                <Link className=" position-absolute purple-bg image-icon">
                  <AiOutlineCamera className="mb-1" />
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <SubNav />
            </div>
          </div>
        </div>
        <div className="container my-5 py-5">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
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
              </div>
              <div className="col-md-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Old Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New password</Form.Label>
                    <Form.Control type="text" placeholder="New Password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Confirm New Password"
                    />
                  </Form.Group>
                  <Button className="purple-bg rounded-0" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Appstore />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
