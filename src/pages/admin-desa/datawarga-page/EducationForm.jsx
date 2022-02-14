import { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import EDESA_API from "../../../api";

const EducationForm = () => {
  const { id } = useParams();

  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  let { riwayat_pendidikan = {} } = dataKependudukanSingle;

  const generateYearRange = (start, end) => {
    const arrRange = Array.from(Array(end - start + 1).keys());
    const yearOptions = arrRange.map((num) => ({
      option: num + start,
      value: num + start,
    }));

    return yearOptions;
  };

  const [formalEducation, setFormalEducation] = useState({
    pendidikan_terakhir: "",
    pendidikan_ditempuh: "",
    jurusan_terakhir: "",
    jurusan_ditempuh: "",
    tahun: "",
    lokasi: "",
    prestasi: false,
  });

  const [nonFormalEducation, setNonFormalEducation] = useState({
    pendidikan_ditempuh: "",
    jurusan: "",
  });

  const [nonFormalList, setNonFormalList] = useState([{ lembaga_penyelenggara: "", tahun: "", lokasi: "" }]);
  const [keahlianKhusus, setKeahlianKhusus] = useState("");
  const [yearRange] = useState(generateYearRange(1980, 2022));

  useEffect(() => {
    if (riwayat_pendidikan?.pendidikan_formal) {
      setFormalEducation(riwayat_pendidikan.pendidikan_formal);
    }

    if (riwayat_pendidikan?.pendidikan_nonformal) {
      setNonFormalEducation(riwayat_pendidikan.pendidikan_nonformal);

      if (riwayat_pendidikan.pendidikan_nonformal) {
        setNonFormalList(riwayat_pendidikan.pendidikan_nonformal);
      }

      if (riwayat_pendidikan.pendidikan_nonformal.keahlian_khusus) {
        setKeahlianKhusus(riwayat_pendidikan.pendidikan_nonformal.keahlian_khusus);
      }
    }
  }, [riwayat_pendidikan]);

  // FORMAL
  const onChangeFormalEducation = (event) => {
    let {
      target: { value = "", name = "" },
    } = event;

    setFormalEducation((prevState) => ({ ...prevState, [name]: value }));
  };

  // NON FORMAL
  const onChangeNonFormal = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...nonFormalList];
    inputObj[index][name] = value;
    setNonFormalEducation(inputObj);
  };
  const onAddNonFormalList = () => {
    setNonFormalList([...nonFormalList, { lembaga_penyelenggara: "", tahun: "", lokasi: "" }]);
  };
  const onRemoveNonFormal = (index) => {
    let newArray = [...nonFormalList];
    newArray.splice(index, 1);
    setNonFormalList(newArray);
  };

  // GENERAL
  const onSubmitEducation = async () => {
    let addDataToNonFormal = nonFormalEducation;
    addDataToNonFormal.list = nonFormalList;
    addDataToNonFormal.keahlian_khusus = keahlianKhusus;

    let formalEducationData = {
      riwayat_pendidikan: {
        pendidikan_formal: formalEducation,
        pendidikan_nonformal: addDataToNonFormal,
      },
    };
    const response = await EDESA_API.put(`/api/admin_desa/data_warga/penduduk/${id}`, formalEducationData);
    let { data } = response;
    Swal.fire("", data.message, `${response.status === 200 ? "success" : "error"}`);
  };

  return (
    <Row>
      <Col xs="12" className="pb-5">
        <Card className="p-4">
          <h5>PENDIDIKAN FORMAL</h5>
          <hr />
          <Row className="mt-3">
            <Col xs="12" lg="4">
              <Label>Pendidikan Terakhir</Label>
              <Input
                type="select"
                name="pendidikan_terakhir"
                value={formalEducation.pendidikan_terakhir}
                onChange={onChangeFormalEducation}
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>Tidak/Belum Sekolah</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>S1</option>
                <option>S2</option>
              </Input>
            </Col>
            <Col xs="12" lg="4">
              <Label>Jurusan</Label>
              <Input
                type="select"
                name="jurusan_terakhir"
                value={formalEducation.jurusan_terakhir}
                onChange={onChangeFormalEducation}
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>Teknik</option>
                <option>Non-Teknik</option>
              </Input>
            </Col>
            <Col xs="12" lg="4">
              <Label>Tahun</Label>
              <Input
                type="select"
                name="tahun"
                value={formalEducation.tahun}
                onChange={onChangeFormalEducation}
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
          </Row>
          <Row className="mt-3">
            <Col xs="12" lg="4">
              <Label>Pendidikan Yang Sedang Ditempuh</Label>
              <Input
                type="select"
                name="pendidikan_ditempuh"
                value={formalEducation.pendidikan_ditempuh}
                onChange={onChangeFormalEducation}
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>TIDAK/ BELUM SEKOLAH</option>
                <option>BELUM TAMAT SD/ SEDERAJAT</option>
                <option>SLTP/ SEDERAJAT</option>
                <option>SLTA/ SEDERAJAT</option>
                <option>DIPLOMA I/II</option>
                <option>AKADEMI/ DIPLOMA III/ SARJANA MUDA</option>
                <option>DIPLOMA IV/ STRATA I</option>
                <option>STRATA II</option>
              </Input>
            </Col>
            <Col xs="12" lg="4">
              <Label>Jurusan</Label>
              <Input
                type="select"
                name="jurusan_ditempuh"
                value={formalEducation.jurusan_ditempuh}
                onChange={onChangeFormalEducation}
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>Teknik</option>
                <option>Non-Teknik</option>
              </Input>
            </Col>
            <Col xs="12" lg="4">
              <Label>Lokasi</Label>
              <Input
                type="select"
                name="lokasi"
                value={formalEducation.lokasi}
                onChange={onChangeFormalEducation}
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>Bandung</option>
                <option>Jakarta</option>
              </Input>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs="12">
              <Col xs="12" lg="4">
                <div>
                  <Label>Prestasi</Label>
                </div>
                <div className="d-flex justify-content-evenly w-100 align-items-center">
                  <Input
                    type="radio"
                    value={true}
                    name="prestasi"
                    className="m-0 p-0"
                    onChange={onChangeFormalEducation}
                  />
                  <Label>Ada</Label>
                  <Input
                    type="radio"
                    value={false}
                    name="prestasi"
                    className="m-0 p-0"
                    onChange={onChangeFormalEducation}
                  />
                  <Label>Tidak Ada</Label>
                </div>
              </Col>
            </Col>
          </Row>
        </Card>

        <Card className="p-4 my-3">
          <h5>PENDIDIKAN NON FORMAL</h5>
          <hr />
          <Row className="mt-3">
            <Col xs="12" lg="4">
              <Label>Pendidikan Yang Pernah/Sedang Ditempuh</Label>
              <Input
                type="select"
                value={nonFormalEducation.pendidikan_ditempuh}
                name="pendidikan_ditempuh"
                onChange={(e) =>
                  setNonFormalEducation((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
                }
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>S1</option>
                <option>S2</option>
              </Input>
            </Col>
            <Col xs="12" lg="4">
              <Label>Jurusan</Label>
              <Input
                type="select"
                name="jurusan"
                onChange={(e) =>
                  setNonFormalEducation((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
                }
                className="form-select"
              >
                <option hidden>{""}</option>
                <option>Teknik</option>
                <option>Non-Teknik</option>
              </Input>
            </Col>
          </Row>

          {nonFormalList.map((value, index) => {
            return (
              <div key={index}>
                <Row className="mt-3" key={index}>
                  <Col xs="12" lg="4">
                    <Label>Lembaga Penyelenggara</Label>
                    <Input
                      type="text"
                      name="lembaga_penyelenggara"
                      value={nonFormalList[index].lembaga_penyelenggara}
                      onChange={(e) => onChangeNonFormal(e, index)}
                    />
                  </Col>
                  <Col xs="12" lg="3">
                    <Label>Tahun</Label>
                    <Input
                      type="select"
                      name="tahun"
                      value={nonFormalList[index].tahun}
                      onChange={(e) => onChangeNonFormal(e, index)}
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
                    <Label>Lokasi</Label>
                    <Input
                      type="select"
                      name="lokasi"
                      value={nonFormalList[index].lokasi}
                      onChange={(e) => onChangeNonFormal(e, index)}
                      className="form-select"
                    >
                      <option hidden>{""}</option>
                      <option>Bandung</option>
                      <option>Jakarta</option>
                    </Input>
                  </Col>
                  <Col xs="12" lg="2">
                    <Label style={{ opacity: "0" }}>Add</Label>
                    {!index > 0 ? (
                      <Button color="primary" className="ml-0 w-100" onClick={onAddNonFormalList}>
                        Tambah
                      </Button>
                    ) : (
                      <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveNonFormal(index)}>
                        Hapus
                      </Button>
                    )}
                  </Col>
                </Row>
                {nonFormalEducation.length > 1 ? <hr className="mt-3" /> : null}
              </div>
            );
          })}

          <Row>
            <Col xs="12" lg="4">
              <Label>Keahlian Khusus</Label>
              <Input
                type="text"
                value={keahlianKhusus}
                name="keahlian_khusus"
                onChange={(e) => setKeahlianKhusus(e.target.value)}
              />
            </Col>
          </Row>
        </Card>
        <Button color="danger" outline>
          Batalkan
        </Button>
        <Button color="primary" onClick={onSubmitEducation} className="mx-3">
          Simpan
        </Button>
      </Col>
    </Row>
  );
};

export default EducationForm;
