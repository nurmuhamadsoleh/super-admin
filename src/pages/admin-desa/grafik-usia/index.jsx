import React from "react";
import {  Bar } from "react-chartjs-2";

const data = {
    labels: ["0-4 tahun", "8-9 tahun", "10-14 tahun", "15-19 tahun", "20-24 tahun", "25-29 tahun", "30-34 tahun", "35-39 tahun", "40-44 tahun", "45-49 tahun", "50-54 tahun", "55-59 tahun", ">= 60 tahun"],
    datasets: [
        {
            label: "Grafik usia",
            data: [0, 19, 14, 20, 48, 13, 28, 56, 47, 36, 33, 25, 27],
            fill: false,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                
              ],
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
const GrafikUsia = () => {
    return (
        <div className="grafik-usia">
            <div className="header">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Usia</h5>

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
                        <Bar data={data} options={options}/>
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
                        <th>Usia</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>0-4 tahun</td>
                        <td>21 jiwa</td>
                        <td>014%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>5-9 tahun</td>
                        <td>19 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>10-14 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>15-19 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>15-19 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>20-24 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>25-29 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>30-34 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>35-39 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>40-44 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>45-49 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>50-54 tahun</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>

                    <tr>
                        <td>13</td>
                        <td>{">= 60 tahun"}</td>
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

export default GrafikUsia;
