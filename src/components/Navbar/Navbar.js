import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import  './Navbar.css';
import {Route} from 'react-router-dom';
import iRead from '../../projectsInfo/iRead/iRead';

class Navba extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><p className="alignment1">Jashandeep Singh</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className ="justify-content-end">
                    <Nav >
                        <Nav.Link href="/iRead"><p className="alignment2">About</p></Nav.Link>
                        <Nav.Link href="#link1"><p className="alignment2">Experience</p></Nav.Link>
                        <Nav.Link  href="#link3"><p className="alignment2">Projects</p></Nav.Link>
                        <Nav.Link href="#link4"><p className="alignment2">Skills</p></Nav.Link>
                        <NavDropdown className="alignment2" title="Contact" alignRight  id="dropdown-button-drop-left">
                            <NavDropdown.Item href="#action/3.1"><p className="alignment2">Email</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><p className="alignment2">Linkedin</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><p className="alignment2">Github</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4"><p className="alignment2">Facebook</p></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            <Route path="/iRead" exact component={iRead} />
            </div>
        )
    }
}
export default Navba;

 