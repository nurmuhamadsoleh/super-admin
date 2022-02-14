import { Button, Col } from "reactstrap";

const BuatDataCard = ({ title, addFunction }) => {
    return (
        <Button
            onClick={addFunction}
            color="light" active className="py-4 my-3 border"
            style={{ borderRadius: "6px", width: "100%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", }} >
            <Col className="d-flex justify-content-between">
                <b className="m-0 p-0">{title || ""}</b>
                <i className="fas fa-chevron-right" />
            </Col>
        </Button>
    );
};

export default BuatDataCard;


