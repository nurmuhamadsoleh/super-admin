import { Button, Card, CardBody, CardTitle, Col, Container, Input, Label, Row } from "reactstrap";
import { SubTitle } from "../../../components";

const DetailInvestment = () => {
  return (
    <Container>
      <SubTitle title="Investment" addButton={false} />
      <Card className="p-4 mt-4 border-0 shadow-sm">
        <CardTitle>Detail Investment</CardTitle>
        <CardBody>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>ID</Label>
              <Input name="id" type="number" value={"1023"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>Nama Investor</Label>
              <Input name="nama_investor" type="text" value={"Rara Sekar"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>Jumlah Investment</Label>
              <Input name="jumlah_investment" type="text" value={"Rp10.000.000"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>Lama Permintaan</Label>
              <Input name="lama_permintaan" type="text" value={"3 Bulan"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>Tanggal</Label>
              <Input name="tanggal" type="text" value={"30 Desember 2021"} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" lg="8">
              <Label>Status</Label>
              <Input name="status" type="text" value={"On Going"} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DetailInvestment;
