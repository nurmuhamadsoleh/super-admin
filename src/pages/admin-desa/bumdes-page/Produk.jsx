import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, CardTitle, Container, Row, Col, Input, Button } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";

const BUMDES_PRODUK_HEADER = ["NAMA PRODUK", "HARGA", "STOCK", "KATEGORI", "STATUS", "AKSI"];
const BUMDES_PRODUK_TABLE_DATA = [
  {
    "NAMA PRODUK": "Dress Merah Marun",
    HARGA: "Rp200.000",
    STOCK: "150",
    KATEGORI: "Fashion Wanita",
    STATUS: "Aktif",
    AKSI: ["detail"],
  },
  {
    "NAMA PRODUK": "Kemeja Polos Pria",
    HARGA: "Rp350.000",
    STOCK: "10",
    KATEGORI: "Fashion Pria",
    STATUS: "Aktif",
    AKSI: ["detail"],
  },
  {
    "NAMA PRODUK": "Jogger Pants",
    HARGA: "Rp180.000",
    STOCK: "53",
    KATEGORI: "Fashion Pria",
    STATUS: "Aktif",
    AKSI: ["detail"],
  },
];

const ProdukBumdes = () => {
  const [tableData, setTableData] = useState(BUMDES_PRODUK_TABLE_DATA);
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
  //"NAMA PRODUK", "HARGA", "STOCK", "KATEGORI", "STATUS",
  const sortBy = {
    "NAMA PRODUK": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    HARGA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STOCK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    KATEGORI: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container>
      <SubTitle title="Produk" addButton={true} addFunction={onAddBumdes} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardTitle className="p-3">
          <Row className="d-flex justify-content-between">
            <Col>Produk</Col>
            <Col>
              <div className="d-flex justify-content-end">
                <div style={{ width: "30%", marginRight: "1rem" }}>
                  <Input type="select" className="form-select form-control">
                    <option>Semua</option>
                    <option>Aktif</option>
                    <option>Non-aktif</option>
                  </Input>
                </div>
                <div style={{ width: "30%" }}>
                  <Button color="primary" className="form-select">
                    <i className="fas fa-filter me-2"></i>
                    Filter
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </CardTitle>
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
          <CustomTable bordered={false} headers={BUMDES_PRODUK_HEADER} tableData={tableData} sortBy={sortBy} />
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

export default ProdukBumdes;
