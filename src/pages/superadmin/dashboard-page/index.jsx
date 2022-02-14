import { useState } from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { orderBy } from "lodash";

import avatar from "../../../assets/images/icons/avatar.png";
import leaf from "../../../assets/images/icons/leaf.png";
import phone from "../../../assets/images/icons/phone.png";
import DashboardSmallCard from "./DashboardSmallCard";
import { CustomTable } from "../../../components";

const dummyData = [
  {
    id: 1,
    name: "Rara Sekar",
    email: "AdminDesa@gmail.com",
    img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    tanggal: new Date(),
  },
  {
    id: 2,
    name: "Isyana Sarasvati",
    img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    email: "SekertarisDesa@gmail.com",
    tanggal: new Date(),
  },
  {
    id: 3,
    name: "Joni Iskandar",
    img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    email: "KepalaDesa@gmail.com",
    tanggal: new Date(),
  },
  {
    id: 4,
    name: "Rapunzel",
    img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    email: "BendaharaDesa@gmail.com",
    tanggal: new Date(),
  },
  {
    id: 5,
    name: "Georgia",
    img: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    email: "Sekertariscamat@gmail.com",
    tanggal: new Date(),
  },
];

const options = {
  responsive: true,
  plugins: {
    layout: {},
    legend: {
      display: false,
      title: {
        text: "awawawaw",
        borderRadius: 100,
        hidden: true,
        strokeStyle: "red",
      },
      rtl: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    subtitle: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
};
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  legend: {
    display: false,
  },
  datasets: [
    {
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: "#C2FBFF",
    },
  ],
};

const DashboardPage = () => {
  const [response, setResponse] = useState(dummyData);
  const [responseBackup, setResponseBackup] = useState(dummyData);
  const [changeText, setChangeText] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState(true);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const sortByIdAsc = () => {
    response.sort((a, b) => a.id - b.id);
  };
  const sortByIdDesc = () => {
    response.sort((a, b) => a.id - b.id).reverse();
  };

  const handleChangeText = () => {
    setChangeText(!changeText);
    if (changeText === true) {
      sortByIdAsc();
      // console.log("Table sorted using Id in Ascending oder");
    } else {
      sortByIdDesc();
      // console.log("Table sorted using Id in Descending oder");
    }
  };

  return (
    <div className="dashboard-page">
      <Container fluid>
        <Row>
          <DashboardSmallCard
            title="Jumlah Desa"
            data="14.994"
            className="fas fa-desktop"
            style={{
              display: "inline-block",
              borderRadius: "60px",
              boxShadow: " 0 0 2px #c0ffee",
              padding: "0.5em 0.6em",
              backgroundColor: "#eafdff",
              color: "blue",
            }}
          />
          <DashboardSmallCard
            title="Desa Aktif"
            data="55"
            className="fas fa-desktop"
            style={{
              display: "inline-block",
              borderRadius: "60px",
              boxShadow: " 0 0 2px #c0ffee",
              padding: "0.5em 0.6em",
              backgroundColor: "#c0ffee",
              color: "green",
            }}
          />
          <DashboardSmallCard
            title="Desa Tidak Aktif"
            data="63"
            className="fas fa-desktop"
            style={{
              display: "inline-block",
              borderRadius: "60px",
              boxShadow: " 0 0 2px #ff8da1",
              padding: "0.5em 0.6em",
              backgroundColor: "#ff8da1",
              color: "red",
            }}
          />
        </Row>

        <Row className="py-3">
          <Col>
            <Card className="p-4 shadow-sm border-0">
              <h5>Pendapatan </h5>
              <p>2020 Total Penjualan: Rp 21.000.000</p>

              <div className="d-flex justify-content-center">
                <div className=" overflow-scroll" style={{ width: "90%" }}>
                  <Line data={data} options={options} />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            {isLoading ? (
              <div className="text-center mx-auto" style={{ width: 400 }}>
                <div className="spinner-grow text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <table id="zero_config" className="table  no-wrap  ">
                  <thead>
                    <tr>
                      <th className="pl-5">
                        <div>
                          <div className="pb-0 pb-md-2">#</div>
                        </div>
                      </th>
                      <th className="pl-5">
                        <div>
                          <div className="pb-0 pb-md-2">Nama</div>
                        </div>
                      </th>

                      <th>
                        <div
                          className="d-md-flex justify-content-between"
                          onClick={(e) => handleChangeText(e)}
                        >
                          <div>Email</div>

                          <div className="d-none d-md-block">
                            <div style={{ fontSize: "10px" }}>
                              <i
                                className={
                                  changeText
                                    ? "fas fa-chevron-up"
                                    : "fas fa-chevron-up text-secondary"
                                }
                              ></i>
                              <br />
                              <i
                                class={
                                  changeText
                                    ? "fas fa-chevron-down text-secondary"
                                    : "fas fa-chevron-down"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </th>

                      <th onClick={(e) => handleChangeText(e)}>
                        {" "}
                        <div className="d-flex justify-content-between ">
                          <div>Tanggal</div>

                          <div
                            className="d-none d-md-block"
                            onClick={(e) => handleChangeText(e)}
                          >
                            <div style={{ fontSize: "10px" }}>
                              <i
                                className={
                                  changeText
                                    ? "fas fa-chevron-up"
                                    : "fas fa-chevron-up text-secondary"
                                }
                              ></i>
                              <br />
                              <i
                                class={
                                  changeText
                                    ? "fas fa-chevron-down text-secondary"
                                    : "fas fa-chevron-down"
                                }
                              ></i>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {response.length !== 0 ? (
                      response
                        .slice(
                          currentPage * pageSize,
                          (currentPage + 1) * pageSize
                        )
                        .map((data, i) => {
                          let number = i + 1;
                          return (
                            <tr key={data.id}>
                              <td>{number}</td>
                              <td className="">
                                <img
                                  src={data?.img}
                                  alt="ava"
                                  className=" rounded-circle me-3 "
                                  style={{ width: "5%", height: "5%" }}
                                />

                                <span>{data?.name}</span>
                              </td>
                              <td className="">{data?.email}</td>
                              <td className="">
                                {data?.tanggal.toISOString()}
                              </td>
                            </tr>
                          );
                        })
                    ) : (
                      <tr className="odd">
                        <td
                          colspan="5"
                          className="dataTables_empty text-center"
                          valign="top"
                        >
                          No data available in table
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
