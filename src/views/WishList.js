import React from "react";
import Header from "../component/nav/Header";
import Footer from "../component/footer/Footer";
import { Link } from "react-router-dom";
import "../asset/css/style.css";
import Appstore from "../component/Main/AppStore";
import image4 from "../asset/images/brakepad.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const WishList = () => {
  return (
    <>
      <Header />
      <div className="py-4">
        <div className="container">
          <section>
            <div className="mb-5 text-light">
              <div className="py-2">
                <AiFillHome className="text-secondary" />
                <MdOutlineKeyboardArrowRight className="text-secondary fs-3" />
                <span>
                  <Link className=" text-decoration-none purple-text" to="">
                    Wish List
                  </Link>
                </span>
              </div>
              <h5 className="my-3 text-secondary fw-bold">Wish List</h5>
              <div className="row">
                <div className="">
                  <div className="pb-4 table-responsive-md">
                    <table className="table table-hover">
                      <thead className=" table-secondary">
                        <tr>
                          <td className="fw-bold">IMAGE</td>
                          <td className="fw-bold">PRODUCT NAME</td>
                          <td className="fw-bold" colspan="2">
                            QUANTITY
                          </td>
                          <td className="fw-bold">UNIT PRICE</td>
                          <td className="fw-bold">TOTAL</td>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr>
                          <td style={{ height: "110px", width: "110px" }}>
                            <div>
                              <Link to="">
                                <img
                                  className="img-fluid"
                                  src={image4}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </td>
                          <td className="">
                            <Link to="" className="nav-link">
                              Brake Pad, - 4523f56 - 4059194320301
                            </Link>
                          </td>
                          <td colspan="2">
                            <div>
                              <div className="input-group">
                                <button className="btn rounded-0 minusbtn btn-primary">
                                  <span className="fs-6 fw-bold">-</span>
                                </button>
                                <div>
                                  <input
                                    className="form-control rounded-0 quantityinput"
                                    value="1"
                                    type="number"
                                    max="10"
                                    min="1"
                                  />
                                </div>
                                <div className="btn rounded-0 plusbtn btn-danger">
                                  <span className="fs-6 fw-bold">+</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>₦ 17,300</td>
                          <td>
                            <button className="btn ms-2 rounded-0 cancleBtn orange-bg">
                              <span className="fs-6 fw-bold">Add  To Cart</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="fw-semibold">
                          <td colspan="3">total</td>
                          <td>₦ 21,700</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="pb-4">
                    <div className="d-flex justify-content-center">
                      <button className="btn purple-bg text-light rounded-0">
                       Clear Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Appstore />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
