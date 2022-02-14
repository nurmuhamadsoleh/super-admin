import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Input,
  Label,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  FormGroup,
} from "reactstrap";
import { SubTitle } from "..";
import ReactQuill from "react-quill";

const FORM_DATA = [
  {
    label: "Code",
    type: "text",
    name: "code",
    placeholder: "SRT002",
  },
  {
    label: "Nama Judul Di Naskah Surat",
    type: "text",
    name: "namajudul",
    placeholder: "Surat Tugas/Perintah",
  },
  {
    label: "Nama Surat Di Aplikasi",
    type: "text",
    name: "namasurat",
    placeholder: "Masukkan nama surat",
  },
  {
    label: "Target",
    type: "select",
    name: "target",
    placeholder: "",
    option: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "tes",
        value: "tes",
      },
      {
        label: "123",
        value: "123",
      },
    ],
  },
  {
    label: "Status",
    type: "select",
    name: "status",
    placeholder: "",
    option: [
      {
        label: "Aktif",
        value: "1",
      },
      {
        label: "Tidak aktif",
        value: "0",
      },
    ],
  },
];
const TEMPLATE_OPTION = [
  {
    label: "Provinsi *",
  },
  {
    label: "Kota *",
  },
  {
    label: "Kecamatan *",
  },
  {
    label: "Desa *",
  },
  {
    label: "Tanggal Surat *",
  },
  {
    label: "Jabatan *",
  },
  {
    label: "Jabatan Sekdes & Kasi *",
  },
  {
    label: "Nomor Surat *",
  },
  {
    label: "Pejabat *",
  },
];
const TEXTEDITOR_VALUE = "<b><u>Surat Tugas/Perintah</u></b>";
const Templatesurat = () => {
  return (
    <Container fluid className="px-2">
      <SubTitle title="Jenis Surat" />
      <Row className="mt-4">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Atribut</CardTitle>
              <hr />

              {FORM_DATA.map((data, index) => {
                let { placeholder, name, label, type, option } = data;
                return (
                  <FormGroup key={index}>
                    <Label for="exampleEmail">
                      {label} <span className="text-danger">*</span>{" "}
                    </Label>
                    {/* JIKA TYPE SELECT OPTION */}
                    {type === "select" ? (
                      <Input name={name} type={type}>
                        {option
                          ? option.map((data, index) => {
                              let { label } = data;
                              return <option key={index}> {label} </option>;
                            })
                          : null}
                      </Input>
                    ) : (
                      <Input
                        name={name}
                        placeholder={placeholder}
                        type={type}
                      />
                    )}
                  </FormGroup>
                );
              })}

              <FormGroup className="mt-3" check>
                <Input type="checkbox" name="tampilkan" />{" "}
                <Label check>Tampilkan Di Apps</Label>
              </FormGroup>
              <FormGroup className="mt-1" check>
                <Input type="checkbox" checked name="kop" />{" "}
                <Label check>Kop Surat</Label>
              </FormGroup>
              <FormGroup className="mt-1" check>
                <Input type="checkbox" checked name="judul" />{" "}
                <Label check>Judul Surat</Label>
              </FormGroup>

            </CardBody>
          </Card>
        </Col>
        <Col md="8">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Template</CardTitle>
              <hr />
              <Row>
                {TEMPLATE_OPTION.map((data, index) => {
                  let { label } = data;
                  return (
                    <Col md="2" key={index}>
                      <FormGroup className="mb-2">
                        <Input id="exampleSelect" name="select" type="select">
                          <option>{label} </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  );
                })}
              </Row>

              <ReactQuill
                className="mt-3 mb-5"
                value={TEXTEDITOR_VALUE}
                onChange=""
                theme="snow"
                style={{ height: "500px" }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Templatesurat;
