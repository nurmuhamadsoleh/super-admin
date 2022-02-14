import React from 'react'
import { Button, Card, CardHeader, Row, Col, Container, CardBody, Input, CardImg, Dropdown, DropdownItem, Label, InputGroupText, InputGroup, ButtonDropdown } from 'reactstrap'
import LogoKop from "../../assets/images/logo-kop.png";

const KopSurat = () => {
    return (
        <Container>
            <Card className="my-3" >
                <CardHeader className="py-3">
                    <h5 className="m-0 p-0 align-middle"></h5>
                </CardHeader>
            </Card>
            <Row>
                <Col xs="8">
                    <Card className="my-0" >
                        <CardHeader className="py-3">
                            <Row>
                                <Col xs="3">
                                    <Card color="secondary" outline="false" className="p-5 d=flex align-items-center ">
                                        <img src={LogoKop} style={{ width: "150px", height: "100px" }} />
                                    </Card>
                                </Col>
                                <Col xs="9">
                                    <Card color="secondary" outline="false" className="p-3 d=flex align-items-center ">
                                        <h4>PEMERINTAH KABUPATEN BANDUNG</h4>
                                        <h4>KECAMATAN CICALENGKA</h4>
                                        <h4>DESA BABAKAN PETEUY</h4>
                                        <hr />
                                        <h6>Jl.Desa Babakan Peteuy No.08 Beor Cicalengka</h6>
                                    </Card>
                                </Col>
                            </Row>



                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 1</Label>
                                    <Input name="Line1" type="text" placeholder="PEMERINTAH KABUPATEN BANDUNG" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 2</Label>
                                    <Input name="Line2" type="text" placeholder="KECAMATAN CICALENGKA" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 3</Label>
                                    <Input name="Line2" type="text" placeholder="DESA BABAKAN PETEUY" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 4</Label>
                                    <Input name="Line2" type="text" placeholder="Jl.Desa Babakan Peteuy No.08 Beor Cicalengka" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 5</Label>
                                    <Input name="Line2" type="text" placeholder="" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line 6</Label>
                                    <Input name="Line2" type="text" placeholder="" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>
                            <Row className="py-2">
                                <Col xs="6">
                                    <Label>Line Footer</Label>
                                    <Input name="Line2" type="text" placeholder="" className="p-5" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Family</Label>
                                    <Input name="fontfamily" type="text" placeholder="Times New roman" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Size</Label>
                                    <Input name="fontSize" type="text" placeholder="16 pt" />
                                </Col>
                                <Col xs="2">
                                    <Label>Font Weight</Label>
                                    <Input name="fontWeight" type="text" placeholder="Bold" />
                                </Col>
                            </Row>


                        </CardHeader>
                    </Card>
                </Col>
                <Col xs="4">
                    <Card className="my-0" >
                        <CardHeader className="py-3">
                            <Row>
                                <Col xs="12">
                                    <Label>Status *</Label>
                                    <Input name="status" type="text" placeholder="Active" />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs="12">
                                    <Label> Untuk *</Label>
                                    <Input name="kopSuratUntuk" type="text" placeholder="Kasi Pemerintahan" />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs="12">
                                    <Label>Logo *</Label>
                                    <Input name="logo" type="text" placeholder="1 Logo" />
                                    <Label>Jumlah logo yang tampil pada </Label>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs="12">
                                    <Label>Format: PNG,JPEG atau JPG</Label>
                                    <Label>Ukuran harus kurang dari 2MB</Label>
                                    <Input bsSize="sm" type="file" />
                                </Col>
                            </Row>
                            <hr />
                            <h5>Background Surat</h5>
                            <img src={LogoKop} style={{ width: "100%", height: "200px" }} />
                            <Button color="danger" className="m-2">Hapus</Button>
                            <br />
                            <Button color="success" className="m-2">Browse</Button>
                        </CardHeader>
                    </Card>
                </Col>
            </Row >

        </Container >
    )
}

export default KopSurat
