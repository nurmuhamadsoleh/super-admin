import React, { useState } from "react";
// import Plus from "../../assets/images/icons/plus.png";
import Plus from "../../assets/images/icons/plus.png";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Card,
  Button,
  CardTitle,
  CardText,
  NavLink,
  Row,
  Col,
  Container,
} from "reactstrap";
import { CustomTable, SubTitle } from "../../components";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import classnames from "classnames";
import TableSemua from "./table-semua"
import TableBelumDiproses from "./table-belum-diproses"
import TableSedangDiproses from "./table-sedang-diproses"
import TableSiapDiambil from "./table-siap-diambil"
import TableDibatalkan from "./table-dibatalkan"
import TableSelesai from "./table-selesai"


const PengajuanIDesaPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const onClickAdd = () => {
    history.push(`${path}/add`);
  };
  const onClickList = () => {
    history.push(`${path}/list`);
  };
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

  return (
    <div className="pengajuan-edesa-page">
      <div className="header">
        <div className="card shadow">
          <div className="container-fluid">
            <div className="d-flex justify-content-start mt-4 mb-4">
              <b>Pengajuan E-Desa</b>
            </div>
          </div>
        </div>
      </div>

      <div className="body card mt-5 mb-5" >
        <div className="tabbar border-bottom">
          <Row>
            <Col xs="12" lg="10">

              <Nav tabs>
                <NavLink
                  className={classnames(activeTab === "1" ? "active" : "")}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <div className="d-flex">
                    <div>Semua</div>
                    <div className="box ms-2 text-center text-white">
                      0
                    </div>
                  </div>
                </NavLink>

                <NavLink
                  className={classnames(activeTab === "2" ? "active" : "")}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <div className="d-flex">
                    <div>Belum diproses</div>
                    <div className="box ms-2 text-center text-white">120</div>
                  </div>
                </NavLink>

                <NavLink
                  className={classnames(activeTab === "3" ? "active" : "")}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <div className="d-flex">
                    <div>Sedang diproses</div>
                    <div className="box ms-2 text-center text-white">3</div>
                  </div>
                </NavLink>

                <NavLink
                  className={classnames(activeTab === "4" ? "active" : "")}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  <div className="d-flex">
                    <div>Siap diambil</div>
                    <div className="box ms-2 text-center text-white">1</div>
                  </div>
                </NavLink>
                <NavLink
                  className={classnames(activeTab === "5" ? "active" : "")}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  <div className="d-flex">
                    <div>Dibatalkan</div>
                    <div className="box ms-2 text-center text-white">4</div>
                  </div>
                </NavLink>

                <NavLink
                  className={classnames(activeTab === "6" ? "active" : "")}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  <div className="d-flex">
                    <div>Selesai</div>
                    <div className="box ms-2 text-center text-white">9</div>
                  </div>
                </NavLink>

              </Nav>
            </Col>
            <Col xs="12" lg="2">
              <Button style={{ fontSize: "0.8rem" }} className="px-2 py-2 my-1" color="primary" onClick={onClickList}>
                <img src={Plus} alt="plus" style={{ height: "50%" }} /> Buat Surat
              </Button>
            </Col>

          </Row>

        </div>

        <div className="table-area">
          <div className="d-flex justify-content-center">
            <TabContent activeTab={activeTab} className="container-fluid ">
              <TabPane tabId="1">
                <TableSemua />
              </TabPane>


              <TabPane tabId="2">
                <TableBelumDiproses />
              </TabPane>

              <TabPane tabId="3">
                <TableSedangDiproses />
              </TabPane>

              <TabPane tabId="4">
                <TableSiapDiambil />
              </TabPane>

              <TabPane tabId="5">
                <TableDibatalkan />
              </TabPane>

              <TabPane tabId="6">
                <TableSelesai />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div >

    </div >
  );
};

export default PengajuanIDesaPage;
