import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

import EDESA_API from "../../../api";

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [pickedCategory, setPickedCategory] = useState("");
  const [isButtonDisabled, setButtonDisable] = useState(false);
  const history = useHistory();

  const onSubmitNews = async () => {
    if (!pickedCategory || !newsTitle || !newsContent) {
      return Swal.fire("Gagal!", "Mohon isi data terlebih dahulu", "error");
    }

    const formToSubmit = {
      desa_id: 1, //dummy
      user_id: 1, //dummy
      kategori_id: pickedCategory,
      judul: newsTitle,
      link: "link-to-berita", //dummy
      resume: "News resume goes here", //dummy
      body: newsContent,
      publish: 1,
    };

    try {
      setButtonDisable(true);
      await EDESA_API.post("/api/admin_desa/berita/berita", formToSubmit);
      await Swal.fire("Sukses!", "Berita berhasil ditambahkan", "success");
      setButtonDisable(false);
      history.push("/admin-desa/berita");
    } catch (e) {
      Swal.fire("Gagal!", `${e.message}`, "error");
      setButtonDisable(false);
    }
  };

  useEffect(() => {
    const fetchAllNewsCategory = async () => {
      const {
        data: { result },
      } = await EDESA_API.get("/api/admin_desa/berita/kategori?size=10"); //get all only showing 3 results if we dont add `size` params
      setCategoryList(result);
    };

    fetchAllNewsCategory();
  }, []);

  const onChangeEditor = (e) => {
    console.log(e);
    setNewsContent(e);
  };

  const onChangeTitle = ({ target }) => {
    setNewsTitle(target.value);
  };

  const onChangeCategory = ({ target: { value } }) => {
    setPickedCategory(parseInt(value));
  };

  const onCancel = () => {
    history.push("/admin-desa/berita");
  };

  return (
    <Container>
      <Row className="h-100">
        <Col xs="12" lg="8" className="h-100">
          <Card className="shadow-sm border-0 p-3 " style={{ height: "80vh" }}>
            <form className="mb-4">
              <Label>
                Judul<span style={{ color: "#E02B2B" }}> *</span>
              </Label>
              <Input type="text" onChange={onChangeTitle} />
            </form>
            <Label>
              Isi <span style={{ color: "#E02B2B" }}> *</span>
            </Label>
            <ReactQuill value={newsContent} onChange={onChangeEditor} theme="snow" style={{ height: "70%" }} />
          </Card>
        </Col>
        <Col xs="12" lg="4" className="h-100">
          <Card className="shadow-sm border-0 p-3 pb-5">
            <form>
              <Label>
                Kategori<span style={{ color: "#E02B2B" }}> *</span>
              </Label>
              <Input type="select" onChange={onChangeCategory} defaultValue="" value={pickedCategory}>
                <option hidden value="">
                  Pilih kategori
                </option>
                {categoryList.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.nama}
                  </option>
                ))}
              </Input>
            </form>
          </Card>
        </Col>
      </Row>
      <Row className="px-3 pt-2">
        <Col className="w-25 d-flex justify-content-end">
          <Button
            color="white"
            className="border border-dark me-2"
            style={{ width: "5rem", height: "2rem", fontSize: "12px", borderRadius: "6px" }}
            onClick={onCancel}
          >
            Batalkan
          </Button>
          <Button
            color="primary"
            style={{ width: "5rem", height: "2rem", fontSize: "12px", borderRadius: "6px" }}
            onClick={onSubmitNews}
            disabled={isButtonDisabled}
          >
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNews;
