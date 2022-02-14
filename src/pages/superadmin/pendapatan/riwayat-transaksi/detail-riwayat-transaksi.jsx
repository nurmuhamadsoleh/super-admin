import React, { useState, createRef } from "react";
import { Input } from "reactstrap";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useLocation } from "react-router-dom";

const DetailRiwayatTransaksi = (props) => {
    const ref = createRef();
    const { state } = useLocation();
    const [newsTitle, setNewsTitle] = useState("");

    const onChangeTitle = ({ target }) => {
        setNewsTitle(target.value);
    };
    const convertToPdf = () => {
        html2canvas(document.querySelector("#pdf")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save('riwayat-transaksi.pdf');
        });
    }

    const goToPreviousPage = () => {

        props.history.push("/super-admin/riwayat-transaksi");
    }
    return (
        <div className="detail-riwayat-transaksi">
            <div className="card bg-white shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h6>Riwayat Transaksi</h6>
                        <Input
                            type="select"
                            id="exampleSelect"
                            onChange={onChangeTitle}
                            style={{ width: "20%" }}
                        >
                            <option hidden value="">
                                Pilih kategori
                            </option>
                            <option value="1">Pertanyaan</option>
                            <option value="2">Jawaban</option>
                        </Input>
                    </div>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-md-9">
                    <div className="card bg-white">
                        <div id="pdf">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="mt-3">
                                            <p>{state.data.nama}</p>
                                            <br />
                                            <p>{state.data.alamat}</p>
                                            <p>{state.data.tlpn}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mt-3">
                                            <div>
                                                <p>
                                                    <b>Invoices:</b> <span># {state.data.invoice}</span>
                                                </p>
                                            </div>

                                            <br />

                                            <p>
                                                Date Issued: <span>{state.data.dateIssued}</span>
                                            </p>
                                            <p>
                                                Due Date: <span>{state.data.dueDate}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>
                                            <b>Invoice untuk:</b>
                                        </p>
                                        <br />
                                        <p>{state.data.penerima}</p>
                                        <p>{state.data.alamatPenerima}</p>
                                        <p>{state.data.tlpnPenerima}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>
                                            <b>Payment Details:</b>
                                        </p>
                                        <br />
                                        <p>
                                            Total Tagihan: <span>{state.data.total}</span>
                                        </p>
                                        <p>
                                            Nama Bank: <span>{state.data.bank_name}</span>
                                        </p>
                                        <p>
                                            Kota: <span>{state.data.kota}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive mt-3">
                                <table
                                    className="table table-bordered"
                                    style={{ width: "100%" }}
                                >
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{state.data.produk}</td>
                                            <td>{state.data.total}</td>
                                            <td>{state.data.qty}</td>
                                            <td>{state.data.total}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-md-8">
                                        <p>
                                            Mitra: <span>{state.data.penerima}</span>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex justify-content-between">
                                            <p>Subtotal: </p>
                                            <b>{state.data.total}</b>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p>Discount: </p>
                                            <b>{state.data.discount}</b>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p>Biaya Admin </p>
                                            <b>{state.data.biaya_admin}</b>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p>Total: </p>
                                            <b>{state.data.total}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card bg-white">
                    <div className="d-flex justify-content-center mt-2 mb-2">
                            <button className="btn btn-outline-primary" style={{ width: "50%" }} onClick={goToPreviousPage}>
                                Selesai
                            </button>
                        </div>
                        <div className="d-flex justify-content-center  mb-2">
                            
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={convertToPdf}
                                        style={{ width: "50%" }}
                                    >
                                        Download
                                    </button>
                            
                        </div>
                        <div className="d-flex justify-content-center mb-2">
                            <button className="btn btn-outline-dark" style={{ width: "50%" }}>
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailRiwayatTransaksi;
