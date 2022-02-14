import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Card, Col, Container, Row, } from "reactstrap";
import { SubTitle } from "../../components";
import { BuatDataCard } from "../../components"

const ListBuatSurat = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const suratTugasPerintah = () => {
        history.push(`${path}/surat-tugas-perintah`);
    };

    return (
        <Container fluid >
            <SubTitle title="Buat Surat" />
            <Row className="mt-3">
                <Col>
                    <Card className="p-2 shadow-sm border-0">
                        <Row>
                            <Col xs="12" lg="6">
                                <BuatDataCard title="Surat Tugas/Perintah" addFunction={suratTugasPerintah} />
                                <BuatDataCard title="Surat Keterangan Bepergian" />
                                <BuatDataCard title="Surat Keterangan Domisili Lembaga/yayasan" />
                                <BuatDataCard title="Surat Keterangan Domisili (non Warga)" />
                                <BuatDataCard title="Surat Keterangan Domisili Perusahaan" />
                                <BuatDataCard title="Surat Keterangan Domisili Perusahaan (Non Warga)" />
                                <BuatDataCard title="Surat Keterangan Duda/Janda" />
                                <BuatDataCard title="Surat Keterangan Ghaib" />
                                <BuatDataCard title="Surat Keterangan Izin Tidak Masuk Kerja" />
                                <BuatDataCard title="Surat Keterangan Kelahiran" />
                                <BuatDataCard title="Surat Keterangan Resi KTP Sementara" />
                                <BuatDataCard title="Surat Keterangan Status Perkawinan" />
                            </Col>
                            <Col xs="12" lg="6">
                                <BuatDataCard title="Surat Keterangan Beda Identitas" />
                                <BuatDataCard title="Surat Keterangan Domisili" />
                                <BuatDataCard title="Surat Keterangan Kematian" />
                                <BuatDataCard title="Surat Keterangan Penghasilan" />
                                <BuatDataCard title="Surat Keterangan Tidak Mampu" />
                                <BuatDataCard title="Surat Keterangan Status Usaha" />
                                <BuatDataCard title="Surat Keterangan Usaha ( Non Warga )" />
                                <BuatDataCard title="Surat Keterangan Kuasa" />
                                <BuatDataCard title="Surat Pengantar Perkawinan" />
                                <BuatDataCard title="Surat Pengantar Untuk Pria" />
                                <BuatDataCard title="Surat Rekomendasi Izin Keramaian" />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default ListBuatSurat;


