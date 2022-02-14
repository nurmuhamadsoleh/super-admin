import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  Button,
  CardHeader,
  Table,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
} from "reactstrap";
import { Line, Chart } from "react-chartjs-2";
import { DateRangeFilter } from "../../../components";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "#C2FBFF",
      borderColor: "#C2FBFF",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const GrafikPage = () => {
  return (
    <div className="grafik-page">
      <div className="header">
        <div className="d-flex mb-4">
          <div className="card shadow d-none d-md-none d-lg-block ">
            <div className="p-4"></div>
          </div>
          <div className="ms-4">
            <h5 className="font-weight-bold">GRAFIK LAPORAN</h5>
            <p>
              Pantau Data Statistik Laporan warga ke Pemerintah Desa yang masuk
              melalui Aplikasi SimpelDesa.
            </p>
          </div>
        </div>
      </div>

      <div className="statistic">
        <Row>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold mb-0">
                      JUMLAH PENDUDUK
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="far fa-user text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{100}</h2>
                      <p className="font-weight-bold mt-2">Orang</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold mb-0">
                      TOTAL SEMUA LAPORAN
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="fas fa-layer-group text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{4}</h2>
                      <p className="font-weight-bold mt-2">Laporan</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold ">
                      LAPORAN MASUK / JUMLAH PENGGUNA SIMPELDESA
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="far fa-chart-bar text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{"0,0003"}</h2>
                      <p className="font-weight-bold mt-2">%</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold ">
                      LAPORAN DITOLAK
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="fas fa-times text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{1}</h2>
                      <p className="font-weight-bold mt-2">Laporan</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold ">
                      LAPORAN DITOLAK
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="far fa-thumbs-up text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{0}</h2>
                      <p className="font-weight-bold mt-2">Laporan</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="card-stats mb-4 mb-xl-0 shadow pb-3">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle tag="h6" className="label font-weight-bold">
                      LAPORAN MASUK / JUMLAHPENDUDUK
                    </CardTitle>
                    <div className="d-flex mt-3">
                      <i class="fas fa-shopping-cart text-secondary me-2"></i>
                      <h2 className="font-weight-bold mt-2 me-2">{"0,003"}</h2>
                      <p className="font-weight-bold mt-2">%</p>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="d-block d-md-none">
        <DateRangeFilter />
      </div>

      <Row>
        <Col lg="12" xl="12">
          <div className="d-flex justify-content-center">
            <Card
              className="data-each-month-sales mt-5"
              style={{ width: "90%" }}
            >
              <div className="p-3">
                <div className="d-none d-md-flex justify-content-between ">
                  <Button color="dark" size="md">
                    <i class="fas fa-print"></i>
                    <span className="ms-2">Print</span>
                  </Button>

                  <DateRangeFilter />
                </div>
                <Line data={data} options={options} />
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GrafikPage;
