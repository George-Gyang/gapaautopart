import React from "react";
// import { Link } from "react-router-dom";
import Header from "../component/nav/Header";
import Footer from "../component/footer/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container my-5 py-5">
          <div className="mx-auto text-secondary" style={{ maxWidth: "800px" }}>
            <div className="border rounded">
              <div className="h5 bg-light border-bottom px-3 py-2">
                <p>Register</p>
              </div>
              <div className="mx-5 px-5">
                <div>
                  <form>
                    <div className="d-flex justify-content-center p-3">
                      <div className="col-4">
                        <label
                          for="inputPassword5"
                          className="form-label text-end d-block"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          id="inputPassword5"
                          className="form-control ms-4"
                          aria-labelledby="passwordHelpBlock"
                          placeholder="Enter your fullname"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                      <div className="col-4">
                        <label
                          for="inputPassword5"
                          className="form-label text-end d-block"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          id="inputPassword5"
                          className="form-control ms-4"
                          aria-labelledby="passwordHelpBlock"
                          placeholder="Enter your Email Address"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                      <div className="col-4">
                        <label
                          for="inputPassword5"
                          className="form-label text-end d-block"
                        >
                          Telephone
                        </label>
                      </div>
                      <div className="col-8 d-flex">
                        <input
                          className="form-control ms-4"
                          list="datalistOptions"
                          id="exampleDataList"
                          placeholder="Uk (+44)"
                        />
                        <datalist id="datalistOptions">
                          <option value="NGA (+234)" />
                          <option value="New York" />
                          <option value="Seattle" />
                          <option value="Los Angeles" />
                          <option value="Chicago" />
                        </datalist>
                        <input
                          type="text"
                          id="inputPassword5"
                          className="form-control"
                          aria-labelledby="passwordHelpBlock"
                          placeholder="8100 000 000"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                      <div className="col-4">
                        <label
                          for="inputPassword5"
                          className="form-label text-end d-block"
                        >
                          Password
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          id="inputPassword5"
                          className="form-control ms-4"
                          aria-labelledby="passwordHelpBlock"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                      <div className="col-4">
                        <label
                          for="inputPassword5"
                          className="form-label text-end d-block"
                        >
                          Confirm Password
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          id="inputPassword5"
                          className="form-control ms-4"
                          aria-labelledby="passwordHelpBlock"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                      <button className="text-white purple-bg btn rounded-0 mx-auto">
                        Register
                      </button>
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

export default Register;
