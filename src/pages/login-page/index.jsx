import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { FormGroup, Input, Label, Button } from "reactstrap";
import Image from "../../assets/images/Mask-Group.png";
import Logo from "../../assets/images/Logo-edesa.png";

import { AuthUserContext } from "../../context/AuthContext";

const LoginPage = (props) => {
  const { authUserState, Login } = useContext(AuthUserContext);
  const [showPass, setShowPass] = useState(false);
  console.log("authUserState: ", authUserState);
  console.log("role: ", authUserState.profile.role);
  console.log(typeof authUserState.profile.role);

  const validationScheme = yup.object({
    input: yup.number().required("NIK is required"),
    password: yup.string().required("Password is required"),
  });
  const onSubmit = (data) => {
    Login({ input: parseInt(data.input), password: data.password });
  };
  return (
    <div className="login-page mt-5 mb-5 ">
      <div className=" row container">
        <div className="col-sm-12 col-md-7 col-lg-7 align-content-center d-flex justify-content-center">
          <div className="card  border-0 bg-transparent">
            <img src={Logo} className="card-img-top" alt="..." />
            <h1 className="greeting">Selamat Datang Kembali!</h1>
            <p className="register-text text-muted">Silakan Masukan NIK dan Password anda.</p>
            <div className="login-form">
              <Formik
                initialValues={{
                  input: "",
                  password: "",
                  remember: "",
                }}
                onSubmit={(data) => onSubmit(data)}
                validationSchema={validationScheme}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className=" email-form">
                      <label htmlFor="input" className="ms-0 ms-md-3 ms-lg-3 input-label ">
                        NIK
                      </label>
                      <Input
                        tag={Field}
                        type="text"
                        name="input"
                        id="input"
                        className="form-input"
                        onChange={formik.handleChange}
                        value={formik.values.nik}
                      />
                      {formik.errors.nik && formik.touched.nik ? (
                        <div className="d-flex justify-content-center">
                          <p className=" text-danger">{formik.errors.nik}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className=" password-form">
                      <label htmlFor="password" className="ms-0 ms-md-3 ms-lg-3 input-label ">
                        Password
                      </label>
                      <div className="password-area">
                        <Input
                          tag={Field}
                          type={showPass ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-input"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                        <i
                          className={showPass ? "eye-password fa fa-eye-slash" : "eye-password fa fa-eye"}
                          onClick={() => setShowPass(!showPass)}
                        />
                      </div>
                      {formik.errors.password && formik.touched.password ? (
                        <div className="d-flex justify-content-center">
                          <p className=" text-danger">{formik.errors.password}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="d-flex justify-content-between  mt-3 ">
                      <FormGroup check value={formik.values.remember}>
                        <Label check>
                          <Input type="radio" value="remember" /> Remember me
                        </Label>
                      </FormGroup>

                      <Link to="/public/forgot-password">Forgot Password?</Link>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      {formik.isValid && formik.dirty ? (
                        <Button type="submit" color="primary">
                          Login
                        </Button>
                      ) : (
                        <Button type="submit" onClick={() => onSubmit()} disabled color="secondary">
                          Login
                        </Button>
                      )}
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-sm-0 col-md-5 col-lg-5 d-none d-md-block">
          <img src={Image} alt="img-fluid login-asset" className="login-asset" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
