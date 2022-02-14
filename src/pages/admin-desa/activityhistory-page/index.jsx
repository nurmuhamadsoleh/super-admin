import { Card, Container } from "reactstrap";

import { SubTitle } from "../../components";
import { CustomTable } from "../../components";

const ACTIVITY_HISTORY_HEADER = ["Nama", "Jabatan", "Fitur", "Aksi", "Content", "Waktu"];
const ACTIVITY_HISTORY_TABLE_DATA = [
  {
    Nama: "Asep",
    Jabatan: 100,
    Fitur: "5.96%",
    Aksi: ["detail"],
    Content: "1c1233123",
    Waktu: "25-12-2021 02:18:21",
  },
  {
    Nama: "Asap",
    Jabatan: 200,
    Fitur: "8.26%",
    Aksi: ["detail"],
    Content: "1c1233123",
    Waktu: "25-12-2021 02:18:21",
  },
  {
    Nama: "Asup",
    Jabatan: 300,
    Fitur: "4.20%",
    Aksi: ["detail"],
    Content: "1c1233123",
    Waktu: "25-12-2021 02:18:21",
  },
];

const ActivityHistory = () => {
  return (
    <Container className="px-2">
      <SubTitle title="Riwayat Aktivitas" />
      <Card className="my-3 overflow-scroll">
        <CustomTable headers={ACTIVITY_HISTORY_HEADER} tableData={ACTIVITY_HISTORY_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default ActivityHistory;
