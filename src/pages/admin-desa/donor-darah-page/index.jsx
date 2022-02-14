import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import LoadingOverlay from "react-loading-overlay";
import Swal from "sweetalert2";
import { useHistory, useRouteMatch } from "react-router-dom";
import { orderBy } from "lodash";
import { CustomTable, CustomPagination, SubTitle } from "../../../components";
import EDESA_API from "../../../api";

const TABLE_HEADER = ["NAMA PROVIDER", "ALAMAT", "STATUS", "AKSI"];
const TABLE_DATA = [
  {
    _id: 1,
    "NAMA PROVIDER": "Darah A",
    ALAMAT: "Jl. A",
    STATUS: "Aktif",
    AKSI: ["delete"],
  },
  {
    _id: 2,
    "NAMA PROVIDER": "Darah B",
    ALAMAT: "Jl. B",
    STATUS: "Aktif",
    AKSI: ["delete"],
  },
];

const DonorDarahPage = () => {
  const [tableData, setTableData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pageSize, setPageSize] = useState("5");
  const [showModal, setShowModal] = useState(false);
  const [providerName, setProviderName] = useState("");
  const [providerAddress, setProviderAddress] = useState("");
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [nonActiveCheckbox, setNonActiveCheckbox] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const history = useHistory();
  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchDonorDarah = async () => {
      try {
        const {
          data: { result, totalPages, currentPage },
        } = await EDESA_API.get(`/api/admin_desa/donor_darah/provider?size=${pageSize}`);
        const modifiedDataList = result.map((item) => ({
          _id: item.id,
          NAMA: item.nama,
          ALAMAT: item.alamat,
          STATUS: "Aktif",
          AKSI: ["delete"],
        }));
        setTableData(modifiedDataList);
        setTotalPage(totalPages);
        setCurrentPage(currentPage);
      } catch (e) {
        Swal.fire("Error", e.message, "error");
      }
    };

    setIsFetching(true);
    fetchDonorDarah();
    setTimeout(() => setIsFetching(false), 500);
  }, [pageSize]);

  const fetchDonorDarah = async () => {
    try {
      const {
        data: { result, totalPages, currentPage },
      } = await EDESA_API.get(`/api/admin_desa/donor_darah/provider?size=${pageSize}`);
      const modifiedDataList = result.map((item) => ({
        _id: item.id,
        NAMA: item.nama,
        ALAMAT: item.alamat,
        STATUS: "Aktif",
        AKSI: ["delete"],
      }));
      setIsFetching(true);
      setTableData(modifiedDataList);
      setTotalPage(totalPages);
      setCurrentPage(currentPage);
      setTimeout(() => setIsFetching(false), 500);
    } catch (e) {
      Swal.fire("Error", e.message, "error");
    }
  };

  const onPageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const onClickEdit = (id) => {
    history.push(`${path}/update/${id}`);
  };

  const onClickDelete = async (data) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await EDESA_API.delete(`/api/admin_desa/donor_darah/provider/${data._id}`);
        Swal.fire("Berhasil!", "Item telah dihapus.", "success");
        await fetchDonorDarah();
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
    "NAMA PROVIDER": (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    ALAMAT: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
    STATUS: (arr, keyToSort, order) => sortFn(arr, keyToSort, order),
  };

  const onChangeHandler = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };

  const onSubmit = async () => {
    try {
      const { desa_id } = JSON.parse(localStorage.getItem("userProfile"));
      await EDESA_API.post("/api/admin_desa/donor_darah/provider/", {
        desa_id: parseInt(desa_id),
        nama: providerName,
        alamat: providerAddress,
      });
      await Swal.fire("Sukses", "Data berhasil diperbarui", "success");
      fetchDonorDarah();
      setShowModal(false);
    } catch (e) {
      Swal.fire("Error", e.message, "error");
    }
  };

  const onActiveCheckboxChange = (e) => {
    setActiveCheckbox(e.currentTarget.checked);
    setNonActiveCheckbox(false);
  };
  const onNonActiveCheckboxChange = (e) => {
    setNonActiveCheckbox(e.currentTarget.checked);
    setActiveCheckbox(false);
  };

  const renderModal = () => {
    return (
      <>
        <Modal centered isOpen={showModal} toggle={() => setShowModal(!showModal)}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Label>Nama Provider</Label>
            <Input type="text" value={providerName} onChange={(e) => onChangeHandler(e, setProviderName)} />
            <Label>Alamat</Label>
            <Input
              type="textarea"
              style={{ height: "100px" }}
              value={providerAddress}
              onChange={(e) => onChangeHandler(e, setProviderAddress)}
            />
            <div className="mt-4">
              <Input type="checkbox" className="me-1" checked={activeCheckbox} onChange={onActiveCheckboxChange} />
              <Label className="my-0">Aktif</Label>
              <Input
                className="ms-5 me-1"
                type="checkbox"
                checked={nonActiveCheckbox}
                onChange={onNonActiveCheckboxChange}
              />
              <Label className="my-0">Tidak Aktif</Label>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="outline-primary"
              onClick={() => {
                setShowModal(!showModal);
                setProviderName("");
                setProviderAddress("");
              }}
            >
              Batalkan
            </Button>
            <Button color="primary" onClick={onSubmit}>
              Kirim
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <Container className="px-2" style={{ minHeight: "80vh" }}>
      <SubTitle
        customStyle={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }}
        title="Donor Darah"
        addButton={true}
        addFunction={() => setShowModal(true)}
        buttonLabel={"Tambah"}
      />
      <LoadingOverlay
        active={isFetching}
        spinner
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
        <Card
          className="mt-0 shadow-sm"
          style={{ borderStyle: "none", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
        >
          <Row className="d-flex py-3" style={{ borderTopStyle: "solid 1px" }}>
            <Col className="d-flex justify-content-start align-items-center" style={{ marginLeft: "-.5rem" }}>
              <div style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}>Show</div>
              <div style={{ width: "15%" }}>
                <Input type="select" style={{ border: "solid 1px black" }} onChange={onPageSizeChange}>
                  <option value={"5"}>5</option>
                  <option value={"10"}>10</option>
                  <option value={"15"}>15</option>
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
      </LoadingOverlay>
      {showModal && renderModal()}
    </Container>
  );
};

export default DonorDarahPage;
