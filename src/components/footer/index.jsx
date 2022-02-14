import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import love from "../../assets/images/icons/love.png";

const FooterComp = ({ footerPosition }) => {
  return (
    <Container
      style={{
        display: "flex",
        bottom: "0",
        position: `${footerPosition}`,
        width: "100%",
       
      }}
    >
      <Row className="d-flex justify-content-between flex-row w-100 pb-2">
        <Col xs="12" lg="6">
          COPYRIGHT &copy; 2021 <b style={{ color: "#2F80ED" }}>idesaku.com</b>
        </Col>
        <Col style={{ textAlign: "end" }} xs="12" lg="6">
          Hand-crafted & Made With{" "}
          <img
            src={love}
            style={{ width: "20px", height: "20px" }}
            alt="love"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComp;
