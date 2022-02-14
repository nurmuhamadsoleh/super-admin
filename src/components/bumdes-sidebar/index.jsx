import { useState } from "react";
import { Nav, NavLink, Collapse, NavItem } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import classNames from "classnames";
import SubSideBar from "./subsidebar";
import logo from "../../assets/images/logo-idesaku.png";
import { bumdesSubItems, investasiSubItems, grafikSubItems, informasiDesaSubItems } from "./submenus";

const BUMDesSidebar = ({ isOpen, toggle, saldo }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleBtn = () => setCollapsed(!collapsed);

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
              to={"/bumdes/dashboard"}
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
                title="Informasi Desa"
                items={informasiDesaSubItems}
                className="fas fa-info-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="BUMDes"
                items={bumdesSubItems}
                className="far fa-check-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Investasi"
                items={investasiSubItems}
                className="far fa-check-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                // onClick={toggle}
              />
            </div>
          </div>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Grafik"
                items={grafikSubItems}
                className="fas fa-chart-bar nav-icon me-2"
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
              to={"/bumdes/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2">
                <i class="fas fa-home me-2"></i>
                Dashboard
              </div>
            </NavLink>
          </>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Informasi Desa"
                items={informasiDesaSubItems}
                className="fas fa-info-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="BUMDes"
                items={bumdesSubItems}
                className="far fa-check-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Investasi"
                items={investasiSubItems}
                className="far fa-check-circle nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSideBar
                title="Grafik"
                items={grafikSubItems}
                className="fas fa-chart-bar nav-icon me-2"
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

export default BUMDesSidebar;
