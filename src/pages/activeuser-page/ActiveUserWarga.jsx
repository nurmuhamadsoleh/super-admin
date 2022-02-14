import { Container } from "reactstrap";

import { SubTitle } from "../../components";
import { CustomTable } from "../../components";

const ACTIVE_USER_WARGA_HEADER = ["Nama", "NIK", "Alamat", "No Hp", "Status"];
const ACTIVE_USER_WARGA_TABLE_DATA = [
  {
    Nama: "001",
    NIK: 100,
    Alamat: "5.96%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
  {
    Nama: "002",
    NIK: 200,
    Alamat: "8.26%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
  {
    Nama: "003",
    NIK: 300,
    Alamat: "4.20%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
];

const ActiveUserWarga = () => {
  return (
    <Container className="px-5">
      <SubTitle title="Warga User Aktif" />
      <CustomTable headers={ACTIVE_USER_WARGA_HEADER} tableData={ACTIVE_USER_WARGA_TABLE_DATA} />
    </Container>
  );
};

export default ActiveUserWarga;
