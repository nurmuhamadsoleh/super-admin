import React from 'react'

const MitraBumdesHeader = () => {
    return (
        <div className="mitra-bumdes-header">
             <div className="top-chart mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-side">
                            <div className="card shadow  omzet-card pt-4 pb-4 ">
                                <div className="container-fluid mt-2 mb-2">
                                    <b>
                                        Total Omzet{" "}
                                        <span>
                                            {" "}
                                            <i class="fas fa-info-circle"></i>
                                        </span>
                                    </b>
                                    <h5>Rp .0</h5>
                                    <div className="row pt-2 pt-md-2 pt-lg-0">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-grey text-center ">
                                                        <i class="fas fa-home mt-2"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="ms-0 ms-md-4 ms-lg-2">
                                                        <b className="chart-title d-md-none d-lg-block">Total Mitra</b>
                                                        <div>
                                                            <b>0 Mitra</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-grey text-center ">
                                                        <i class="fas fa-list-ul mt-2 "></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="ms-0 ms-md-4 ms-lg-2">
                                                        <b className="chart-title d-md-none d-lg-block">Jumlah Transaksi</b>
                                                        <div>
                                                            <b>0 Transaksi</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="right-side">
                            <div className="row">
                                <div className="col-md-6 mt-3 mt-md-0 mt-lg-0">
                                    <div className="card shadow">
                                        <div className="container-fluid mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-blue text-center ">
                                                        <i class="fas fa-money-bill-wave text-blue mt-2"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="ms-0 ms-md-3 ms-lg-2">
                                                        <b className="chart-title">Total Pendapatan</b>
                                                        <div>
                                                            <h5>Rp. 0</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3 mt-md-0 mt-lg-0">
                                    <div className="card shadow">
                                        <div className="container-fluid mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-grey text-center ">
                                                        <i class="fas fa-money-bill-wave text-yellow mt-2"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 ">
                                                    <div className="ms-0 ms-md-3 ms-lg-2">
                                                        <b className="chart-title">Pendapatan BUMDesa</b>
                                                        <div>
                                                            <h5>Rp. 0</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="card shadow">
                                        <div className="container-fluid mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-orange text-center ">
                                                        <i class="fas fa-money-bill-wave text-orange mt-2"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="ms-0 ms-md-3 ms-lg-2">
                                                        <b className="chart-title">Rata-rata Transaksi</b>
                                                        <div>
                                                            <h5>Rp 0</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3 mt-md-0 mt-lg-0">
                                    <div className="card shadow">
                                        <div className="container-fluid mt-3 mb-3">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="box box-pink text-center ">
                                                        <i class="fas fa-percent text-pink mt-2"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="ms-0 ms-md-3 ms-lg-2">
                                                        <b className="chart-title">
                                                            Sharing Fee SimpleDesa
                                                        </b>
                                                        <div>
                                                            <h5>Rp. 0</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MitraBumdesHeader