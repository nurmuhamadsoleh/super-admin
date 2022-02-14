import { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import EDESA_API from "../../../api";
const JobAndInstitutionForm = () => {
  const { id } = useParams();

  const generateYearRange = (start, end) => {
    const arrRange = Array.from(Array(end - start + 1).keys());
    const yearOptions = arrRange.map((num) => ({
      option: num + start,
      value: num + start,
    }));

    return yearOptions;
  };

  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  let { riwayat_pekerjaan = {} } = dataKependudukanSingle;

  const [sideJob, setSideJob] = useState([{ pekerjaan: "", industri: "", lokasi: "", penghasilan: "" }]);
  const [saatIniJob, setSaatIniJob] = useState({ pekerjaan: "", jenis_bidang: "", lokasi: "", penghasilan: "" });
  const [pekerjaanDesa, setPekerjaanDesa] = useState([
    {
      currentJob: "",
      industry: "",
      skNumber: 0,
      startYear: 0,
      endYear: 0,
      salary: 0,
    },
  ]);
  const [lastJob, setLastJob] = useState([
    {
      currentJob: "",
      industry: "",
      skNumber: 0,
      startYear: 0,
      endYear: 0,
      salary: 0,
    },
  ]);
  const [yearRange] = useState(generateYearRange(1980, 2022));

  useEffect(() => {
    if (riwayat_pekerjaan && riwayat_pekerjaan.pekerjaan_tetap) {
      setSaatIniJob(riwayat_pekerjaan.pekerjaan_tetap);
    }
    if (riwayat_pekerjaan && riwayat_pekerjaan.pekerjaan_tetap) {
      setSaatIniJob(riwayat_pekerjaan.pekerjaan_tetap);
    }
  }, [riwayat_pekerjaan]);

  const onChangeSaatIniJob = ({ target }) => {
    let { name, value } = target;
    setSaatIniJob((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeSideJob = (event, index) => {
    let { name, value } = event.target;
    let inputObj = [...sideJob];
    inputObj[index][name] = value;
    setSideJob(inputObj);
  };

  const onAddSideJob = () => {
    setSideJob([...sideJob, { sideJob: "", industri: "", sideJobLocation: "", penghasilan: "" }]);
  };

  const onRemoveSideJob = (index) => {
    let newArray = [...sideJob];
    newArray.splice(index, 1);
    setSideJob(newArray);
  };

  // PEKERJAAN DESA
  const onChangePekerjaanDesa = (event, index) => {
    let { name, value } = event.target;
    let inputObj = [...pekerjaanDesa];
    inputObj[index][name] = value;
    setPekerjaanDesa(inputObj);
  };

  const onAddPekerjaanDesa = () => {
    setPekerjaanDesa([
      ...pekerjaanDesa,
      {
        currentJob: "",
        industry: "",
        skNumber: 0,
        startYear: 0,
        endYear: 0,
        salary: 0,
      },
    ]);
  };

  const onRemovePekerjaanDesa = (index) => {
    let newArray = [...pekerjaanDesa];
    newArray.splice(index, 1);
    setPekerjaanDesa(newArray);
  };

  // LAST JOB

  const onChangeLastJob = (event, index) => {
    let { name, value } = event.target;
    let inputObj = [...lastJob];
    inputObj[index][name] = value;
    setLastJob(inputObj);
  };

  const onAddLastJob = () => {
    setLastJob([
      ...lastJob,
      {
        lastJob: "",
        industry: "",
        skNumber: 0,
        startYear: 0,
        endYear: 0,
        salary: 0,
      },
    ]);
  };

  const onRemoveLastJob = (index) => {
    let newArray = [...lastJob];
    newArray.splice(index, 1);
    setLastJob(newArray);
  };

  const onSubmitJobInstitution = async () => {
    const form = {
      riwayat_pekerjaan: { pekerjaan_tetap: saatIniJob },
      pekerjaan_desa: {
        pekerjaan: "RT",
        tahun_mulai: "2010",
        tahun_selesai: "2025",
        penghasilan: "0",
      },
    };

    const response = await EDESA_API.put(`/api/admin_desa/data_warga/penduduk/${id}`, form);

    let { data } = response;
    Swal.fire("", data.message, `${response.status === 200 ? "success" : "error"}`);
  };

  return (
    <Row>
      <Col xs="12" className="pb-5">
        <Card className="p-4">
          <h5>PEKERJAAN TETAP DAN TAMBAHAN</h5>
          <hr />

          <Row className="mt-2">
            <Col xs="12" lg="4">
              <Label>Pekerjaan Saat Ini</Label>
              <Input
                type="select"
                name="pekerjaan"
                className="form-select"
                value={saatIniJob.pekerjaan}
                onChange={onChangeSaatIniJob}
              >
                <option>TIDAK/ BELUM BEKERJA</option>
                <option>PELAJAR/ MAHASISWA</option>
                <option>PENSIUNAN</option>
                <option>PEGAWAI NEGERI SIPIL/ PNS</option>
                <option>TENTARA NASIONAL INDONESIA</option>
                <option>KEPOLISIAN RI (POLRI)</option>
                <option>PERDAGANGAN</option>
                <option>PETANI/PEKEBUN</option>
                <option>PETERNAK</option>
                <option>NELAYAN/PERIKANAN</option>
                <option>INDUSTRI</option>
                <option>KONSTRUKSI</option>
                <option>TRANSPORTASI</option>
                <option>KARYAWAN SWASTA</option>
                <option>KARYAWAN BUMN</option>
                <option>KARYAWAN BUMD</option>
                <option>HONORER</option>
                <option>BURUH HARIAN LEPAS</option>
                <option>BURUH TANI/BERKEBUN</option>
                <option>BURUH NELAYAN/ PERIKANAN</option>
                <option>BURUH PETERNAKAN</option>
                <option>PEMBANTU RUMAH TANGGA</option>
                <option>TUKANG CUKUR</option>
                <option>TUKANG LISTRIK</option>
                <option>TUKANG BATU</option>
                <option>TUKANG SOL SEPATU</option>
                <option>TUKANG LAS/ PANDAI BESI</option>
                <option>TUKANG JAHIT</option>
                <option>TUKANG GIGI</option>
                <option>TUKANG RIAS</option>
                <option>PENATA BUSANA</option>
                <option>MEKANIK</option>
                <option>SENIMAN</option>
                <option>TABIB</option>
                <option>DOKTER</option>
                <option>PERANCANG BUSANA</option>
                <option>IMAM MASJID</option>
                <option>PENDETA</option>
                <option>PASTOR</option>
                <option>USTADZ/ MUBALIGH</option>
                <option>WARTAWAN</option>
                <option>JURU MASAK</option>
                <option>PROMOTOR ACARA</option>
                <option>LAINNYA</option>
              </Input>
            </Col>
            <Col xs="12" lg="3">
              <Label>Jenis Bidang</Label>
              <Input type="text" name="jenis_bidang" value={saatIniJob.jenis_bidang} onChange={onChangeSaatIniJob} />
            </Col>
            <Col xs="12" lg="2">
              <Label>Lokasi</Label>
              <Input type="select" name="lokasi" value={saatIniJob.lokasi} onChange={onChangeSaatIniJob}>
                <option>Bandung</option>
                <option>Jakarta</option>
              </Input>
            </Col>
            <Col xs="12" lg="3">
              <Label>Penghasilan</Label>
              <Input
                type="text"
                name="penghasilan"
                value={saatIniJob.penghasilan}
                onChange={onChangeSaatIniJob}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Col>
          </Row>

          {sideJob.map((row, index) => {
            return (
              <div key={index}>
                <Row className="mt-3 mb-4">
                  <Col xs="12" lg="3">
                    <Label>Pekerjaan Tambahan</Label>
                    <Input
                      type="select"
                      name="sideJob"
                      className="form-select"
                      value={row.sideJob}
                      onChange={(e) => onChangeSideJob(e, index)}
                    >
                      <option>Belum/Tidak Bekerja</option>
                      <option>Bekerja</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="3">
                    <Label>Jenis Bidang</Label>
                    <Input
                      type="text"
                      name="industri"
                      value={row.industri}
                      onChange={(e) => onChangeSideJob(e, index)}
                    />
                  </Col>
                  <Col xs="12" lg="2">
                    <Label>Lokasi</Label>
                    <Input
                      type="select"
                      name="sideJobLocation"
                      value={row.sideJobLocation}
                      onChange={(e) => onChangeSideJob(e, index)}
                    >
                      <option>Bandung</option>
                      <option>Jakarta</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="3">
                    <Label>Penghasilan</Label>
                    <Input
                      type="text"
                      name="penghasilan"
                      value={row.penghasilan}
                      onChange={(e) => onChangeSideJob(e, index)}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </Col>
                  <Col xs="12" lg="1" className="p-0">
                    <Label style={{ opacity: "0" }}>Add</Label>

                    {!index > 0 ? (
                      <Button
                        onClick={onAddSideJob}
                        color="primary"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Tambah
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onRemoveSideJob(index)}
                        color="danger"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Hapus
                      </Button>
                    )}
                  </Col>
                </Row>

                {sideJob.length > 1 ? <hr /> : null}
              </div>
            );
          })}
        </Card>

        <Card className="p-4 my-3">
          <h5>JABATAN/PEKERJAAN DI DESA SAAT INI</h5>
          <hr />

          {pekerjaanDesa.map((row, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col xs="12" lg="4">
                    <Label>Pekerjaan</Label>
                    <Input
                      type="select"
                      name="pekerjaanDesa"
                      value={pekerjaanDesa.currentJob}
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      <option>RT</option>
                      <option>RW</option>
                      <option>Lurah</option>
                      <option>Kepala Desa</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="4">
                    <Label>Jenis Bidang</Label>
                    <Input
                      type="select"
                      name="industry"
                      value={pekerjaanDesa.industry}
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      <option>IT</option>
                      <option>Non IT</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="4">
                    <Label>No SK</Label>
                    <Input
                      type="text"
                      name="skNumber"
                      value={pekerjaanDesa.skNumber}
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="3">
                    <Label>Tahun Pengangkatan</Label>
                    <Input
                      type="select"
                      name="startYear"
                      value={row.startYear}
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      {yearRange.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.option}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col xs="12" lg="3">
                    <Label>Akhir Masa Jabatan</Label>
                    <Input
                      type="select"
                      name="endYear"
                      value={row.endYear}
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      {yearRange.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.option}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col xs="12" lg="5">
                    <Label>Penghasilan</Label>
                    <Input
                      type="text"
                      name="salary"
                      onChange={(e) => onChangePekerjaanDesa(e, index)}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </Col>
                  <Col xs="12" lg="1" className="p-0">
                    <Label style={{ opacity: "0" }}>Add</Label>

                    {!index > 0 ? (
                      <Button
                        onClick={onAddPekerjaanDesa}
                        color="primary"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Tambah
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onRemovePekerjaanDesa(index)}
                        color="danger"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Hapus
                      </Button>
                    )}
                  </Col>
                </Row>
                {pekerjaanDesa.length > 1 ? <hr /> : null}
              </div>
            );
          })}
        </Card>

        <Card className="p-4 my-3">
          <h5>RIT</h5>
          <hr />

          {lastJob.map((row, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col xs="12" lg="4">
                    <Label>Pekerjaan</Label>
                    <Input
                      type="select"
                      name="currentJob"
                      value={row.currentJob}
                      onChange={(e) => onChangeLastJob(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      <option>RT</option>
                      <option>RW</option>
                      <option>Lurah</option>
                      <option>Kepala Desa</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="4">
                    <Label>Jenis Bidang</Label>
                    <Input
                      type="select"
                      name="industry"
                      value={row.industry}
                      onChange={(e) => onChangeLastJob(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      <option>IT</option>
                      <option>Non IT</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="4">
                    <Label>No SK</Label>
                    <Input
                      type="text"
                      name="skNumber"
                      value={row.skNumber}
                      onChange={(e) => onChangeLastJob(e, index)}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col xs="12" lg="3">
                    <Label>Tahun Pengangkatan</Label>
                    <Input
                      type="select"
                      name="startYear"
                      value={row.startYear}
                      onChange={(e) => onChangeLastJob(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      {yearRange.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.option}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col xs="12" lg="3">
                    <Label>Akhir Masa Jabatan</Label>
                    <Input
                      type="select"
                      name="endYear"
                      className="form-select"
                      value={row.endYear}
                      onChange={(e) => onChangeLastJob(e, index)}
                    >
                      <option hidden>{""}</option>
                      {yearRange.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.option}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col xs="12" lg="5">
                    <Label>Penghasilan</Label>
                    <Input
                      type="text"
                      name="salary"
                      value={row.salary}
                      onChange={(e) => onChangeLastJob(e, index)}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </Col>
                  <Col xs="12" lg="1" className="p-0">
                    <Label style={{ opacity: "0" }}>Add</Label>

                    {!index > 0 ? (
                      <Button
                        onClick={onAddLastJob}
                        color="primary"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Tambah
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onRemoveLastJob(index)}
                        color="danger"
                        className="ml-0 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        Hapus
                      </Button>
                    )}
                  </Col>
                </Row>
                {lastJob.length > 1 ? <hr /> : null}
              </div>
            );
          })}
          <div className="mt-4">
            <Button color="outline-primary" className="me-3">
              Batalkan
            </Button>
            <Button color="primary" onClick={onSubmitJobInstitution}>
              Simpan
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default JobAndInstitutionForm;
