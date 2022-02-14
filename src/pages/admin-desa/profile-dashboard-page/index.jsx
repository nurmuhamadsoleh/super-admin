import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col, Input, Label } from "reactstrap";
import Swal from 'sweetalert2'
import AvaPlaceholder from "../../../assets/images/avatar_placeholder.png";
import { SubTitle } from "../../../components";
import { ImageUploader } from "../../../components";
import EDESA_API from '../../../api/'

const PROFILE_DASHBOARD = [
  {
    title: "DATA WARGA NON-AKTIF",
    form: [
      {
        label: "Desa *",
        type: "text",
        xs: "12",
        lg: "12",
      },
      {
        label: "Alamat *",
        type: "text",
        xs: "12",
        lg: "12",
      },
      {
        label: "Email kantor desa *",
        type: "email",
        xs: "12",
        lg: "12",
      },
      {
        label: "No Telepon *",
        type: "number",
        xs: "12",
        lg: "12",
      },
      {
        label: "Kode Pos *",
        type: "number",
        xs: "12",
        lg: "12",
      },
      {
        label: "Kode Wilayah *",
        type: "text",
        xs: "12",
        lg: "12",
      },
      {
        label: "Kepala Desa *",
        type: "text",
        xs: "12",
        lg: "12",
      },
      {
        label: "Nama Lembaga *",
        type: "text",
        xs: "12",
        lg: "12",
      },
      {
        label: "Nama Bumdes *",
        type: "text",
        xs: "12",
        lg: "12",
      },
    ],
  },
];

const ProfileDashboard = () => {
  const [imageFiles, setImageFiles] = useState({});
  useEffect(() => {


    const fetch = async () => {
      // const result = await EDESA_API('/api/admin_desa/users/index')
      // const add = await EDESA_API('/api/admin_desa/users/add')
      const {data: profil} = await EDESA_API('/api/admin_desa/profil_desa_dashboard')
      // console.log('result: ', result)
      // console.log('add: ', add)
      console.log('profil: ', profil)
    }

    fetch()

  },[])

  const onSaveClick = async () => {
    const {id:userId, desa_id} = JSON.parse(localStorage.getItem('userProfile'))
    const form = {
      profil_desa:{
        nama_desa: 'Desa Arjasari',
        alamat_desa:"Jalan Arjasari No.1",
        email_desa:"desaarjasari@idesaku.com",
        no_telepon:"0227554321",
        kode_pos:"40379",
        nama_lembaga:"update lembaga",
    },
    kepala_desa:"Cucu Syamsuddin",
    nama_bumdes:null,
    }

    

    try {
      await EDESA_API.put(`/api/admin_desa/profil_desa_dashboard/edit/${userId}`,form)
      Swal.fire('Sukses!', 'Data berhasil diperbarui', 'success')

    } catch (e) {
      console.error(e.message)
      Swal.fire('error', e.message, 'error')
    }
  }

  return (
    <Container fluid className="px-2">
      <SubTitle title="Data Profil" />
      <Row className="mt-4">
        <Col xs="12" lg="8" className="mb-3">
          <Card className="p-4 align-middle shadow-sm border-0">
            <h6>
              <b>Profil Desa</b>
            </h6>
            <h6 className="mb-0 pb-0">Isi data Desa dengan lengkap</h6>
            {PROFILE_DASHBOARD.map((data, index) => {
              return (
                <Row className="mt-3" key={index}>
                  {data.form?.map((innerForm, index) => {
                    let { xs, lg, label, type } = innerForm;
                    return (
                      <Col xs={xs} lg={lg} key={index}>
                        <Label>{label}</Label>

                        {type === "select" ? (
                          <Input type={type}>
                            {innerForm.option?.map((opt, optIdx) => (
                              <option key={optIdx}>{opt}</option>
                            ))}
                          </Input>
                        ) : null}

                        {type === "radio" ? (
                          <div className={`d-flex justify-content-evenly align-items-center w-${innerForm.width}`}>
                            {innerForm.option?.map((radio, radIdx) => {
                              return (
                                <React.Fragment key={radIdx}>
                                  <Input type="radio" value={radio.value} name={radio.name} className="m-0 p-0" />
                                  <Label>{radio.label}</Label>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        ) : null}

                        {type === "text" || type === "number" || type === "email" ? (
                          <Input type={type} key={index} />
                        ) : null}
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </Card>
        </Col>
        <Col xs="12" lg="4" className="mb-3">
          <Card className="p-4 align-middle shadow-sm border-0">
            <h6>
              <b>Logo</b>
            </h6>
            <Row className="mt-3">
              <Col xs="12" className="d-flex justify-content-center flex-column align-items-center">
                <img
                  src={imageFiles.preview || AvaPlaceholder}
                  alt="profile"
                  style={{ height: "200px", width: "100%", maxWidth: "200px" }}
                />
                <div className="d-flex flex-row align-items-center w-100 my-3">
                  <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
                </div>
              </Col>
            </Row>
          </Card>
          <Col xs="12" className="mt-3">
            <Button color="danger" outline>
              Batalkan
            </Button>
            <Button color="primary" className="mx-3" onClick={() => onSaveClick()}>
              Simpan
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDashboard;
