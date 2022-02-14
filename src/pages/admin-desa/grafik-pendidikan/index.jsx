import React from "react";
import {  Bar } from "react-chartjs-2";

const data = {
    labels: ["Belum Sekolah", "Belum Tamat SD", "Tamat SD", "SLTP", "SLTA", "Diploma VII", "Diploma III", "Strata I", "Strata II", "Strata III"],
    datasets: [
        {
            label: "Grafik Pendidikan",
            data: [0, 19, 14, 20, 48, 13, 28, 56, 47, 36],
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
const GrafikPendidikan = () => {
    return (
        <div className="grafik-pendidikan">
            <div className="header">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Pendidikan</h5>

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
                        <th>Status</th>
                        <th>Jumlah</th>
                        <th>Persentase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Belum Sekolah</td>
                        <td>21 jiwa</td>
                        <td>014%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Belum Tamat SD</td>
                        <td>19 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tamat SD</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SLTP</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>SLTA</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Diploma VIII</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Diploma III</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Strata I</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Strata II</td>
                        <td>1.453 jiwa</td>
                        <td>19%</td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>Strata III</td>
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

export default GrafikPendidikan;
