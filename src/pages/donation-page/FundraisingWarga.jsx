import { Col, Card, Container, Row } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";
import { useHistory, useRouteMatch } from "react-router";
const BLOOD_PROVIDER_HEADER = ["NAMA", "ALAMAT", "STATUS", "AKSI"];
const BLOOD_PROVIDER_TABLE_DATA = [
  {
    NAMA: "Asep",
    ALAMAT: "Garut",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Erik",
    ALAMAT: "Jakarta",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Dadang",
    ALAMAT: "Bandung",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
];

const FundraisingWarga = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const onAddDonation = () => {
    history.push(`${path}/add`);
  };

  return (
    <Container>
      <SubTitle title="Penggalangan Dana" addButton={true} addFunction={onAddDonation} />
      <Card className="mt-4 p-4">
        <Row style={{ fontSize: "14px" }} className="my-3">
          <Col xs="auto" className="d-flex justify-content-center align-items-center">
            Semua{" "}
            <span className="rounded p-1 px-3 m-0 mx-2" style={{ backgroundColor: "#2F80ED", color: "white" }}>
              0
            </span>
          </Col>
          <Col xs="auto" className="d-flex justify-content-center align-items-center">
            Diproses{" "}
            <span className="rounded p-1 px-3 m-0 mx-2" style={{ backgroundColor: "#2F80ED", color: "white" }}>
              0
            </span>
          </Col>
          <Col xs="auto" className="d-flex justify-content-center align-items-center">
            Selesai{" "}
            <span className="rounded p-1 px-3 m-0 mx-2" style={{ backgroundColor: "#2F80ED", color: "white" }}>
              0
            </span>
          </Col>
        </Row>
        <CustomTable headers={BLOOD_PROVIDER_HEADER} tableData={BLOOD_PROVIDER_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default FundraisingWarga;
