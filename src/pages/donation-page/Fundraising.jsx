import { Container } from "reactstrap";
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

const Fundraising = () => {
  const onAddDonation = () => {};

  return (
    <Container>
      <SubTitle title="Penggalangan Dana" addButton={true} addFunction={onAddDonation} />
      <CustomTable className="mt-4" headers={BLOOD_PROVIDER_HEADER} tableData={BLOOD_PROVIDER_TABLE_DATA} />
    </Container>
  );
};

export default Fundraising;
