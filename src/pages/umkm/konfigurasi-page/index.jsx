import { Container, Row, Col, Card, CardBody, Input, Button, Label, CardTitle } from "reactstrap";
import Switch from "react-switch";
import { SubTitle } from "../../../components";

const UMKMKonfigurasiPage = () => {
  return (
    <Container>
      <SubTitle title="Restoran Setup" addButton={false} />
      <Card className="mx-5 rounded-3 border-0 my-3">
        <div className="d-flex justify-content-between p-2 shadow-sm">
          <h5>Restoran Sementara Tutup</h5>
          <Switch checked={false} uncheckedIcon={false} />
        </div>
      </Card>

      <Card>
        <CardTitle className="border-bottom border-1 p-3">Restoran Settings</CardTitle>
        <CardBody>
          <Row>
            <Col lg="4" sm="12">
              <div className="border border-1 d-flex justify-content-between align-items-center p-2 rounded-3">
                <h6 className="mb-0">Pesanan Terjadwal</h6>
                <Switch checked={true} checkedIcon={false} onColor="#2F80ED" />
              </div>
            </Col>
            <Col lg="4" sm="12">
              <div className="border border-1 d-flex justify-content-between align-items-center p-2 rounded-3">
                <h6 className="mb-0">Pengiriman</h6>
                <Switch checked={true} checkedIcon={false} onColor="#2F80ED" />
              </div>
            </Col>
            <Col lg="4" sm="12">
              <div className="border border-1 d-flex justify-content-between align-items-center p-2 rounded-3">
                <h6 className="mb-0">Bawa Pulang</h6>
                <Switch checked={true} checkedIcon={false} onColor="#2F80ED" />
              </div>
            </Col>
            <Col lg="4" sm="12">
              <Label>Waktu Buka</Label>
              <Input type="time" />
            </Col>
            <Col lg="4" sm="12">
              <Label>Waktu Tutup</Label>
              <Input type="time" />
            </Col>
            <Col lg="4" sm="12">
              <Label>Jumlah Minimum Pesanan</Label>
              <Input type="text" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg="7" sm="12">
              <Label>Hari Libur Mingguan</Label>
              <Input type="select" className="form-control form-select">
                <option hidden value="">
                  Pilih hari
                </option>
                <option></option>
                <option></option>
              </Input>
            </Col>
            <Col lg="5" sm="12" className="border border-1 rounded-3">
              <div className="d-flex justify-content-between">
                <Label for="gst">GST</Label>
                <Switch checked={false} uncheckedIcon={false} />
              </div>
              <Input id="gst" type="text" />
            </Col>
          </Row>
          <Col className="mt-4">
            <Button color="primary" className="rounded-3" style={{ width: "150px" }}>
              Update
            </Button>
          </Col>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMKonfigurasiPage;
