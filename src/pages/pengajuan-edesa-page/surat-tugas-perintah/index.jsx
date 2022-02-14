import React from "react";
import { Button, Card, Container, Row, Col, Input, Label, CardBody, FormGroup } from "reactstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { SubTitle } from "../../../components";

const SuratTugasPerintah = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const SaveSurat = () => {
        history.push(`${path}/pengajuan-idesa/list`);
    };

    return (
        <Container fluid className="px-2">
            <SubTitle title="Pengajuan E-Desa" />
            <Row className="mt-4">
                <Col xs="12" lg="12" className="mb-3">
                    <Card className="p-4 align-middle shadow-sm border-0">
                        <h6 className="d-flex justify-content-center">
                            <b>Surat Tugas/Perintah</b>
                        </h6>
                        <hr />
                        <CardBody>
                            <Row>
                                <Col xs="12">
                                    <Label>Surat Tugas/Perintah</Label>
                                    <Input name="surattugasperintah" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label style={{ fontSize: "9px" }}>Nomor Terakhir Surat: <span style={{ color: "red" }} >034/DS-2003/VII/2021</span> </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Nomor</Label>
                                    <Input name="nomor" type="number"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Tanggal</Label>
                                    <Input name="tanggalsuratperintah" type="date" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>perihal</Label>
                                    <Input name="perihalsuratperintah" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>NIK <span style={{ color: "red" }}>*</span></Label>
                                    <Input name="niksuratperintah" type="number" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Nama <span style={{ color: "red" }}>*</span></Label>
                                    <Input name="namatugasperintah" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Tempat Lahir <span style={{ color: "red" }}>*</span></Label>
                                    <Input name="tempatlahirsurattugasperintah" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Tanggal Lahir <span style={{ color: "red" }}>*</span></Label>
                                    <Input name="tanggallahirsurattugasperintah" type="date" />
                                </Col>
                            </Row>
                            <Row>
                                <Col >
                                    <Label>Jenis Kelamin <span style={{ color: "red" }}>*</span></Label>
                                    <div className="d-flex justify-content-start">
                                        <FormGroup check>
                                            <Input name="radio1" type="radio" />
                                            <Label check> laki-laki</Label>
                                        </FormGroup>
                                        <FormGroup check className="mx-3">
                                            <Input name="radio1" type="radio" />
                                            <Label check>Perempuan</Label>
                                        </FormGroup>
                                    </div>

                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Pekerjaan</Label>
                                    <Input name="surattugasperintah" type="text"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Alamat</Label>
                                    <Input name="surattugasperintah" type="text-area"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Jabatan</Label>
                                    <Input name="surattugasperintah" type="text"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Tugas atau Perintah yang Diberikan</Label>
                                    <Input name="surattugasperintah" type="text"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Hari Pelaksanaan/Kegiatan</Label>
                                    <Input name="surattugasperintah" type="text"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Note</Label>
                                    <Input style={{ height: "12px" }} name="surattugasperintah" type="textarea"></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12">
                                    <Label>Ditandatangani Oleh</Label>
                                    <Input name="surattugasperintah" type="select">
                                        <option>Kepala Desa</option>
                                        <option>Admin Desa</option>
                                        <option>RW</option>
                                        <option>RT</option>
                                    </Input>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </Col>
                <div className="d-flex justify-content-end">
                    <Button outline>
                        Batalkan
                    </Button>
                    <Button color="primary" className="mx-3" onClick={SaveSurat} >
                        Simpan
                    </Button>
                </div>
            </Row>
        </Container >
    );
};

export default SuratTugasPerintah;
