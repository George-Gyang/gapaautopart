import React from "react";
import "../../asset/styles.css"



function Forms() {

    return (
        <div className="">
            <div className="py-5 container form-contaner" style={{ width: "100%" }}>
                <div className="container-fluid col-10 m-auto form-container">
                    <div className="module py-3 extra-layout6 row">
                        <div className="col-md-5">
                            <form action="#">
                                <ul className="list-group" style={{ listStyle: "none;" }}>
                                    <li className="list-group-item">
                                        <select name="cars" id="cars" className="form-select" required>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Toyota</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </li>
                                    <li className="list-group-item">
                                        <select name="cars" id="cars" className="form-select" required>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Toyota</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </li>
                                    <li className="list-group-item"><select name="cars" id="cars" className="form-select" required>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Toyota</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select> </li>
                                    <li className="list-group-item">
                                        <button className="btn btn-info text-light" style={{
                                            fontSize: "20px",
                                            height: "50px",
                                            width: "100%",
                                            backgroundColor: "#492F92"
                                        }} type="submit">Find my Part</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "70px" }}>
                            <center>
                                <div className="form-circle">
                                    <strong>OR</strong>
                                </div>
                            </center>
                        </div>
                        <div className="col-md-5" style={{ paddingTop: "50px" }}>
                            <form action="#">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <input className="form-select" name="part_number" placeholder="Search Part Number" style={{ fontSize: "20", height: "50px", }} type="text" />
                                    </li>
                                    <li className="list-group-item">
                                        <button className="btn btn-info text-light" style={{
                                            fontSize: "20px",
                                            height: "50px",
                                            width: "100%",
                                            backgroundColor: "#492F92"
                                        }} type="submit">Find my Part</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms;