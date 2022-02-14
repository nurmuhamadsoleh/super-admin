import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const BloodReportDataCard = ({ title, data }) => {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-white" style={{ borderBottom: "1px rgb(203,210, 217) dashed" }}>
        {title}
      </CardHeader>
      <CardBody className="text-center">
        <p>
          <b>Total</b>
        </p>
        <p>{data}</p>
      </CardBody>
    </Card>
  );
};

export default BloodReportDataCard;
