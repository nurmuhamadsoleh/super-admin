import { useState } from "react";
import { Nav, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import classNames from "classnames";
import SubSideBar from "./subsidebar";
import logo from "../../assets/images/logo-idesaku.png";
import icon_pesanan from "../../assets/images/icons/umkm_pesanan.png";
import icon_produk from "../../assets/images/icons/umkm_produk.png";
import icon_kategori from "../../assets/images/icons/umkm_kategori.png";
import icon_promo from "../../assets/images/icons/umkm_promo.png";
import icon_konfigurasi from "../../assets/images/icons/umkm_konfigurasi.png";
import icon_inforestoran from "../../assets/images/icons/umkm_inforestoran.png";
import icon_informasibank from "../../assets/images/icons/umkm_informasibank.png";
import icon_dompetku from "../../assets/images/icons/umkm_dompetku.png";
import icon_ulasan from "../../assets/images/icons/umkm_ulasan.png";
import icon_karyawan from "../../assets/images/icons/umkm_karyawan.png";
import icon_investasi from "../../assets/images/icons/umkm_investasi.png";
import { pesananSubItems, investmentSubItems, produkSubItems, kategoriSubItems, karyawanSubItems } from "./submenus";

const UMKMSidebar = ({ isOpen, toggle, saldo }) => {
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleBtn = () => setCollapsed(!collapsed);

  const [activeSubSidebar, setActiveSubSidebar] = useState("Dashboard");
  const toggleActiveSubSidebar = (title) => {
    setActiveSubSidebar((prevState) => title);
  };

  return (
    <div className="sidebar-wrapper shadow-lg" style={{ fontSize: "15px" }}>
      <div
        className={classNames("sidebar mb-5 container ", { "is-open": isOpen })}
        style={{
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <div className="sidebar-header d-flex justify-content-between ps-4 pt-4 ">
          <img src={logo} alt="logo" style={{ width: "60%", height: "60%" }} />
          <div className="d-lg-none d-md-block d-sm-block" onClick={toggle} style={{ color: "#000" }}>
            <i class="fas fa-times"></i>
          </div>
        </div>

        <Nav vertical className="list-unstyled pb-3 desktop-sidebar d-none d-md-block d-lg-block mt-3" color="light">
          <>
            <NavLink
              tag={RRNavLink}
              to={"/umkm/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-home me-2"></i>
                Dashboard
              </div>
            </NavLink>
          </>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Pesanan"
                items={pesananSubItems}
                imgSource={icon_pesanan}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Produk"
                items={produkSubItems}
                imgSource={icon_produk}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>

          <div className="sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Kategori"
                items={kategoriSubItems}
                imgSource={icon_kategori}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>

          <NavLink
            tag={RRNavLink}
            to={"/umkm/promo"}
            activeClassName={`${activeSubSidebar === "Promo" ? "active" : ""}`}
            style={{ marginTop: "-.75rem" }}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Promo")}>
              <img
                src={icon_promo}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Promo
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/konfigurasi"}
            activeClassName={`${activeSubSidebar === "Konfigurasi" ? "active" : ""}`}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Konfigurasi")}>
              <img
                src={icon_konfigurasi}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Konfigurasi
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/info-restoran"}
            activeClassName={`${activeSubSidebar === "Info Restoran" ? "active" : ""}`}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Info Restoran")}>
              <img
                src={icon_inforestoran}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Info Restoran
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/informasi-bank"}
            activeClassName={`${activeSubSidebar === "Informasi Bank" ? "active" : ""}`}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Informasi Bank")}>
              <img
                src={icon_informasibank}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Informasi Bank
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/dompetku"}
            activeClassName={`${activeSubSidebar === "Dompetku" ? "active" : ""}`}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dompetku")}>
              <img
                src={icon_dompetku}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Dompetku
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/ulasan"}
            activeClassName={`${activeSubSidebar === "Ulasan" ? "active" : ""}`}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Ulasan")}>
              <img
                src={icon_ulasan}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Ulasan
            </div>
          </NavLink>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Investasi"
                items={investmentSubItems}
                imgSource={icon_investasi}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>

          <NavLink
            tag={RRNavLink}
            to={"/umkm/peran-karyawan"}
            activeClassName={`${activeSubSidebar === "Peran Karyawan" ? "active" : ""}`}
            style={{ marginTop: "-.75rem" }}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Peran Karyawan")}>
              <img
                src={icon_karyawan}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Peran Karyawan
            </div>
          </NavLink>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Karyawan"
                items={karyawanSubItems}
                imgSource={icon_karyawan}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>
        </Nav>

        <Nav vertical className="list-unstyled pb-3 mobile-sidebar d-block d-md-none d-lg-none" color="light">
          <>
            <NavLink
              tag={RRNavLink}
              to={"/umkm/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-home me-2"></i>
                Dashboard
              </div>
            </NavLink>
          </>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Pesanan"
                items={pesananSubItems}
                imgSource={icon_pesanan}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Produk"
                items={produkSubItems}
                imgSource={icon_produk}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <div className="sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Kategori"
                items={kategoriSubItems}
                imgSource={icon_kategori}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <NavLink
            tag={RRNavLink}
            to={"/umkm/promo"}
            activeClassName={`${activeSubSidebar === "Promo" ? "active" : ""}`}
            style={{ marginTop: "-.75rem" }}
            onClick={toggle}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Promo")}>
              <img
                src={icon_promo}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Promo
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/konfigurasi"}
            activeClassName={`${activeSubSidebar === "Konfigurasi" ? "active" : ""}`}
            onClick={toggle}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Konfigurasi")}>
              <img
                src={icon_konfigurasi}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Konfigurasi
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/info-restoran"}
            activeClassName={`${activeSubSidebar === "Info Restoran" ? "active" : ""}`}
            onClick={toggle}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Info Restoran")}>
              <img
                src={icon_inforestoran}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Info Restoran
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/informasi-bank"}
            activeClassName={`${activeSubSidebar === "Informasi Bank" ? "active" : ""}`}
            onClick={toggle}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Informasi Bank")}>
              <img
                src={icon_informasibank}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Informasi Bank
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/dompetku"}
            activeClassName={`${activeSubSidebar === "Dompetku" ? "active" : ""}`}
            onClick={toggle}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dompetku")}>
              <img
                src={icon_dompetku}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Dompetku
            </div>
          </NavLink>
          <NavLink
            tag={RRNavLink}
            to={"/umkm/ulasan"}
            activeClassName={`${activeSubSidebar === "Ulasan" ? "active" : ""}`}
            onClick={toggle}
            // style={{marginTop: '-1rem'}}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Ulasan")}>
              <img
                src={icon_ulasan}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Ulasan
            </div>
          </NavLink>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Investasi"
                items={investmentSubItems}
                imgSource={icon_investasi}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <NavLink
            tag={RRNavLink}
            to={"/umkm/peran-karyawan"}
            activeClassName={`${activeSubSidebar === "Peran Karyawan" ? "active" : ""}`}
            onClick={toggle}
            style={{ marginTop: "-.75rem" }}
          >
            <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Peran Karyawan")}>
              <img
                src={icon_karyawan}
                alt="icon"
                height={16}
                width={16}
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
              Peran Karyawan
            </div>
          </NavLink>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Karyawan"
                items={karyawanSubItems}
                imgSource={icon_karyawan}
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default UMKMSidebar;
