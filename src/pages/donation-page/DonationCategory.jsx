import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const DONATION_CATEGORY_HEADER = ["NAMA", "STATUS", "AKSI"];
const DONATION_CATEGORY_TABLE_DATA = [
  {
    NAMA: "Asep",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Erik",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
  {
    NAMA: "Dadang",
    STATUS: "Aktif",
    AKSI: ["read", "delete"],
  },
];

const DonationCategory = () => {

    const onAddDonation = () => {
        
    }

    return (
        <Container>
            <SubTitle title="Kategori Donasi" addButton={true} addFunction={onAddDonation} />
            <CustomTable className='mt-4' striped={true} headers={DONATION_CATEGORY_HEADER} tableData={DONATION_CATEGORY_TABLE_DATA} />
        </Container>
    )
}

export default DonationCategory