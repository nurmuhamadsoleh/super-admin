import { useState } from "react";
import { Container, Card, CardBody, Row, Col, Input, Label } from "reactstrap";
import { SubTitle } from "../../../components";

const UMKMProdukTambahBaruPage = () => {
  return (
    <Container>
      <SubTitle title="Tambah Makanan Baru" addButton={false} />
      <Card className="mt-4 shadow-sm">
        <CardBody>
          <Row>
            <Col lg="12">
              <Label>Nama</Label>
              <Input type="text" placeholder="Contoh: Nasi Goreng" />
            </Col>
            <Col lg="4" md="6" sm="12">
              <Label>Harga</Label>
              <Input type="text" placeholder="Contoh: Maman" />
            </Col>
            <Col lg="4" md="6" sm="12">
              <Label>Potongan</Label>
              <Input type="text" />
            </Col>
            <Col lg="4" md="6" sm="12">
              <Label>Tipe Potongan</Label>
              <Input type="select">
                <option hidden value="">
                  Persen
                </option>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col lg="6" sm="12">
              <Label>Kategori</Label>
              <Input type="select" className="form-control form-select">
                <option hidden value="">
                  --- Pilih ---
                </option>
              </Input>
            </Col>
            <Col lg="6" sm="12">
              <Label>Sub Kategori</Label>
              <Input type="select" className="form-control form-select">
                <option hidden value="">
                  --- Pilih ---
                </option>
              </Input>
            </Col>
          </Row>
          <Row className="px-2">
            <Col lg="12" className=" mt-3 py-4 border border-1">
              <Label>Atribut</Label>
              <Input type="select">
                <option hidden value="">
                  --- Pilih ---
                </option>
              </Input>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg="12">
              <Label>Tambahan</Label>
              <Input type="text" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg="6" sm="12">
              <Label>Jam Buka</Label>
              <Input type="select">
                <option value="">10.00</option>
              </Input>
            </Col>
            <Col lg="6" sm="12">
              <Label>Jam Tutup</Label>
              <Input type="select">
                <option value="">21.00</option>
              </Input>
            </Col>
            <Col lg="12">
              <Label>Deskripsi Singkat</Label>
              <Input type="textarea" style={{ height: "120px" }} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default UMKMProdukTambahBaruPage;
