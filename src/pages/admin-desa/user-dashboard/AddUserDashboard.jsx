import { useState } from "react";
import { Button, Card, Container, Label, Input, Row, Col } from "reactstrap";

import AvaPlaceholder from "../../../assets/images/avatar_placeholder.png";
import { ImageUploader, SubTitle } from "../../../components";

const AddUserDashboard = () => {
  const [imageFiles, setImageFiles] = useState({});
  return (
    <Container fluid className="px-5">
      <SubTitle title="Data Pegawai" />

      <Row className="mt-3">
        <Col xs="12" lg="8">
          <Card className="p-4">
            <h5>Profile</h5>
            <hr />
            <Row>
              <Col xs="12">
                <Label>NIK *</Label>
                <Input name="nik" type="text" placeholder="NIK" />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Label>Password *</Label>
                <Input name="password" type="password" placeholder="Password" />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Label>Jabatan *</Label>
                <Input name="title" type="text" placeholder="Jabatan" />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Label>NIP *</Label>
                <Input name="nip" type="text" placeholder="NIP" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card className="p-4">
            <h5>Photo</h5>
            <hr />

            <Row className="mt-3">
              <Col xs="12">
                <img
                  src={imageFiles.preview || AvaPlaceholder}
                  alt="profile"
                  style={{ height: "auto", width: "100%" }}
                />
                <div className="d-flex flex-row align-items-center w-100 my-3">
                  <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
                </div>
              </Col>
              <Col xs="12">
                <Label>Nama *</Label>
                <Input name="nama" type="text" placeholder="Nama" />
              </Col>
              <Col xs="12">
                <Label>Alamat *</Label>
                <Input name="alamat" type="text" placeholder="Alamat" />
              </Col>
              <Col xs="6">
                <Label>Dusun *</Label>
                <Input name="dusun" type="text" placeholder="Dusun" />
              </Col>
              <Col xs="3">
                <Label>RT *</Label>
                <Input name="rt" type="text" placeholder="RT" />
              </Col>
              <Col xs="3">
                <Label>RW *</Label>
                <Input name="rw" type="text" placeholder="RW" />
              </Col>
            </Row>
            <Col xs="12" className="mt-3">
              <Button color="danger" outline>
                Batalkan
              </Button>
              <Button color="primary" className="mx-3">
                Simpan
              </Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUserDashboard;
