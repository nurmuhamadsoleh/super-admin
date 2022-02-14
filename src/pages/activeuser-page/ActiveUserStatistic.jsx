import { Container, Card, Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import { SubTitle } from "../../components";
import ActiveUserStatisticCard from "./ActiveUserStatisticCard";
const ActiveUserStatistic = () => {
  const bloodTypeData = {
    labels: ["Golongan A", "Golongan B", "Golongan AB", "Golongan O"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#1264D1", "#34C369", "#E7B820", "#E02B2B"],
        borderColor: ["#1264D1", "#34C369", "#E7B820", "#E02B2B"],
        borderWidth: 1,
      },
    ],
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Semua Info",
        data: [33, 53, 85, 41, 44, 65],
        fill: false,
        borderColor: "red",
      },
      {
        label: "Info Untuk Perangkat Desa",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "green",
      },
      {
        label: "Info Untuk Ketua RW",
        data: [35, 22, 38, 45, 48, 80],
        fill: false,
        borderColor: "yellow",
      },
    ],
  };

  return (
    <Container className="">
      <SubTitle title="Masyarakat Aktif" />

      <Card className="p-4 mt-3">
        <Row>
          <Col xs="12" lg="4">
            <ActiveUserStatisticCard data={0} title="PENGGUNA APPLIKASI" />
          </Col>
          <Col xs="12" lg="4">
            <ActiveUserStatisticCard data={0} title="AKTIF USER MINGGUAN" />
          </Col>
          <Col xs="12" lg="4">
            <ActiveUserStatisticCard data={0} title="AKTIF USER BULANAN" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" lg="3">
            <ActiveUserStatisticCard data={0} title="POTENSI PENGGUNA" />
          </Col>
          <Col xs="12" lg="3">
            <ActiveUserStatisticCard data={0} title="SUDAH MENGGUNAKAN" />
          </Col>
          <Col xs="12" lg="3">
            <ActiveUserStatisticCard data={0} title="BELUM MENGGUNAKAN" />
          </Col>
          <Col xs="12" lg="3">
            <ActiveUserStatisticCard data={0} title="NON PENGGUNA" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="12" lg="8">
            <Line
              data={data}
              options={{ responsive: true, maintainAspectRatio: true, plugins: { legend: { color: "red" } } }}
            />
          </Col>
          <Col xs="12" lg="4">
            <Doughnut
              data={bloodTypeData}
              options={{
                cutout: "75",
                radius: "100",
                responsive: true,
                maintainAspectRatio: true,
                percentageInnerCutout: 100,
                plugins: {
                  legend: {
                    display: true,
                    align: "center",
                    labels: {
                      color: "rgb(255, 99, 132)",
                      boxWidth: 200,
                      pointStyle: "rectRounded",
                      usePointStyle: true,
                      textAlign: "center",
                    },
                    position: "bottom",
                  },
                },
              }}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ActiveUserStatistic;
