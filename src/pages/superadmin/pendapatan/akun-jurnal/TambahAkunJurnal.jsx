import { useState } from "react";

const TambahAkunJurnal = (props) => {
    const backToPreviousPage = () => {
        props.history.goBack();
    };
    return (
        <div className="tambah-akun-jurnal mb-3">
            <div className="card bg-white shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-start">
                        <h6 className="mt-2">Akun Jurnal</h6>
                    </div>
                </div>
            </div>

            <div className="card bg-white mt-3">
                <div className="container">
                    <div className="mt-3">
                        <h6>Akun Jurnal</h6>
                        <hr />
                    </div>

                    <div className=" d-flex justify-content-center mt-3">
                        <form style={{ width: "70%" }}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Nama Desa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlSelect1">Kategori Transaksi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlSelect1">Deskripsi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlSelect1">Metode Bayar</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                />
                            </div>

                            
                            <div className="d-flex justify-content-end mt-5 mb-5">
                                <button
                                    type="button"
                                    className="btn btn-outline-dark ml-3"
                                    onClick={backToPreviousPage}
                                >
                                    Batal
                                </button>
                                <button type="submit" className="btn btn-primary ms-2">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TambahAkunJurnal;
