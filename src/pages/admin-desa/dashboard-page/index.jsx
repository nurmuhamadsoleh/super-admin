import { useState } from "react";
import { Card, Container, Row, Col } from "reactstrap";
import { Doughnut, Pie } from "react-chartjs-2";
import { orderBy } from "lodash";

import avatar from "../../../assets/images/icons/avatar.png";
import leaf from "../../../assets/images/icons/leaf.png";
import phone from "../../../assets/images/icons/phone.png";
import DashboardSmallCard from "./DashboardSmallCard";
import { CustomTable } from "../../../components";

const TABLE_DATA = [
  {
    Pemohon: "Rara Sekar",
    "NIK Pemohon": "3256908956771",
    "Tanggal Pendaftaran": "10 Desember 2021",
    "Nomor Surat": "034/DS-2003/VII/2021",
    Status: "Belum Diproses",
  },
  {
    Pemohon: "Isyana Saraswati",
    "NIK Pemohon": "32569089560008",
    "Tanggal Pendaftaran": "25 Januari 2022",
    "Nomor Surat": "090/DS-2003/VII/2022",
    Status: "Sedang diproses",
  },
  {
    Pemohon: "Anton Mahmud",
    "NIK Pemohon": "3256908958888",
    "Tanggal Pendaftaran": "30 Desember 2021",
    "Nomor Surat": "080/DS-2003/VII/2021",
    Status: "Siap diambil",
  },
  {
    Pemohon: "Ardhito Pramana",
    "NIK Pemohon": "3256908955555",
    "Tanggal Pendaftaran": "1 Januari 2022",
    "Nomor Surat": "034/DS-2003/VII/2022",
    Status: "Belum Diproses",
  },
];

const DashboardPage = () => {
  const [tableData, setTableData] = useState(TABLE_DATA);
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

  const genderData = {
    labels: ["Perempuan", "Laki-Laki"],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 40],
        backgroundColor: ["#1264D1", "#34C369"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 10,
      },
    ],
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    Pemohon: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "NIK Pemohon": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    // "Tanggal Pendaftaran": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "Nomor Surat": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    Status: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ["Tanggal Pendaftaran"]: {
      asc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(a["Tanggal Pendaftaran"]) - new Date(b["Tanggal Pendaftaran"]));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, asc: `, sorted);
      },
      desc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(b["Tanggal Pendaftaran"]) - new Date(a["Tanggal Pendaftaran"]));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, asc: `, sorted);
      },
    },
  };

  return (
    <Container fluid>
      <Row>
        <DashboardSmallCard title="Jumlah Penduduk" data="14.994" icon={avatar} />
        <DashboardSmallCard title="Pengajuan E-Desa" data="55" icon={leaf} />
        <DashboardSmallCard title="Pengguna E-Desa" data="63" icon={phone} />
      </Row>

      <Row className="py-3">
        <Col>
          <Card className="p-4 shadow-sm border-0">
            <h5>Pengajuan Layanan Surat</h5>
            <div className="w-100 overflow-scroll">
              <CustomTable
                headers={["Pemohon", "NIK Pemohon", "Tanggal Pendaftaran", "Nomor Surat", "Status"]}
                tableData={tableData}
                sortBy={sortBy}
                bordered={false}
              />
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12" lg="6">
          <Card className="shadow-sm border-0 m-0 p-4 d-flex justify-content-center align-items-center">
            <h5 className="w-100 mb-4">Golongan Darah </h5>
            <div className="w-75 h-100 d-flex justify-content-center flex-column">
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
            </div>
          </Card>
        </Col>
        <Col xs="12" lg="6">
          <Card className="shadow-sm border-0 m-0 p-4 justify-content-center align-items-center">
            <h5 className="w-100 mb-4">Jenis Kelamin</h5>
            <div className="w-75 h-75 d-flex justify-content-center flex-column">
              <Pie
                data={genderData}
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
    </Container>
  );
};

export default DashboardPage;
