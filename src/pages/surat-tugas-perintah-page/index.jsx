import React, { useState } from "react";
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
} from "reactstrap";
import classnames from "classnames";
import TableSemua from "./table-semua"
import TableBelumDiproses from "./table-belum-diproses"
import TableSedangDiproses from "./table-sedang-diproses"
import TableSiapDiambil from "./table-siap-diambil"
import TableDibatalkan from "./table-dibatalkan"
import TableSelesai from "./table-selesai"


const SuratTugasPerintahPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="surat-kematian-page">
      <div className="header">
        <div className="card shadow">
          <div className="container-fluid">
            <div className="d-flex justify-content-start mt-4 mb-4">
              <b>Surat Tugas/Perintah</b>
            </div>
          </div>
        </div>
      </div>

      <div className="body card mt-5 mb-5">
        <div className="tabbar border-bottom">
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
                <div className="box ms-2 text-center text-white">0</div>
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
                <div className="box ms-2 text-center text-white">0</div>
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
                <div className="box ms-2 text-center text-white">0</div>
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
                <div className="box ms-2 text-center text-white">0</div>
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
                <div className="box ms-2 text-center text-white">0</div>
              </div>
            </NavLink>
          </Nav>
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
      </div>
    </div>
  );
};

export default SuratTugasPerintahPage;
