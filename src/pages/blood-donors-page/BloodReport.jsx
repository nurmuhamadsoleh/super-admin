import { Card, CardHeader, Col, Container, Row, Input, CardBody } from "reactstrap";

import { SubTitle } from "../../components";
import BloodReportCard from "./BloodReportCard";
import BloodReportDataCard from "./BloodReportDataCard";
import menu from "../../assets/images/icons/menu.png";
import checkCircle from "../../assets/images/icons/check-circle.png";
import xCircle from "../../assets/images/icons/x-circle.png";
import airPlay from "../../assets/images/icons/airplay.png";

const BloodReport = () => {
  const onAddBloodReport = () => {};

  const onChangeDonors = () => {};

  return (
    <Container>
      <SubTitle title="Report Darah" addButton={true} addFunction={onAddBloodReport} />
      <Row>
        <Col xs="12" lg="3">
          <BloodReportCard icon={menu} title="Permintaan Darah" data={0} color="rgb(231,184,65)" />
        </Col>
        <Col xs="12" lg="3">
          <BloodReportCard icon={checkCircle} title="Total Terpenuhi" data={0} color="rgb(91,200,112)" />
        </Col>
        <Col xs="12" lg="3">
          <BloodReportCard icon={xCircle} title="Total Batal" data={0} color="rgb(225,53,48)" />
        </Col>
        <Col xs="12" lg="3">
          <BloodReportCard icon={airPlay} title="Tingkat Konversi" data={0} color="rgb(244,158,65)" />
        </Col>
      </Row>

      <Card className="mt-3 border-0 shadow-sm">
        <CardHeader className="py-3 bg-white" style={{ borderBottom: "1px rgb(203,210, 217) dashed" }}>
          <Input
            type="select"
            className="w-25 float-end"
            name="familyStatus"
            id="familyStatus"
            onChange={onChangeDonors}
          >
            <option>Pendonor</option>
            <option>Didonor</option>
          </Input>
        </CardHeader>
        <CardBody>
          <Row className="mb-5 mt-3">
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Jumlah Warga (Pendonor)" data="0" />
            </Col>
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Warga (Pendonor)" data="0" />
            </Col>
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Golongan Darah yang Didonorkan" data="0" />
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Jumlah Warga (Butuh)" data="0" />
            </Col>
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Warga (Butuh)" data="0" />
            </Col>
            <Col xs="12" lg="4" className="my-2">
              <BloodReportDataCard title="Golongan Darah yang Dibutuhkan" data="0" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default BloodReport;
