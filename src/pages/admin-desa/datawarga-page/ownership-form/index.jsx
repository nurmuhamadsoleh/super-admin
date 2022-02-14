import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../../context/kependudukan/KependudukanContext";
import { vehicleObj, loanObj, landNonProdObj, landProdObj, electronicObj, residenceObj } from "./initialData";
import modifyBeforePut from "./utils";
import { editKependudukan } from "../../../../api/service/Kependudukan";

const OwnershipForm = () => {
  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  let { kepemilikan = {} } = dataKependudukanSingle;

  const [vehicle, setVehicle] = useState([vehicleObj]);
  const [electronic, setElectronic] = useState([electronicObj]);
  const [loan, setLoan] = useState([loanObj]);
  const [landNonProductive, setLandNonProductive] = useState([landNonProdObj]);
  const [landProductive, setLandProductive] = useState([landProdObj]);
  const [residence, setResidence] = useState([residenceObj]);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const { id: userId } = useParams();

  useEffect(() => {
    if (!kepemilikan) return;

    const {
      aset_kendaraan,
      aset_elektronik,
      kepemilikan_pinjaman,
      kepemilikan_lahan_non_produktif,
      kepemilikan_lahan_produktif,
      tempat_tinggal,
    } = kepemilikan;

    if (tempat_tinggal) setResidence([tempat_tinggal]);
    if (aset_kendaraan) setVehicle(aset_kendaraan);
    if (aset_elektronik) setElectronic(aset_elektronik);
    if (kepemilikan_pinjaman) setLoan(kepemilikan_pinjaman);
    if (kepemilikan_lahan_non_produktif) setLandNonProductive(kepemilikan_lahan_non_produktif);
    if (kepemilikan_lahan_produktif) setLandProductive(kepemilikan_lahan_produktif);
  }, [kepemilikan]);

  // useEffect(() => {
  //   if (!userId) return;
  //   const getOwnershipData = async (id) => {
  //     try {
  //       const {
  //         data: { kepemilikan },
  //       } = await getOnePenduduk(id);

  //       if (kepemilikan === null) return;

  //       const {
  //         aset_kendaraan,
  //         aset_elektronik,
  //         kepemilikan_pinjaman,
  //         kepemilikan_lahan_non_produktif,
  //         kepemilikan_lahan_produktif,
  //         tempat_tinggal,
  //       } = kepemilikan;

  //       if (tempat_tinggal) setResidence([tempat_tinggal]);
  //       if (aset_kendaraan) setVehicle(aset_kendaraan);
  //       if (aset_elektronik) setElectronic(aset_elektronik);
  //       if (kepemilikan_pinjaman) setLoan(kepemilikan_pinjaman);
  //       if (kepemilikan_lahan_non_produktif) setLandNonProductive(kepemilikan_lahan_non_produktif);
  //       if (kepemilikan_lahan_produktif) setLandProductive(kepemilikan_lahan_produktif);
  //     } catch (error) {
  //       await Swal.fire("Error", error.message, "error");
  //     }
  //   };

  //   getOwnershipData(userId);
  // }, [userId]);

  const onChangeHandler = (e, index, state, setState) => {
    let { name, value } = e.target;
    let inputObj = [...state];
    inputObj[index][name] = value;
    setState(inputObj);
  };

  const onRemoveHandler = (index, state, setState) => {
    let newArray = [...state];
    newArray.splice(index, 1);
    setState(newArray);
  };

  const onAddHandler = (state, setState, newObject) => {
    setState([...state, newObject]);
  };

  const preventTypingNegativeNumber = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const preventPasteNegativeNumber = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  const handleSubmit = async () => {
    setIsSubmittingForm(true);

    const form = {
      kepemilikan: {
        tempat_tinggal: modifyBeforePut.residence(residence)[0], //send an object instead an array
        aset_kendaraan: vehicle,
        aset_elektronik: electronic,
        kepemilikan_pinjaman: modifyBeforePut.loan(loan),
        kepemilikan_lahan_non_produktif: modifyBeforePut.landNonProductive(landNonProductive),
        kepemilikan_lahan_produktif: modifyBeforePut.landProductive(landProductive),
      },
    };

    try {
      await editKependudukan(form, userId);
      Swal.fire("Sukses", "Data berhasil diperbarui", "success");
    } catch (e) {
      Swal.fire("Error", e.message, "error");
      setIsSubmittingForm(false);
    }
  };

  return (
    <Col xs="12">
      <Card className="my-3 p-4">
        <span style={{ fontWeight: 600 }}>KETERANGAN TEMPAT TINGGAL</span>
        <hr />
        {residence.map((value, index) => {
          let {
            status_lahan = "",
            status_bangunan = "",
            luas_lantai = "",
            satuan_luas = "",
            jenis_lantai = "",
            jenis_dinding = "",
            kondisi_dinding = "",
            jenis_atap = "",
            kondisi_atap = "",
            jumlah_kamar = "",
            sumber_air = "",
            kualitas_air = "",
            cara_memperoleh_air = "",
            sumber_penerangan = "",
            daya_watt = "",
            energi_memasak = "",
            tempat_pembuangan_sampah = "",
            status_sanitasi_bab = "true",
            jenis_kloset = "",
            tpa_tinja = "",
          } = value;

          const LARGE_SIZE = 3;
          return (
            <Row key={index}>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Status Lahan Tinggal</Label>
                <Input
                  type="text"
                  value={status_lahan}
                  name="status_lahan"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Status Bangunan Tinggal</Label>
                <Input
                  type="text"
                  value={status_bangunan}
                  name="status_bangunan"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Luas Lantai</Label>
                <Input
                  type="number"
                  value={luas_lantai}
                  name="luas_lantai"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Satuan</Label>
                <Input
                  type="select"
                  value={satuan_luas}
                  name="satuan_luas"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                  className="form-control form-select"
                >
                  <option value="M2">M2</option>
                  <option value="H2">H2</option>
                  <option value="BATA">BATA</option>
                </Input>
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Jenis Lantai Dominan</Label>
                <Input
                  type="text"
                  value={jenis_lantai}
                  name="jenis_lantai"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Jenis Dinding Dominan</Label>
                <Input
                  type="text"
                  value={jenis_dinding}
                  name="jenis_dinding"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Kondisi Dinding</Label>
                <Input
                  type="text"
                  value={kondisi_dinding}
                  name="kondisi_dinding"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Jenis Atap</Label>
                <Input
                  type="text"
                  value={jenis_atap}
                  name="jenis_atap"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Kondisi Atap</Label>
                <Input
                  type="text"
                  value={kondisi_atap}
                  name="kondisi_atap"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Jumlah Kamar Tidur</Label>
                <Input
                  type="number"
                  value={jumlah_kamar}
                  name="jumlah_kamar"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Sumber Air Umum</Label>
                <Input
                  type="text"
                  value={sumber_air}
                  name="sumber_air"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Kualitas Air</Label>
                <Input
                  type="text"
                  value={kualitas_air}
                  name="kualitas_air"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Cara Memperoleh Air</Label>
                <Input
                  type="text"
                  value={cara_memperoleh_air}
                  name="cara_memperoleh_air"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>

              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Sumber Penerangan</Label>
                <Input
                  type="text"
                  value={sumber_penerangan}
                  name="sumber_penerangan"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Daya/ Watt</Label>
                <Input
                  type="text"
                  value={daya_watt}
                  name="daya_watt"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Energi Memasak</Label>
                <Input
                  type="text"
                  value={energi_memasak}
                  name="energi_memasak"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Tempat Pembuang Sampah</Label>
                <Input
                  type="text"
                  value={tempat_pembuangan_sampah}
                  name="tempat_pembuangan_sampah"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Status Sanitasi BAB</Label>
                <Input
                  type="select"
                  value={status_sanitasi_bab}
                  name="status_sanitasi_bab"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                  className="form-control form-select"
                >
                  <option value="true">Ya</option>
                  <option value="false">Tidak</option>
                </Input>
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>Jenis Kloset</Label>
                <Input
                  type="text"
                  value={jenis_kloset}
                  name="jenis_kloset"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                />
              </Col>
              <Col xs="12" lg={LARGE_SIZE}>
                <Label>TPA Tinja</Label>
                <Input
                  type="number"
                  value={tpa_tinja}
                  name="tpa_tinja"
                  onChange={(e) => onChangeHandler(e, index, residence, setResidence)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>
            </Row>
          );
        })}
      </Card>

      <Card className="my-3 p-4">
        <span style={{ fontWeight: 600 }}>ASSET KENDARAAN DAN ELEKTRONIK</span>
        <hr />
        {vehicle.map((value, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="2">
                <Label>Jenis Kendaraan</Label>
                <Input
                  type="text"
                  value={value.jenis_kendaraan}
                  name="jenis_kendaraan"
                  onChange={(e) => onChangeHandler(e, index, vehicle, setVehicle)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Merk</Label>
                <Input
                  type="text"
                  value={value.merk_kendaraan}
                  name="merk_kendaraan"
                  onChange={(e) => onChangeHandler(e, index, vehicle, setVehicle)}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Tahun</Label>
                <Input
                  name="tahun"
                  type="text"
                  value={value.tahun}
                  onChange={(e) => onChangeHandler(e, index, vehicle, setVehicle)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Jumlah</Label>
                <Input
                  id="vehicleTotal"
                  name="jumlah"
                  type="text"
                  value={value.jumlah}
                  onChange={(e) => onChangeHandler(e, index, vehicle, setVehicle)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col xs="12" lg="4">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  value={value.keterangan}
                  name="keterangan"
                  onChange={(e) => onChangeHandler(e, index, vehicle, setVehicle)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>Add</Label>
                {!index > 0 ? (
                  <Button
                    color="primary"
                    className="ml-0 w-100"
                    onClick={() =>
                      onAddHandler(vehicle, setVehicle, {
                        jenis_kendaraan: "",
                        merk_kendaraan: "",
                        tahun: "",
                        jumlah: "",
                        keterangan: "",
                      })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button
                    color="danger"
                    className="ml-0 w-100"
                    onClick={() => onRemoveHandler(index, vehicle, setVehicle)}
                  >
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
        {electronic.map((value, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="2">
                <Label>Jenis Elektronik</Label>
                <Input
                  type="text"
                  value={value.jenis_elektronik}
                  name="jenis_elektronik"
                  onChange={(e) => onChangeHandler(e, index, electronic, setElectronic)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Merk</Label>
                <Input
                  type="text"
                  value={value.merk_elektronik}
                  name="merk_elektronik"
                  onChange={(e) => onChangeHandler(e, index, electronic, setElectronic)}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Tahun</Label>
                <Input
                  type="text"
                  value={value.tahun}
                  name="tahun"
                  onChange={(e) => onChangeHandler(e, index, electronic, setElectronic)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Jumlah</Label>
                <Input
                  type="text"
                  value={value.jumlah}
                  name="jumlah"
                  onChange={(e) => onChangeHandler(e, index, electronic, setElectronic)}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Col>
              <Col xs="12" lg="4">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  value={value.keterangan}
                  name="keterangan"
                  onChange={(e) => onChangeHandler(e, index, electronic, setElectronic)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>Add</Label>
                {!index > 0 ? (
                  <Button
                    color="primary"
                    className="ml-0 w-100"
                    onClick={() =>
                      onAddHandler(electronic, setElectronic, {
                        jenis_elektronik: "",
                        merk_elektronik: "",
                        tahun: "",
                        jumlah: "",
                        keterangan: "",
                      })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button
                    color="danger"
                    className="ml-0 w-100"
                    onClick={() => onRemoveHandler(index, electronic, setElectronic)}
                  >
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </Card>

      <Card className="my-3 p-4">
        <span style={{ fontWeight: 600 }}>KEPEMILIKAN PINJAMAN</span>
        <hr />
        {loan.map((value, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="2">
                <Label>Sumber Pinjaman</Label>
                <Input
                  type="text"
                  value={value.sumber_pinjaman}
                  name="sumber_pinjaman"
                  onChange={(e) => onChangeHandler(e, index, loan, setLoan)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Pemberi Pinjaman</Label>
                <Input
                  type="text"
                  value={value.pemberi_pinjaman}
                  name="pemberi_pinjaman"
                  onChange={(e) => onChangeHandler(e, index, loan, setLoan)}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Tenor</Label>
                <Input
                  type="text"
                  value={value.tenor}
                  name="tenor"
                  onChange={(e) => onChangeHandler(e, index, loan, setLoan)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Jumlah(Rp)</Label>
                <Input
                  type="number"
                  value={value.jumlah}
                  name="jumlah"
                  onChange={(e) => onChangeHandler(e, index, loan, setLoan)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>
              <Col xs="12" lg="3">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  value={value.keterangan}
                  name="keterangan"
                  onChange={(e) => onChangeHandler(e, index, loan, setLoan)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>Add</Label>
                {!index > 0 ? (
                  <Button
                    color="primary"
                    className="ml-0 w-100"
                    onClick={() =>
                      onAddHandler(loan, setLoan, {
                        sumber_pinjaman: "",
                        pemberi_pinjaman: "",
                        tenor: "",
                        jumlah: "", //expect number
                        keterangan: "",
                      })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveHandler(index, loan, setLoan)}>
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </Card>

      <Card className="my-3 p-4">
        <span style={{ fontWeight: 600 }}>KEPEMILIKAN LAHAN BANGUNAN DAN LAHAN NON-PRODUKTIF</span>

        <hr />
        {landNonProductive.map((value, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="2">
                <Label>Jenis Lahan</Label>
                <Input
                  type="text"
                  value={value.jenis_lahan}
                  name="jenis_lahan"
                  onChange={(e) => onChangeHandler(e, index, landNonProductive, setLandNonProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Luas Lahan</Label>
                <Input
                  type="number"
                  min={0}
                  value={value.luas_lahan}
                  name="luas_lahan"
                  onChange={(e) => onChangeHandler(e, index, landNonProductive, setLandNonProductive)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Satuan</Label>
                <Input
                  type="select"
                  value={value.satuan_lahan}
                  name="satuan_lahan"
                  onChange={(e) => onChangeHandler(e, index, landNonProductive, setLandNonProductive)}
                >
                  <option value="H2">H2</option>
                  <option value="M2">M2</option>
                  <option value="BATA">BATA</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>Lokasi</Label>
                <Input
                  type="text"
                  value={value.lokasi}
                  name="lokasi"
                  onChange={(e) => onChangeHandler(e, index, landNonProductive, setLandNonProductive)}
                />
              </Col>
              <Col xs="12" lg="3">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  value={value.keterangan}
                  name="keterangan"
                  onChange={(e) => onChangeHandler(e, index, landNonProductive, setLandNonProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>Add</Label>
                {!index > 0 ? (
                  <Button
                    color="primary"
                    className="ml-0 w-100"
                    onClick={(e) =>
                      onAddHandler(landNonProductive, setLandNonProductive, {
                        lokasi: "",
                        keterangan: "",
                        luas_lahan: "", //expect number
                        jenis_lahan: "",
                        satuan_lahan: "",
                      })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button
                    color="danger"
                    className="ml-0 w-100"
                    onClick={() => onRemoveHandler(index, landProductive, setLandNonProductive)}
                  >
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </Card>

      <Card className="my-3 p-4">
        <span style={{ fontWeight: 600 }}>KEPEMILIKAN LAHAN PRODUKTIF</span>
        <hr />
        {landProductive.map((value, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="2">
                <Label>Jenis Lahan</Label>
                <Input
                  type="text"
                  value={value.jenis_lahan}
                  name="jenis_lahan"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Jenis Produksi</Label>
                <Input
                  type="text"
                  value={value.jenis_produksi}
                  name="jenis_produksi"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Luas</Label>
                <Input
                  type="number"
                  min={0}
                  value={value.luas_lahan}
                  name="luas_lahan"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>
              <Col xs="12" lg="1">
                <Label>Satuan</Label>
                <Input
                  type="select"
                  value={value.satuan_lahan}
                  name="satuan_lahan"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                >
                  <option value="H2">H2</option>
                  <option value="M2">M2</option>
                  <option value="BATA">BATA</option>
                </Input>
              </Col>
              <Col xs="12" lg="5">
                <Label>Lokasi</Label>
                <Input
                  type="text"
                  value={value.lokasi}
                  name="lokasi"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label>Jumlah Produksi</Label>
                <Input
                  type="number"
                  min={0}
                  value={value.jumlah_produksi}
                  name="jumlah_produksi"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>

              <Col xs="12" lg="1">
                <Label>Satuan</Label>
                <Input
                  type="select"
                  value={value.satuan_produksi}
                  name="satuan_produksi"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                >
                  <option value="KG">KG</option>
                  <option value="KWINTAL">KWINTAL</option>
                  <option value="TON">TON</option>
                </Input>
              </Col>
              <Col xs="12" lg="2">
                <Label>Masa 1x panen</Label>
                <Input
                  type="number"
                  value={value.masa_per_panen}
                  name="masa_per_panen"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                  min={0}
                  onKeyPress={preventTypingNegativeNumber}
                  onPaste={preventPasteNegativeNumber}
                />
              </Col>

              <Col xs="12" lg="2">
                <Label>Satuan</Label>
                <Input
                  type="select"
                  value={value.satuan_panen}
                  name="satuan_panen"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                >
                  <option value="minggu">MINGGU</option>
                  <option value="bulan">BULAN</option>
                  <option value="tahun">TAHUN</option>
                </Input>
              </Col>

              <Col xs="12" lg="5">
                <Label>Metode Pemasaran</Label>
                <Input
                  type="text"
                  value={value.metode_pemasaran}
                  name="metode_pemasaran"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                />
              </Col>

              <Col xs="12" lg="10">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  value={value.keterangan}
                  name="keterangan"
                  onChange={(e) => onChangeHandler(e, index, landProductive, setLandProductive)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>Add</Label>
                {!index > 0 ? (
                  <Button
                    color="primary"
                    className="ml-0 w-100"
                    onClick={() =>
                      onAddHandler(landProductive, setLandProductive, {
                        jenis_lahan: "",
                        lokasi: "",
                        luas_lahan: "", //expect number
                        satuan_lahan: "",
                        satuan_panen: "",
                        jenis_produksi: "",
                        masa_per_panen: "",
                        jumlah_produksi: "", //expect number
                        metode_pemasaran: "",
                        satuan_produksi: "",
                        keterangan: "",
                      })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button
                    color="danger"
                    className="ml-0 w-100"
                    onClick={() => onRemoveHandler(index, landProductive, setLandProductive)}
                  >
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </Card>

      <Button color="danger" outline>
        Batalkan
      </Button>
      <Button color="primary" className="mx-3" onClick={handleSubmit} disabled={isSubmittingForm}>
        Simpan
      </Button>
    </Col>
  );
};

export default OwnershipForm;
