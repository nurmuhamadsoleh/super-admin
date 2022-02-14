import { useState } from "react";
// import { orderBy } from "lodash";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";
import UMKMKategoriTable from "./table";
// headerList = #, ID, NAMA
const TABLE_HEADER = ["#", "ID", "NAMA"];
const TABLE_DATA = [
  {
    "#": 1,
    ID: 1101,
    NAMA: "Varieties",
  },
  {
    "#": 2,
    ID: 1102,
    NAMA: "Thai",
  },
  {
    "#": 3,
    ID: 1103,
    NAMA: "Snacks",
  },
  {
    "#": 4,
    ID: 1104,
    NAMA: "Pizza",
  },
  {
    "#": 5,
    ID: 1105,
    NAMA: "Pasta",
  },
  {
    "#": 6,
    ID: 1106,
    NAMA: "Mexican Food",
  },
  {
    "#": 7,
    ID: 1107,
    NAMA: "Noodles",
  },
  {
    "#": 8,
    ID: 1108,
    NAMA: "Fast Food",
  },
  {
    "#": 9,
    ID: 1109,
    NAMA: "Chinese Food",
  },
  {
    "#": 10,
    ID: 1110,
    NAMA: "Cake",
  },
];

const UMKMKategoriPage = () => {
  const [tableData, setTableData] = useState(TABLE_DATA);
  const { path } = useRouteMatch();
  const history = useHistory();
  const onClickEdit = (id) => {
    history.push(`${path}/detail/${id}`);
  };

  return (
    <Container>
      <SubTitle title="Kategori" addButton={false} addFunction={() => console.log("add fired")} />
      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Col className="p-3" style={{ borderBottom: "1px dotted" }}>
            Daftar Kategori
          </Col>
          <UMKMKategoriTable
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

export default UMKMKategoriPage;
