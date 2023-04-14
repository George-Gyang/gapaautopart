import React from "react";
import SelectInput from "./SelectInput";
import FormInputs from "./FormInputs";
import "../../asset/css/style.css"

function LandingForm() {

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-10 mx-auto purple-border py-4 px-3">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5">
                            <SelectInput />
                        </div>
                        <div className="col-md-2 my-2 my-md-0">
                            <center>
                                <div className="purple-bg round-option rounded-circle">
                                    <span className="fw-bolder text-white" >OR</span>
                                </div>
                            </center>
                        </div>
                        <div className="col-md-5">
                            <FormInputs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingForm;