import React from 'react'
import { Col, Row, CardBody, Card, CardText, Table, Button, ButtonToolbar, ButtonGroup } from 'reactstrap'
import { Line } from "react-chartjs-2";
import { DateRangeFilter } from "../../components";
import JenisSuratCard from './JenisSuratCard';
import avatar from '../../../src/assets/images/avatar_placeholder.png'
import man from '../../../src/assets/images/icons/man.png'
import girl from '../../../src/assets/images/icons/girl.png'

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

const DatalayananSuratPage = () => {
    return (
        <div className="header">
            <div className="card shadow">
                <div className="container-fluid">
                    <div className="d-flex justify-content-start mt-4 mb-4">
                        <Col xs="6"  >
                            <b>Data layanan Surat</b>
                        </Col>
                    </div>
                </div>
            </div>
            <div className="card shadow my-3">
                <div className="container-fluid">
                    <div className="d-flex justify-content-start mt-4 mb-4">
                        <Line data={data} options={options} />
                    </div>
                    <p className="d-flex justify-content-center">Tanggal</p>

                </div>
            </div>
            <div className="card shadow my-3">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between mt-4 mb-4">
                        <b>JENIS SURAT</b>
                        <DateRangeFilter />
                    </div>
                    <hr />
                </div>
                <JenisSuratCard title="Surat Keterangan Berpergian"
                    isi1="Jumlah : 1 Surat"
                    isi2="Jumlah Surat Tanpa apps: 1 Surat"
                    isi3="Jumlah Surat Melalui apps: 0 Surat" />
                <b className="d-flex justify-content-end m-3 p-1" style={{ color: "blue", cursor: "pointer" }}>Lihat semua</b>
            </div>
            <div className="card shadow my-3">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between mt-4 mb-4">
                        <b>DATA PENGAJUAN SURAT</b>
                        <DateRangeFilter />
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between m-3 ">
                        <Card color="primary" className=" m-2 w-50">
                            <CardBody style={{ color: "white" }}>
                                <b>Jumlah Yang Mengajukan Surat</b>
                                <br />
                                <br />
                                <CardText style={{ fontSize: "2rem" }}>
                                    1
                                </CardText>
                            </CardBody>
                        </Card>
                        <Table bordered className=" m-2 w-350">
                            <thead>
                                <tr>
                                    <th>Warga</th>
                                    <th>Total Surat</th>
                                </tr>
                                <tr style={{ backgroundColor: "white", textAlign: "center" }}>
                                    <td className="d-flex justify-content-start align-items-center" >
                                        <img
                                            src={avatar}
                                            alt="avatar"
                                            style={{ height: "60px", maxWidth: "60px" }}
                                        /><b> &nbsp;&nbsp;RIKI IRMANSYAH</b></td>
                                    <td style={{ verticalAlign: "center" }}><b>1</b></td>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    <div className="d-flex justify-content-end p-3" outline="true">

                        <Button color="primary" outline>
                            Sebelumnya
                        </Button>
                        <Button>
                            1
                        </Button>
                        <Button color="primary" outline>
                            Selanjutnya
                        </Button>
                    </div>
                    <Row>
                        <Col xs="4" className="mx-4 mb-5">
                            <Table>
                                <tbody>
                                    <tr >
                                        <td> <img src={man} style={{ height: "5rem", width: "5rem" }} /></td>
                                        <td></td>
                                        <td><img src={girl} style={{ height: "5rem", width: "5rem" }} /></td>
                                    </tr>
                                    <tr style={{ fontSize: "1.5rem" }}>
                                        <td><b> 0%</b></td>
                                        <td></td>

                                        <td><b> 100%</b></td>
                                    </tr>
                                    <tr>
                                        <td>  17 Tahun)</td>
                                        <td></td>
                                        <td> 0%</td>
                                    </tr>
                                    <tr>
                                        <td>18-23 Tahun</td>
                                        <td></td>

                                        <td> 0%</td>
                                    </tr>
                                    <tr>
                                        <td>24-34 Tahun</td>
                                        <td></td>

                                        <td> 80%</td>
                                    </tr>
                                    <tr>
                                        <td>34-44 Tahun</td>
                                        <td></td>

                                        <td> 20%</td>
                                    </tr>
                                    <tr>
                                        <td> 44Tahun</td>
                                        <td></td>

                                        <td> 0%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default DatalayananSuratPage
