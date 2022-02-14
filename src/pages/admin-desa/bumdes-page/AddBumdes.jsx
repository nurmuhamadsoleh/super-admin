import { Button, Card, CardBody, CardTitle, Col, Container, Input, Label, Row } from "reactstrap";
import { SubTitle } from "../../../components";

const AddBumdes = () => {
  return (
    <Container>
      <SubTitle title="Daftar Mitra" addButton={false} />
      <Card className="p-4 mt-4 border-0 shadow-sm">
        <CardTitle>LENGKAPI DATA DIBAWAH INI</CardTitle>
        <CardBody>
          <Row>
            <Col xs="12">
              <Label>NIK</Label>
              <Input name="NIK" type="number" />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Label>Nama Mitra</Label>
              <Input name="mitraName" type="text" />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Label>Alamat</Label>
              <Input name="address" type="address" style={{ height: "105px" }} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <Label>No. Telepon</Label>
              <Input name="phoneNumber" type="number" />
            </Col>
            <Col xs="12" lg="6">
              <Label>Kemitraan</Label>
              <Input name="partner" type="text" />
            </Col>
          </Row>
          <Row className="d-flex justify-content-end float-end mt-3">
            <Col xs="12" lg="3s" className="float-right">
              <Button color="primary">Daftarkan Mitra</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddBumdes;
