import React from "react";
import {  Modal,  ModalBody, ModalFooter } from "reactstrap";

 const EditPendukungDesa = ({
  isOpen,
  toggle,
  className,
  externalCloseBtn,
  errorMsgName,
  handleChange,
  field,
  onClick,
  processState,
  kontak,
  alamat,
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
                <label className="control-label">Field</label>
                <input
                  autoFocus
                  type="text"
                  id="field"
                  name="field"
                  className="form-control"
                  //   placeholder="Name"
                  onChange={handleChange}
                  value={field}
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
                <input
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
              <div className="form-group">
                <label className="control-label">Kontak</label>
                <input
                  autoFocus
                  type="number"
                  id="kontak"
                  name="kontak"
                  className="form-control"
                  //   placeholder="No. Telepon"
                  onChange={handleChange}
                  value={kontak}
                />
                <small className="text-danger">
                  {/* This is inline help */}
                  {errorMsgName}
                </small>
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

export default EditPendukungDesa
