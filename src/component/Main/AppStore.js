import React from "react";
import { Link } from "react-router-dom";

function Appstore() {
  return (
    <div className="my-4">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <Link to="">
            <img
              src="https://gapaautoparts.com/images/IOS_Gapa.png"
              className="img-fluid"
              alt=""
            />
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="">
            <img
              src="https://gapaautoparts.com/images/IOS_Gapa.png"
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
