import React from 'react'
import { DateRangeFilter } from '../../components'

const TipeLaporanPage = () => {
    return (
        <div className="tipe-laporan-page">
            <div className="card shadow">
                <div className="d-flex justify-content-between container  p-3">
                    <h5>
                        TIPE LAPORAN TERBANYAK
                    </h5>
                    <div>
                        <DateRangeFilter />
                    </div>
                </div>
                <hr />
                <div className="p-3">

                </div>
            </div>
            <div className="card mt-3">

                <h6 className="p-3">
                    DATA PELAPOR
                </h6>


                <div className="row g-0">
                    <div className="col-md-3 ">
                        <div className="card bg-warning p-5 rounded-0">
                            <div className="d-flex justify-content-center ">
                                <div>
                                    Statistik Pelapor
                                </div>

                            </div>
                            <div className="d-flex justify-content-center ">
                                <div>
                                    0
                                </div>

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 p-5">
                            <div className="p-3">

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 container shadow">
                            <div className="d-flex justify-content-between p-2">
                                <div>
                                    <p>{">  17 Tahun"}</p>
                                </div>

                                <div>
                                    0 %
                                </div>

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 container shadow">
                            <div className="d-flex justify-content-between p-2">
                                <div>
                                    <p>{">  17 Tahun"}</p>
                                </div>

                                <div>
                                    0 %
                                </div>

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 container shadow">
                            <div className="d-flex justify-content-between   p-2">
                                <div>
                                    <p>{">  17 Tahun"}</p>
                                </div>

                                <div>
                                    0 %
                                </div>

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 container shadow">
                            <div className="d-flex justify-content-between p-2">
                                <div>
                                    <p>{">  17 Tahun"}</p>
                                </div>

                                <div>
                                    0 %
                                </div>

                            </div>
                        </div>
                        <div className="card border-top-0 rounded-0 container shadow">
                            <div className="d-flex justify-content-between p-2">
                                <div>
                                    <p>{">  17 Tahun"}</p>
                                </div>

                                <div>
                                    0 %
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 container-fluid">
                        <div className="card border-end-0 rounded-0 p-4">
                            <h6>WARGA YANG SERING MELAPOR</h6>
                        </div>
                        <div className="card border-end-0 rounded-0 p-4 bg-light">
                            <div className="d-flex justify-content-center p-4">
                                <div>
                                    RIZKI FIRMANSYAH
                                </div>
                                <div className="ms-5">
                                    2 Laporan
                                </div>
                            </div>
                        </div>
                        <div className="table-area">
                        <div class="table-responsive">
                            <table className="table table-white  ">
                                <thead className="bg-white">
                                    <tr >
                                        <th className="text-center">Nama</th>
                                        <th className="text-center">Laporan Diproses</th>
                                        <th className="text-center">Laporan Ditolak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td className="text-center">Rizki Firmansyah</td>
                                        <td className="text-center text-danger">0</td>
                                        <td className="text-center text-success">2</td>
                                    </tr>
                                    <tr >
                                        <td className="text-center">Rizki Firmansyah</td>
                                        <td className="text-center text-danger">0</td>
                                        <td className="text-center text-success">2</td>
                                    </tr>
                                    <tr >
                                        <td className="text-center">Rizki Firmansyah</td>
                                        <td className="text-center text-danger">0</td>
                                        <td className="text-center text-success">2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-lg btn-block"><div className="btn-text">Lihat semua</div></button>
                        </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TipeLaporanPage
