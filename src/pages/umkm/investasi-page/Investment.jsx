import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col, Input } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";

const INVESTMENT_HEADER = ["ID", "NAMA INVESTOR", "INVESTMENT", "PENGEMBALIAN", "TANGGAL", "WAKTU", "AKSI"];
const INVESTMENT_DATA = [
  {
    _id: 1232,
    ID: 1232,
    "NAMA INVESTOR": "Rara Sekar",
    INVESTMENT: "Rp10.000.000",
    PENGEMBALIAN: "4.5%",
    TANGGAL: "2022-01-12T03:57:24.150Z",
    WAKTU: "3 Bulan",
    AKSI: ["detail"],
  },
  {
    _id: 3376,
    ID: 3376,
    "NAMA INVESTOR": "Jajang Nurjangjang",
    INVESTMENT: "Rp2.000.000",
    PENGEMBALIAN: "10%",
    TANGGAL: "2022-01-11T02:07:31.236Z",
    WAKTU: "3 Bulan",
    AKSI: ["detail"],
  },
];

const InvestmentUMKM = () => {
  const [tableData, setTableData] = useState(INVESTMENT_DATA);
  const { path } = useRouteMatch();
  const { id: userId } = useParams();
  const history = useHistory();
  const onClickEdit = (id) => {
    history.push(`${path}/detail/${id}`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    "NAMA MITRA": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ID: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TARGET: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "DANA TERKUMPUL": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    WAKTU: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
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
      <SubTitle title="Investment" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
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
            headers={INVESTMENT_HEADER}
            tableData={tableData}
            sortBy={sortBy}
          />
        </CardBody>
        <Row className="d-flex justify-content-between align-items-center px-2 mt-2" style={{ maxHeight: "10vh" }}>
          <Col lg="6" xs="12" style={{ fontSize: "12px" }}>
            <p>Menampilkan 1 sampai 2 dari 2 data</p>
          </Col>
          <Col lg="6" xs="12" className="d-flex justify-content-end" style={{ fontSize: "12px" }}>
            <CustomPagination />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default InvestmentUMKM;
