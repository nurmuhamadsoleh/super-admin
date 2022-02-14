import { Card, Container } from "reactstrap";
import { Line } from "react-chartjs-2";
import { SubTitle } from "../../components";
import { DateRangeFilter } from "../../components";

const GrafikInfo = () => {
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
        <Container>
            <SubTitle title="Grafik Info" />
            <div className="d-flex justify-content-center">
            <Card className="p-3 my-3" style={{width: "90%"}}>
                <Line
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: { legend: { color: "red" } },
                    }}
                />
            </Card>
            </div>
            

            <div className="tipe-laporan">
                <div className="card shadow">
                    <div className="d-flex justify-content-between container  p-3">
                        <h5>INFO PALING BANYAK DIKOMENTARI</h5>
                        <div>
                            <DateRangeFilter />
                        </div>
                    </div>
                    <hr />
                    <div className="p-3"></div>
                </div>
                <div className="card mt-3">
                    <h6 className="p-3">STATISTIK PEMBACA</h6>

                    <div className="row g-0">
                        <div className="col-md-3 ">
                            <div className="card bg-info p-5 rounded-0">
                                <div className="d-flex justify-content-center ">
                                    <div>Statistik Pelapor</div>
                                </div>
                                <div className="d-flex justify-content-center ">
                                    <div>0</div>
                                </div>
                            </div>
                            <div className="card border-top-0 rounded-0 p-5">
                                <div className="p-3"></div>
                            </div>
                            <div className="card border-top-0 rounded-0 container shadow">
                                <div className="d-flex justify-content-between p-2">
                                    <div>
                                        <p>{">  17 Tahun"}</p>
                                    </div>

                                    <div>0 %</div>
                                </div>
                            </div>
                            <div className="card border-top-0 rounded-0 container shadow">
                                <div className="d-flex justify-content-between p-2">
                                    <div>
                                        <p>{">  17 Tahun"}</p>
                                    </div>

                                    <div>0 %</div>
                                </div>
                            </div>
                            <div className="card border-top-0 rounded-0 container shadow">
                                <div className="d-flex justify-content-between   p-2">
                                    <div>
                                        <p>{">  17 Tahun"}</p>
                                    </div>

                                    <div>0 %</div>
                                </div>
                            </div>
                            <div className="card border-top-0 rounded-0 container shadow">
                                <div className="d-flex justify-content-between p-2">
                                    <div>
                                        <p>{">  17 Tahun"}</p>
                                    </div>

                                    <div>0 %</div>
                                </div>
                            </div>
                            <div className="card border-top-0 rounded-0 container shadow">
                                <div className="d-flex justify-content-between p-2">
                                    <div>
                                        <p>{">  17 Tahun"}</p>
                                    </div>

                                    <div>0 %</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 border">
                            <div className="card border-end-0 rounded-0 p-4">
                                <h6>SERING MENANGGAPI INFO</h6>
                            </div>

                            <div className="card border-end-0 rounded-0 p-4 bg-light g-0">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img
                                            src="https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg"
                                            alt=""
                                            style={{ width: "90%", height: "100%" }}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="d-flex justify-content-between p-4">
                                            <div>RIZKI FIRMANSYAH</div>
                                            <div className="ms-5">2 Laporan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-end-0 rounded-0 p-2">
                                <div className="d-flex justify-content-end">
                                    <h6>Menanggapi</h6>
                                </div>
                            </div>

                            <div className="card border-end-0 rounded-0 p-4 bg-light g-0">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img
                                            src="https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg"
                                            alt=""
                                            style={{ width: "180%", height: "100%" }}
                                        />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="d-flex justify-content-between p-4">
                                            <div>RIZKI FIRMANSYAH</div>
                                            <div className="ms-5">2 Laporan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-end-0 rounded-0 p-4 bg-light g-0">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img
                                            src="https://www.propertytwinsswfl.com/wp-content/uploads/2018/09/dummy-profile-pic-male.jpg"
                                            alt=""
                                            style={{ width: "180%", height: "100%" }}
                                        />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="d-flex justify-content-between p-4">
                                            <div>RIZKI FIRMANSYAH</div>
                                            <div className="ms-5">2 Laporan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default GrafikInfo;
