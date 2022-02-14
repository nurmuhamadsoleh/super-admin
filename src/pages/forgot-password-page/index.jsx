import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { Input, Button } from "reactstrap";
import Image from "../../assets/images/Mask-Group.png";
import Logo from "../../assets/images/Logo-edesa.png";

const ForgotPasswordPage = (props) => {
  const validationScheme = yup.object({
    email: yup.string().email().required("Email is required"),
  });
  const onSubmit = () => {
    props.history.push("/public/reset-password");
    console.log("test");
  };
  return (
    <div className="forgot-password mt-5 mb-5">
      <div className=" row container">
        <div className="col-sm-12 col-md-7 col-lg-7 align-content-center d-flex justify-content-center">
          <div className="card  border-0">
            <img src={Logo} className="card-img-top" alt="..." style={{ width: "15%", height: "5%" }} />
            <h1 className="greeting">Lupa Kata Sandi</h1>
            <p className="register-text text-muted">
              Masukkan Email dan kami akan mengirimkan instruksi untuk mereset kata sandi Anda.
            </p>
            <div className="login-form">
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={() => onSubmit()}
                validationSchema={validationScheme}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className=" nik-form">
                      <label htmlFor="email" className="ms-0 ms-md-3 ms-lg-3 input-label ">
                        Email
                      </label>
                      <Input
                        tag={Field}
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <div className="d-flex justify-content-center">
                          <p className=" text-danger">{formik.errors.email}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="d-flex justify-content-center mt-3 mt-md-3 mt-lg-5">
                      {formik.isValid && formik.dirty ? (
                        <Button type="submit" color="primary">
                          Reset Kata Sandi
                        </Button>
                      ) : (
                        <Button type="submit" onClick={() => onSubmit()} disabled color="secondary">
                          Reset Kata Sandi
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </Formik>
              <div className="d-flex justify-content-center mt-3">
                <div className=" d-flex">
                  <p className="font-weight-bold h6 login-text me-2"> Kembali ke halaman</p>
                  <Link to="/public/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-0 col-md-5 col-lg-5 d-none d-md-block">
          <img src={Image} alt="login-asset" style={{ width: "120%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
