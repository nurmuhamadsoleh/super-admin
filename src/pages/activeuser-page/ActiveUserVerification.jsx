import { Card, Container } from "reactstrap";
import { Line } from "react-chartjs-2";

import { SubTitle } from "../../components";
import { CustomTable } from "../../components";

const ACTIVE_USER_VERIFICATION_WARGA_HEADER = ["Nama", "NIK", "Alamat", "No Hp", "Status"];
const ACTIVE_USER_VERIFICATION_WARGA_TABLE_DATA = [
  {
    Nama: "001",
    NIK: 100,
    Alamat: "5.96%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
  {
    Nama: "002",
    NIK: 200,
    Alamat: "8.26%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
  {
    Nama: "003",
    NIK: 300,
    Alamat: "4.20%",
    "No Hp": ["detail"],
    Status: "Aktif",
  },
];

const ActiveUserVerification = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [5, 12, 32, 55, 85, 91, 120],
        fill: true,
        borderColor: "rgb(54,153,255)",
        backgroundColor: "rgba(54,153,255, 0.2)",
        stepped: false,
        tension: "0.3",
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  return (
    <Container className="px-5">
      <SubTitle title="User Aktif Terverifikasi" />
      <Card className="p-5">
        <Line data={data} options={config} />
        <hr />
        <CustomTable
          headers={ACTIVE_USER_VERIFICATION_WARGA_HEADER}
          tableData={ACTIVE_USER_VERIFICATION_WARGA_TABLE_DATA}
        />
      </Card>
    </Container>
  );
};

export default ActiveUserVerification;
