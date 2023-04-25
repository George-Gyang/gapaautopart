import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/nav/Header";
import Footer from "../component/footer/Footer";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Login = () => {
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
        <div className="container my-5 py-5">
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="row text-secondary">
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <div>
                    <h6 className="h4">New Customer</h6>
                    <p>
                      By creating an account you will be able to shop faster, be
                      up to date on an order's status, and keep track of the
                      orders you have previously made.
                    </p>
                  </div>
                </div>
                <div className="bg-light p-3">
                  <button className="btn text-light bg-secondary">
                    Continue
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border p-3 rounded">
                  <div>
                    <h6 className="h4">Returning Customer</h6>
                    <p>I am a returning customer</p>
                  </div>
                  <form>
                    <div>
                      <div>
                        <label for="inputPassword5" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="inputPassword5"
                          className="form-control"
                          aria-labelledby="passwordHelpBlock"
                        />
                      </div>
                      <div>
                        <label for="inputPassword5" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          id="inputPassword5"
                          className="form-control"
                          aria-labelledby="passwordHelpBlock"
                        />
                      </div>
                      <div className="d-flex p-3 bg-light">
                        <p>
                          <Link to="" className="nav-link">
                            Forgot your Password?
                          </Link>
                        </p>
                        <button className="btn text-light bg-secondary">
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
