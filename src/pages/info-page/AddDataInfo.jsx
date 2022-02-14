import { useState } from "react";
import { Card, Col, Container, Input, Label, Row } from "reactstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddDataInfo = () => {
  const [formTitle, setFormTitle] = useState("");
  const [form, setForm] = useState({ text: "" });

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
            <ReactQuill value={form.text} onChange={onChangeEditor} theme="snow" style={{ height: "70%" }} />
          </Card>
        </Col>
        <Col xs="12" lg="4" className="h-100">
          <Card className="shadow-sm border-0 p-3 pb-5">
            <form>
              <Label>Unggah Hingga 5 file</Label>
              <Input type="text" onChange={onChangeTitle} />
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddDataInfo;
