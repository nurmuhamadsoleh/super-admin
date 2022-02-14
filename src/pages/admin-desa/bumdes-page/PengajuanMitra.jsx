import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, CardTitle, Container, Row, Col, Input } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";

const PENGAJUAN_MITRA_HEADER = ["NAMA MITRA", "NIK", "KEMITRAAN", "TANGGAL", "AKSI"];
const PENGAJUAN_MITRA_TABLE_DATA = [
  {
    _id: 1,
    "NAMA MITRA": "Asep",
    NIK: "3273212309930005",
    KEMITRAAN: "UMKM",
    TANGGAL: "2022-01-12T03:57:24.150Z",
    AKSI: ["read", "delete"],
  },
  {
    _id: 2,
    "NAMA MITRA": "Erik",
    NIK: "3273212309930009",
    KEMITRAAN: "Ojek Desa",
    TANGGAL: "2022-01-11T02:07:31.236Z",
    AKSI: ["read", "delete"],
  },
  {
    _id: 3,
    "NAMA MITRA": "Dadang",
    NIK: "3273212309930000",
    KEMITRAAN: "Jab Food",
    TANGGAL: "2021-12-30T04:24:49.660Z",
    AKSI: ["read", "delete"],
  },
];

const PengajuanMitraBumdes = () => {
  const [tableData, setTableData] = useState(PENGAJUAN_MITRA_TABLE_DATA);
  const { path } = useRouteMatch();
  const history = useHistory();
  const onAddBumdes = () => {
    history.push(`${path}/add`);
  };

  const onClickEdit = (id) => {
    console.log("id: ", id);
    console.log("path: ", path);
    history.push(`${path}/add/${id}`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    "NAMA MITRA": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NIK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    KEMITRAAN: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TANGGAL: {
      asc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(a.TANGGAL) - new Date(b.TANGGAL));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, asc: `, sorted);
      },
      desc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(b.TANGGAL) - new Date(a.TANGGAL));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, desc: `, sorted);
      },
    },
  };

  return (
    <Container>
      <SubTitle title="Pengajuan Mitra" addButton={true} addFunction={onAddBumdes} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardTitle className="p-3">Pengajuan Mitra</CardTitle>
        <CardBody className="p-0">
          <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
            <Col className="d-flex justify-content-start align-items-center">
              <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>Show</div>
              <div style={{ width: "15%" }}>
                <Input type="select" style={{ border: "solid 1px black" }}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </Input>
              </div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div style={{ marginRight: "1.5rem" }}>Pencarian</div>
              <div style={{ marginRight: "1.5rem" }}>
                <Input type="text" placeholder="Pencarian" style={{ border: "solid 1px black" }} />
              </div>
            </Col>
          </Row>
          <CustomTable
            onClickEdit={onClickEdit}
            bordered={false}
            headers={PENGAJUAN_MITRA_HEADER}
            tableData={tableData}
            sortBy={sortBy}
          />
        </CardBody>
        <Row className="d-flex justify-content-between align-items-center px-2 mt-2" style={{ maxHeight: "10vh" }}>
          <Col lg="6" xs="12" style={{ fontSize: "12px" }}>
            <p>Menampilkan 1 sampai 3 dari 3 data</p>
          </Col>
          <Col lg="6" xs="12" className="d-flex justify-content-end" style={{ fontSize: "12px" }}>
            <CustomPagination />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PengajuanMitraBumdes;
