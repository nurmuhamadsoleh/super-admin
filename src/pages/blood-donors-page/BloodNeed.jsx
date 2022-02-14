import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const BLOOD_PROVIDER_HEADER = ["PROVIDER", "ALAMAT", "STATUS", "AKSI"];
const BLOOD_PROVIDER_TABLE_DATA = [
  {
    PROVIDER: "Asep",
    ALAMAT: "Garut",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    PROVIDER: "Erik",
    ALAMAT: "Jakarta",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    PROVIDER: "Dadang",
    ALAMAT: "Bandung",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
];

const BloodNeed = () => {
  const onAddBlood = () => {};

  return (
    <Container>
      <SubTitle title="Butuh Darah" addButton={true} addFunction={onAddBlood} />
      <Card className="mt-4">
        <CustomTable headers={BLOOD_PROVIDER_HEADER} tableData={BLOOD_PROVIDER_TABLE_DATA} />
      </Card>
    </Container>
  );
};

export default BloodNeed;
