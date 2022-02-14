import { Button, Card, CardHeader, Row, Col, Container } from "reactstrap";
import { orderBy } from "lodash";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingOverlay from "react-loading-overlay";

import { CustomPagination } from "../../../components";
import { CustomTable, TotalDataShow } from "../../../components";
import { KependudukanContext } from "../../../context/kependudukan/KependudukanContext";
import EDESA_API from "../../../api";

const DataWargaPage = () => {
  const [tableData, setTableData] = useState([
    {
      check: null,
      NAMA: " ",
      NIK: 0,
      ALAMAT: "",
      "NOMOR HP": 0,
      STATUS: "Aktif",
      AKSI: ["read", "delete"],
      _id: 0,
    },
  ]);
  const [totalDataShow, setTotalDataShow] = useState("5");
  const [totalItem, setTotalItem] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [test, setTest] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const { kependudukanState, fetchAllKependudukan, getAllPenduduk } = useContext(KependudukanContext);
  const { dataKependudukanList = [] } = kependudukanState;
  const { path } = useRouteMatch();
  const history = useHistory();

  // useEffect(() => {
  //   const fetchAllPenduduk = async () => {
  //     const {
  //       data: { result, totalItems, totalPages, currentPage },
  //     } = await EDESA_API.get(`/api/admin_desa/data_warga/penduduk?size=${totalDataShow}`);

  //     const modifiedDataList = result.map((item) => {
  //       let {
  //         profil_penduduk: { nama = "", alamat = "", no_telpon = 0, status_warga = "Aktif" },
  //         nik = 0,
  //       } = item;

  //       return {
  //         check: null,
  //         NAMA: nama,
  //         NIK: nik,
  //         ALAMAT: alamat,
  //         "NOMOR HP": no_telpon,
  //         STATUS: status_warga.toUpperCase(),
  //         AKSI: ["read", "delete"],
  //         _id: item.id,
  //       };
  //     });

  //     setTableData(modifiedDataList);
  //     setTotalItem(totalItems);
  //     setTotalPage(totalPages);
  //     setCurrentPage(currentPage);
  //   };

  //   setIsFetching(true);
  //   fetchAllPenduduk();
  //   setTimeout(() => setIsFetching(false), 500);
  // }, [totalDataShow]);

  /* currently disable because we need dynamic page size for pagination */

  useEffect(() => {
    setIsFetching(true);
    getAllPenduduk(totalDataShow);
    setTimeout(() => setIsFetching(false), 500);
    // eslint-disable-next-line
  }, [totalDataShow]);

  useEffect(() => {
    const dataPreparationTable = () => {
      let tableContent = dataKependudukanList.map((info) => {
        let {
          profil_penduduk: { nama = "", alamat = "", no_telpon = 0, status_warga = "Aktif" },
          nik = 0,
        } = info;

        return {
          check: null,
          NAMA: nama,
          NIK: nik,
          ALAMAT: alamat,
          "NOMOR HP": no_telpon,
          STATUS: status_warga.toUpperCase(),
          AKSI: ["read", "delete"],
          _id: info.id,
        };
      });
      setTableData(tableContent);
    };

    dataPreparationTable();
  }, [dataKependudukanList]);

  const onClickEdit = (id) => {
    history.push(`${path}/edit/${id}`);
  };

  const onClickDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const onClickAdd = () => {
    history.push(`${path}/add`);
  };

  const sortFn = (arr, keyToSort, order) => {
    const sorted = orderBy(arr, [keyToSort], [order]);
    setTableData(sorted);
  };

  //except 'aksi', 'check', '_id', all keys must be the same as TABLE_HEADER
  const sortBy = {
    NAMA: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    NIK: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ALAMAT: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    "NOMOR HP": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  return (
    <Container style={{ minHeight: "70vh" }}>
      <CardHeader className="py-4 bg-white shadow-sm">
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs="12" lg="7" className="">
            <h5 className="m-0 p-0 align-middle">Data Warga</h5>
          </Col>
          <Col xs="12" lg="5" className="d-flex justify-content-evenly flex-row flex-nowrap">
            <Button style={{ fontSize: "0.8rem" }} className="px-1 py-2 m-2" color="primary" onClick={onClickAdd}>
              Tambah Data
            </Button>
            <Button style={{ fontSize: "0.8rem" }} className="px-1 py-2 m-2" color="primary">
              Import Via Excel
            </Button>
            <Button style={{ fontSize: "0.8rem" }} className="px-1 py-2 m-2" color="primary">
              Export Via Excel
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <LoadingOverlay
        spinner
        active={isFetching}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(249, 249, 249, 0.8)",
          }),
          spinner: (base) => ({
            ...base,
            "& svg circle": {
              stroke: "rgba(47,128,237, 0.8)",
            },
          }),
        }}
      >
        <Card className="p-0 pt-3 border-0 shadow-sm mt-4">
          <TotalDataShow setTotalDataShow={setTotalDataShow} dataList={[5, 10, 15]} />
          <div className="mt-3">
            <CustomTable
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              headers={["_id", "NAMA", "NIK", "ALAMAT", "NOMOR HP", "STATUS", "AKSI"]}
              tableData={tableData}
              sortBy={sortBy}
              bordered={false}
            />
          </div>
        </Card>
        <CustomPagination currentPage="0" totalDataShow={totalDataShow} />
      </LoadingOverlay>
    </Container>
  );
};

export default DataWargaPage;
