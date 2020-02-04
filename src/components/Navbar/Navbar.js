import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import './Navbar.css';
import { Route, Link } from 'react-router-dom';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import iRead from '../../projectsInfo/iRead/iRead';
import TVscript from '../../projectsInfo/TVscript/TVscript';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import Layout from '../../containers/layout/Layout';
import ToDo from '../../projectsInfo/ToDo/ToDo'
import FlowerPrediction from '../../projectsInfo/FlowerPrediction/FlowerPrediction'



class Navba extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="#home"><Link className="navbrand-home" to="/"><p className="alignment1-home">Jashandeep Singh</p></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end-home">
                        <Nav className="ml-auto">
                            {/*
                    Projects Routing Example
                    <Nav.Link><Link className="navlink-home" to="/FlowerPrediction"><p className="alignment2-home"></p></Link></Nav.Link>
                    <Nav.Link><Link className="navlink-home" to="/TVscript"><p className="alignment2-home"></p></Link></Nav.Link>
                    <Nav.Link><Link className="navlink-home" to="/iRead"><p className="alignment2-home"></p></Link></Nav.Link>
                    <Nav.Link><Link className="navlink-home" to="/ToDo"><p className="alignment2-home"></p></Link></Nav.Link>
                    <Nav.Link><Link className="navlink-home" to="/PyTorch"><p className="alignment2-home"></p></Link></Nav.Link>
                    <Nav.Link><Link className="navlink-home" to="/Shopify"><p className="alignment2-home"></p></Link></Nav.Link>
                    */}
                            {/* Navbar Items*/}
                            <Nav.Link className="navlink-home" href="#about"><p className="alignment2-home">About</p></Nav.Link>
                            <Nav.Link className="navlink-home" href="#experience"><p className="alignment2-home">Experience</p></Nav.Link>
                            <Nav.Link className="navlink-home" href="#projects"><p className="alignment2-home">Projects</p></Nav.Link>
                            <Nav.Link className="navlink-home" href="#skills"><p className="alignment2-home">Skills</p></Nav.Link>
                            <NavDropdown className="alignment2-home" title="Contact" alignRight id="dropdown-button-drop-left">
                                <NavDropdown.Item className="navlink-home" target="_blank" href="mailto:j268sing@edu.uwaterloo.ca"><p className="alignment2-home">Email</p></NavDropdown.Item>
                                <NavDropdown.Item className="navlink-home" target="_blank" href="https://github.com/j268sing"><p className="alignment2-home">Github</p></NavDropdown.Item>
                                <NavDropdown.Item className="navlink-home" target="_blank" href="https://www.facebook.com/jashan.batth.902"><p className="alignment2-home">Facebook</p></NavDropdown.Item>
                                <NavDropdown.Item className="navlink-home" target="_blank" href="https://ca.linkedin.com/in/jashandeepsingh62"><p className="alignment2-home">Linkedin</p></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/*Routing*/}
                <Route path="/" exact component={Layout} />
                <Route path="/iRead" component={iRead} />
                <Route path="/Shopify" component={Shopify} />
                <Route path="/TVscript" component={TVscript} />
                <Route path="/ToDo" component={ToDo} />
                <Route path="/FlowerPrediction" component={FlowerPrediction} />
                <Route path="/PyTorch" component={PyTorch} />
            </div>
        )
    }
}

export default Navba;