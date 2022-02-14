import React from "react";
import { Button, ButtonDropdown, Card, CardLink, Col, Container, Row, Input } from "reactstrap";

import right from "../../assets/images/icons/arrowRight.svg";


import { SubTitle } from "../../components";
import BuatDataCard from "./BuatDataCard";


const Buatpage = () => {
    // const history = useHistory();
    // const { path } = useRouteMatch();

    return (
        <Container fluid >
            <SubTitle title="Pengajuan Surat" />
            <Row xs="2" className="d-flex justify-content-evenly border p-3 my-4 " style={{ boxShadow: "0px 4px 4px 0px #00000040", borderRadius: "10px" }} >
                <div className="w-100 d-flex justify-content-between mb-4">
                    <p>Buat Surat</p>
                    <Input
                        type="search"
                        placeholder="CARI JENIS SURAT"
                        className="w-25 float-end"
                    >

                    </Input>
                </div>
                <BuatDataCard title="Surat Tugas/Perintah" icon={right} />
                <BuatDataCard title="Surat Keterangan Beda Identitas" icon={right} />
                <BuatDataCard title="Surat Keterangan Bepergian" icon={right} />
                <BuatDataCard title="Surat Keterangan Domisili" icon={right} />
                <BuatDataCard title="Surat Keterangan Domisili Lembaga/yayasan" icon={right} />
                <BuatDataCard title="Surat Keterangan Domisili (non Warga)" icon={right} />
                <BuatDataCard title="Surat Keterangan Domisili Perusahaan" icon={right} />
                <BuatDataCard title="Surat Keterangan Domisili Perusahaan (Non Warga)" icon={right} />
                <BuatDataCard title="Surat Keterangan Duda/Janda" icon={right} />
                <BuatDataCard title="Surat Keterangan Ghaib" icon={right} />
                <BuatDataCard title="Surat Keterangan Izin Tidak Masuk Kerja" icon={right} />
                <BuatDataCard title="Surat Keterangan Kelahiran" icon={right} />
                <BuatDataCard title="Surat Keterangan Kematian" icon={right} />
                <BuatDataCard title="Surat Keterangan Penghasilan" icon={right} />
                <BuatDataCard title="Surat Keterangan Resi KTP Sementara" icon={right} />
                <BuatDataCard title="Surat Keterangan Status Perkawinan" icon={right} />
                <BuatDataCard title="Surat Keterangan Tidak Mampu" icon={right} />
                <BuatDataCard title="Surat Keterangan Status Usaha" icon={right} />
                <BuatDataCard title="Surat Keterangan Usaha ( Non Warga )" icon={right} />
                <BuatDataCard title="Surat Keterangan Kuasa" icon={right} />
                <BuatDataCard title="Surat Pengantar Perkawinan" icon={right} />
                <BuatDataCard title="Surat Pengantar Untuk Pria" icon={right} />
                <BuatDataCard title="Surat Rekomendasi Izin Keramaian" icon={right} />
            </Row>
        </Container >
    );
};

export default Buatpage;
