import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import { editKependudukan } from "../../../api/service/Kependudukan";

const INACTIVE_FORM = [
  {
    title: "DATA WARGA NON-AKTIF",
    form: [
      {
        label: "Alasan Non-Aktif",
        type: "radio",
        width: "50",
        xs: "12",
        lg: "12",
        option: [
          { value: "deceased", label: "Meninggal", name: "nonActive" },
          { value: "move", label: "Pindah Domisili", name: "nonActive" },
          { value: "missing", label: "Tidak Diketahui Alasannya/ Hilang", name: "nonActive" },
        ],
      },
    ],
  },
];

const generateYearRange = (start, end) => {
  const arrRange = Array.from(Array(end - start + 1).keys());
  const yearOptions = arrRange.map((num) => ({
    option: num + start,
    value: num + start,
  }));

  return yearOptions;
};

const InactiveForm = () => {
  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  const { data_non_aktif = {} } = dataKependudukanSingle;

  const [checkedRadio, setCheckedRadio] = useState("");
  const [deceasedForm, setDeceasedForm] = useState({});
  const [missingForm, setMissingForm] = useState({});
  const [moveForm, setMoveForm] = useState({});
  const [yearRange] = useState(generateYearRange(1980, 2022));
  const [isSubmit, setIsSubmit] = useState(false);
  const { id: userId } = useParams();

  useEffect(() => {
    if (!data_non_aktif) return;

    const { data_meninggal, data_pindah, data_keterangan_hilang } = data_non_aktif;

    if (data_meninggal) {
      setDeceasedForm(data_meninggal);
      setCheckedRadio("deceased");
    }

    if (data_pindah) {
      setMoveForm(data_pindah);
      setCheckedRadio("move");
    }

    if (data_keterangan_hilang) {
      setMissingForm(data_keterangan_hilang);
      setCheckedRadio("missing");
    }
  }, [data_non_aktif]);

  // useEffect(() => {
  //   if (!userId) return;
  //   const getNonActiveData = async (id) => {
  //     try {
  //       const {
  //         data: { data_non_aktif },
  //       } = await getOnePenduduk(id);

  //       if (!data_non_aktif) return;

  //       const { data_meninggal, data_pindah, data_keterangan_hilang } = data_non_aktif;

  //       if (data_meninggal) {
  //         setDeceasedForm(data_meninggal);
  //         setCheckedRadio("deceased");
  //       }

  //       if (data_pindah) {
  //         setMoveForm(data_pindah);
  //         setCheckedRadio("move");
  //       }

  //       if (data_keterangan_hilang) {
  //         setMissingForm(data_keterangan_hilang);
  //         setCheckedRadio("missing");
  //       }
  //     } catch (e) {
  //       Swal.fire("Error", e.message, "error");
  //     }
  //   };

  //   getNonActiveData(userId);
  // }, [userId]);

  const onChangeReasonInactive = (e) => {
    setCheckedRadio(e.target.value);
  };

  const onChangeDeceasedForm = (e) => {
    let { name, value } = e.target;
    setDeceasedForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const onChangeMissingForm = (e) => {
    let { name, value } = e.target;
    setMissingForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const onChangeMoveForm = (e) => {
    let { name, value } = e.target;
    setMoveForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSave = async () => {
    setIsSubmit(true);

    const setDataDetails = () => {
      let dataKey, dataDetail;
      if (checkedRadio === "deceased") {
        dataKey = "data_meninggal";
        dataDetail = deceasedForm;
        setMoveForm({});
        setMissingForm({});
      }
      if (checkedRadio === "move") {
        dataKey = "data_pindah";
        dataDetail = moveForm;
        setDeceasedForm({});
        setMissingForm({});
      }

      dataKey = "data_keterangan_hilang";
      dataDetail = missingForm;
      setDeceasedForm({});
      setMoveForm({});

      return {
        [dataKey]: dataDetail,
      };
    };

    const formToSubmit = {
      data_non_aktif: {
        alasan_non_aktif:
          checkedRadio === "deceased"
            ? "Meninggal"
            : checkedRadio === "move"
            ? "Pindah Domisili"
            : "Tidak diketahui alasannya / Hilang",
        ...setDataDetails(),
      },
    };

    try {
      await editKependudukan(formToSubmit, userId);
      Swal.fire("Sukes", "Data berhasil diperbarui", "success");
      setIsSubmit(false);
    } catch (e) {
      Swal.fire("Error", e.message, "error");
      setIsSubmit(false);
    }
  };

  return (
    <Row>
      <Col xs="12">
        {INACTIVE_FORM.map((data, index) => {
          return (
            <Card className="my-3 p-4" key={index}>
              {data.title}
              <hr />
              <Row className="mt-3">
                {data.form?.map((innerForm, index) => {
                  let { xs, lg, label, type } = innerForm;
                  return (
                    <Col xs={xs} lg={lg} key={index}>
                      <Label>{label}</Label>

                      {type === "select" ? (
                        <Input type={type}>
                          {innerForm.option?.map((opt, optIndex) => (
                            <option key={optIndex}>{opt}</option>
                          ))}
                        </Input>
                      ) : null}

                      {type === "radio" ? (
                        <div className={`d-flex justify-content-start align-items-center flex-wrap flex-row`}>
                          {innerForm.option?.map((radio, radIdx) => {
                            return (
                              <div
                                className="d-flex justify-content-center align-items-center flex-nowrap flex-row"
                                key={radIdx}
                              >
                                <Input
                                  type="radio"
                                  value={radio.value}
                                  name={radio.name}
                                  className="m-0 p-0"
                                  onChange={onChangeReasonInactive}
                                  checked={checkedRadio === radio.value}
                                />
                                <Label className="ml-3 p-3">{radio.label}</Label>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}

                      {type === "text" ? <Input type={type} /> : null}
                    </Col>
                  );
                })}
              </Row>
            </Card>
          );
        })}

        {checkedRadio === "deceased" && (
          <Card className="my-3 p-4">
            <h5>DATA MENINGGAL</h5>
            <hr />
            <Row>
              <Col xs="12" lg="6">
                <Label>Sebab Meninggal</Label>
                <Input
                  type="text"
                  name="sebab_meninggal"
                  onChange={onChangeDeceasedForm}
                  value={deceasedForm?.sebab_meninggal}
                />
              </Col>
              <Col xs="12" lg="6">
                <Label>Meninggal Di</Label>
                <Input
                  type="text"
                  name="meninggal_di"
                  onChange={onChangeDeceasedForm}
                  value={deceasedForm?.meninggal_di}
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="4">
                <Label>Lokasi</Label>
                <Input type="text" name="lokasi" onChange={onChangeDeceasedForm} value={deceasedForm?.lokasi} />
              </Col>
              <Col xs="12" lg="2">
                <Label>Tahun</Label>
                <Input type="select" name="tahun" onChange={onChangeDeceasedForm} value={deceasedForm?.tahun}>
                  <option hidden value="">
                    Pilih tahun
                  </option>
                  {yearRange.map((item) => (
                    <option value={item.value}>{item.option}</option>
                  ))}
                </Input>
              </Col>
              <Col xs="12" lg="6">
                <Label>Keterangan</Label>
                <Input type="text" name="keterangan" onChange={onChangeDeceasedForm} value={deceasedForm?.keterangan} />
              </Col>
            </Row>
          </Card>
        )}
        {checkedRadio === "move" && (
          <Card className="my-3 p-4">
            <h5>DATA PINDAH DOMISILI</h5>
            <hr />
            <Row>
              <Col xs="12" lg="4">
                <Label>Provinsi</Label>
                <Input
                  type="select"
                  name="provinsi"
                  onChange={onChangeMoveForm}
                  value={moveForm?.provinsi}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih provinsi
                  </option>
                  <option value="Jawa Barat">Jawa Barat</option>
                  <option value="DKI Jakarta">DKI Jakarta</option>
                </Input>
              </Col>
              <Col xs="12" lg="4">
                <Label>Kabupaten/ Kota</Label>
                <Input
                  type="select"
                  name="kabupaten_kota"
                  onChange={onChangeMoveForm}
                  className="form-control form-select"
                  value={moveForm?.kabupaten_kota}
                >
                  <option hidden value="">
                    Pilih kabupaten/kota
                  </option>
                  <option value="Bandung">Bandung</option>
                  <option value="Jakarta">Jakarta</option>
                </Input>
              </Col>
              <Col xs="12" lg="4">
                <Label>Kecamatan</Label>
                <Input
                  type="select"
                  name="kecamatan"
                  onChange={onChangeMoveForm}
                  value={moveForm?.kecamatan}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih kecamatan
                  </option>
                  <option value="Kec. Bandung">Kec. Bandung Kidul</option>
                  <option value="Kec. Jakarta">Kec. Jakarta Utara</option>
                </Input>
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="3">
                <Label>Desa/ Kelurahan</Label>
                <Input
                  type="select"
                  name="desa_kelurahan"
                  onChange={onChangeMoveForm}
                  className="form-control form-select"
                  value={moveForm?.desa_kelurahan}
                >
                  <option hidden value="">
                    Pilih desa/kelurahan
                  </option>
                  <option value="desa 1">Kujangsari</option>
                  <option value="kelurahan 1">Kelurahan Jakarta</option>
                </Input>
              </Col>
              <Col xs="12" lg="3">
                <Label>Dusun</Label>
                <Input
                  type="select"
                  name="dusun"
                  onChange={onChangeMoveForm}
                  value={moveForm?.dusun}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih dusun
                  </option>
                  <option value="dusun 1">Dusun Bandung</option>
                  <option value="dusun 2">Dusun Jakarta</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>RT</Label>
                <Input
                  type="select"
                  name="rt"
                  onChange={onChangeMoveForm}
                  value={moveForm?.rt}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih RT
                  </option>
                  <option value="001">001</option>
                  <option value="002">002</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>RW</Label>
                <Input
                  type="select"
                  name="rw"
                  onChange={onChangeMoveForm}
                  value={moveForm?.rw}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih RW
                  </option>
                  <option value="001">001</option>
                  <option value="002">002</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>Tanggal</Label>
                <Input type="date" name="tanggal" value={moveForm?.tanggal} onChange={onChangeMoveForm} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" lg="6">
                <Label>Alamat</Label>
                <Input type="text" name="alamat" value={moveForm?.alamat} onChange={onChangeMoveForm} />
              </Col>
              <Col xs="12" lg="6">
                <Label>Keterangan</Label>
                <Input type="text" name="keterangan" value={moveForm?.keterangan} onChange={onChangeMoveForm} />
              </Col>
            </Row>
          </Card>
        )}
        {checkedRadio === "missing" && (
          <Card className="my-3 p-4">
            <h5>DATA KETERANGAN HILANG</h5>
            <hr />
            <Row>
              <Col xs="12" lg="3">
                <Label>Lokasi Terakhir Hilang/ Pergi</Label>
                <Input
                  type="select"
                  onChange={onChangeMissingForm}
                  value={missingForm?.lokasi_terakhir}
                  name="lokasi_terakhir"
                  className="form-control form-select"
                >
                  <option hidden value="">
                    {""}
                  </option>
                  <option value="Hilang">Hilang</option>
                  <option value="Pergi">Pergi</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>Tahun</Label>
                <Input
                  type="select"
                  onChange={onChangeMissingForm}
                  name="tahun"
                  value={missingForm?.tahun}
                  className="form-control form-select"
                >
                  <option hidden value="">
                    Pilih tahun
                  </option>
                  {yearRange.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.option}
                    </option>
                  ))}
                </Input>
              </Col>
              <Col xs="12" lg="4">
                <Label>Status Terakhir</Label>
                <Input
                  type="select"
                  onChange={onChangeMissingForm}
                  name="status_terakhir"
                  className="form-control form-select"
                  value={missingForm?.status_terakhir}
                >
                  <option hidden value="">
                    {""}
                  </option>
                  <option value="masih dalam pencarian">Masih dalam pencarian</option>
                  <option value="hilang total">Hilang total</option>
                  <option value="lainnya">Lainnya</option>
                </Input>
              </Col>
              <Col xs="12" lg="3">
                <Label>Keterangan</Label>
                <Input type="text" onChange={onChangeMissingForm} value={missingForm?.keterangan} name="keterangan" />
              </Col>
            </Row>
          </Card>
        )}

        <Button color="danger" outline>
          Batalkan
        </Button>
        <Button color="primary" className="mx-3" onClick={onSave} disabled={isSubmit}>
          Simpan
        </Button>
      </Col>
    </Row>
  );
};

export default InactiveForm;
