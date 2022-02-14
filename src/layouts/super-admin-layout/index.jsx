import { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { FooterComp, NavBar, SideBarSuperAdmin } from "../../components";
import { routes } from "../../routes/super-admin-routes";
import { Container, Row } from "reactstrap";
import classNames from "classnames";
const SuperAdminLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [isContentOverflow, setIsContentOverflow] = useState(false);
  const location = useLocation();
  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current.clientHeight > containerRef.current.clientHeight) {
      setIsContentOverflow(true);
    } else {
      setIsContentOverflow(false);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sidebarIsOpen]);

  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.layout + prop.path} component={prop.component} key={key} exact={prop.exact} />;
    });
  };

  const role = localStorage.getItem("role");
  const getRedirect = () => {
    if (localStorage.getItem("jwt") && role === "super-admin") {
      return <Redirect to={`/${role}/dashboard`} />;
    } else {
      return <Redirect to="/public/login" />;
    }
  };
  return (
    <div className="layout" style={{ height: "100%", maxHeight: "100vh" }}>
      <SideBarSuperAdmin toggle={toggleSidebar} isOpen={sidebarIsOpen} />

      <div className="w-100" ref={containerRef}>
        <Container
          style={{
            position: "relative",
            maxHeight: "100vh",
            minHeight: "100vh",
            overflowX: "hidden",
          }}
          fluid
          className={classNames("content", { "is-open": sidebarIsOpen })}
        >
          <NavBar
            toggleSidebar={toggleSidebar}
            className={sidebarIsOpen ? "far fa-arrow-alt-circle-right" : "far fa-arrow-alt-circle-left"}
          />
          <Switch>
            <div ref={contentRef}>
              {getRoutes(routes)}
              {getRedirect()}
            </div>
          </Switch>
          <Row className="mt-5 w-100 d-flex">
            <FooterComp footerPosition={isContentOverflow ? "sticky" : "absolute"} />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
