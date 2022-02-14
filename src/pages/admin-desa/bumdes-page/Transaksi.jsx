import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, CardTitle, Container, Row, Col, Input, Button } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";

const BUMDES_TRANSAKSI_HEADER = ["ORDER", "NAMA", "KATEGORI", "PRODUK", "STATUS", "TOTAL", "AKSI"];
const BUMDES_TRANSAKSI_TABLE_DATA = [
  {
    ORDER: 109123,
    NAMA: "Rara Sekar",
    KATEGORI: "Wisata",
    PRODUK: "Paket 1 Wisata Alam Endah",
    STATUS: "Selesai",
    TOTAL: "Rp2.000.000",
    AKSI: ["detail"],
  },
  {
    ORDER: 182133,
    NAMA: "Nagita Slavina",
    KATEGORI: "UMKM",
    PRODUK: "Kain Sutra 1 Roll",
    STATUS: "Selesai",
    TOTAL: "Rp15.500.000",
    AKSI: ["detail"],
  },
];

const TransaksiBumdes = () => {
  const [tableData, setTableData] = useState(BUMDES_TRANSAKSI_TABLE_DATA);
  const { path } = useRouteMatch();
  const history = useHistory();
  const onAddBumdes = () => {
    history.push(`${path}/add`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  //   ["ORDER", "NAMA", "KATEGORI", "PRODUK", "STATUS", "TOTAL", "AKSI"]
  const sortBy = {
    ORDER: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NAMA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    KATEGORI: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    PRODUK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TOTAL: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container>
      <SubTitle title="Transaksi" addButton={true} addFunction={() => console.log("add fired")} />
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
            bordered={false}
            // striped={true}
            headers={BUMDES_TRANSAKSI_HEADER}
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

export default TransaksiBumdes;
