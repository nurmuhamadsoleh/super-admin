import { useState } from "react";
import { orderBy } from "lodash";
import { Card, Container } from "reactstrap";
import { SubTitle } from "../../../components";
import { CustomTable } from "../../../components";
import { useHistory, useRouteMatch } from "react-router";

const USER_DASHBOARD_HEADER = ["Nama", "NIK", "Alamat", "Jabatan", "NIP", "Aksi"];
const USER_DASHBOARD_TABLE_DATA = [
  {
    Nama: "Edgar",
    NIK: 100123123123123,
    Alamat: "Bandung",
    Jabatan: "Admin",
    NIP: "1a1233123",
    Aksi: ["read", "delete"],
  },
  {
    Nama: "Asep",
    NIK: 200123123123123,
    Alamat: "Cirebon",
    Jabatan: "User",
    NIP: "1b1233123",
    Aksi: ["read", "delete"],
  },
  {
    Nama: "Dadang",
    NIK: 300123123123123,
    Alamat: "Jakarta",
    Jabatan: "Admin",
    NIP: "1c1233123",
    Aksi: ["read", "delete"],
  },
];

const UserDashboard = () => {
  const [tableData, setTableData] = useState(USER_DASHBOARD_TABLE_DATA);
  const history = useHistory();
  const { path } = useRouteMatch();
  const onClickAdd = () => {
    console.log("add");
    history.push(`${path}/add`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    Nama: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NIK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Alamat: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Jabatan: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NIP: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container className="px-2">
      <SubTitle title="Data Pegawai" addButton={true} addFunction={onClickAdd} buttonLabel="Tambah Data" />
      <Card className="mt-3">
        <div className="overflow-scroll">
          <CustomTable bordered={false} headers={USER_DASHBOARD_HEADER} tableData={tableData} sortBy={sortBy} />
        </div>
      </Card>
    </Container>
  );
};

export default UserDashboard;
