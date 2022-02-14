import { Card, Col, Row } from "reactstrap";

const BloodReportCard = ({ icon, title, data, color }) => {
  return (
    <Card className="p-3 mt-3  shadow-sm border-0">
      <Row>
        <Col xs="4" className="d-flex justify-content-center align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ borderRadius: "50%", backgroundColor: color, width: "57px", height: "57px" }}
          >
            <img src={icon} alt={title + " card"} style={{ height: "40px", width: "40px", objectFit: "cover" }} />
          </div>
        </Col>
        <Col xs="8">
          <p style={{ fontSize: "12px" }}>{title}</p>
          <p style={{ fontSize: "24px" }}>
            <b>{data}</b>
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default BloodReportCard;
