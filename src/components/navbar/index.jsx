import React, { useContext } from "react";
import { Navbar, Nav, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media } from "reactstrap";
import { useHistory } from "react-router-dom";

import { AuthUserContext } from "../../context/AuthContext";
const NavBar = ({ name, avatar, toggleSidebar, className }) => {
  const { Logout } = useContext(AuthUserContext);
  const history = useHistory();
  return (
    <div className="nav-bar">
      <Navbar color="light" light className="navbar shadow-lg p-3 mb-5 bg-white rounded" expand="md">
        <div className="container-fluid">
          <button className="bg-transparent border-0" onClick={toggleSidebar}>
            <i className={className}></i>
          </button>
          <div navbar>
            <Nav className="me-auto " navbar>
              <div className="container">
                <UncontrolledDropdown nav>
                  <DropdownToggle className="pe-0" nav>
                    <Media className="align-items-center d-flex">
                      <Media className="ms-2  d-lg-block">
                        <span className="mb-0 text-sm text-dark font-weight-bold">{name || "John Doe"}</span>
                      </Media>
                      <span className="avatar avatar-sm  ms-3">
                        <img
                          alt="..."
                          src={avatar || "https://www.kibrispdr.org/data/pas-poto-jas-7.jpg"}
                          className=" rounded-circle "
                        />
                      </span>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem>
                      <div
                        onClick={() => {
                          Logout();
                          history.push("/public/login");
                        }}
                      >
                        <i className="fas fa-power-off me-1"></i>
                        <span>Logout</span>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
