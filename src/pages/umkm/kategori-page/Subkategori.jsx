import { useState } from "react";
// import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";
import UMKMKategoriTable from "./table";
// headerList = #, ID, NAMA
const TABLE_HEADER = ["#", "ID", "Kategori Utama", "Sub Kategori"];
const TABLE_DATA = [
  {
    "#": 1,
    ID: 2101,
    "Kategori Utama": "Drinks & Beverages",
    "Sub Kategori": "Coffee",
  },
  {
    "#": 2,
    ID: 2102,
    "Kategori Utama": "Drinks & Beverages",
    "Sub Kategori": "Tea",
  },
  {
    "#": 3,
    ID: 2103,
    "Kategori Utama": "Fast Food",
    "Sub Kategori": "Burger",
  },
  {
    "#": 4,
    ID: 2104,
    "Kategori Utama": "Fast Food",
    "Sub Kategori": "Pizza",
  },
  {
    "#": 5,
    ID: 2105,
    "Kategori Utama": "Drinks & Beverages",
    "Sub Kategori": "Energy Drink",
  },
  {
    "#": 6,
    ID: 2106,
    "Kategori Utama": "Indonesian Food",
    "Sub Kategori": "Nasi Goreng",
  },
  {
    "#": 7,
    ID: 2107,
    "Kategori Utama": "Chinese Food",
    "Sub Kategori": "Kwetiaw",
  },
  {
    "#": 8,
    ID: 2108,
    "Kategori Utama": "Cake",
    "Sub Kategori": "Black Forest",
  },
  {
    "#": 9,
    ID: 2109,
    "Kategori Utama": "Cake",
    "Sub Kategori": "Red Velvet",
  },
  {
    "#": 10,
    ID: 2110,
    "Kategori Utama": "Cake",
    "Sub Kategori": "Strawberry Cheesecake",
  },
];

const UMKMSubkategoriPage = () => {
  const [tableData, setTableData] = useState(TABLE_DATA);
  const { path } = useRouteMatch();
  const history = useHistory();
  const onClickEdit = (id) => {
    history.push(`${path}/detail/${id}`);
  };

  return (
    <Container>
      <SubTitle title="Sub Kategori" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Col className="p-3" style={{ borderBottom: "1px dotted" }}>
            Daftar Sub Kategori
          </Col>
          <UMKMKategoriTable
            onClickEdit={onClickEdit}
            bordered={false}
            headers={TABLE_HEADER}
            tableData={tableData}
            className="mt-2"
          />
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMSubkategoriPage;
