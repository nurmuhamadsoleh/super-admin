import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const DATA_INFO_HEADER = ["KEGIATAN", "BIDANG BELANJA", "JUMLAH ANGGARAN", "SUMBER ANGGARAN", "TAHUN ANGGARAN", "AKSI"];

const DATA_INFO_TABLE_DATA = [
  {
    KEGIATAN: "Asep",
    "BIDANG BELANJA": "Garut",
    "JUMLAH ANGGARAN": "Aktif",
    "SUMBER ANGGARAN": "",
    "TAHUN ANGGARAN": 2020,
    AKSI: ["read", "delete"],
  },
  {
    KEGIATAN: "Erik",
    "BIDANG BELANJA": "Jakarta",
    "JUMLAH ANGGARAN": "Aktif",
    "SUMBER ANGGARAN": "",
    "TAHUN ANGGARAN": 2020,
    AKSI: ["read", "delete"],
  },
  {
    KEGIATAN: "Dadang",
    "BIDANG BELANJA": "Bandung",
    "JUMLAH ANGGARAN": "Aktif",
    "SUMBER ANGGARAN": "",
    "TAHUN ANGGARAN": 2020,
    AKSI: ["read", "delete"],
  },
];

const ExpenseData = () => {
  return (
    <Container>
      <SubTitle title="Data Belanja" />
      <Card className="mt-4">
        <CustomTable headers={DATA_INFO_HEADER} tableData={DATA_INFO_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default ExpenseData;
