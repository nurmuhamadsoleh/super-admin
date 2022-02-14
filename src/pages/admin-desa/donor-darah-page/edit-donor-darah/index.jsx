import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const EditDonorDarah = ({
    isOpen,
    toggle,
    className,
    externalCloseBtn,
    errorMsgName,
    handleChange,
    nama,
    onClick,
    processState,
    kontak,
    alamat,
    selected,
    onChangeRadio,
    radioValue,
}) => {
    return (
        <div className="add-pendukung-desa">
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                className={className}
                external={externalCloseBtn}
            >
                <ModalBody>
                    <div>
                        <div>
                            <div className="form-group">
                                <label className="control-label">Nama Provider</label>
                                <input
                                    autoFocus
                                    type="text"
                                    id="nama"
                                    name="nama"
                                    className="form-control"
                                    //   placeholder="Name"
                                    onChange={handleChange}
                                    value={nama}
                                />
                                <small className="text-danger">
                                    {/* This is inline help */}
                                    {errorMsgName}
                                </small>
                            </div>
                        </div>

                        <div>
                            <div className="form-group">
                                <label className="control-label">Alamat</label>
                                <textarea
                                    autoFocus
                                    type="text"
                                    id="alamat"
                                    name="alamat"
                                    className="form-control"
                                    //   placeholder="Email"
                                    onChange={handleChange}
                                    value={alamat}
                                />
                                <small className="text-danger">
                                    {/* This is inline help */}
                                    {errorMsgName}
                                </small>
                            </div>
                        </div>

                        <div>
                                
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="aktif"
                                    id="aktif"
                                    value={radioValue}
                                    onChange={onChangeRadio}
                                    checked={selected === "aktif"}
                                />
                                <label class="form-check-label" for="aktif">
                                    Aktif
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    name="tidakAktif"
                                    id="tidakAktif"
                                    value={radioValue}
                                    onChange={onChangeRadio}
                                    checked={selected === "tidakAktif"}
                                />
                                <label class="form-check-label" for="tidakAktif">
                                    Tidak Aktif
                                </label>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <div className="float-right">
                        <div className="form-actions">
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={toggle}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-success ms-2"
                                onClick={onClick}
                                disabled={processState}
                            >
                                {" "}
                                <i className="fa fa-check" /> Save
                            </button>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditDonorDarah;
