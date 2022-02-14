import React, { useState } from "react";
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
const StepTwo = ({ onSubmit, formValues, setFormValues, onClick }) => {
  const [skBupati, setSkbupati] = useState("");
  const [skKepalaDesa, setSkkepaladesa] = useState("");
  const [skPerangkatDesa, setSkPerangkatDesadesa] = useState("");
  const [permohonan, setPermohonan] = useState("");
  
  const FILE_SIZE = 160 * 1024;;
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

  const validationScheme = yup.object({
    skbupati: yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    skkepaladesa: yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    skperangkatdesa: yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
    permohonan: yup
      .mixed()
      .required("A file is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "skbupati") {
      setSkbupati(files[0].name);
    } else if (name === "skkepaladesa") {
      setSkkepaladesa(files[0].name);
    } else if (name === "skperangkatdesa") {
      setSkPerangkatDesadesa(files[0].name);
    } else if (name === "permohonan") {
      setPermohonan(files[0].name);
    }
    // console.log(value)
    // console.log(files[0].name)
  };

  return (
    <div className="step-two container">
      <Formik
        initialValues={formValues}
        validationSchema={validationScheme}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-4 ">
                <label
                  htmlFor="skbupati"
                  className="control-label "
                  style={{ fontSize: "14px" }}
                >
                  <b>SK Pengangkatan Kepala Desa Yang Ditandatangani Bupati</b>
                </label>
              </div>
              <div className="col-md-8">
                <div className="d-flex">
                  <input
                    value={skBupati}
                    className="form-control disable mt-2"
                  />
                  <label className="custom-file-upload  ">
                    <input
                      type="file"
                      name="skbupati"
                      onChange={(event) => (
                        handleChange(event),
                        formik.setFieldValue("skbupati", event.target.files[0])
                      )}
                    ></input>
                    <div className="d-flex">
                      <i class="fas fa-upload"></i>
                      <div>Upload</div>
                    </div>
                  </label>
                </div>
                <div>
                  Discan hanya halaman depan, halaman yang menampilkan nama
                  Kepala Desa, dan halaman yang menampilkan tanda tangan Bupati.
                </div>
              </div>
              {formik.errors.skbupati && formik.touched.skbupati ? (
                <div className="col-md-12">
                  <p className=" text-danger">{formik.errors.skbupati}</p>
                </div>
              ) : null}
            </div>

            <div className="row mt-3">
              <div className="col-md-4 ">
                <label
                  htmlFor="skkepaladesa"
                  className="control-label "
                  style={{ fontSize: "14px" }}
                >
                  <b>
                    SK Pengangkatan Perangkat Desa yang Ditandatangani Kepala
                    Desa
                  </b>
                </label>
              </div>
              <div className="col-md-8">
                <div className="d-flex">
                  <input
                    value={skKepalaDesa}
                    className="form-control disable mt-2"
                  />
                  <label className="custom-file-upload  ">
                    <input
                      type="file"
                      name="skkepaladesa"
                      onChange={(event) => (
                        handleChange(event),
                        formik.setFieldValue(
                          "skkepaladesa",
                          event.target.files[0]
                        )
                      )}
                    ></input>
                    <div className="d-flex">
                      <i class="fas fa-upload"></i>
                      <div>Upload</div>
                    </div>
                  </label>
                </div>
                <div>Discan hanya halaman depan, halaman yang menampilkan nama Kepala Desa, dan halaman yang menampilkan tanda tangan Kepala Desa</div>
              </div>
              {formik.errors.skkepaladesa && formik.touched.skkepaladesa ? (
                <div className="col-md-12">
                  <p className=" text-danger">{formik.errors.skkepaladesa}</p>
                </div>
              ) : null}
            </div>

            <div className="row mt-3">
              <div className="col-md-4 ">
                <label
                  htmlFor="skperangkatdesa"
                  className="control-label "
                  style={{ fontSize: "14px" }}
                >
                  <b>
                  Surat Kuasa dari Kepala Desa ke Perangkat Desa
                  </b>
                </label>
              </div>
              <div className="col-md-8">
                <div className="d-flex">
                  <input
                    value={skPerangkatDesa}
                    className="form-control disable mt-2"
                  />
                  <label className="custom-file-upload  ">
                    <input
                      type="file"
                      name="skperangkatdesa"
                      onChange={(event) => (
                        handleChange(event),
                        formik.setFieldValue(
                          "skperangkatdesa",
                          event.target.files[0]
                        )
                      )}
                    ></input>
                    <div className="d-flex">
                      <i class="fas fa-upload"></i>
                      <div>Upload</div>
                    </div>
                  </label>
                </div>
                <div>Untuk mendaftarkan dan mengelola website desa</div>
              </div>
              {formik.errors.skperangkatdesa && formik.touched.skperangkatdesa ? (
                <div className="col-md-12">
                  <p className=" text-danger">{formik.errors.skperangkatdesa}</p>
                </div>
              ) : null}
            </div>

            <div className="row mt-3">
              <div className="col-md-4 ">
                <label
                  htmlFor="permohonan"
                  className="control-label "
                  style={{ fontSize: "14px" }}
                >
                  <b>
                  Permohonan dari Desa ke Menkominfo
                  </b>
                </label>
              </div>
              <div className="col-md-8">
                <div className="d-flex">
                  <input
                    value={permohonan}
                    className="form-control disable mt-2"
                  />
                  <label className="custom-file-upload  ">
                    <input
                      type="file"
                      name="permohonan"
                      onChange={(event) => (
                        handleChange(event),
                        formik.setFieldValue(
                          "permohonan",
                          event.target.files[0]
                        )
                      )}
                    ></input>
                    <div className="d-flex">
                      <i class="fas fa-upload"></i>
                      <div>Upload</div>
                    </div>
                  </label>
                </div>
                <div>Perihal permohonan domain desa.id</div>
              </div>
              {formik.errors.permohonan && formik.touched.permohonan ? (
                <div className="col-md-12">
                  <p className=" text-danger">{formik.errors.permohonan}</p>
                </div>
              ) : null}
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-between">
                <Button  color="secondary" variant="contained" onClick={onClick} >
                Previous
              </Button>
                <Button type="submit" color="primary" variant="contained"disabled={!(formik.isValid && formik.dirty)}>
                Submit
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

export default StepTwo;
