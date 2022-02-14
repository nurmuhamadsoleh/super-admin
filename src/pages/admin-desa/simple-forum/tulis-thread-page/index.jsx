import { useState } from "react";
import { Card, Col, Container, Input, Label, Row } from "reactstrap";
import { ImageUploader } from "../../../../components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TulisThreadPage = () => {
  const [formTitle, setFormTitle] = useState("");
  const [form, setForm] = useState({ text: "" });
  const [imageFiles, setImageFiles] = useState({});
  console.log(imageFiles.preview);
  const onChangeEditor = (e) => {
    setForm({ text: e });
  };

  const onChangeTitle = ({ target }) => {
    setFormTitle(target.value);
  };

  return (
    <Container>
      <Row className="h-100">
        <Col xs="12" lg="8" className="h-100">
          <Card className="shadow-sm border-0 p-3 " style={{ height: "80vh" }}>
            <form className="mb-4">
              <Label> Judul* </Label>
              <Input type="text" onChange={onChangeTitle} />
            </form>
            <ReactQuill
              value={form.text}
              onChange={onChangeEditor}
              theme="snow"
              style={{ height: "70%" }}
            />
          </Card>
        </Col>
        <Col xs="12" lg="4" className="h-100">
          <Card className="shadow-sm border-0 p-3 pb-5">
            <form>
              <Label> Pilih Topik</Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>--Pilih Topik--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="mt-5">
                <div className="mb-5">
                  <img
                    src={imageFiles.preview || ""}
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                    alt="preview"
                  />
                </div>

                <ImageUploader
                  setImageFiles={setImageFiles}
                  imageFiles={imageFiles}
                />
              </div>

              <div className="d-flex justify-content-end mt-5 mb-5">
                <button className="btn btn-outline-primary">Batalkan</button>
                <button className="btn btn-primary ms-2">Kirim</button>
              </div>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TulisThreadPage;
