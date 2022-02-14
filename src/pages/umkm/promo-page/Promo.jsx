import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col, Input } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";
import UMKMPromoTable from "./table";

const TABLE_HEADER = ["#", "JUDUL", "GAMBAR", "STATUS"];
const TABLE_DATA = [
  {
    _id: 1,
    "#": 1,
    JUDUL: "Chinese New Year Promo",
    GAMBAR: "https://i.ibb.co/1d0FdQ3/PROMO-opening-burger-kalap-20211101065702.jpg",
    STATUS: "keluar",
  },
  {
    _id: 2,
    "#": 2,
    JUDUL: "Free-Ongkir Weekend Deals",
    GAMBAR: "https://tinyurl.com/3tmj923k",
    STATUS: "keluar",
  },
];

const UMKMDaftarProdukPage = () => {
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
  // headerList = #, Nama, Tipe, Harga, Status, Aksi

  const sortBy = {
    "#": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NAMA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TIPE: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    HARGA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container>
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
            <Col className="d-flex justify-content-start align-items-center">
              <div className="w-50">
                <h5 className="ms-3">Daftar Promo</h5>
              </div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div className="w-50" style={{ marginRight: "1.5rem" }}>
                <Input type="text" className="border border-1" placeholder="Cari" />
              </div>
            </Col>
          </Row>
          <UMKMPromoTable
            onClickEdit={onClickEdit}
            bordered={false}
            borderless={true}
            headers={TABLE_HEADER}
            tableData={tableData}
            sortBy={sortBy}
          />
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMDaftarProdukPage;
