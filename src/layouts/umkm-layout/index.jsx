import { useEffect, useState, useRef } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { FooterComp, NavBar, UMKMSidebar } from "../../components";
import { routes } from "../../routes/umkm-routes";
import { Container, Row } from "reactstrap";
import classNames from "classnames";

const UMKMLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const [isContentOverflow, setIsContentOverflow] = useState(false);
  const location = useLocation();
  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const containerHeight = containerRef.current.clientHeight;
    const contentHeight = contentRef.current.clientHeight;

    console.log("container: ", containerHeight, "content: ", contentHeight);

    if (contentHeight >= 450 || contentHeight > containerHeight) {
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
      return <Route path={prop.layout + prop.path} component={prop.component} key={key} exact />;
    });
  };

  const role = localStorage.getItem("role");

  const getRedirect = () => {
    // if (localStorage.getItem("jwt") && role === "admin-desa") {
    //   return <Redirect to={`/${role}/dashboard`} />;
    // } else {
    //   return <Redirect to="/public/login" />;
    // }

    if (!localStorage.getItem('jwt')) <Redirect to="/public/login" />

  };
  return (
    <div className="layout" style={{ height: "100%", maxHeight: "100vh" }}>
      <UMKMSidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

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

export default UMKMLayout;
