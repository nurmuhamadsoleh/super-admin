import React from "react";
import { Line, Bar } from "react-chartjs-2";

const data = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Grafik Pendidikan",
      data: [
        0, 19, 14, 20, 48, 13, 28, 89, 40, 0, 19, 14, 20, 48, 13, 28, 89, 40, 0,
        19, 14, 20, 48, 13, 28, 89, 40, 80, 87, 23,
      ],
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
const GrafikPekerjaan = () => {
  return (
    <div className="grafik-pekerjaan">
      <div className="header">
        <div className="card shadow bg-white">
          <div className="container-fluid">
            <div className="d-flex justify-content-between mt-3 mb-3">
              <h5>Grafik Pekerjaan</h5>

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
                  <th>Pekerjaan</th>
                  <th>Jumlah</th>
                  <th>Persentase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Peternak</td>
                  <td>21 jiwa</td>
                  <td>014%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Industri</td>
                  <td>19 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pembantu Rumah Tangga</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dokter</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Guru</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Petani</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Nelayan</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Supir</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Pelajar</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Tukang Jahit</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Buruh Harian Lepas</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Pensiunan</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Perangkat Desa</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>TNI</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Karyawan BUMN</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Pedagang</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Belum/Tidak Bekerja</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Mekanik</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>PNS</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Perangkat Desa</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Wiraswasta</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Penata Rias</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Ustadz/Mubaligh</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Mengurus Rumah Tangga</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Polri</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Karyawan Honorer</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Pedagang</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Kepala Desa</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Perawat</td>
                  <td>1.453 jiwa</td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Pengusaha</td>
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

export default GrafikPekerjaan;
