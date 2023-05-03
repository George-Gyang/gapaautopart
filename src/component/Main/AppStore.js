import React from "react";
import { Link } from "react-router-dom";
import IOS from "../../asset/images/brands/IOS_Gapa.png"
import playStore from "../../asset/images/brands/Andriod_Gapa.png"
function Appstore() {
  return (
    <div className="my-4 halla">
      <div className="row justify-content-center">
        <div className="col-md-2 col-6 mx-auto mx-md-0">
          <Link to="">
            <img
              src={playStore}
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-2 col-6 mx-auto mx-md-0">
          <Link to="">
            <img
              src={IOS}
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Appstore;
