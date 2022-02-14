import { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle, Col, Container, Input, Label, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { SubTitle } from "../../../components";

//dummy data
const USERS_DATA = [
  {
    _id: 1,
    NIK: "3273212309930005",
    "NAMA MITRA": "Asep",
    ALAMAT: "Jalan Raya Bandung-Sumedang No.121",
    "NO TELEPON": "08810819908",
    KEMITRAAN: "UMKM",
  },
  {
    _id: 2,
    NIK: "3273212309930009",
    "NAMA MITRA": "Erik",
    ALAMAT: "Jalan Pegangsaan Timur No.45",
    "NO TELEPON": "080989999",
    KEMITRAAN: "Ojek Desa",
  },
  {
    _id: 3,
    NIK: "3273212309930000",
    "NAMA MITRA": "Dadang",
    ALAMAT: "Jalan Cicendo No.1",
    "NO TELEPON": "0817517513",
    KEMITRAAN: "Jab Food",
  },
];

const AddPengajuanMitraBumdes = () => {
  const [userData, setUserData] = useState({ NIK: "", "NAMA MITRA": "", ALAMAT: "", "NO TELEPON": "", KEMITRAAN: "" });
  const { id: userId } = useParams();

  useEffect(() => {
    if (userId === "1") setUserData(USERS_DATA[0]);
    if (userId === "2") setUserData(USERS_DATA[1]);
    if (userId === "3") setUserData(USERS_DATA[2]);
  }, []);

  return (
    <Container>
      <SubTitle title="Pengajuan Mitra" addButton={false} />
      <Card className="p-4 mt-4 border-0 shadow-sm">
        <CardTitle>LENGKAPI DATA DIBAWAH INI</CardTitle>
        <CardBody>
          <Row>
            <Col xs="12">
              <Label>NIK</Label>
              <Input name="NIK" type="number" value={userData.NIK} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Label>Nama Mitra</Label>
              <Input name="mitraName" type="text" value={userData["NAMA MITRA"]} />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Label>Alamat</Label>
              <Input name="address" type="address" style={{ height: "105px" }} value={userData.ALAMAT} />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="6">
              <Label>No. Telepon</Label>
              <Input name="phoneNumber" type="number" value={userData["NO TELEPON"]} />
            </Col>
            <Col xs="12" lg="6">
              <Label>Kemitraan</Label>
              <Input name="partner" type="text" value={userData.KEMITRAAN} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-end float-end mt-3">
            <Col xs="12" lg="3s" className="float-right">
              <Button color="outline-secondary" className="me-3">
                Tolak
              </Button>
              <Button color="primary">Setujui</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddPengajuanMitraBumdes;
