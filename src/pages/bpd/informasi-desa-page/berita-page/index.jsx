import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Card, Container, Row, Col, Input } from "reactstrap";
import { CustomPagination, CustomTable, SubTitle } from "../../../../components";
import EDESA_API from "../../../../api";
import { orderBy } from "lodash";
import Swal from "sweetalert2";

const TABLE_HEADER = ["DIBUAT", "KATEGORI", "JUDUL", "STATUS", "TANGGAL", "AKSI"];

const generateRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const dummyNameList = [
  "Muhammad Ujang",
  "Rara Kartika",
  "Cecep Kasepudin",
  "Alda Kharisma",
  "Bella Christabel",
  "Asep Codet",
  "Lilis Sukaesih",
];

const BpdBeritaPage = () => {
  const [tableData, setTableData] = useState([]);

  const fetchAllNews = async () => {
    const {
      data: { result },
    } = await EDESA_API.get("/api/admin_desa/berita/berita");

    const modifiedCollection = result.map((newsItem) => ({
      _id: newsItem.id,
      DIBUAT: generateRandomItem(dummyNameList), //dummy data
      KATEGORI: newsItem.kategori.nama,
      JUDUL: newsItem.judul,
      STATUS: `${newsItem.publish === 1 ? "Aktif" : "Non-Aktif"}`, //dummy data
      TANGGAL: newsItem.createdAt,
      AKSI: ["read", "delete"],
    }));
    setTableData(modifiedCollection);
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  const history = useHistory();
  const { path } = useRouteMatch();

  const onAddNews = () => {
    history.push(`${path}/add`);
  };

  const onClickEdit = (id) => {
    history.push(`${path}/update/${id}`);
  };

  const onClickDelete = async (data) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: `Berita "${data.JUDUL}" akan dihapus`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await EDESA_API.delete(`/api/admin_desa/berita/berita/${data._id}`);

        Swal.fire("Berhasil!", "Berita telah dihapus.", "success");
        await fetchAllNews();
      }
    });
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
    console.log(`sorted by ${keyToSort}, ${order}: `, sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    DIBUAT: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    KATEGORI: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    JUDUL: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    TANGGAL: {
      asc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(a.TANGGAL) - new Date(b.TANGGAL));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, asc: `, sorted);
      },
      desc: (arr) => {
        const sorted = arr.sort((a, b) => new Date(b.TANGGAL) - new Date(a.TANGGAL));
        setTableData(sorted);
        console.log(`sorted by TANGGAL, desc: `, sorted);
      },
    },
  };

  return (
    <Container className="px-2">
      <SubTitle
        customStyle={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}
        title="Berita"
        addButton={true}
        addFunction={onAddNews}
        buttonLabel={"Tambah Berita"}
      />
      <Card
        className="mt-0 shadow-sm"
        style={{ borderStyle: "none", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
      >
        <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
          <Col className="d-flex justify-content-start align-items-center">
            <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>Show</div>
            <div style={{ width: "15%" }}>
              <Input type="select" style={{ border: "solid 1px black" }}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </Input>
            </div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div style={{ marginRight: "1.5rem" }}>Pencarian</div>
            <div style={{ marginRight: "1.5rem" }}>
              <Input type="text" placeholder="Pencarian" style={{ border: "solid 1px black" }} />
            </div>
          </Col>
        </Row>
        <CustomTable
          headers={TABLE_HEADER}
          tableData={tableData}
          bordered={false}
          sortBy={sortBy}
          onClickDelete={onClickDelete}
          onClickEdit={onClickEdit}
        />
        <Row className="d-flex justify-content-between align-items-center px-2 mt-2" style={{ maxHeight: "10vh" }}>
          <Col lg="6" xs="12" style={{ fontSize: "12px" }}>
            <p>Menampilkan 1 sampai 3 dari 3 data</p>
          </Col>
          <Col lg="6" xs="12" className="d-flex justify-content-end" style={{ fontSize: "12px" }}>
            <CustomPagination />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BpdBeritaPage;
