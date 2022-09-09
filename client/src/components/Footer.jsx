import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <a className="link" href="http://www.linkedin.com" target="_blank">
              Jay Leung
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
