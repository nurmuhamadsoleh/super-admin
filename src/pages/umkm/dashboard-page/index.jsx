import { Card, CardBody, Row, Col, Container, CardTitle, CardImg, CardGroup, CardText } from "reactstrap";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

import { chartOptions, chartData, productDummyData, useWindowSize } from "./utils.jsx";
import DashboardSmallCard from "./DashboardSmallCard";
import checkIcon from "../../../assets/images/icons/green_check.png";
import upward from "../../../assets/images/icons/upward.png";
import heartbeat from "../../../assets/images/icons/heartbeat.png";

const UMKMDashboardPage = () => {
  const [popularProducts] = useState(productDummyData);
  const { width: windowWidth } = useWindowSize();

  return (
    <Container fluid>
      {/* title */}
      <Card className="shadow-sm border-0 mb-4">
        <CardBody>
          <Row className="ms-1">
            <h5 className="p-0 m-0">Dashboard</h5>
          </Row>
        </CardBody>
      </Card>

      {/* mini cards */}
      <Row>
        <DashboardSmallCard title="Semua Pesanan" data="30" icon={heartbeat} />
        <DashboardSmallCard title="Pesanan Terkonfirmasi" data="25" icon={checkIcon} />
        <DashboardSmallCard title="Pendapatan Hari Ini" data="Rp200.000" icon={upward} />
      </Row>

      {/* chart */}
      <Card className="border-0 shadow-sm mb-4">
        <CardBody>
          <Row className="h-25 w-100">
            <Bar data={chartData} options={chartOptions} width="100%" height="25vh" />
          </Row>
        </CardBody>
      </Card>

      <Row className="d-flex justify-content between">
        {/* popular products */}
        <Col lg="6" xs="12">
          <Card className="shadow-sm border-0" style={{ minHeight: "50vh" }}>
            <div style={{ borderBottom: "1px solid", borderBottomStyle: "dotted" }}>
              <CardTitle className="ms-4">Produk Terlaris</CardTitle>
            </div>
            <CardBody>
              <div className="d-flex flex-wrap justify-content-center">
                {!popularProducts.length ? (
                  <p>Produk Kosong</p>
                ) : (
                  popularProducts.map((product, idx) => (
                    <Card
                      key={idx}
                      className="d-flex flex-column align-items-center shadow mb-3 rounded-3 mx-1 my-1 border-0"
                      style={{ width: `${windowWidth > 992 ? "30%" : windowWidth > 576 ? "40%" : "100%"}` }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${product.image})`,
                          height: "150px",
                          width: "120px",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          borderRadius: "10px",
                        }}
                        className="mt-2 img-fluid"
                      />
                      <CardText className="text-center mt-2 mb-3" style={{ fontSize: "12px" }}>
                        {product.title}
                      </CardText>
                    </Card>
                  ))
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* best-rated products */}
        <Col lg="6" xs="12">
          <Card className="shadow-sm border-0" style={{ minHeight: "50vh" }}>
            <div style={{ borderBottom: "1px solid", borderBottomStyle: "dotted" }}>
              <CardTitle className="ms-4">Produk Terfavorit</CardTitle>
            </div>
            <CardBody>
              <Col className="d-flex justify-content-between">
                <div>
                  <p className="p-0 m-0">Produk #1</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="me-5">
                    1 <i className="fas fa-star" style={{ color: "#E7B820" }}></i>
                  </p>
                  <p>
                    4 <i className="far fa-user"></i>
                  </p>
                </div>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UMKMDashboardPage;
