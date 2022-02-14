import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { Input, Button } from "reactstrap";
import Image from "../../assets/images/Mask-Group.png";
import Logo from "../../assets/images/Logo-edesa.png";

const ResetPassPage = (props) => {
  const [showPass, setShowPass] = useState(false);

  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    repeatPassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = () => {
    props.history.push("/public/login");
    console.log("test");
  };
  return (
    <div className="reset-pass-page mt-5 mb-5 ">
      <div className=" row container">
        <div className="col-sm-12 col-md-7 col-lg-7 align-content-center d-flex justify-content-center">
          <div className="card  border-0 bg-transparent">
            <img src={Logo} className="card-img-top" alt="..." />
            <h1 className="greeting">Setel Ulang Kata Sandi</h1>
            <p className="register-text text-muted">
              Kata sandi baru anda harus berbeda dari kata sandi yang digunakan sebelumnya.
            </p>
            <div className="reset-pass-form">
              <Formik
                initialValues={{
                  password: "",
                  repeatPassword: "",
                }}
                onSubmit={() => onSubmit()}
                validationSchema={validationSchema}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className=" password-form">
                      <label htmlFor="nik" className="ms-0 ms-md-3 ms-lg-3 input-label ">
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

                    <div className=" password-form">
                      <label htmlFor="repeat-password" className="ms-0 ms-md-3 ms-lg-3 input-label ">
                        Repeat Password
                      </label>
                      <div className="repeat-password-area">
                        <Input
                          tag={Field}
                          type={showPass ? "text" : "password"}
                          name="repeatPassword"
                          id="repeatPassword"
                          className="form-input"
                          onChange={formik.handleChange}
                          value={formik.values.repeatPassword}
                        />
                        <i
                          className={showPass ? "eye-password fa fa-eye-slash" : "eye-password fa fa-eye"}
                          onClick={() => setShowPass(!showPass)}
                        />
                      </div>
                      {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
                        <div className="d-flex justify-content-center">
                          <p className=" text-danger">{formik.errors.repeatPassword}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
                        <Button type="submit" onClick={() => onSubmit()} disabled color="secondary">
                          Reset Password
                        </Button>
                      ) : (
                        <Button type="submit" color="primary">
                          Reset Password
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

export default ResetPassPage;
