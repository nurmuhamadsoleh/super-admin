import { Button, Card, Col, Row } from "reactstrap";
import Plus from "../../assets/images/icons/plus.png";
const SubTitle = ({ title, addButton, addFunction, buttonLabel = "Tambah", customStyle = {} }) => {
  return (
    <Card className="p-4 border-0 shadow-sm" style={customStyle}>
      <Row className="">
        <Col className="text-left d-flex align-items-center">
          <p className="p-0 m-0" style={{ fontSize: 18, fontWeight: "500" }}>
            {title || ""}
          </p>
        </Col>
        {addButton && (
          <Col className="d-flex justify-content-end">
            <Button
              color="primary"
              onClick={addFunction}
              className="d-flex justify-content-center align-items-center align-middle"
            >
              <img src={Plus} alt="plus" style={{ height: "12px", width: "12px" }} />

              <p
                className="p-0 m-0 mx-1 align-middle text-center"
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                }}
              >
                {buttonLabel}
              </p>
            </Button>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default SubTitle;
