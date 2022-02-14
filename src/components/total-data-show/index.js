import { Input, Label } from "reactstrap";

const TotalDataShow = (props) => {
  const { dataList = [10, 25, 50, 100], setTotalDataShow } = props;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setTotalDataShow(value);
  };

  return (
    <form className="d-flex align-items-center">
      <Label for="show-data" className="mx-3">
        Show
      </Label>
      <Input onChange={handleChange} id="show-data" type="select" style={{ width: "70px", height: "38px" }}>
        {dataList.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </Input>
    </form>
  );
};

export default TotalDataShow;
