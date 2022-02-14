import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col, Input } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle, CustomPagination } from "../../../../components";
import UMKMOrderTable from "../table";
import { TABLE_DATA, TABLE_HEADER } from "./utils";
// headerList = # (id),PESANAN,WAKTU,PELANGGAN, STATUS PEMBAYARAN, TOTAL, STATUS PESANAN, TIPE PESANAN, AKSI

const UMKMPesananTerkirim = () => {
  const [tableData, setTableData] = useState(TABLE_DATA);
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
    "#": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    PELANGGAN: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    PESANAN: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "STATUS PEMBAYARAN": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TOTAL: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "STATUS PESANAN": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "TIPE PESANAN": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    WAKTU: {
      asc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(a.WAKTU) - new Date(b.WAKTU));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, asc: `, sorted);
      },
      desc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(b.WAKTU) - new Date(a.WAKTU));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, desc: `, sorted);
      },
    },
  };

  return (
    <Container>
      <SubTitle title="Pesanan Terkirim" addButton={false} addFunction={() => console.log("add fired")} />
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
          <UMKMOrderTable
            onClickEdit={onClickEdit}
            bordered={false}
            headers={TABLE_HEADER}
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

export default UMKMPesananTerkirim;
