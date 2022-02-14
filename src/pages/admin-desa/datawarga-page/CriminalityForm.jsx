import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import Swal from "sweetalert2";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import { editKependudukan } from "../../../api/service/Kependudukan";

const CriminalityForm = () => {
  const {
    kependudukanState: { dataKependudukanSingle = {} },
  } = useContext(KependudukanContext);

  let { kriminalitas = {} } = dataKependudukanSingle;

  const [victimForm, setVictimForm] = useState([{ tipe_kriminalitas: "", keterangan: "" }]);
  const [criminalForm, setCriminalForm] = useState([{ tipe_kriminalitas: "", keterangan: "" }]);
  const [isVictim, setIsVictim] = useState(null);
  const [isCriminal, setIsCriminal] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const { id: userId } = useParams();

  useEffect(() => {
    if (!kriminalitas || !kriminalitas.data_kriminalitas) return;

    const { pelaku_kriminalitas, korban_kriminalitas, daftar_kriminal, korban_kriminal } =
      kriminalitas.data_kriminalitas;
    if (pelaku_kriminalitas) setIsCriminal("true");
    if (korban_kriminalitas) setIsVictim("true");
    if (daftar_kriminal) setCriminalForm(daftar_kriminal);
    if (korban_kriminal) setVictimForm(korban_kriminal);
  }, [kriminalitas]);

  // useEffect(() => {
  //   if (!userId) return;

  //   const getCriminalData = async (id) => {
  //     try {
  //       const {
  //         data: { kriminalitas },
  //       } = await getOnePenduduk(id);

  //       if (!kriminalitas) return;

  //       const { pelaku_kriminalitas, korban_kriminalitas, daftar_kriminal, korban_kriminal } =
  //         kriminalitas.data_kriminalitas;
  //       if (pelaku_kriminalitas) setIsCriminal("true");
  //       if (korban_kriminalitas) setIsVictim("true");
  //       if (daftar_kriminal) setCriminalForm(daftar_kriminal);
  //       if (korban_kriminal) setVictimForm(korban_kriminal);
  //     } catch (e) {
  //       Swal.fire("Error", e.message, "error");
  //     }
  //   };

  //   getCriminalData(userId);
  // }, [userId]);

  const onChangeHandler = (e, index, state, setState) => {
    const { name, value } = e.target;
    let clonedState = [...state];
    clonedState[index][name] = value;
    setState(clonedState);
  };

  const onRadioChange = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };

  const onRemoveHandler = (index, state, setState) => {
    let clonedState = [...state];
    clonedState.splice(index, 1);
    setState(clonedState);
  };

  const onAddHandler = (state, setState, newObject) => {
    setState([...state, newObject]);
  };

  const onSubmit = async () => {
    setIsSubmit(true);
    try {
      const generateCriminalForm = () => {
        let form = {
          kriminalitas: {
            data_kriminalitas: {},
          },
        };

        if (isCriminal === "true") {
          form.kriminalitas.data_kriminalitas.pelaku_kriminalitas = true;
          form.kriminalitas.data_kriminalitas.daftar_kriminal = criminalForm;
        }

        if (isVictim === "true") {
          form.kriminalitas.data_kriminalitas.korban_kriminalitas = true;
          form.kriminalitas.data_kriminalitas.korban_kriminal = victimForm;
        }

        return form;
      };

      const formToSubmit = generateCriminalForm();
      await editKependudukan(formToSubmit, userId);
      await Swal.fire("Sukses!", "Data berhasil diperbarui", "success");
    } catch (e) {
      Swal.fire("Error", e.message, "error");
    }
    setIsSubmit(false);
  };

  return (
    <Col xs="12">
      <Card className="my-3 p-4">
        DATA KRIMINALITAS
        <hr />
        <Row>
          <Col xs="12">
            <Label>Apakah Pelaku Tindakan Kriminalitas</Label>
            <div className={`d-flex justify-content-start align-items-center w-100`}>
              <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                <Input
                  type="radio"
                  value="true"
                  // name="isPerpetrator"
                  className="m-0 p-0"
                  onChange={(e) => onRadioChange(e, setIsCriminal)}
                  checked={isCriminal === "true"}
                />
                <Label className="mx-2 p-0">Ya</Label>
              </div>

              <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                <Input
                  type="radio"
                  value="false"
                  // name="isPerpetrator"
                  className="m-0 p-0"
                  onChange={(e) => onRadioChange(e, setIsCriminal)}
                  checked={isCriminal === "false"}
                />
                <Label className="mx-2 p-0">Tidak</Label>
              </div>
            </div>
          </Col>
        </Row>
        {criminalForm.map((item, index) => {
          return (
            <Row key={index}>
              <Col xs="12" lg="5">
                <Label>Tipe Kriminalitas</Label>
                <Input
                  type="text"
                  name="tipe_kriminalitas"
                  value={item.tipe_kriminalitas}
                  onChange={(e) => onChangeHandler(e, index, criminalForm, setCriminalForm)}
                />
              </Col>
              <Col xs="12" lg="5">
                <Label>Keterangan</Label>
                <Input
                  type="text"
                  name="keterangan"
                  value={item.keterangan}
                  onChange={(e) => onChangeHandler(e, index, criminalForm, setCriminalForm)}
                />
              </Col>
              <Col xs="12" lg="2">
                <Label style={{ opacity: "0" }}>None</Label>
                {index === 0 ? (
                  <Button
                    style={{ fontSize: "0.8rem" }}
                    color="primary"
                    className="w-100"
                    onClick={(e) =>
                      onAddHandler(criminalForm, setCriminalForm, { tipe_kriminalitas: "", keterangan: "" })
                    }
                  >
                    Tambah
                  </Button>
                ) : (
                  <Button
                    style={{ fontSize: "0.8rem" }}
                    color="danger"
                    className="w-100"
                    onClick={(e) => onRemoveHandler(index, criminalForm, setCriminalForm)}
                  >
                    Hapus
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col xs="12" className="mt-4">
            <Label>Apakah Korban Dalam Tindakan Kriminalitas</Label>
            <div className={`d-flex justify-content-start align-items-center w-100`}>
              <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                <Input
                  type="radio"
                  value="true"
                  className="m-0 ml-2 p-0"
                  onChange={(e) => onRadioChange(e, setIsVictim)}
                  checked={isVictim === "true"}
                />
                <Label className="mx-2 p-0">Ya</Label>
              </div>

              <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center mx-2">
                <Input
                  type="radio"
                  value="false"
                  className="m-0 ml-2 p-0"
                  onChange={(e) => onRadioChange(e, setIsVictim)}
                  checked={isVictim === "false"}
                />
                <Label className="mx-2 p-0">Tidak</Label>
              </div>
            </div>
          </Col>
        </Row>
        {isVictim === "true" && (
          <>
            {victimForm.map((item, index) => {
              return (
                <Row key={index}>
                  <Col xs="12" lg="5">
                    <Label>Tipe Kriminalitas</Label>

                    <Input
                      type="text"
                      value={item.tipe_kriminalitas}
                      name="tipe_kriminalitas"
                      onChange={(e) => onChangeHandler(e, index, victimForm, setVictimForm)}
                    />
                  </Col>
                  <Col xs="12" lg="5">
                    <Label>Keterangan</Label>

                    <Input
                      type="text"
                      value={item.keterangan}
                      name="keterangan"
                      onChange={(e) => onChangeHandler(e, index, victimForm, setVictimForm)}
                    />
                  </Col>

                  <Col xs="12" lg="2">
                    <Label style={{ opacity: "0" }}>None</Label>
                    {index === 0 ? (
                      <Button
                        style={{ fontSize: "0.8rem" }}
                        color="primary"
                        className="w-100"
                        onClick={(e) =>
                          onAddHandler(victimForm, setVictimForm, { tipe_kriminalitas: "", keterangan: "" })
                        }
                      >
                        Tambah
                      </Button>
                    ) : (
                      <Button
                        style={{ fontSize: "0.8rem" }}
                        color="danger"
                        className="w-100"
                        onClick={(e) => onRemoveHandler(index, victimForm, setVictimForm)}
                      >
                        Hapus
                      </Button>
                    )}
                  </Col>
                </Row>
              );
            })}
          </>
        )}
      </Card>

      <Button color="danger" outline disabled={isSubmit}>
        Batalkan
      </Button>
      <Button color="primary" className="mx-3" onClick={onSubmit} disabled={isSubmit}>
        Simpan
      </Button>
    </Col>
  );
};

export default CriminalityForm;
