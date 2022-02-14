import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import EDESA_API from "../../../api";

const HEALTH_FORM = [
  {
    title: "RIWAYAT PENYAKIT",
    form: [
      {
        label: "Tempat Bisa Berobat Saat Sakit",
        type: "text",
        name: "tempat_berobat",
        xs: "12",
        lg: "6",
      },
      {
        label: "Penyakit Yang Pernah Dialami",
        type: "text",
        name: "penyakit_pernah_dialami",
        xs: "12",
        lg: "6",
      },
    ],
  },

  {
    title: "RIWAYAT IMUNISASI",
    form: [
      {
        label: "Imunisasi Yang Pernah Dilakukan",
        type: "select",
        name: "imunisasi",
        option: ["Polio", "Vitamin"],
        xs: "12",
        lg: "12",
      },
    ],
  },
];

const HealthForm = () => {
  const { id } = useParams();
  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  let { riwayat_kesehatan = {} } = dataKependudukanSingle;

  const [healthForm, setHealthForm] = useState([
    {
      status_kb: false,
      kbItem: "",
      tempat_cek_kehamilan: "",
      pernah_melahirkan: false,
      anak_ke: "",
      proses_melahirkan: "",
      kondisi_bayi: "",
      handledBy: "",
      tempat_persalinan: "",
      tahun: "",
    },
  ]);

  const [keluargaBerencanaForm, setKeluargaBerencanaForm] = useState([
    {
      anak_ke: "",
      proses_melahirkan: "",
      kondisi_bayi: "",
      ditangangi_oleh: "",
      tempat_persalinan: "",
      tahun: "",
    },
  ]);

  const [riwayatPenyakit, setRiwayatPenyakit] = useState({
    tempat_berobat: "",
    penyakit_pernah_dialami: "",
    imunisasi: "",
  });

  useEffect(() => {
    if (riwayat_kesehatan) {
      setRiwayatPenyakit(riwayat_kesehatan);
    }
  }, [riwayat_kesehatan]);

  const onAddHealthForm = () => {
    setHealthForm([
      ...healthForm,
      {
        isKb: false,
        kbItem: "",
        location: "",
        isBirth: false,
        childOrder: "",
        birthProcess: "",
        babyCondition: "",
        handledBy: "",
        laborPlace: "",
        year: "",
      },
    ]);
  };

  const onChangeHealthForm = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...healthForm];
    inputObj[index][name] = value;
    setHealthForm(inputObj);
  };

  const onRemoveHealthForm = (index) => {
    let newArray = [...healthForm];
    newArray.splice(index, 1);
    setHealthForm(newArray);
  };

  //
  const onChangeRiwayatPenyakit = ({ target }) => {
    let { value, name } = target;
    setRiwayatPenyakit((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHealthForm = async () => {
    const form = { riwayat_kesehatan: riwayatPenyakit };

    const response = await EDESA_API.put(`/api/admin_desa/data_warga/penduduk/${id}`, form);

    let { data } = response;
    Swal.fire("", data.message, `${response.status === 200 ? "success" : "error"}`);
  };

  return (
    <Row>
      <Col xs="12">
        {HEALTH_FORM.map((data, index) => {
          return (
            <Card className="my-3 p-4" key={index}>
              {data.title}
              <hr />
              <Row className="mt-3">
                {data.form?.map((innerForm, index) => {
                  let { xs, lg, label, type, name } = innerForm;
                  return (
                    <Col xs={xs} lg={lg} key={index}>
                      <Label>{label}</Label>

                      {type === "select" ? (
                        <Input type={type} name={name} onChange={onChangeRiwayatPenyakit} value={riwayatPenyakit[name]}>
                          {innerForm.option?.map((opt, optIdx) => (
                            <option key={optIdx}>{opt}</option>
                          ))}
                        </Input>
                      ) : null}

                      {type === "radio" ? (
                        <div className={`d-flex justify-content-start align-items-center w-100`}>
                          {innerForm.option?.map((radio, radIdx) => {
                            return (
                              <div
                                key={radIdx}
                                className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2"
                              >
                                <Input
                                  type="radio"
                                  value={riwayatPenyakit[name]}
                                  name={radio.name}
                                  className="m-0 p-0"
                                  onChange={onChangeRiwayatPenyakit}
                                />
                                <Label className="mx-2">{radio.label}</Label>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}

                      {type === "text" ? (
                        <Input
                          onChange={onChangeRiwayatPenyakit}
                          type={type}
                          value={riwayatPenyakit[name]}
                          name={name}
                        />
                      ) : null}
                    </Col>
                  );
                })}
              </Row>
            </Card>
          );
        })}
        <Row>
          <Card className="my-3 p-4">
            <h5>KELUARGA BERENCANA DAN KEHAMILAN</h5>
            <hr />
            <Row className="mt-3">
              <Col xs="12" lg="3">
                <div>
                  <Label>Apakah Saat Ini Sedang KB</Label>
                </div>
                <div className="d-flex justify-content-evenly w-100 align-items-center">
                  <Input type="radio" value={true} name="status_kb" className="m-0 p-0" />
                  <Label>Ya</Label>
                  <Input type="radio" value={false} name="status_kb" className="m-0 p-0" />
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="12" lg="6">
                <Label>Alat KB yang digunakan</Label>
                <Input type="select" name="kbItem">
                  <option>IUD</option>
                  <option>Kondom</option>
                </Input>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="12" lg="6">
                <Label>Tempat Biasa Cek Kehamilan</Label>
                <Input type="select" name="tempat_cek_kehamilan">
                  <option>Rumah sakit</option>
                  <option>Bidan</option>
                </Input>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="12" lg="3">
                <div>
                  <Label>Apakah Pernah Melahirkan</Label>
                </div>
                <div className="d-flex justify-content-evenly w-100 align-items-center">
                  <Input type="radio" value={true} name="pernah_melahirkan" className="m-0 p-0" />
                  <Label>Ya</Label>
                  <Input type="radio" value={false} name="pernah_melahirkan" className="m-0 p-0" />
                  <Label>Tidak</Label>
                </div>
              </Col>
            </Row>

            {healthForm.map((value, indexInner) => {
              return (
                <div key={indexInner}>
                  <Row className="mt-3">
                    <Col xs="12" lg="1">
                      <Label>Anak ke</Label>
                      <Input
                        type="select"
                        value={value.childOrder}
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                        name="anak_ke"
                        className="form-select"
                      >
                        <option hidden>{""}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </Input>
                    </Col>
                    <Col xs="12" lg="3">
                      <Label>Proses Melahirkan</Label>
                      <Input
                        type="select"
                        value={value.birthProcess}
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                        name="proses_melahirkan"
                        className="form-select"
                      >
                        <option hidden>{""}</option>
                        <option>Normal</option>
                        <option>Cesar</option>
                      </Input>
                    </Col>
                    <Col xs="12" lg="3">
                      <Label>Kondisi Bayi</Label>
                      <Input
                        type="select"
                        value={value.babyCondition}
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                        name="kondisi_bayi"
                        className="form-select"
                      >
                        <option hidden>{""}</option>
                        <option>Normal</option>
                        <option>Pre-mature</option>
                      </Input>
                    </Col>
                    <Col xs="12" lg="5">
                      <Label>Ditangani Oleh</Label>
                      <Input
                        type="select"
                        value={value.handledBy}
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                        name="ditangangi_oleh"
                        className="form-select"
                      >
                        <option hidden>{""}</option>
                        <option>Bidan</option>
                        <option>Dokter</option>
                      </Input>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col xs="12" lg="5">
                      <Label>Tempat Persalinan</Label>
                      <Input
                        type="text"
                        value={value.location}
                        name="tempat_persalinan"
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                      />
                    </Col>
                    <Col xs="12" lg="5">
                      <Label>Tahun</Label>
                      <Input
                        type="select"
                        value={value.year}
                        onChange={(e) => onChangeHealthForm(e, indexInner)}
                        name="tahun"
                        className="form-select"
                      >
                        <option hidden>{""}</option>
                        <option>1990</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                      </Input>
                    </Col>
                    <Col xs="12" lg="2">
                      <Label style={{ opacity: "0" }}>Add</Label>

                      {!indexInner > 0 ? (
                        <Button color="primary" className="ml-0 w-100" onClick={onAddHealthForm}>
                          Tambah
                        </Button>
                      ) : (
                        <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveHealthForm(indexInner)}>
                          Hapus
                        </Button>
                      )}
                    </Col>
                  </Row>
                  {healthForm.length > 1 ? <hr /> : null}
                </div>
              );
            })}
          </Card>
        </Row>
        <Button color="danger" outline>
          Batalkan
        </Button>
        <Button color="primary" className="mx-3" onClick={onSubmitHealthForm}>
          Simpan
        </Button>
      </Col>
    </Row>
  );
};

export default HealthForm;
