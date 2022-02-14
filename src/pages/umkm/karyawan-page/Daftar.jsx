import { useState } from "react";
// import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col, Input } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";
import UMKMKaryawanTable from "./table";
// headerList = #, ID, NAMA
const TABLE_HEADER = ["#", "NAMA", "EMAIL", "TELEPON", "PERAN", "AKSI"];
const TABLE_DATA = [
  {
    _id: 1,
    "#": 1,
    NAMA: "Asep Nurjaman",
    EMAIL: "nurjaman.asep@email.com",
    TELEPON: "081275756343",
    PERAN: "Karyawan",
    AKSI: ["read", "delete"],
  },
  {
    _id: 2,
    "#": 2,
    NAMA: "Encang Junaedi",
    EMAIL: "encaaaangj@yahuu.com",
    TELEPON: "081590908765",
    PERAN: "Kurir",
    AKSI: ["read", "delete"],
  },
];

const UMKMDaftarKaryawanPage = () => {
  const [tableData, setTableData] = useState(TABLE_DATA);
  const { path } = useRouteMatch();
  const history = useHistory();
  const onClickEdit = (id) => {
    history.push(`${path}/detail/${id}`);
  };

  return (
    <Container>
      <SubTitle title="Daftar Karyawan" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Col className="p-3 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px dotted" }}>
            <div>Tabel Karyawan</div>
            <div>
              <Input type="text" placeholder="Cari" />
            </div>
          </Col>
          <UMKMKaryawanTable
            onClickEdit={onClickEdit}
            bordered={false}
            headers={TABLE_HEADER}
            tableData={tableData}
            className="mt-2"
          />
        </CardBody>
        <Row
          className="d-flex justify-content-between align-items-center px-2 mt-2"
          style={{ maxHeight: "10vh" }}
        ></Row>
      </Card>
    </Container>
  );
};

export default UMKMDaftarKaryawanPage;
