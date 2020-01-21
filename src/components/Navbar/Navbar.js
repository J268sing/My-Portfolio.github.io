import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import  './Navbar.css';
import {Route,BrowserRouter as Router, Switch, NavLink, Link} from 'react-router-dom';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import iRead from '../../projectsInfo/iRead/iRead';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import { withRouter } from "react-router";
import Layout from '../../containers/layout/Layout';
import Home from '../../containers/Home/Home';



 
class Navba extends Component {

 
    render() {
 
        return (
            <div>
            <Navbar bg="light"  expand="lg" >
                <Navbar.Brand href="#home"><Link className="navbrand-home" to="/"><p className="alignment1-home">Jashandeep Singh</p></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className ="justify-content-end-home">
                    <Nav className="ml-auto">
                        <Nav.Link><Link className="navlink-home" to="/PyTorch"><p className="alignment2-home">About</p></Link></Nav.Link>
                        <Nav.Link><Link className="navlink-home" to="/Shopify"><p className="alignment2-home">Experience</p></Link></Nav.Link>
                        <Nav.Link><Link className="navlink-home" to="/iRead"><p className="alignment2-home">Projects</p></Link></Nav.Link>
                        <Nav.Link><Link className="navlink-home" href="#link4"><p className="alignment2-home">Skills</p></Link></Nav.Link>
                        <NavDropdown className="alignment2-home" title="Contact" alignRight  id="dropdown-button-drop-left">
                            <NavDropdown.Item href="#action/3.1"><p className="alignment2-home">Email</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p className="alignment2-home">Linkedin</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><p className="alignment2-home">Github</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4"><p className="alignment2-home">Facebook</p></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact component={Layout} />
            <Route path="/Shopify" component={Shopify} />
            <Route path="/PyTorch"  component={PyTorch}/>
            <Route path="/iRead"  component={iRead}/>

            </div>
        )
    }
}
export default Navba;

 