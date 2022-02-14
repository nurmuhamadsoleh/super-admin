import { useState } from "react";
import { orderBy } from "lodash";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Card, CardBody, CardTitle, Container, Row, Col, Input, Button } from "reactstrap";
import { useHistory, useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";
import DashboardSmallCard from "./DashboardSmallCard";
import { CustomTable, SubTitle, CustomPagination } from "../../../components";
import heartbeat from "../../../assets/images/icons/heartbeat.png";
import upward from "../../../assets/images/icons/upward.png";
import leaf from "../../../assets/images/icons/leaf.png";

const PPOB_TRANSAKSI_HEADER = ["NAMA MITRA", "NIK", "ALAMAT", "NO HP", "JUMLAH TRANSAKSI", "AKSI"];
const PPOB_TRANSAKSI_DATA = [
  {
    "NAMA MITRA": "Rara Sekar",
    NIK: "323273210008",
    ALAMAT: "Jalan Raya Cihideung No.21",
    "NO HP": "0809088897",
    "JUMLAH TRANSAKSI": "10",
    AKSI: ["detail"],
  },
  {
    "NAMA MITRA": "Jajang Nurjangjang",
    NIK: "323273210007",
    ALAMAT: "Jalan Soekarno-Hatta No.453",
    "NO HP": "0809088896",
    "JUMLAH TRANSAKSI": "23",
    AKSI: ["detail"],
  },
];
const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "",
      data: [
        0, 19, 14, 20, 48, 13, 28, 89, 40, 0, 19, 14, 20, 48, 13, 28, 89, 40, 0, 19, 14, 20, 48, 13, 28, 89, 40, 80, 87,
        23,
      ],
      fill: false,
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: "#C2FBFF",
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      borderDash: [4, 160],
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      align: "center",
      position: "top",
      text: "Jumlah Transaksi Mitra BUMDes",
    },
  },
};
const omzetChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      borderDash: [4, 160],
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PPOB_TRANSAKSI_ALL_CHART_DATA = {
  labels: ["Merchant #1", "Distributor X", "Kelontong", "Kooperasi"],
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

const Mitra_Data = {
  labels: ["Ketua RT", "Perseorangan", "Ketua RW", "Ketua Wilayah"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 18, 5, 3],
      backgroundColor: ["#1264D1", "#34C369", "#E7B820", "#E02B2B"],
      //   borderColor: ["#1264D1", "#34C369", "#E7B820", "#E02B2B"],
      //   backgroundColor: ["#1264D1", "#34C369"],
      borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
      borderWidth: 10,
    },
  ],
};

const PPOBPage = () => {
  const [tableData, setTableData] = useState(PPOB_TRANSAKSI_DATA);
  const { path } = useRouteMatch();
  const { id: userId } = useParams();
  const history = useHistory();
  const onClickEdit = (id) => {
    history.push(`${path}/detail/${id}`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  // ["NAMA MITRA", "NIK", "ALAMAT", "NO HP", "JUMLAH TRANSAKSI", "AKSI"];
  const sortBy = {
    "NAMA MITRA": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NIK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ALAMAT: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "NO HP": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "JUMLAH TRANSAKSI": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container>
      <SubTitle title="PPOB" addButton={false} addFunction={() => console.log("add fired")} />

      <Row className="mt-4">
        <DashboardSmallCard title="Total Omzet" data="Rp2.000.000" icon={heartbeat} />
        <DashboardSmallCard title="Total Pendapatan" data="Rp.500.000" icon={leaf} />
        <DashboardSmallCard title="Jumlah Transaksi" data="66" icon={upward} />
      </Row>

      <Card className="mt-4 border-0 shadow-sm">
        <CardBody className="p-0">
          <Row className="mt-3">
            <Col className="ms-3 d-flex align-items-center">
              <p className="m-0">Grafik Laporan</p>
            </Col>
            <Col className="d-flex justify-content-end me-2">
              <Button color="secondary">
                <i className="fas fa-filter"></i>
                Filter
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Bar data={chartData} options={chartOptions} />
            </Col>
          </Row>
          <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
            <Col className="d-flex justify-content-start align-items-center">
              <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>Show</div>
              <div style={{ width: "15%" }}>
                <Input type="select" style={{ border: "solid 1px black" }}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </Input>
              </div>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <div style={{ marginRight: "1.5rem" }}>Pencarian</div>
              <div style={{ marginRight: "1.5rem" }}>
                <Input type="text" placeholder="Pencarian" style={{ border: "solid 1px black" }} />
              </div>
            </Col>
          </Row>
          <CustomTable
            onClickEdit={onClickEdit}
            bordered={false}
            headers={PPOB_TRANSAKSI_HEADER}
            tableData={tableData}
            sortBy={sortBy}
          />
        </CardBody>
        <Row className="d-flex justify-content-between align-items-center px-2 mt-2" style={{ maxHeight: "10vh" }}>
          <Col lg="6" xs="12" style={{ fontSize: "12px" }}>
            <p>Menampilkan 1 sampai 2 dari 2 data</p>
          </Col>
          <Col lg="6" xs="12" className="d-flex justify-content-end" style={{ fontSize: "12px" }}>
            <CustomPagination />
          </Col>
        </Row>
      </Card>

      <Card className="mt-4 border-0 shadow-sm">
        <CardBody>
          <Row>
            <Col>Grafik Omzet & Pendapatan</Col>
          </Row>
          <Row>
            <Col>
              <Bar data={chartData} options={omzetChartOptions} />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="mt-4 border-0 shadow-sm">
        <Row>
          <Col xs="12" lg="6">
            <Card className="shadow-sm border-0 m-0 d-flex align-items-center">
              <Row className="w-100 d-flex justify-content-between align-items-center mt-2">
                <Col>
                  <p className="fw-bold align-middle m-0" style={{ fontSize: ".75rem" }}>
                    Transaksi Keseluruhan Mitra BUMDes
                  </p>
                </Col>
                <Col>
                  <p
                    className="align-middle m-0"
                    style={{ textAlign: "end", fontSize: ".75rem", color: "#d7d7d7", cursor: "pointer" }}
                  >
                    Selengkapnya
                  </p>
                </Col>
              </Row>
              <div className="w-75 h-100 d-flex p-4 justify-content-center flex-column">
                <Doughnut
                  data={PPOB_TRANSAKSI_ALL_CHART_DATA}
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
              </div>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card className="shadow-sm border-0 m-0 justify-content-center align-items-center">
              <Row className="w-100 d-flex justify-content-between align-items-center mt-2">
                <Col className="fw-bold align-middle m-0" style={{ fontSize: ".75rem" }}>
                  Mitra BUMDes
                </Col>
                <Col
                  className="align-middle m-0"
                  style={{ fontSize: ".75rem", color: "#d7d7d7", textAlign: "end", cursor: "pointer" }}
                >
                  <p className="align-middle m-0">Selengkapnya</p>
                </Col>
              </Row>
              <div className="w-75 h-75 d-flex justify-content-center flex-column p-4">
                <Pie
                  data={Mitra_Data}
                  width={800}
                  height={800}
                  options={{
                    radius: "100",
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        display: true,
                        labels: {
                          color: "rgb(255, 99, 132)",
                          boxWidth: 200,
                          textAlign: "center",
                          pointStyle: "rectRounded",
                          usePointStyle: true,
                        },
                        position: "bottom",
                      },
                    },
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PPOBPage;
