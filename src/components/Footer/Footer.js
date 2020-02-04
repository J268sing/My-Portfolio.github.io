import React from 'react';
import './Footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer className="footer">
    <Row>
      <Col xs={6} md={6} xg={6}>
      </Col>
      <Col xs={3} md={3} xg={3}></Col>
      <Col xs={3} md={3} xg={3}>
        <Row>
          <Col>
            <a target="_blank" href="https://github.com/j268sing"> <img className="icon-size-footer" src={require("../../assets/github.png")} /></a>
          </Col>
          <Col>
            <a target="_blank" href="https://ca.linkedin.com/in/jashandeepsingh62"><img className="icon-size-footer" src={require("../../assets/linkedLogo.png")} /></a>
          </Col>
          <Col>
            <a target="_blank" href="https://www.instagram.com/jashan.62/"> <img className="icon-size-footer" src={require("../../assets/igLogo.png")} /></a>
          </Col>
        </Row>
        <Row className="icon-footer"><a className="p-color" target="_blank" href="mailto:j268sing@edu.uwaterloo.ca"><p className="ml-auto">Email </p></a></Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;