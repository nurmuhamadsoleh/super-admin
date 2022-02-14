import { Button, Card, Col, Row } from "reactstrap";

const BuatDataCard = ({ title, icon, data }) => {
    return (
        <Col>
            <Card className="w-100 d-flex flex-row flex-nowrap overflow-auto my-3 " style={{ boxShadow: "0px 4px 4px 0px #00000040", borderRadius: "10px" }} >
                <Button color="light" className="p-4 h-100 text-center align-middle m-0 w-100">
                    <Col className="d-flex justify-content-between">
                        <b className="m-0 p-0">{title || ""}</b>
                        <img src={icon} style={{ width: "20px", height: "20px" }} />
                    </Col>
                </Button>
            </Card >
        </Col>
    );
};

export default BuatDataCard;
