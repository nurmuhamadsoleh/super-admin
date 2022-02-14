import { Card, CardTitle } from "reactstrap";
import users from "../../assets/images/icons/users.png";
const ActiveUserStatisticCard = ({ title = "", data = 0 }) => {
  return (
    <Card className="p-2 shadow">
      <CardTitle>
        <b>{title}</b>
      </CardTitle>
      <p>Jumlah : </p>
      <p style={{ fontSize: "24px", fontWeight: "600" }}>
        <img src={users} alt="user" style={{ objectFit: "contain", width: "40px", height: "40px" }} /> {data}
      </p>
    </Card>
  );
};

export default ActiveUserStatisticCard;
