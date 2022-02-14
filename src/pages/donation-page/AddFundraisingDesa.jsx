import { SubTitle } from "../../components";
import { Col, Card, Container, Row, Input, Label, Button } from "reactstrap";
import { ImageUploader } from "../../components";
import { useState } from "react";

import AvaPlaceholder from "../../assets/images/avatar_placeholder.png";

const AddFundraisingDesa = () => {
  const [imageFiles, setImageFiles] = useState({});

  return (
    <Container>
      <SubTitle title="Detail Penggalangan Dana" addButton={false} />
      <Row className="mt-4">
        <Col xs="12" lg="8">
          <Card className="p-3">
            <Row>
              <Col xs="12" lg="6">
                <Label>Judul *</Label>
                <Input />
              </Col>
              <Col xs="12" lg="6">
                <Label>Kategori *</Label>

                <Input />
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6">
                <Label>Deskripsi</Label>
                <Input type="textarea" style={{ minHeight: "100px" }} />
              </Col>
              <Col xs="12" lg="6">
                <Label>Target Dana</Label>
                <Input />
                <Label>Target Dana</Label>
                <Input />
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <Label>Alamat *</Label>
                <Input type="textarea" style={{ height: "200px" }} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card className="p-3">
            <Row>
              <Col xs="12" className="d-flex justify-content-center flex-column align-items-center">
                <div className="d-flex flex-row align-items-center w-100 my-3">
                  <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
                </div>

                <img
                  src={imageFiles.preview || AvaPlaceholder}
                  alt="profile"
                  style={{ height: "200px", width: "100%", maxWidth: "200px" }}
                />
              </Col>
            </Row>
            <hr />
            <Row className="d-flex flex-row flex-nowrap justify-content-end align-items-center mt-4">
              <Col xs="auto" className="mx-1 p-0">
                <Button outline>Batalkan</Button>
              </Col>
              <Col xs="auto" className="mx-1 p-0">
                <Button color="primary">Simpan</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddFundraisingDesa;
