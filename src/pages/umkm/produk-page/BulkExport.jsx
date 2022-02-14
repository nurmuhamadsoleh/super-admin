import { Card, CardBody, Container, Row, Col, Input, CardTitle, Button } from "reactstrap";
import { SubTitle } from "../../../components";
// headerList = # (id),PESANAN,WAKTU,PELANGGAN, STATUS PEMBAYARAN, TOTAL, STATUS PESANAN, TIPE PESANAN, AKSI

const UMKMBulkExport = () => {
  return (
    <Container>
      <SubTitle title="Bulk Export" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Row className="m-3 p-3 border border-1 rounded-3">
            <CardTitle className=" fw-bold">Import File Makanan</CardTitle>

            <Input type="select" className="w-25 form-control form-select">
              <option hidden value="">
                Semua Data
              </option>
            </Input>
          </Row>
          <Row>
            <Col className="ms-3">
              <Button color="primary" style={{ width: "15%" }}>
                Kirimkan
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMBulkExport;
