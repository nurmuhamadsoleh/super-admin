import { useState } from "react";
import { Container, Card, CardBody, Row, Col, Input, Label } from "reactstrap";
import { SubTitle } from "../../../components";
import imagePlaceholder from "../../../assets/images/image_placeholder.png";

const UMKMTambahKaryawanPage = () => {
  const [imgPreview, setImgPreview] = useState(null);

  const handleImgPreview = () => {
    // eslint-disable-next-line no-restricted-globals
    setImgPreview(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <Container>
      <SubTitle title="Formulir Karyawan" addButton={false} />
      <Card className="mt-4 shadow-sm">
        <CardBody>
          <Row>
            <Col lg="6" sm="12">
              <Label>Nama Lengkap</Label>
              <Input type="text" placeholder="Contoh: Asep Nurjaman" />
            </Col>
            <Col lg="6" sm="12">
              <Label>Nama Panggilan</Label>
              <Input type="text" placeholder="Contoh: Maman" />
            </Col>
          </Row>
          <Row>
            <Col lg="6" sm="12">
              <Label>No. Telepon/HP</Label>
              <Input type="text" placeholder="Contoh: 080989999" />
            </Col>
            <Col lg="6" sm="12">
              <Label>Peran</Label>
              <Input type="select" className="form-control form-select">
                <option hidden value="">
                  Pilih Peran
                </option>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col lg="6" sm="12">
              <Label>Email</Label>
              <Input type="text" placeholder="Contoh: nurjamanaseo@email.com" />
            </Col>
            <Col lg="6" sm="12">
              <Label>Kata Sandi</Label>
              <Input type="password" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg="12">
              <Label>Foto Karyawan</Label>
              <Input
                type="file"
                accept="image/jpeg, image/png"
                className="w-100 border border-1"
                style={{ cursor: "pointer" }}
                onChange={handleImgPreview}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            {imgPreview ? (
              <img src={imgPreview} alt="profile preview" style={{ height: "150px", width: "150px" }} />
            ) : (
              <img src={imagePlaceholder} alt="avatar" style={{ height: "150px", width: "150px" }} />
            )}
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMTambahKaryawanPage;
