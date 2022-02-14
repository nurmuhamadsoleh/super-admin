import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
import "react-quill/dist/quill.snow.css";

const AddFaq = () => {
    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");

    const onChangeEditor = (e) => {
        setNewsContent(e);
    };

    const onChangeTitle = ({ target }) => {
        setNewsTitle(target.value);
    };
    return (
        <div className="add-faq">
            <div className="container-fluid p-3">
                <Card className="shadow-sm border-0 p-3 " >
                    <div className="container" style={{height: '1000px'}}>
                    <div className="d-flex" style={{ fontSize: "25px" }}>
                        <i class="far fa-question-circle me-3"></i>
                        <h6 className="mt-2 me-2">
                            <b>ADMIN FAQ</b>
                        </h6>
                    </div>
                    <form className="mb-4">
                        <Label>
                            Add FAQ Category<span className="ms-2" ><i class="fas fa-cog"></i></span>
                        </Label>
                        <Input
                            type="select"
                            id="exampleSelect"
                            className=" mb-3"
                            onChange={onChangeTitle}
                            style={{ width: "40%" }}
                        >
                            <option hidden value="">
                                Pilih kategori
                            </option>
                            <option value="1">Pertanyaan</option>
                            <option value="2">Jawaban</option>
                        </Input>
                        <Label>
                            Title<span style={{ color: "#E02B2B" }}> *</span>
                        </Label>
                        <Input
                            type="text"
                            onChange={onChangeTitle}
                            style={{ width: "40%" }}
                        />
                    </form>
                    <Label>
                        Isi <span style={{ color: "#E02B2B" }}> *</span>
                    </Label>
                    <ReactQuill
                        value={newsContent}
                        onChange={onChangeEditor}
                        theme="snow"
                        style={{ height: "70%" }}
                    />
                    </div>
                    
                </Card>
            </div>
        </div>
    );
};

export default AddFaq;
