import React from 'react';
import './Footer.css'


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Route, BrowserRouter as Router, Switch, NavLink, Link } from 'react-router-dom';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import iRead from '../../projectsInfo/iRead/iRead';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import { withRouter } from "react-router";
import Layout from '../../containers/layout/Layout';
import Home from '../../containers/Home/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-solid-svg-icons'


const Footer = () => (
  <footer className="footer">
    <Row>
      <Col xs={6} md={6} xg={6}>
    <Row>
      <Col>
      <Nav.Link><Link className="navlink-footer" to="/PyTorch"><p className="navlink-footer">About</p></Link></Nav.Link> </Col>
     <Col> <Nav.Link><Link className="navlink-footer" to="/Shopify"><p className="navlink-footer">Experience</p></Link></Nav.Link></Col>
     <Col> <Nav.Link><Link className="navlink-footer" to="/iRead"><p className="navlink-footer">Projects</p></Link></Nav.Link></Col>
      <Col><Nav.Link><Link className="navlink-footer" href="#link4"><p className="navlink-footer">Skills</p></Link></Nav.Link></Col>
    </Row>

    </Col>
    <Col xs={3} md={3} xg={3}></Col>
    <Col xs={3} md={3} xg={3}>
      <Row>
        <Col>
        <img className="icon-size-footer" src={require("../../assets/github.png")}/>
        </Col>
        <Col>
        <img className="icon-size-footer" src={require("../../assets/linkedLogo.png")}/>
        </Col>
        <Col>
        <img className="icon-size-footer" src={require("../../assets/igLogo.png")}/>
        </Col>
        
        </Row>
      
      <Row className="icon-footer"><p className="hello ml-auto">j268sing@edu.uwaterloo.ca  </p></Row>
    </Col>

    </Row>

    
  </footer>
);


export default Footer;