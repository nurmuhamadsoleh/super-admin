import React from "react";

const SaldoPage = () => {
    return (
        <div className="saldo-page">
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="container mt-3">
                            <div className="row ">
                                <div className="col-md-2">
                                    <div className="box grey text-center ">
                                        <i className="fas fa-money-bill-wave text-success mt-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <div className="header-text ms-2">
                                        <p className="font-weight-bold">Total Saldo Aktif</p>
                                        <h5>Rp. 0</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container p-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <b>Penghasilan</b>
                                    <i class="fas fa-info-circle "></i>
                                </div>

                                <b>Rp. 0</b>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div className="d-flex">
                                    <b>Penghasilan</b>
                                    <i class="fas fa-info-circle "></i>
                                </div>

                                <b>Rp. 0</b>
                            </div>
                        </div>
                        <hr />
                        <div className="container ">
                            <div className="d-flex justify-content-center">
                                <button className="btn-1">TARIK SALDO</button>
                                <button className="btn-2 ms-2"> TARIK SALDO</button>
                            </div>
                        </div>
                        <div className="container mt-3 mb-3 penarikan">
                            Lihat info penarikan
                        </div>
                    </div>

                    <div className="card shadow mt-3">
                        <div className="header-text-2 mt-2">
                            <div className="container">
                                <b>Saldo Mitra BUMDes</b>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row mt-2">
                                <div className="col-md-2">
                                    <div className="box grey text-center ">
                                        <i className="fas fa-money-bill-wave text-pink mt-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <div className="header-text ms-2">
                                        <div className="d-flex">
                                            <p className="font-weight-bold">Saldo Terdistribusi</p>
                                            <i class="fas fa-info-circle "></i>
                                        </div>

                                        <p>Rp. 0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2">
                                    <div className="box grey text-center ">
                                        <i className="fas fa-money-bill-wave text-yellow mt-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <div className="header-text ms-2">
                                        <div className="d-flex">
                                            <p className="font-weight-bold">Saldo Digunakan Mitra</p>
                                            <i class="fas fa-info-circle "></i>
                                        </div>

                                        <p>Rp. 0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2">
                                    <div className="box grey text-center ">
                                        <i className="fas fa-money-bill-wave text-blue mt-3"></i>
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <div className="header-text ms-2">
                                        <div className="d-flex">
                                            <p className="font-weight-bold">Saldo Setor Mitra</p>
                                            <i class="fas fa-info-circle "></i>
                                        </div>

                                        <p>Rp. 0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="header-text-2 mt-2">
                            <div className="container">
                                <b>Riwayat Transaksi</b>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaldoPage;
