import React from "react";
import {  Bar } from "react-chartjs-2";

const data = {
    labels: [
        "Islam",
        "Kristen",
        "Katolik",
        "Hindu",
        "Budha",
        "Konghucu",
        "Kepercayaan",
    ],
    datasets: [
        {
            label: "Grafik Pendidikan",
            data: [0, 19, 14, 20, 48, 13, 28],
            fill: false,
            backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
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
const GrafikAgama = () => {
    return (
        <div className="grafik-agama">
            <div className="header">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Agama</h5>

                            <div>
                                <button className="btn btn-primary">
                                    <i className="fas fa-print me-2"></i>
                                    Cetak
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chart-area mt-5">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="chart-line container" style={{ width: "90%" }}>
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-area mt-5">
                <div className="card shadow bg-white">
                    <div className="table-responsive">
                        <table className="table-area table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Agama</th>
                                    <th>Jumlah</th>
                                    <th>Persentase</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Islam</td>
                                    <td>21 jiwa</td>
                                    <td>014%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Kristen</td>
                                    <td>19 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Katolik</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Hindu</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Budha</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Konghucu</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Kepercayaan</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrafikAgama;
