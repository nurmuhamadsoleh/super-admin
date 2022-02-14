import { useState, useContext, useEffect } from "react";
import { Card, Button, Row, Col, Input, Label } from "reactstrap";
import { useParams } from "react-router-dom";

import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
const ProgramMembershipForm = () => {
  let { id } = useParams();
  const {
    kependudukanState: { dataKependudukanSingle = {} },
    editKependudukan,
  } = useContext(KependudukanContext);
  let { kepesertaan_program = {} } = dataKependudukanSingle;

  useEffect(() => {
    if (!kepesertaan_program) return;

    if (kepesertaan_program.program_sosial) {
      setSocial(kepesertaan_program.program_sosial);
    }
    if (kepesertaan_program.program_kesehatan) {
      setHealth(kepesertaan_program.program_kesehatan);
    }
    if (kepesertaan_program.program_pendidikan) {
      setEducation(kepesertaan_program.program_pendidikan);
    }
    if (kepesertaan_program.program_ketenagakerjaan) {
      setEmployment(kepesertaan_program.program_ketenagakerjaan);
    }
    if (kepesertaan_program.program_pertanian) {
      setAgriculture(kepesertaan_program.program_pertanian);
    }
  }, [kepesertaan_program]);

  const [social, setSocial] = useState([
    {
      nama: "",
      id_program: "",
      keterangan: "",
    },
  ]);

  const [health, setHealth] = useState([
    {
      nama: "",
      id_program: "",
      keterangan: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      nama: "",
      id_program: "",
      keterangan: "",
    },
  ]);

  const [employment, setEmployment] = useState([
    {
      nama: "",
      id_program: "",
      keterangan: "",
    },
  ]);

  const [agriculture, setAgriculture] = useState([
    {
      nama: "",
      id_program: "",
      keterangan: "",
    },
  ]);

  const onSubmitProgramMembership = () => {
    const form = {
      kepesertaan_program: {
        program_sosial: social,
        program_kesehatan: health,
        program_pendidikan: education,
        program_ketenagakerjaan: employment,
        program_pertanian: agriculture,
      },
    };

    editKependudukan(form, id);
  };

  // social form
  const onChangeSocial = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...social];
    inputObj[index][name] = value;
    setSocial(inputObj);
  };

  const onAddSocial = () => {
    setSocial([
      ...social,
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };

  const onRemoveSocial = (index) => {
    let newArray = [...social];
    newArray.splice(index, 1);
    setSocial(newArray);
  };

  // health form
  const onChangeHealth = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...health];
    inputObj[index][name] = value;
    setHealth(inputObj);
  };

  const onAddHealth = () => {
    setHealth([
      ...health,
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };

  const onRemoveHealth = (index) => {
    let newArray = [...health];
    newArray.splice(index, 1);
    setHealth(newArray);
  };

  // education form
  const onChangeEducation = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...education];
    inputObj[index][name] = value;
    setEducation(inputObj);
  };

  const onAddEducation = () => {
    setEducation([
      ...education,
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };

  const onRemoveEducation = (index) => {
    let newArray = [...education];
    newArray.splice(index, 1);
    setEducation(newArray);
  };

  // employment form
  const onChangeEmployment = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...employment];
    inputObj[index][name] = value;
    setEmployment(inputObj);
  };

  const onAddEmployment = () => {
    setEmployment([
      ...employment,
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };

  const onRemoveEmployment = (index) => {
    let newArray = [...employment];
    newArray.splice(index, 1);
    setEmployment(newArray);
  };

  // agriculture form
  const onChangeAgriculture = (e, index) => {
    let { name, value } = e.target;
    let inputObj = [...agriculture];
    inputObj[index][name] = value;
    setAgriculture(inputObj);
  };

  const onAddAgriculture = () => {
    setAgriculture([
      ...agriculture,
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };

  const onRemoveAgriculture = (index) => {
    let newArray = [...agriculture];
    newArray.splice(index, 1);
    setAgriculture(newArray);
  };

  const onClickClear = () => {
    setSocial([
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);

    setHealth([
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);

    setEducation([
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);

    setEmployment([
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);

    setAgriculture([
      {
        nama: "",
        id_program: "",
        keterangan: "",
      },
    ]);
  };
  return (
    <Row>
      <Col xs="12">
        <Card className="my-3 p-4">
          PROGRAM SOSIAL
          <hr />
          {social.map((value, index) => {
            return (
              <Row key={index}>
                <Col xs="12" lg="3">
                  <Label>Kepersertaan Program</Label>
                  <Input type="text" value={value.nama} name="nama" onChange={(e) => onChangeSocial(e, index)} />
                </Col>
                <Col xs="12" lg="4">
                  <Label>NO ID</Label>
                  <Input
                    type="text"
                    value={value.id_program}
                    name="id_program"
                    onChange={(e) => onChangeSocial(e, index)}
                  />
                </Col>
                <Col xs="12" lg="3">
                  <Label>Keterangan</Label>
                  <Input
                    type="text"
                    value={value.keterangan}
                    name="keterangan"
                    onChange={(e) => onChangeSocial(e, index)}
                  />
                </Col>
                <Col xs="12" lg="2">
                  <Label style={{ opacity: "0" }}>Add</Label>
                  {!index > 0 ? (
                    <Button color="primary" className="ml-0 w-100" onClick={(e) => onAddSocial(e, index)}>
                      Tambah
                    </Button>
                  ) : (
                    <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveSocial(index)}>
                      Hapus
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </Card>

        <Card className="my-3 p-4">
          PROGRAM KESEHATAN
          <hr />
          {health.map((value, index) => {
            return (
              <Row key={index}>
                <Col xs="12" lg="3">
                  <Label>Kepersertaan Program</Label>
                  <Input type="text" value={value.nama} name="nama" onChange={(e) => onChangeHealth(e, index)} />
                </Col>
                <Col xs="12" lg="4">
                  <Label>NO ID</Label>
                  <Input
                    type="text"
                    value={value.id_program}
                    name="id_program"
                    onChange={(e) => onChangeHealth(e, index)}
                  />
                </Col>
                <Col xs="12" lg="3">
                  <Label>Keterangan</Label>
                  <Input
                    type="text"
                    value={value.keterangan}
                    name="keterangan"
                    onChange={(e) => onChangeHealth(e, index)}
                  />
                </Col>
                <Col xs="12" lg="2">
                  <Label style={{ opacity: "0" }}>Add</Label>
                  {!index > 0 ? (
                    <Button color="primary" className="ml-0 w-100" onClick={(e) => onAddHealth(e, index)}>
                      Tambah
                    </Button>
                  ) : (
                    <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveHealth(index)}>
                      Hapus
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </Card>

        <Card className="my-3 p-4">
          PROGRAM PENDIDIKAN
          <hr />
          {education.map((value, index) => {
            return (
              <Row key={index}>
                <Col xs="12" lg="3">
                  <Label>Kepersertaan Program</Label>
                  <Input type="text" value={value.nama} name="nama" onChange={(e) => onChangeEducation(e, index)} />
                </Col>
                <Col xs="12" lg="4">
                  <Label>NO ID</Label>
                  <Input
                    type="text"
                    value={value.id_program}
                    name="id_program"
                    onChange={(e) => onChangeEducation(e, index)}
                  />
                </Col>
                <Col xs="12" lg="3">
                  <Label>Keterangan</Label>
                  <Input
                    type="text"
                    value={value.keterangan}
                    name="keterangan"
                    onChange={(e) => onChangeEducation(e, index)}
                  />
                </Col>
                <Col xs="12" lg="2">
                  <Label style={{ opacity: "0" }}>Add</Label>
                  {!index > 0 ? (
                    <Button color="primary" className="ml-0 w-100" onClick={(e) => onAddEducation(e, index)}>
                      Tambah
                    </Button>
                  ) : (
                    <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveEducation(index)}>
                      Hapus
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </Card>

        <Card className="my-3 p-4">
          PROGRAM KETENAGAKERJAAN
          <hr />
          {employment.map((value, index) => {
            return (
              <Row key={index}>
                <Col xs="12" lg="3">
                  <Label>Kepersertaan Program</Label>
                  <Input type="text" value={value.nama} name="nama" onChange={(e) => onChangeEmployment(e, index)} />
                </Col>
                <Col xs="12" lg="4">
                  <Label>NO ID</Label>
                  <Input
                    type="text"
                    value={value.id_program}
                    name="id_program"
                    onChange={(e) => onChangeEmployment(e, index)}
                  />
                </Col>
                <Col xs="12" lg="3">
                  <Label>Keterangan</Label>
                  <Input
                    type="text"
                    value={value.keterangan}
                    name="keterangan"
                    onChange={(e) => onChangeEmployment(e, index)}
                  />
                </Col>
                <Col xs="12" lg="2">
                  <Label style={{ opacity: "0" }}>Add</Label>
                  {!index > 0 ? (
                    <Button color="primary" className="ml-0 w-100" onClick={(e) => onAddEmployment(e, index)}>
                      Tambah
                    </Button>
                  ) : (
                    <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveEmployment(index)}>
                      Hapus
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </Card>
        <Card className="my-3 p-4">
          PROGRAM PERTANIAN, PETERNAKAN DAN PERIKANAN
          <hr />
          {agriculture.map((value, index) => {
            return (
              <Row key={index}>
                <Col xs="12" lg="3">
                  <Label>Kepersertaan Program</Label>
                  <Input type="text" value={value.nama} name="nama" onChange={(e) => onChangeAgriculture(e, index)} />
                </Col>
                <Col xs="12" lg="4">
                  <Label>NO ID</Label>
                  <Input
                    type="text"
                    value={value.id_program}
                    name="id_program"
                    onChange={(e) => onChangeAgriculture(e, index)}
                  />
                </Col>
                <Col xs="12" lg="3">
                  <Label>Keterangan</Label>
                  <Input
                    type="text"
                    value={value.keterangan}
                    name="keterangan"
                    onChange={(e) => onChangeAgriculture(e, index)}
                  />
                </Col>
                <Col xs="12" lg="2">
                  <Label style={{ opacity: "0" }}>Add</Label>
                  {!index > 0 ? (
                    <Button color="primary" className="ml-0 w-100" onClick={(e) => onAddAgriculture(e, index)}>
                      Tambah
                    </Button>
                  ) : (
                    <Button color="danger" className="ml-0 w-100" onClick={() => onRemoveAgriculture(index)}>
                      Hapus
                    </Button>
                  )}
                </Col>
              </Row>
            );
          })}
        </Card>

        <Button color="danger" outline onClick={onClickClear}>
          Batalkan
        </Button>
        <Button color="primary" className="mx-3" onClick={onSubmitProgramMembership}>
          Simpan
        </Button>
      </Col>
    </Row>
  );
};

export default ProgramMembershipForm;

// {PROGRAM_MEMBERSHIP_FORM.map((data, index) => {
//   let { title } = data;
//   return (
//     <Card className="my-3 p-4" key={index}>
//       {title}
//       <hr />

//       <Row className="mt-3">
//         {data.form?.map((innerForm, innerIndex) => {
//           let { xs, lg, label, type, name } = innerForm;

//           return (
//             <Col xs={xs} lg={lg} key={innerIndex}>
//               {label === "Tambah" ? null : <Label>{label}</Label>}

//               {type === "text" ? (
//                 <>
//                   {programMembershipData[title].map((val, idx) => {
//                     return (
//                       <Input
//                         value={val[name]}
//                         className="mt-3"
//                         onChange={(e) => onChangeProgram(e, data.title, idx)}
//                         name={name}
//                         type={type}
//                         key={idx}
//                       />
//                     );
//                   })}
//                 </>
//               ) : null}
//               {type === "button" ? (
//                 <>
//                   <Label style={{ opacity: "0" }}>None</Label>
//                   <Button
//                     style={{ fontSize: "0.8rem" }}
//                     className="mt-3 w-100"
//                     color="primary"
//                     onClick={() => onAddProgram(data.title, index)}
//                   >
//                     Tambah
//                   </Button>
//                 </>
//               ) : null}

//               {/* {innerIndex > 0 ? <Button color="danger">Hapus</Button> : null} */}
//             </Col>
//           );
//         })}
//       </Row>
//     </Card>
//   );
// })}
