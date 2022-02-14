import { useRef, useEffect, useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";
import { FooterComp } from "../../components";
import { routes } from "../../routes/public-routes";

const PublicLayout = () => {
  const [loading, setLoading] = useState(true);
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/public") {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("jwt");
  const getRedirect = () => {
    if (token) {
      return <Redirect from="*" to={`/${role}/dashboard`} />;
    } else {
      return <Redirect from="*" to="/public/login" />;
    }
  };
  return (
    <Container fluid>
      <div ref={mainContent} className="row">
        <Switch>
          {loading ? (
            <Row style={{ height: "100vh", width: "100vw" }}>
              <Col lg="12" sm="12" className="d-flex justify-content-center align-items-center fa-3x">
                <i className="fas fa-circle-notch fa-spin" style={{ color: "#2F80ED" }}></i>
              </Col>
            </Row>
          ) : (
            <>
              {getRoutes(routes)}
              {getRedirect()}
            </>
          )}
        </Switch>
      </div>
      <Row className="w-100 p-0 m-0">{!loading && <FooterComp />}</Row>
    </Container>
  );
};

export default PublicLayout;
