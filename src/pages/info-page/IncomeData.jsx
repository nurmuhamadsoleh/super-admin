import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const DATA_INFO_HEADER = ["SUMBER PENDAPATAN", "JENIS PENDAPATAN", "OBJEK PENDAPATAN", "JUMLAH PENDAPATAN", "AKSI"];

const DATA_INFO_TABLE_DATA = [
  {
    "SUMBER PENDAPATAN": "Asep",
    "JENIS PENDAPATAN": "Garut",
    "OBJEK PENDAPATAN": "Aktif",
    "JUMLAH PENDAPATAN": "",
    AKSI: ["read", "delete"],
  },
  {
    "SUMBER PENDAPATAN": "Erik",
    "JENIS PENDAPATAN": "Jakarta",
    "OBJEK PENDAPATAN": "Aktif",
    "JUMLAH PENDAPATAN": "",
    AKSI: ["read", "delete"],
  },
  {
    "SUMBER PENDAPATAN": "Dadang",
    "JENIS PENDAPATAN": "Bandung",
    "OBJEK PENDAPATAN": "Aktif",
    "JUMLAH PENDAPATAN": "",
    AKSI: ["read", "delete"],
  },
];

const IncomeData = () => {
  return (
    <Container>
      <SubTitle title="Data Pendapatan" />
      <Card className="mt-4">
        <CustomTable headers={DATA_INFO_HEADER} tableData={DATA_INFO_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default IncomeData;
