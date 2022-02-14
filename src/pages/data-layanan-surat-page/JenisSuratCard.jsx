import { Button, Card, Col, Row } from "reactstrap";

const JenisSuratCard = ({ title, data, isi1, isi2, isi3 }) => {
    return (
        <Col sm="4">
            <Card className=" w-100 p-3 m-2 " style={{ boxShadow: "0px 4px 4px 0px #00000040", borderRadius: "10px" }} >
                <div style={{ alignItems: "right" }}>
                    <b className="m-0 p-0">{title || ""}</b>
                    <div style={{ fontSize: "12px", color: "grey" }}>
                        <p className="m-0 p-0">{isi1 || ""}</p>
                        <p className="m-0 p-0">{isi2 || ""}</p>
                        <p className="m-0 p-0">{isi3 || ""}</p>
                    </div>
                </div>
            </Card >
        </Col>
    );
};

export default JenisSuratCard;
