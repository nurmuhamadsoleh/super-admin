import { useState } from "react";
import { Nav, NavLink, Collapse, NavItem } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { SubSidebarSuperAdmin } from "..";
import Logo from "../../assets/images/Logo-edesa.png";
import { submenus } from "./submenus";

const SideBarSuperAdmin = ({ isOpen, toggle, saldo }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleBtn = () => setCollapsed(!collapsed);

  const [activeSubSidebar, setActiveSubSidebar] = useState("Dashboard");
  const toggleActiveSubSidebar = (title) => {
    setActiveSubSidebar((prevState) => title);
  };

  return (
    <div className="sidebar-wrapper shadow-lg">
      <div
        className={classNames("sidebar mb-5 container ", { "is-open": isOpen })}
        style={{
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <div className="sidebar-header d-flex justify-content-between ps-4 pt-4 ">
          <img src={Logo} alt="logo" style={{ width: "60%", height: "60%" }} />
          <div className="d-lg-none d-md-block d-sm-block" onClick={toggle} style={{ color: "#000" }}>
            <i class="fas fa-times"></i>
          </div>
        </div>

        <Nav vertical className="list-unstyled pb-3 desktop-sidebar d-none d-md-block d-lg-block mt-3" color="light">
          <>
            <NavLink
              tag={RRNavLink}
              to={"/admin-desa/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-home me-2"></i>
                Dashboard
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/superadmin/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2  " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-desktop me-2"></i>
                Daftar Desa
              </div>
            </NavLink>
          </>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Pendapatan"
                items={submenus[0]}
                className="fas fa-chart-line nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>
          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/invoice"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className=" mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-sticky-note me-2"></i>
                Invoice
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/admin-faq"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="far fa-question-circle me-2"></i>
                Admin FAQ
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/super-admin"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="far fa-user me-2"></i>
                Super Admin
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/offline-request"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 mb-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-wifi me-2"></i>
                Offline Request
              </div>
            </NavLink>
          </>
          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/support-ticket"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
            >
              <div className="mt-2 " onClick={() => setActiveSubSidebar("Dashboard")}>
                <i class="fas fa-users me-2"></i>
                Support Ticket
              </div>
            </NavLink>
          </>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Front Settings"
                items={submenus[1]}
                className="fas fa-sliders-h nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
              />
            </div>
          </div>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Settings"
                items={submenus[2]}
                className="fas fa-cog nav-icon me-2"
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
              to={"/super-admin/dashboard"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2  ">
                <i class="fas fa-home me-2"></i>
                Dashboard
              </div>
            </NavLink>
          </>
          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/daftar-desa"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2  ">
                <i class="fas fa-desktop me-2"></i>
                Daftar Desa
              </div>
            </NavLink>
          </>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Pendapatan"
                items={submenus[0]}
                className="fas fa-chart-line nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/invoice"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mb-2 ">
                <i class="fas fa-sticky-note me-2"></i>
                Invoice
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/admin-faq"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2 ">
                <i class="far fa-question-circle me-2"></i>
                Admin FAQ
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/super-admin"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2 ">
                <i class="far fa-user me-2"></i>
                Super Admin
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/offline-request"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2 ">
                <i class="fas fa-wifi me-2"></i>
                Offline Request
              </div>
            </NavLink>
          </>

          <>
            <NavLink
              tag={RRNavLink}
              to={"/super-admin/support-ticket"}
              activeClassName={`${activeSubSidebar === "Dashboard" ? "active" : ""}`}
              onClick={toggle}
            >
              <div className="mt-2 mb-2 ">
                <i class="fas fa-users me-2"></i>
                Support Ticket
              </div>
            </NavLink>
          </>

          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Front Settings"
                items={submenus[1]}
                className="fas fa-sliders-h nav-icon me-2"
                toggleActiveSubSidebar={toggleActiveSubSidebar}
                activeSubSidebar={activeSubSidebar}
                onClick={toggle}
              />
            </div>
          </div>
          <div className=" sub-sidebar nav-item">
            <div className="sub-sidebar-component">
              <SubSidebarSuperAdmin
                title="Settings"
                items={submenus[2]}
                className="fas fa-cog nav-icon me-2"
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

export default SideBarSuperAdmin;
