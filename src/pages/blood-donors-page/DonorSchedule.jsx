import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const BLOOD_PROVIDER_HEADER = ["NAMA", "ALAMAT", "STATUS", "AKSI"];
const BLOOD_PROVIDER_TABLE_DATA = [
  {
    NAMA: "Asep",
    ALAMAT: "Garut",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Erik",
    ALAMAT: "Jakarta",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Dadang",
    ALAMAT: "Bandung",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
];
const DonorSchedule = () => {
  const onAddDonorSchedule = () => {};

  return (
    <Container>
      <SubTitle title="Jadwal Donor" addButton={true} addFunction={onAddDonorSchedule} />
      <Card className="mt-4">
        <CustomTable headers={BLOOD_PROVIDER_HEADER} tableData={BLOOD_PROVIDER_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default DonorSchedule;
