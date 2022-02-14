import React from "react";

const TambahPengajuanEdesa = (props) => {
    const addSuratTugas = () => {
        props.history.push("/admin-desa/pengajuan-edesa/add/surat-tugas");
    };

    const addSuratKeteranganBepergian = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-berpergian"
        );
    };

    const addSuratKeteranganDomisiliLembaga = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-domisili-lembaga"
        );
    };

    const addSuratKeteranganDomisiliPerusahaan = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-domisili-perusahaan"
        );
    };

    const addSuratKeteranganBedaIdentitas = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-beda-identitas"
        );
    };

    const addSuratKeteranganDomisili = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-domisili"
        );
    };
    const addSuratKeteranganDomisiliNonWarga = () => {
        props.history.push(
            "/admin-desa/pengajuan-edesa/add/surat-keterangan-domisili-non-warga"
        );
    };
    const addSuratKeteranganDomisiliPerusahaanNonWarga = () => {
        props.history.push("/admin-desa/pengajuan-edesa/add/surat-keterangan-domisili-perusahaan-non-warga");
    }

    return (
        <div className="tambah-pengajuan-edesa">
            <div className="card bg-white shadow">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratTugas}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Tugas/Perintah
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganBepergian}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Berpergian
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganDomisiliLembaga}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Domisili Lembaga/Yayasan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganDomisiliPerusahaan}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Domisili Perusahaan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Duda/Janda
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Izin Tidak Masuk Kerja
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Domisili Kematian
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Resi KTP Sementara
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Tidak Mampu
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Usaha (Non Warga)
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Pengantar Catatan Kepolisian
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Pengantar Perkawinan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3 mb-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Rekomendasi Izin Keramaian
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganBedaIdentitas}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Beda Identitas
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganDomisili}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Domisili
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button
                                className="btn shadow-lg pt-3 pb-3"
                                onClick={addSuratKeteranganDomisiliNonWarga}
                            >
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Domisili (Non Warga )
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3" onClick={addSuratKeteranganDomisiliPerusahaanNonWarga}>
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Perusahaan (Non Warga )
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Ghaib
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Kelahiran
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Penghasilan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Status Perkawinan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Keterangan Status Usaha
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Kuasa
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Pengantar Kehilangan
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-3 mb-3">
                            <button className="btn shadow-lg pt-3 pb-3">
                                <div className="d-flex justify-content-between ">
                                    Surat Pengantar Perkawinan Untuk Pria
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TambahPengajuanEdesa;
