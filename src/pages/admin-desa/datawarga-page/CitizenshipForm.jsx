import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Label } from "reactstrap";
import AvaPlaceholder from "../../../assets/images/avatar_placeholder.png";
import { ImageUploader, FormikController } from "../../../components";
import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";

import { Formik, Form } from "formik";
import * as Yup from "yup";

const CitizenshipForm = ({ onSubmitCitizenshipForm }) => {
  let { kependudukanState, editKependudukan, setNextForm } = useContext(KependudukanContext);
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [imageFiles, setImageFiles] = useState({});
  const [formDefaultValue, setFormDefaultValue] = useState({});

  useEffect(() => {
    if (!id) return;
    setIsEdit(true);
    const data = kependudukanState.dataKependudukanList.filter((data) => data.id === id)[0];
    setFormDefaultValue(data);
  }, [id, kependudukanState]);

  useEffect(() => {
    if (!id) {
      setNextForm(false);
    } else {
      setNextForm(true);
    }
    // eslint-disable-next-line
  }, [id]);

  const { nik = "", no_kk = "", profil_penduduk = {} } = formDefaultValue;

  const {
    agama = "",
    akta_perkawinan = false,
    akta_kelahiran = false,
    alamat = "",
    dapat_membaca = false,
    dusun = "",
    email = "",
    etnis = "",
    gol_darah = "",
    hobi = "",
    jenis_kelamin = "",
    kelainan_fisik = false,
    kewarganegaraan = "",
    nama = "",
    nama_ayah = "",
    nama_ibu = "",
    no_akta_perkawinan = "",
    no_telpon = "",
    pekerjaan = "",
    pendidikan = "",
    rt = "",
    rw = "",
    status_keluarga = "",
    status_pernikahan = "",
    status_warga = "",
    tanggal_lahir = "",
    tempat_lahir = "",
  } = profil_penduduk;

  const INITIAL_FORM_VALUE = {
    agama: agama || "Islam",
    akta_perkawinan: akta_perkawinan,
    akta_kelahiran: akta_kelahiran.toString(),
    alamat: alamat,
    dapat_membaca: dapat_membaca.toString(),
    dusun: dusun,
    email: email,
    etnis: etnis || "Aceh",
    gol_darah: gol_darah,
    hobi: hobi,
    jenis_kelamin: jenis_kelamin,
    kelainan_fisik: kelainan_fisik.toString(),
    kewarganegaraan: kewarganegaraan || "WNI",
    nama: nama,
    nama_ayah: nama_ayah,
    nama_ibu: nama_ibu,
    nik: nik,
    no_akta_perkawinan: no_akta_perkawinan,
    no_kk: no_kk,
    no_telpon: no_telpon,
    pekerjaan: pekerjaan || "TIDAK BELUM/ SEKOLAH",
    pendidikan: pendidikan || "TIDAK BELUM/ BEKERJA",
    rt: rt,
    rw: rw,
    status_keluarga: status_keluarga || "Kepala Keluarga",
    status_pernikahan: status_pernikahan,
    status_warga: status_warga,
    tanggal_lahir: tanggal_lahir.toString(),
    tempat_lahir: tempat_lahir,
  };
  const validationSchema = Yup.object({
    agama: Yup.string().required("Wajib diisi"),
    akta_perkawinan: Yup.bool().required("Wajib diisi"),
    akta_kelahiran: Yup.bool().required("Wajib diisi"),
    alamat: Yup.string().required("Wajib diisi"),
    dapat_membaca: Yup.bool().required("Wajib diisi"),
    dusun: Yup.string().required("Wajib diisi"),
    email: Yup.string().required("Wajib diisi"),
    etnis: Yup.string().required("Wajib diisi"),
    gol_darah: Yup.string().required("Wajib diisi"),
    hobi: Yup.string().required("Wajib diisi"),
    jenis_kelamin: Yup.string().required("Wajib diisi"),
    kelainan_fisik: Yup.bool().required("Wajib diisi"),
    kewarganegaraan: Yup.string().required("Wajib diisi"),
    nama: Yup.string().required("Wajib diisi"),
    nama_ayah: Yup.string().required("Wajib diisi"),
    nama_ibu: Yup.string().required("Wajib diisi"),
    nik: Yup.string().required("Wajib diisi"),
    no_akta_perkawinan: Yup.string().required("Wajib diisi"),
    no_kk: Yup.string().required("Wajib diisi"),
    no_telpon: Yup.string().required("Wajib diisi"),
    pekerjaan: Yup.string().required("Wajib diisi"),
    pendidikan: Yup.string().required("Wajib diisi"),
    rt: Yup.string().required("Wajib diisi"),
    rw: Yup.string().required("Wajib diisi"),
    status_keluarga: Yup.string().required("Wajib diisi"),
    status_pernikahan: Yup.string().required("Wajib diisi"),
    status_warga: Yup.string().required("Wajib diisi"),
    tanggal_lahir: Yup.string().required("Wajib diisi"),
    tempat_lahir: Yup.string().required("Wajib diisi"),
  });

  const handleSubmitEdit = async (data) => {
    for (const key in data) {
      if (data[key] === "true") {
        data[key] = true;
      }
      if (data[key] === "false") {
        data[key] = false;
      }

      if (parseInt(data[key])) {
        data[key] = parseInt(data[key]);
      }
    }
    let { nik, no_kk } = data;
    const desaId = JSON.parse(localStorage.getItem("userProfile")).desa_id;
    const kependudukanData = { desa_id: desaId, nik, no_kk, profil_penduduk: { ...data } };
    console.log(kependudukanData);
    editKependudukan(kependudukanData, id);
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUE}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={isEdit ? handleSubmitEdit : onSubmitCitizenshipForm}
    >
      {(formik) => (
        <Form>
          <Row>
            <Col xs="12" lg="8">
              <Card className="p-4 border-0 shadow-sm">
                <h5>Data Utama</h5>
                <hr />
                <Row className="mt-3">
                  <Col xs="12" lg="6">
                    <FormikController control="input" type="number" label="NIK *" name="nik" placeholder="NIK" />
                  </Col>
                  <Col xs="12" lg="6">
                    <FormikController
                      control="input"
                      type="number"
                      label="No KK *"
                      name="no_kk"
                      placeholder="No KK Keluarga"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs="12">
                    <FormikController control="input" type="text" label="Nama *" name="nama" placeholder="Nama" />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs="12">
                    <FormikController
                      control="select"
                      label="Status Keluarga *"
                      name="status_keluarga"
                      options={[
                        { key: "Kepala Keluarga", value: "Kepala Keluarga" },
                        { key: "Suami", value: "Suami" },
                        { key: "Istri", value: "Istri" },
                        { key: "Anak", value: "Anak" },
                        { key: "Menantu", value: "Menantu" },
                        { key: "Cucu", value: "Cucu" },
                      ]}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="4">
                    <FormikController
                      control="radio"
                      label="Jenis Kelamin *"
                      name="jenis_kelamin"
                      options={[
                        { key: "Pria", value: "Pria" },
                        { key: "Wanita", value: "Wanita" },
                      ]}
                    />
                  </Col>

                  <Col xs="12" lg="8">
                    <FormikController
                      control="select"
                      label="Agama *"
                      name="agama"
                      options={[
                        { key: "Islam", value: "Islam" },
                        { key: "Kristen", value: "Kristen" },
                        { key: "Katholik", value: "Katholik" },
                        { key: "Hindu", value: "Hindu" },
                        { key: "Buddha", value: "Buddha" },
                        { key: "Khonghucu", value: "Khonghucu" },
                        { key: "Lainnya", value: "Lainnya" },
                      ]}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="6">
                    <FormikController
                      control="input"
                      type="text"
                      label="Tempat Lahir *"
                      name="tempat_lahir"
                      placeholder="Tempat Lahir"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <FormikController
                      control="input"
                      type="date"
                      label="Tanggal Lahir *"
                      name="tanggal_lahir"
                      placeholder="Tanggal Lahir"
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12">
                    <div className="d-flex justify-content-start w-100 align-items-center">
                      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                        <FormikController
                          control="radio"
                          label="Akta Kelahiran *"
                          name="akta_kelahiran"
                          options={[
                            { key: "Ada", value: "true" },
                            { key: "Tidak", value: "false" },
                          ]}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12">
                    <FormikController
                      control="textarea"
                      type="textarea"
                      label="Alamat *"
                      name="alamat"
                      placeholder="Alamat"
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="4">
                    <FormikController control="input" type="text" label="Dusun *" name="dusun" placeholder="Dusun" />
                  </Col>
                  <Col xs="12" lg="4">
                    <FormikController control="input" type="text" label="RT *" name="rt" placeholder="RT" />
                  </Col>
                  <Col xs="12" lg="4">
                    <FormikController control="input" type="text" label="RW *" name="rw" placeholder="RW" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12">
                    <FormikController
                      control="select"
                      label="Kewarganegaraan *"
                      name="kewarganegaraan"
                      options={[
                        { key: "WNI", value: "WNI" },
                        { key: "WNA", value: "WNA" },
                      ]}
                    />
                  </Col>
                </Row>
              </Card>

              <Card className="my-3 p-4 border-0 shadow-sm">
                <h5>Fisik dan Keturunan</h5>
                <hr />
                <Row className="mt-3">
                  <Col xs="12" lg="8">
                    <FormikController
                      control="select"
                      label="Golongan Darah *"
                      name="gol_darah"
                      options={[
                        { key: "A", value: "A" },
                        { key: "B", value: "B" },
                        { key: "AB", value: "AB" },
                        { key: "O", value: "O" },
                      ]}
                    />
                  </Col>
                  <Col xs="12" lg="4">
                    <div className="d-flex justify-content-evenly w-75 align-items-center">
                      <FormikController
                        control="radio"
                        label="Dapat Membaca *"
                        name="dapat_membaca"
                        options={[
                          { key: "Ya", value: "true" },
                          { key: "Tidak", value: "false" },
                        ]}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12">
                    <div className="d-flex justify-content-start w-100 align-items-center">
                      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                        <FormikController
                          control="radio"
                          label="Kelainan Fisik *"
                          name="kelainan_fisik"
                          options={[
                            { key: "Ya", value: "true" },
                            { key: "Tidak", value: "false" },
                          ]}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="4">
                    <FormikController
                      control="input"
                      type="text"
                      label="Nama Ayah *"
                      name="nama_ayah"
                      placeholder="Nama Ayah"
                    />
                  </Col>
                  <Col xs="12" lg="4">
                    <FormikController
                      control="input"
                      type="text"
                      label="Nama Ibu *"
                      name="nama_ibu"
                      placeholder="Nama Ibu"
                    />
                  </Col>
                  <Col xs="12" lg="4">
                    <FormikController
                      control="select"
                      label="Etnis *"
                      name="etnis"
                      options={[
                        { key: "Aceh", value: "Aceh" },
                        { key: "Asmat", value: "Asmat" },
                        { key: "Batak", value: "Batak" },
                        { key: "Betawi", value: "Betawi" },
                        { key: "Bugis", value: "Bugis" },
                        { key: "Cina", value: "Cina" },
                        { key: "Dayak", value: "Dayak" },
                        { key: "Jawa", value: "Jawa" },
                        { key: "Madura", value: "Madura" },
                        { key: "Melayu", value: "Melayu" },
                        { key: "Minahasa", value: "Minahasa" },
                        { key: "Sunda", value: "Sunda" },
                        { key: "Lainnya", value: "Lainnya" },
                      ]}
                    />
                  </Col>
                </Row>
              </Card>

              <Card className="my-3 p-4 border-0 shadow-sm">
                <h5>Status Pernikahan</h5>
                <hr />
                <Row className="mt-3">
                  <Col xs="12">
                    <FormikController
                      control="radio"
                      label="Status Pernikahan *"
                      name="status_pernikahan"
                      options={[
                        { key: "Belum Kawin", value: "Belum Kawin" },
                        { key: "Kawin", value: "Kawin" },
                        { key: "Cerai Hidup", value: "Cerai Hidup" },
                        { key: "Cerai Mati", value: "Cerai Mati" },
                      ]}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="4">
                    <div className="d-flex justify-content-start w-100 align-items-center">
                      <FormikController
                        control="radio"
                        label="Akta Perkawinan *"
                        name="akta_perkawinan"
                        options={[
                          { key: "Ada", value: "true" },
                          { key: "Tidak", value: "false" },
                        ]}
                      />
                    </div>
                  </Col>
                  <Col xs="12" lg="8">
                    <FormikController
                      control="input"
                      type="text"
                      label="Nomor Akta Perkawinan *"
                      name="no_akta_perkawinan"
                      placeholder="Nomor Akta Perkawinan"
                    />
                  </Col>
                </Row>
              </Card>

              <Card className="my-3 p-4 border-0 shadow-sm">
                <h5>Pendidikan, Pekerjaan & Hobi</h5>
                <hr />
                <Row className="mt-3">
                  <Col xs="12" lg="4">
                    <FormikController
                      control="select"
                      label="Pendidikan *"
                      name="pendidikan"
                      options={[
                        { key: "TIDAK/ BELUM SEKOLAH", value: "TIDAK/ BELUM SEKOLAH" },
                        { key: "BELUM TAMAT SD/ SEDERAJAT", value: "BELUM TAMAT SD/ SEDERAJAT" },
                        { key: "SLTP/ SEDERAJAT", value: "SLTP/ SEDERAJAT" },
                        { key: "SLTA/ SEDERAJAT", value: "SLTA/ SEDERAJAT" },
                        { key: "DIPLOMA I/II", value: "DIPLOMA I/II" },
                        { key: "AKADEMI/ DIPLOMA III/ SARJANA MUDA", value: "AKADEMI/ DIPLOMA III/ SARJANA MUDA" },
                        { key: "DIPLOMA IV/ STRATA I", value: "DIPLOMA IV/ STRATA I" },
                        { key: "STRATA II", value: "STRATA II" },
                      ]}
                    />
                  </Col>

                  <Col xs="12" lg="4">
                    <FormikController
                      control="select"
                      label="Pekerjaan *"
                      name="pekerjaan"
                      options={[
                        { key: "TIDAK/ BELUM BEKERJA", value: "TIDAK/ BELUM BEKERJA" },
                        { key: "PELAJAR/ MAHASISWA", value: "PELAJAR/ MAHASISWA" },
                        { key: "PENSIUNAN", value: "PENSIUNAN" },
                        { key: "PEGAWAI NEGERI SIPIL/ PNS", value: "PEGAWAI NEGERI SIPIL/ PNS" },
                        { key: "TENTARA NASIONAL INDONESIA", value: "TENTARA NASIONAL INDONESIA" },
                        { key: "KEPOLISIAN RI (POLRI)", value: "KEPOLISIAN RI (POLRI)" },
                        { key: "PERDAGANGAN", value: "PERDAGANGAN" },
                        { key: "PETANI/PEKEBUN", value: "PETANI/PEKEBUN" },
                        { key: "PETERNAK", value: "PETERNAK" },
                        { key: "NELAYAN/PERIKANAN", value: "NELAYAN/PERIKANAN" },
                        { key: "INDUSTRI", value: "INDUSTRI" },
                        { key: "KONSTRUKSI", value: "KONSTRUKSI" },
                        { key: "TRANSPORTASI", value: "TRANSPORTASI" },
                        { key: "KARYAWAN SWASTA", value: "KARYAWAN SWASTA" },
                        { key: "KARYAWAN BUMN", value: "KARYAWAN BUMN" },
                        { key: "KARYAWAN BUMD", value: "KARYAWAN BUMD" },
                        { key: "HONORER", value: "HONORER" },
                        { key: "BURUH HARIAN LEPAS", value: "BURUH HARIAN LEPAS" },
                        { key: "BURUH TANI/BERKEBUN", value: "BURUH TANI/BERKEBUN" },
                        { key: "BURUH NELAYAN/ PERIKANAN", value: "BURUH NELAYAN/ PERIKANAN" },
                        { key: "BURUH PETERNAKAN", value: "BURUH PETERNAKAN" },
                        { key: "PEMBANTU RUMAH TANGGA", value: "PEMBANTU RUMAH TANGGA" },
                        { key: "TUKANG CUKUR", value: "TUKANG CUKUR" },
                        { key: "TUKANG LISTRIK", value: "TUKANG LISTRIK" },
                        { key: "TUKANG BATU", value: "TUKANG BATU" },
                        { key: "TUKANG SOL SEPATU", value: "TUKANG SOL SEPATU" },
                        { key: "TUKANG LAS/ PANDAI BESI", value: "TUKANG LAS/ PANDAI BESI" },
                        { key: "TUKANG JAHIT", value: "TUKANG JAHIT" },
                        { key: "TUKANG GIGI", value: "TUKANG GIGI" },
                        { key: "TUKANG RIAS", value: "TUKANG RIAS" },
                        { key: "PENATA BUSANA", value: "PENATA BUSANA" },
                        { key: "MEKANIK", value: "MEKANIK" },
                        { key: "SENIMAN", value: "SENIMAN" },
                        { key: "TABIB", value: "TABIB" },
                        { key: "DOKTER", value: "DOKTER" },
                        { key: "PERANCANG BUSANA", value: "PERANCANG BUSANA" },
                        { key: "IMAM MASJID", value: "IMAM MASJID" },
                        { key: "PENDETA", value: "PENDETA" },
                        { key: "PASTOR", value: "PASTOR" },
                        { key: "USTADZ/ MUBALIGH", value: "USTADZ/ MUBALIGH" },
                        { key: "WARTAWAN", value: "WARTAWAN" },
                        { key: "JURU MASAK", value: "JURU MASAK" },
                        { key: "PROMOTOR ACARA", value: "PROMOTOR ACARA" },
                        { key: "LAINNYA", value: "LAINNYA" },
                      ]}
                    />
                  </Col>
                  <Col xs="12" lg="4">
                    <FormikController control="input" type="text" label="Hobi *" name="hobi" placeholder="Hobi" />
                  </Col>
                </Row>
                <hr className="mt-5" />
              </Card>
            </Col>

            <Col xs="12" lg="4">
              <Card className="p-4 border-0 shadow-sm">
                <h5>Status</h5>
                <hr />
                <Row className="mt-3">
                  <Col xs="12">
                    <Col xs="12" lg="8">
                      <div className="d-flex justify-content-evenly w-100 align-items-center">
                        <FormikController
                          control="radio"
                          label="Status Warga *"
                          name="status_warga"
                          options={[
                            { key: "Aktif", value: "aktif" },
                            { key: "Non-Aktif", value: "non-aktif" },
                          ]}
                        />
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Card>
              <Card className="p-4 my-3 border-0 shadow-sm">
                <h5>Profil Kontak</h5>
                <hr />
                <Row>
                  <Col xs="12" className="d-flex justify-content-center flex-column align-items-start">
                    <Label for="picture" className="float-left">
                      Foto
                    </Label>

                    <img
                      src={imageFiles.preview || AvaPlaceholder}
                      alt="profile"
                      style={{ height: "auto", width: "100%" }}
                    />
                    <div className="d-flex flex-row align-items-center w-100 my-3">
                      <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormikController
                      control="input"
                      type="text"
                      label="No. Telp * *"
                      name="no_telpon"
                      placeholder="08xx xxxx xxxx"
                    />
                  </Col>
                  <Col xs="12">
                    <FormikController
                      control="input"
                      type="text"
                      label="Email *"
                      name="email"
                      placeholder="example@gmail.com"
                    />
                  </Col>
                </Row>
              </Card>

              <Button color="danger" outline>
                Batalkan
              </Button>
              <Button color="primary" type="submit" className="mx-3">
                Simpan
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default CitizenshipForm;
