import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scroll from 'react-scroll'
 import NavDropdown from "react-bootstrap/NavDropdown";
import  './Navbar.css';
import {Route,BrowserRouter as Router, Switch, NavLink, Link} from 'react-router-dom';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import iRead from '../../projectsInfo/iRead/iRead';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import { withRouter } from "react-router";
import Layout from '../../containers/layout/Layout';
import Home from '../../containers/Home/Home';
import ToDo from '../../projectsInfo/ToDo/ToDo'
import FlowerPrediction from '../../projectsInfo/FlowerPrediction/FlowerPrediction'
import Chalpa from '../../projectsInfo/Chalpa/chalpa'


 
class Navba extends Component {
    render() {
        return (
            <div>
            <Navbar bg="light"  expand="lg" >
                <Navbar.Brand href="#home"><Link className="navbrand-home" to="/"><p className="alignment1-home">Jashandeep Singh</p></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className ="justify-content-end-home">
                    <Nav className="ml-auto">
                        <Nav.Link><Link  className="navlink-home" to="/FlowerPrediction"><p className="alignment2-home">About</p></Link ></Nav.Link>
                        <Nav.Link><Link className="navlink-home" to="/Chalpa"><p className="alignment2-home">Experience</p></Link></Nav.Link>
                        <Nav.Link><Link className="navlink-home" to="/todo"><p className="alignment2-home">Projects</p></Link></Nav.Link>
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
            <Route path="/FlowerPrediction" component={FlowerPrediction} />
            <Route path="/PyTorch"  component={PyTorch}/>
            <Route path="/todo"  component={ToDo}/>
            <Route path="/Chalpa"  component={Chalpa}/>
 
            </div>
        )
    }
}
export default Navba;

 