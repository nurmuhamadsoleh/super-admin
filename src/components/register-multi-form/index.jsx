import React, { useState } from "react";
import { Link } from "react-router-dom";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { Button } from "reactstrap";
const defaultValues = {
  kodedesa: "",
  namadomain: "",
  email: "",
  username: "",
  name: "",
  jabatan: "",
  telepon: "",
  skbupati: "",
  skkepaladesa: "",
  skperangkatdesa: "",
  permohonan: "",
};

function getSteps() {
  return ["Langkah 1", "Langkah 2"];
}
const RegisterMultiForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [activeStep, setActiveStep] = useState(0);
  const props = {
    formValues,
    setFormValues,
    //  handleNext,
    //  setActiveStep
  };
  const steps = getSteps();
  const handleNext = (newData) => {
    setFormValues((prev) => ({ ...prev, ...newData }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (newData) => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFormValues((prev) => ({ ...prev, ...newData }));
    console.log(formValues);
    alert(JSON.stringify(formValues));
    window.location.replace("/public/login");
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOne onSubmit={handleNext} {...props} />;
      case 1:
        return <StepTwo onSubmit={handleSubmit} onClick={handleBack} {...props} />;
      // case 2:
      //   return <StepThree {...props} />;
      // case 3:
      //   return <StepFour {...props} />;
      default:
        return "Unknown stepIndex";
    }
  };
  return (
    <div className="register-multi-form">
      <div className="container mt-5">
        <div className="d-flex justify-content-end align-content-center">
          <div className="card border-0" >
            <h1 className="greeting">Pendaftaran Desa</h1>
            <p className="register-text">
              Sudah punya akun? <Link to="/public/login">Login</Link>
            </p>
            <div>{getStepContent(activeStep)}</div>
            {/* <div className="d-flex justify-content-end mt-5 mx-5 mb-5">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMultiForm;
