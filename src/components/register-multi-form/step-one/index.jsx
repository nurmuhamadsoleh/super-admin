import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  UncontrolledAlert,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  CustomInput,
  Badge,
  Button,
  ButtonGroup,
  Collapse,
} from "reactstrap";
const StepOne = ({ onSubmit, formValues, setFormValues }) => {
  

  const validationScheme = yup.object({
    kodedesa: yup.number().required("Kode Desa harus diisi"),
    namadomain: yup.string().required("Nama Domain harus diisi"),
    email: yup.string().email().required("Email harus diisi"),
    username: yup.string().required("Username harus diisi"),
    name: yup.string().required("Nama harus diisi"),
    jabatan: yup.string().required("jabatan harus diisi"),
    telepon: yup.number().required("Telepon harus diisi"),
  });

  return (
    <div className="step-one">
      <Formik
        initialValues={formValues}
        validationSchema={validationScheme}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2 ">
                <label htmlFor="kodedesa" className="control-label " style={{fontSize: "14px"}}>
                <b>Kode desa</b>
                </label>
              </div>
              <div className="col-md-10">
                  <div className="d-flex">
                  <Input
                  tag={Field}
                  type="text"
                  name="kodedesa"
                  id="kodedesa"
                  className="form-control"
                  value={formik.values.kodedesa}
                  onChange={formik.handleChange}
                />
                <button className="btn btn-secondary btn-sm" style={{width: "300px"}}>Cari kode Kemendagri</button>
                  </div>
                
              </div>
              {formik.errors.kodedesa && formik.touched.kodedesa ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.kodedesa}</p>
                    </div>
                ) : null}
              
            </div>

            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="namadomain" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>Nama domain</b>
                </label>
              </div>
              <div className="col-md-10">
                  <div className="d-flex">
                  <Input
                  tag={Field}
                  type="text"
                  name="namadomain"
                  id="namadomain"
                  className="form-control"
                  value={formik.values.namadomain}
                  onChange={formik.handleChange}
                />
                <button className="btn btn-secondary btn-sm" style={{width: "150px"}}>.desa.id</button>
                  </div>
                
              </div>
              {formik.errors.namadomain && formik.touched.namadomain ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.namadomain}</p>
                    </div>
                ) : null}
              
            </div>

            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="email" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>Email pengguna</b>
                </label>
              </div>
              <div className="col-md-10">
               
                  <Input
                  tag={Field}
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
               <p style={{}}>Untuk mendaftar domain .desa.id baru harus menggunakan email @pnsmail.go.id</p>
                
              </div>
              
              {formik.errors.email && formik.touched.email ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.email}</p>
                    </div>
                ) : null}
              
            </div>

            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="username" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>User name</b>
                </label>
              </div>
              <div className="col-md-10">
               
                  <Input
                  tag={Field}
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
               
                
              </div>
              
              {formik.errors.email && formik.touched.email ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.email}</p>
                    </div>
                ) : null}
              
            </div>
            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="name" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>Name</b>
                </label>
              </div>
              <div className="col-md-10">
               
                  <Input
                  tag={Field}
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
               
                
              </div>
              
              {formik.errors.name && formik.touched.name? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.name}</p>
                    </div>
                ) : null}
              
            </div>

            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="jabatan" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>Jabatan</b>
                </label>
              </div>
              <div className="col-md-10">
               
                  <Input
                  tag={Field}
                  type="text"
                  name="jabatan"
                  id="jabatan"
                  className="form-control"
                  value={formik.values.jabatan}
                  onChange={formik.handleChange}
                />
               
                
              </div>
              
              {formik.errors.jabatan && formik.touched.jabatan ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.jabatan}</p>
                    </div>
                ) : null}
              
            </div>

            <div className="row mt-3">
              <div className="col-md-2 ">
                <label htmlFor="telepon" className="control-label text-nowrap font-weight-bold" style={{fontSize: "14px"}}>
                  <b>No. telepon</b>
                </label>
              </div>
              <div className="col-md-10">
               
                  <Input
                  tag={Field}
                  type="number"
                  name="telepon"
                  id="telepon"
                  className="form-control"
                  value={formik.values.telepon}
                  onChange={formik.handleChange}
                />
               
                
              </div>
              
              {formik.errors.telepon && formik.touched.telepon ? (
                  <div className="col-md-12">
                      <p className=" text-danger">{formik.errors.telepon}</p>
                    </div>
                ) : null}
              
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-end">
                <Button type="submit" color="primary" variant="contained">
                Next
              </Button>
                </div>
              </div>

            </div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepOne;
