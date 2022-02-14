import { useState } from "react";
import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col, Input } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";
import UMKMProdukTable from "./table";
// headerList = #, Nama, Tipe, Harga, Status, Aksi
const TABLE_HEADER = ["#", "NAMA", "TIPE", "HARGA", "STATUS", "AKSI"];
const TABLE_DATA = [
  {
    _id: 1,
    "#": 1,
    NAMA: "Burger Queen",
    IMAGE: "https://i.ibb.co/4s1xMFK/burger-icon-1.jpg",
    TIPE: "Fast Food",
    HARGA: "Rp35.000",
    STATUS: true,
    AKSI: ["detail", "delete"],
  },
  {
    _id: 2,
    "#": 2,
    NAMA: "Mie Goreng Spesial",
    IMAGE: "https://www.vietworldkitchen.com/wp-content/uploads/2020/06/panfried-noodle-done-square.jpg",
    TIPE: "Noodle",
    HARGA: "Rp50.000",
    STATUS: true,
    AKSI: ["detail", "delete"],
  },
  {
    _id: 3,
    "#": 3,
    NAMA: "Long Black Coffee",
    IMAGE: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    TIPE: "Drinks & Beverages",
    HARGA: "Rp30.000",
    STATUS: true,
    AKSI: ["detail", "delete"],
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
      <SubTitle title="Daftar Makanan" addButton={true} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
            <Col className="d-flex justify-content-start align-items-center">
              <div className="w-50">
                <Input type="text" className="border border-1 ms-3" placeholder="Cari disini" />
              </div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div className="w-50" style={{ marginRight: "1.5rem" }}>
                <Input type="select" className="border border-1 form-control form-select">
                  <option hidden value="">
                    Semua Kategori
                  </option>
                </Input>
              </div>
            </Col>
          </Row>
          <UMKMProdukTable
            onClickEdit={onClickEdit}
            bordered={false}
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
