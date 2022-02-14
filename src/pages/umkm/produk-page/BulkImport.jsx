import { Card, CardBody, Container, Row, Col, Input, CardTitle, Button } from "reactstrap";
import { SubTitle } from "../../../components";
// headerList = # (id),PESANAN,WAKTU,PELANGGAN, STATUS PEMBAYARAN, TOTAL, STATUS PESANAN, TIPE PESANAN, AKSI

const UMKMBulkImport = () => {
  return (
    <Container>
      <SubTitle title="Bulk Import" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Row className="ms-3">
            <h5 className="fw-bold">Instructions: </h5>
            <p className="m-0">1. Download the format file and fill it with proper data.</p>
            <p className="m-0">2. You can download the example file to understand how the data must be filled.</p>
            <p className="m-0">
              3. Once you have downloaded and filled the ormat file, upload it in the form below and submit.
            </p>
            <p className="m-0">4. After uploading foods you need to edit them and set image and variations.</p>
            <p className="m-0">5. You can get category id from their list, please input the right ids.</p>
          </Row>

          <Row className="m-3 p-3 border border-1 rounded-3">
            <div
              className="d-flex justify-content-between align-items-center mb-3"
              style={{ borderBottom: "1px solid black" }}
            >
              <CardTitle className="m-0 fw-bold">Import File Makanan</CardTitle>
              <Button>Download Format</Button>
            </div>

            <Input type="file" />
          </Row>
          <Row>
            <Col className="ms-3">
              <Button color="primary" className="w-25">
                Kirimkan
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMBulkImport;
