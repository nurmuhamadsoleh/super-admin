import { Card, Container } from "reactstrap";
import { CustomTable, SubTitle } from "../../components";

const DonorList = () => {
  const onAddDonor = () => {};

  return (
    <Container>
      <SubTitle title="Pendonor" addButton={true} addFunction={onAddDonor} />
    </Container>
  );
};

export default DonorList;
