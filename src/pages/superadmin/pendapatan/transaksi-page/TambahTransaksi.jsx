import { useState } from "react";

const TambahTransaksi = (props) => {
    const backToPreviousPage = () => {
        props.history.goBack();
    };
    return (
        <div className="tambah-transaksi mb-3">
            <div className="card bg-white shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-start">
                        <h6 className="mt-2">Transaksi</h6>
                    </div>
                </div>
            </div>

            <div className="card bg-white mt-3">
                <div className="container">
                    <div className="mt-3">
                        <h6>Tambah Transaksi</h6>
                        <hr />
                    </div>

                    <div className=" d-flex justify-content-center mt-3">
                        <form style={{ width: "70%" }}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Desa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlSelect1">Kategori</label>
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

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group me-5">
                                        <label htmlFor="exampleFormControlSelect1">Fee</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                   
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mt-5 mb-5">
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

export default TambahTransaksi;
