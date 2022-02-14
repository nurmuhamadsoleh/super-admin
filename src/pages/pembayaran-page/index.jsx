import React, { useState } from "react";
// import MitraBumdesHeader from "./mitra-bumdes-header";
import { Line, Chart } from "react-chartjs-2";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PembayaranHeader from "./pembayaran-page-header";

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

const PembayaranPage = () => {

    return (
        <div className="pembayaran-page">
            <div className="header-main">
                <div className="card shadow bg-white">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between mt-3 mb-3">
                            <h5>Grafik Pembayaran PPOB</h5>

                            <div className="d-none d-md-flex d-lg-flex">
                                <input type="date" className="form-control" />
                                <input type="date" className="form-control ms-2" />
                            </div>

                            <div className="d-block d-md-none d-lg-none">
                                <input type="date" className="form-control" />
                                <input type="date" className="form-control mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
            <PembayaranHeader/>
                {/* <MitraBumdesHeader /> */}
            </>

            <div className="chart-body mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between mt-3">
                                    <h5>Grafik Pembayaran</h5>
                                    <button className="btn btn-primary">
                                        <i class="fas fa-filter"></i>
                                        <span>Filter</span>
                                    </button>
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                    <p>Jumlah Transaksi Per Kategori</p>
                                </div>
                                <div className="chart-line container" style={{ width: "90%" }}>
                                    <Line data={data} options={options} />
                                </div>

      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PembayaranPage;
