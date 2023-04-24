import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineSensorDoor } from "react-icons/md"

function Logistic({title, desc}) {


    return (
        <div>
            <div className="d-flex">
                <div className="rounded-circle me-3 border border-2 d-flex align-items-center justify-content-center" style={{width: "4rem", height: "4rem"}}>
                    <MdOutlineSensorDoor className="fs-2" />
                </div>
                <div>
                    <p><Link className="text-dark text-decoration-none" to="">{title}</Link> <br/>
                    <Link className="text-dark text-decoration-none" to="">{desc} </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Logistic;