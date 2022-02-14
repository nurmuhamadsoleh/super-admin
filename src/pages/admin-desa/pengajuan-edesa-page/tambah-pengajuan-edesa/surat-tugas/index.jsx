import React from "react";
import { SubTitle } from "../../../../../components";
import * as yup from "yup";
import { Formik, Field } from "formik";
import { FormGroup, Input, Label, Button } from "reactstrap";

const SuratTugas = () => {
  const validationScheme = yup.object({
    surat: yup.string().required("Surat Tugas perlu diisi"),
    nomor: yup.number().required("Nomor Surat Tugas perlu diisi"),
    tanggal: yup.date().required("Tanggal Surat Tugas perlu diisi"),
    perihal: yup.string().required("Perihal Surat Tugas perlu diisi"),
    nik: yup.number().required("NIK perlu diisi"),
    nama: yup.string().required("Nama perlu diisi"),
    tempatLahir: yup.string().required("Tempat Lahir perlu diisi"),
    tanggalLahir: yup.date().required("Tanggal Lahir perlu diisi"),
    jenisKelamin: yup.string().required("Jenis Kelamin perlu diisi"),
    pekerjaan: yup.string().required("Pekerjaan perlu diisi"),
    alamat: yup.string().required("Alamat perlu diisi"),
    jabatan: yup.string().required("Jabatan perlu diisi"),
    tugasPerintah: yup.string().required("Tugas Perintah perlu diisi"),
    hariPelaksanaan: yup.string().required("Hari Pelaksanaan perlu diisi"),
    tanggalPelaksanaan: yup.date().required("Tanggal Pelaksanaan perlu diisi"),
    waktuPelaksanaan: yup.string().required("Waktu Pelaksanaan perlu diisi"),
    tempatPelaksanaan: yup.string().required("Tempat Pelaksanaan perlu diisi"),
    note: yup.string().required("Note perlu diisi"),
    ditandatangani: yup.string().required("Penanda tangan perlu diisi"),
  });

  const backToPreviousPage = () => {
    window.history.back();
    };

    const onSubmit = (data) => {
        console.log(data);
    };
  return (
    <div className="surat-tugas">
      <SubTitle title="Pengajuan E-Desa" />

      <div className="card mt-5 bg-white">
        <div className="d-flex justify-content-center mt-3 mb-3">
          <h6>
            <b>SURAT TUGAS/PERINTAH</b>
          </h6>
        </div>

        <Formik
          initialValues={{
            surat: "",
            nomor: "",
            tanggal: "",
            perihal: "",
            nik: "",
            nama: "",
            tempatLahir: "",
            tanggalLahir: "",
            jenisKelamin: "",
            pekerjaan: "",
            alamat: "",
            jabatan: "",
            tugasPerintah: "",
            hariPelaksanaan: "",
            tanggalPelaksanaan: "",
            waktuPelaksanaan: "",
            tempatPelaksanaan: "",
            note: "",
            ditandatangani: "",
          }}
            validationSchema={validationScheme}
            onSubmit={(data) => onSubmit(data)}
        >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit} className="pe-3 ps-3 mb-5">
                    <div className="form-group">
                        <label htmlFor="surat">Surat Tugas/Perintah</label>
                        <Field
                            type="text"
                            name="surat"
                            className="form-control"
                            placeholder="Surat"
                            onChange={handleChange}
                            value={values.surat}
                        />
                        {errors.surat && touched.surat ? (
                            <div className="text-danger">{errors.surat}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nomor">Nomor</label>
                        <Field
                            type="number"
                            name="nomor"
                            className="form-control"
                            placeholder="Nomor"
                            onChange={handleChange}
                            value={values.nomor}
                        />
                        {errors.nomor && touched.nomor ? (
                            <div className="text-danger">{errors.nomor}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tanggal">Tanggal</label>
                        <Field
                            type="date"
                            name="tanggal"
                            className="form-control"
                            placeholder="Tanggal"
                            onChange={handleChange}
                            value={values.tanggal}
                        />
                        {errors.tanggal && touched.tanggal ? (
                            <div className="text-danger">{errors.tanggal}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="perihal">Perihal</label>
                        <Field
                            type="text"
                            name="perihal"
                            className="form-control"
                            placeholder="Perihal"
                            onChange={handleChange}
                            value={values.perihal}
                        />
                        {errors.perihal && touched.perihal ? (
                            <div className="text-danger">{errors.perihal}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nik">NIK</label>
                        <Field
                            type="number"
                            name="nik"
                            className="form-control"
                            placeholder="NIK"
                            onChange={handleChange}
                            value={values.nik}
                        />
                        {errors.nik && touched.nik ? (
                            <div className="text-danger">{errors.nik}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nama">Nama</label>
                        <Field
                            type="text"
                            name="nama"
                            className="form-control"
                            placeholder="Nama"
                            onChange={handleChange}
                            value={values.nama}
                        />
                        {errors.nama && touched.nama ? (
                            <div className="text-danger">{errors.nama}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tempatLahir">Tempat Lahir</label>
                        <Field
                            type="text"
                            name="tempatLahir"
                            className="form-control"
                            placeholder="Tempat Lahir"
                            onChange={handleChange}
                            value={values.tempatLahir}
                        />
                        {errors.tempatLahir && touched.tempatLahir ? (
                            <div className="text-danger">{errors.tempatLahir}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                        <Field
                            type="date"
                            name="tanggalLahir"
                            className="form-control"
                            placeholder="Tanggal Lahir"
                            onChange={handleChange}
                            value={values.tanggalLahir}
                        />
                        {errors.tanggalLahir && touched.tanggalLahir ? (
                            <div className="text-danger">{errors.tanggalLahir}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                        {/* checklist */}
                        <div className="form-check">
                            <label className="form-check-label me-5">
                                <Field
                                    type="radio"
                                    name="jenisKelamin"
                                    value="Laki-Laki"
                                    className="form-check-input"
                                    onChange={handleChange}
                                    checked={values.jenisKelamin === "Laki-Laki"}
                                />
                                Laki-Laki
                            </label>

                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    name="jenisKelamin"
                                    value="Perempuan"
                                    className="form-check-input"
                                    onChange={handleChange}
                                    checked={values.jenisKelamin === "Perempuan"}
                                />
                                Perempuan
                            </label>

                            {errors.jenisKelamin && touched.jenisKelamin ? (
                                <div className="text-danger">{errors.jenisKelamin}</div>
                            ) : null}

                            </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pekerjaan">Pekerjaan</label>
                        <Field
                            type="text"
                            name="pekerjaan"
                            className="form-control"
                            placeholder="Pekerjaan"
                            onChange={handleChange}
                            value={values.pekerjaan}
                        />
                        {errors.pekerjaan && touched.pekerjaan ? (
                            <div className="text-danger">{errors.pekerjaan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="alamat">Alamat</label>
                        <Field
                            type="text"
                            name="alamat"
                            className="form-control"
                            placeholder="Alamat"
                            onChange={handleChange}
                            value={values.alamat}
                        />
                        {errors.alamat && touched.alamat ? (
                            <div className="text-danger">{errors.alamat}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="jabatan">Jabatan</label>
                        <Field
                            type="text"
                            name="jabatan"
                            className="form-control"
                            placeholder="Jabatan"
                            onChange={handleChange}
                            value={values.jabatan}
                        />
                        {errors.jabatan && touched.jabatan ? (
                            <div className="text-danger">{errors.jabatan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tugasPerintah">Tugas atau Perintah yang Diberikan</label>
                        <Field
                            type="text"
                            name="tugasPerintah"
                            className="form-control"
                            placeholder="Nama Tugas"
                            onChange={handleChange}
                            value={values.tugasPerintah}
                        />
                        {errors.tugasPerintah && touched.tugasPerintah ? (
                            <div className="text-danger">{errors.tugasPerintah}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="hariPelaksanaan">Hari Pelaksanaan/Kegiatan</label>
                        <Field
                            type="text"
                            name="hariPelaksanaan"
                            className="form-control"
                            placeholder="Hari Pelaksanaan"
                            onChange={handleChange}
                            value={values.hariPelaksanaan}
                        />
                        {errors.hariPelaksanaan && touched.hariPelaksanaan ? (
                            <div className="text-danger">{errors.hariPelaksanaan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tanggalPelaksanaan">Tanggal Pelaksanaan/Kegiatan</label>
                        <Field
                            type="date"
                            name="tanggalPelaksanaan"
                            className="form-control"
                            placeholder="Tanggal Pelaksanaan"
                            onChange={handleChange}
                            value={values.tanggalPelaksanaan}
                        />
                        {errors.tanggalPelaksanaan && touched.tanggalPelaksanaan ? (
                            <div className="text-danger">{errors.tanggalPelaksanaan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="waktuPelaksanaan">Waktu Pelaksanaan/Kegiatan</label>
                        <Field
                            type="text"
                            name="waktuPelaksanaan"
                            className="form-control"
                            placeholder="Waktu Pelaksanaan"
                            onChange={handleChange}
                            value={values.waktuPelaksanaan}
                        />
                        {errors.waktuPelaksanaan && touched.waktuPelaksanaan ? (
                            <div className="text-danger">{errors.waktuPelaksanaan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tempatPelaksanaan">Tempat Pelaksanaan/Kegiatan</label>
                        <Field
                            type="text"
                            name="tempatPelaksanaan"
                            className="form-control"
                            placeholder="Tempat Pelaksanaan"
                            onChange={handleChange}
                            value={values.tempatPelaksanaan}
                        />
                        {errors.tempatPelaksanaan && touched.tempatPelaksanaan ? (
                            <div className="text-danger">{errors.tempatPelaksanaan}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <Field
                            type="text"
                            name="note"
                            className="form-control"
                            placeholder="Note"
                            onChange={handleChange}
                            value={values.note}
                        />
                        {errors.note && touched.note ? (
                            <div className="text-danger">{errors.note}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="ditandatangani">Ditandatangani Oleh</label>
                        <Field
                            type="text"
                            name="ditandatangani"
                            className="form-control"
                            placeholder="Ditandatangani Oleh"
                            onChange={handleChange}
                            value={values.ditandatangani}
                        />
                        {errors.ditandatangani && touched.ditandatangani ? (
                            <div className="text-danger">{errors.ditandatangani}</div>
                        ) : null}
                    </div>

                    <div className="d-flex justify-content-end mt-5">
                       
                        <button
                            type="button"
                            className="btn btn-outline-primary me-2"
                            onClick={backToPreviousPage}
                        >
                            Batal
                        </button>

                        <button type="submit" className="btn btn-primary">
                            Simpan
                        </button>
                    </div>


                    </form>
            )}
        </Formik>
      </div>
    </div>
  );
};

export default SuratTugas;
