import { useState, useEffect } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, Container, Row, Col, Button } from "reactstrap";
import Swal from "sweetalert2";
import AvaPlaceholder from "../../../../assets/images/avatar_placeholder.png";
import { ImageUploader, SubTitle, FormikController } from "../../../../components";

import EDESA_API from "../../../../api";
const AddWisata = () => {
  const [imageFiles, setImageFiles] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [paketWisata, setPaketWisata] = useState([{ name: "", kapasitas: 0, deskripsi: "" }]);

  useEffect(() => {
    const getCategoryList = async () => {
      let {
        data: { result },
      } = await EDESA_API.get("/api/admin_desa/desa_wisata/kategori/");
      const categoryOptions = result.map(({ nama, id }) => {
        return { key: nama, value: nama };
      });
      setCategoryList(categoryOptions);
    };
    getCategoryList();
  }, [setCategoryList]);

  const INITIAL_FORM_VALUE = {
    desa_id: 0,
    user_id: 0,
    kategori_id: 0,
    nama: "",
    deskripsi: "",
    no_telpon: "",
    email: "",
    image: "",
    koordinat: "",
    kategori: "",
    paket_wisata: [{ name: "", kapasitas: 0, deskripsi: "" }],
  };

  console.log("categoryList: ", categoryList);

  const validationSchema = Yup.object({
    nama: Yup.string().required("Wajib diisi"),
    deskripsi: Yup.string().required("Wajib diisi"),
    kategori: Yup.string().required("Wajib diisi"),
    koordinat: Yup.string().required("Wajib diisi"),
    no_telpon: Yup.string().required("Wajib diisi"),
    email: Yup.string().required("Wajib diisi"),
  });

  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  console.log("userProfile: ", userProfile);

  const onSubmitWisata = async (data) => {
    console.log("data", data);
    let { deskripsi, nama, kategori, email, no_telpon, koordinat } = data;

    let form = {
      desa_id: userProfile.desa_id,
      user_id: userProfile.id,
      kategori_id: 0,
      nama: nama,
      deskripsi: deskripsi,
      no_telpon: no_telpon,
      email: email,
      image: "",
      koordinat: koordinat,
      kategori: kategori,
      paketWisata,
    };

    let response = await EDESA_API.post("/api/admin_desa/desa_wisata/desa/", form);
    console.log("form: ", form);
    console.log("response: ", response);
    Swal.fire("", "Sukses menambahkan desa wisata", "success");
  };
  const onAddPaket = () => {
    setPaketWisata((prevState) => [...prevState, { name: "", kapasitas: 0, deskripsi: "" }]);
  };
  console.log("paketWisata: ", paketWisata);

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUE}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmitWisata}
    >
      {() => (
        <Form>
          <Container>
            <SubTitle title="Tambah Wisata" addButton={false} />

            <Row className="mt-4">
              <Col xs="12" lg="6">
                <Card className="shadow-sm border-0 p-4" style={{ minHeight: "80vh" }}>
                  <div className="border-bottom pb-3">
                    <h5>Detail Wisata</h5>
                  </div>
                  <Row className="mt-3">
                    <FormikController
                      control="input"
                      type="text"
                      label="Nama Wisata*"
                      name="nama"
                      placeholder="Nama Wisata"
                    />
                  </Row>
                  <Row className="mt-3">
                    <FormikController
                      control="textarea"
                      type="text"
                      label="Deskripsi Wisata*"
                      name="deskripsi"
                      placeholder="Deskripsi Wisata"
                    />
                  </Row>
                  <Row className="mt-3">
                    <FormikController
                      control="input"
                      type="text"
                      label="Koordinat *"
                      name="koordinat"
                      placeholder="Koordinat Wisata"
                    />
                  </Row>
                  <Row className="mt-3">
                    <FormikController
                      control="select"
                      label="Kategori *"
                      name="kategori"
                      placeholder="Kategori Wisata"
                      options={categoryList}
                    />
                  </Row>
                </Card>
              </Col>
              <Col xs="12" lg="6">
                <Card className="shadow-sm border-0 p-4" style={{ minHeight: "80vh" }}>
                  <div className="border-bottom pb-3">
                    <h5>Photo & Kontak</h5>
                  </div>
                  <Row className="mt-3">
                    <img
                      src={imageFiles.preview || AvaPlaceholder}
                      alt="profile"
                      style={{ height: "200px", width: "100%", objectFit: "contain" }}
                    />
                    <div className="d-flex flex-row align-items-center w-100 my-3">
                      <ImageUploader setImageFiles={setImageFiles} imageFiles={imageFiles} />
                    </div>
                  </Row>
                  <Row className="mt-3">
                    <FormikController control="input" type="text" label="No. Telp*" name="no_telpon" placeholder="" />
                  </Row>
                  <Row className="mt-3">
                    <FormikController control="input" type="text" label="Email" name="email" placeholder="" />
                  </Row>
                  <Row className="mt-3">
                    <Col className="m-0 p-0 d-flex justify-content-end align-items-center">
                      <Button color="danger" outline>
                        Batalkan
                      </Button>
                      <Button color="primary" type="submit" className="mx-3">
                        Simpan
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col xs="12">
                <Card className="shadow-sm border-0 p-4">
                  <div className="border-bottom pb-3">
                    <h5>Paket Wisata</h5>
                  </div>

                  {paketWisata.map(() => {
                    return (
                      <>
                        <Row className="mt-3">
                          <FormikController
                            control="input"
                            type="text"
                            label="Nama Paket*"
                            name="nama"
                            placeholder="Nama Paket"
                          />
                        </Row>
                        <Row className="mt-3">
                          <FormikController
                            control="input"
                            type="number"
                            label="Kapasitas/ Orang*"
                            name="kapasitas"
                            placeholder=""
                          />
                        </Row>
                        <Row className="mt-3">
                          <FormikController
                            control="textarea"
                            type="text"
                            label="Deskripsi Paket *"
                            name="deskripsi"
                            placeholder="Deskripsi Paket"
                          />
                        </Row>
                      </>
                    );
                  })}
                </Card>
                <Button color="primary" className="my-3" onClick={onAddPaket}>
                  Tambah Paket
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AddWisata;
