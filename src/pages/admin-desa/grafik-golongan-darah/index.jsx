import React from "react";
import {  Bar } from "react-chartjs-2";

const data = {
    labels: [
        "A", "B", "AB", "O", "A-", "A+", "B-", "B+", "AB-", "AB+", "O-", "O+", "Tidak Tahu"
    ],
    datasets: [
        {
            label: "Grafik Golongan Darah",
            data: [0, 19, 14, 20, 48, 13, 28],
            fill: false,
            backgroundColor: [ "rgba(255, 99, 132, 0.2)"],
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
const GrafikGolonganDarah = () => {
    return (
        <div className="grafik-golongan-darah">
            <div className="header">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Golongan Darah</h5>

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
                                    <th>Golongan Darah</th>
                                    <th>Jumlah</th>
                                    <th>Persentase</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>A</td>
                                    <td>21 jiwa</td>
                                    <td>014%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>B</td>
                                    <td>19 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>AB</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>O</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>A-</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>A+</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>B-</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td>B+</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>AB-</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>AB+</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>O-</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>O+</td>
                                    <td>1.453 jiwa</td>
                                    <td>19%</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Tidak Tahu</td>
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

export default GrafikGolonganDarah;
