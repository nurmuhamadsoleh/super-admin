import { Container } from "reactstrap";
import { SubTitle } from "../../components";

const BloodStock = () => {
  const onAddBloodStock = () => {};

  return (
    <Container>
      <SubTitle title="Stock Darah" addButton={true} addFunction={onAddBloodStock} />
    </Container>
  );
};

export default BloodStock;
