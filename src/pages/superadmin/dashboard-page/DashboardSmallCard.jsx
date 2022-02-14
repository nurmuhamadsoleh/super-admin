import { Card, Col, Row } from "reactstrap";

const DashboardSmallCard = ({ title, icon, data, className, style }) => {
  return (
    <Col className="mb-2" xs="12" lg="4">
      <Card className="shadow-sm p-4 border-0">
        <Row className="d-flex justify-content-evenly align-items-center">
          <Col xs="9" className="align-middle">
            <b className="m-0 p-0" style={{ fontSize: "24px" }}>
              {data || ""}
            </b>
            <p className="m-0 p-0">{title || ""}</p>
          </Col>
          <Col xs="3" className="d-flex justify-content-center align-items-center">
            <i className={className} style={style}></i>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default DashboardSmallCard;
