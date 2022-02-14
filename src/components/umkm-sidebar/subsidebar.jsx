import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const UMKMSubSidebar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const { className, title, items, titleClass, toggleActiveSubSidebar, activeSubSidebar, imgSource } = props;
  const toggle = () => {
    if (activeSubSidebar !== title) {
      toggleActiveSubSidebar(title);
      setCollapsed(false);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const isMenuOpen = () => {
    if (activeSubSidebar === title) {
      if (collapsed) {
        return "";
      } else {
        return "menu-open";
      }
    }
    return "";
  };
  return (
    <div className="sub-sidebar mt-3 mb-3">
      <NavItem onClick={toggle} className={isMenuOpen()} style={{ cursor: "pointer" }}>
        <NavLink className="d-flex justify-content-between align-items-center pb-2">
          <div className="d-flex">
            {imgSource ? (
              <img
                src={imgSource}
                height="16"
                width="16"
                alt="icon"
                className="me-2"
                style={{ height: "16px", width: "16px" }}
              />
            ) : (
              <i className={className}></i>
            )}
            <div className={titleClass}>{title}</div>
          </div>
          <div>
            {activeSubSidebar === title && !collapsed ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </div>
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={activeSubSidebar === title && !collapsed}
        navbar
        className={classNames("items-menu", {
          "mb-1 items-menu-open": activeSubSidebar === title && !collapsed,
        })}
      >
        {items.map((item, index) => (
          <div key={index}>
            <div className="mt-2 mb-2">
              <NavLink tag={RRNavLink} to={`/umkm/${item.target}`} activeClassName="active" onClick={props.onClick}>
                <div className="ms-3 d-flex align-items-center">
                  <div className="me-3 mb-1">
                    <i className="fas fa-circle" style={{ fontSize: "10px" }}></i>
                  </div>
                  <div>{item.title}</div>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </Collapse>
    </div>
  );
};

export default UMKMSubSidebar;
