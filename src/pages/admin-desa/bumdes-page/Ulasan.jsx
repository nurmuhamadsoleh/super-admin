import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, CardTitle, Container, Row, Col, Input, Button } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";

const BUMDES_ULASAN_HEADER = ["NO", "NAMA", "PENGULAS", "ULASAN", "RATING", "WAKTU"];
const BUMDES_ULASAN_TABLE_DATA = [
  {
    NO: 1,
    NAMA: "Paket 1 Wisata Alam Endah",
    PENGULAS: "Rara Sekar",
    ULASAN: "Tempat bagus, bersih dan children-friendly. Sangat cocok untuk keluarga berpiknik di akhir pekan",
    RATING: 4,
    WAKTU: "21 Aug 2021 22:46:30",
  },
  {
    NO: 2,
    NAMA: "Farmhouse School Holiday Package",
    PENGULAS: "Imas Mintarsih",
    ULASAN:
      "Lebih bagus difoto daripada aslinya. Tempat penuh oleh turis, serba ngantri untuk semua spot foto dan wahana bermain",
    RATING: 3,
    WAKTU: "24 Dec 2021 15:20:00",
  },
];

const UlasanBumdes = () => {
  const [tableData, setTableData] = useState(BUMDES_ULASAN_TABLE_DATA);
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
  //   "NO", "NAMA", "PENGULAS", "ULASAN", "RATING", "WAKTU"
  const sortBy = {
    NO: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NAMA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    PENGULAS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ULASAN: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    RATING: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    WAKTU: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container>
      <SubTitle title="Ulasan" addButton={true} addFunction={() => console.log("add fired")} />
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
            headers={BUMDES_ULASAN_HEADER}
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

export default UlasanBumdes;
