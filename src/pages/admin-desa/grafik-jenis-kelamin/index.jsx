import React from "react";
import { Line, Bar } from "react-chartjs-2";

const data = {
    labels: ["laki-laki", "perempuan"],
    datasets: [
        {
            label: "Grafik Jenis Kelamin",
            data: [12, 19],
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
const GrafikJenisKelamin = () => {
    return (
        <div className="grafik-jenis-kelamin">
            <div className="header">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Jenis Kelamin</h5>

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
                        <th>Jenis Kelamin</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laki-laki</td>
                        <td>12</td>
                        <td>12%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Perempuan</td>
                        <td>19</td>
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

export default GrafikJenisKelamin;
