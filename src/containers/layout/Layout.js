import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './Layout.css'
import { Route, BrowserRouter as Router, Switch, NavLink, Link } from 'react-router-dom';
import iRead from '../../projectsInfo/iRead/iRead';
import Shopify from '../../projectsInfo/Shopify/Shopify';
import TVscript from '../../projectsInfo/TVscript/TVscript';
import PyTorch from '../../projectsInfo/PyTorch/PyTorch';
import FlowerPrediction from '../../projectsInfo/FlowerPrediction/FlowerPrediction';
import Home from '../Home/Home';
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Skills from '../../components/Skills/Skills'
import { Element } from 'react-scroll'
import ToDo from '../../projectsInfo/ToDo/ToDo'
import Nav from 'react-bootstrap/Nav';
import Experience from '../../components/Experience/Experience'
const Layout = (props) => {


   const history = useHistory();


  function onNavigateiRead() {
    history.push("/iRead");
  }
  function onNavigateShopify() {
    history.push("/Shopify");
  }
  function onNavigatePyTorch() {
    history.push("/PyTorch");
  }

  function onNavigateTVscript(){
    history.push("/TVscript");

  }
   function onNavigateFlowerPrediction(){
    history.push("/FlowerPrediction");

   }

   function onNavigateToDo(){
    history.push("/ToDo");
   }
  return (
    <div >
       
      <Container className="ne-layout">
        <Row>
          <Col xs={6} className="col1" md={6} xg={6} >
            <Container className="container-layout">
              <Image src={require('../../assets/me1.png')}  />
              <h4 style={{ margin: 0 }}>Web/Mobile Developer</h4>
              <h4 >Software Engineer</h4>
            </Container>
          </Col>
          <Col xs={6} md={6} xg={6}>
            <div>
              <p className="p-layout">I'm a Mathematics student at University of Waterloo. I love working on projects such as <span>apps</span> and <span>web development</span> from <span>design to development</span> and in my spare time
I like to learn more about deep learning (particularly NLP) and neural networks.</p>
              <p className="f-layout">Current software interests: Backend infrastruture, React, React Native, NLP and Algorithms</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Experience></Experience>

      <a name="projects">
      <div className="div-color-layout">
        <h1 className="center-layout">Projects</h1>
        <CardGroup >
          <Card style={{ width: '18rem' }} className=" card-layout shadow p-3 mb-5 bg-white rounded">
            <Card.Img variant="top" src={require('../../assets/ui.png')} />
            <Card.Body>
              <Card.Title><span> iRead</span></Card.Title>
              <Card.Text>
                An android app for downloading and reading books.
    </Card.Text>
              <Row>
                <Col>
                    <Button onClick={onNavigateiRead} className="block-layout" variant="primary">About</Button>
                </Col>
                <Col>
                  <a href="https://github.com/J268sing/iRead">
                    <Button className="block-layout" variant="primary">Github</Button>
                  </a>                  </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
            <Card.Img variant="top" src={require('../../assets/ui.png')} />
            <Card.Body>
              <Card.Title><span> Shopify Project</span></Card.Title>
              <Card.Text>
                An android app that diplay at displays a Custom Collections list page and a Collection Details page of products of a Merchant
    </Card.Text>
              <Row>
                <Col>  
                  <Button onClick={onNavigateShopify} className="block-layout" variant="primary">About</Button>
                
                  </Col>
                <Col>
                  <a href="https://github.com/J268sing/shopify-project">
                    <Button className ="block-layout" variant="primary">Github</Button>
                  </a>                  </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
            <Card.Img variant="top" src={require('../../assets/Flower-Prediction.png')} />
            <Card.Body>
              <Card.Title><span>Flower Prediction</span></Card.Title>
              <Card.Text>
                A CNN model trained using machine learning algorithms to predict the species of flower from input flower image.
    </Card.Text>
              <Row>
                <Col>
                    <Button onClick={onNavigateFlowerPrediction} className="block-layout" variant="primary">About</Button>
                    
                </Col>
                <Col>

                  <a href="https://github.com/J268sing/Flower-Prediction">
                    <Button className="block-layout" variant="primary">Github</Button>
                  </a>                  </Col>
              </Row>
            </Card.Body>
          </Card> 
        </CardGroup>
        <CardGroup >
          <Card style={{ width: '18rem' }} className=" card-layout shadow p-3 mb-5 bg-white rounded">
            <Card.Img variant="top" src={require('../../assets/TVscript.png')} />
            <Card.Body>
              <Card.Title><span>TV-Script-Generator</span></Card.Title>
              <Card.Text>
                A recurrent neural network (RNN) that generates small new dialogues for Simpson's TV script</Card.Text>
              <Row>
                <Col>
              
                    <Button onClick={onNavigateTVscript} className="block-layout" variant="primary">About</Button>
                   
                </Col>
                <Col>

                  <a href="https://github.com/J268sing/TV-Script-Generator">
                    <Button className="block-layout" variant="primary">Github</Button>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="card-layout shadow p-3 mb-5 bg-white rounded">
            <Card.Img variant="top" src={require('../../assets/pytorch.png')} />
            <Card.Body>
              <Card.Title><span>Deep Learning PyTorch</span></Card.Title>
              <Card.Text>
                Jupyter Notebooks of implementations of various machine learning topics like transfer learning, inference and validation, maxpooling visualization etc.
    </Card.Text>
              <Row>
                <Col>
             
                    <Button onClick={onNavigatePyTorch} className="block-layout" variant="primary">About</Button>
                    
                </Col>
                <Col>
                  <a href="https://github.com/J268sing/deep-learning-PyTorch">
                    <Button className="block-layout" variant="primary">Github</Button>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white card-layout rounded">
            <Card.Img variant="top" src={require('../../assets/ToDo.png')} />
            <Card.Body>
              <Card.Title><span>To-Do App</span></Card.Title>
              <Card.Text>
                 A Full Stack React Express Application where you can store you daily to-do list by creating new tasks.
    </Card.Text>
              <Row>
                <Col>
        
                   <Button className="block-layout" onClick={onNavigateToDo}  variant="primary">About</Button>
                   
                </Col>
                <Col>
                  <a href="https://github.com/J268sing/To-Do-App">
                    <Button className="block-layout" variant="primary">Github</Button>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </CardGroup>
        </div> 
        </a>

       <div id="sick"> <Skills /></div> 
      
      <Footer ></Footer>
      <Route path="/iRead" exact component={iRead} />
      <Route path="/PyTorch" exact component={PyTorch} />
      <Route path="/Shopify" exact component={Shopify} />
      <Route path="/FlowerPrediction" component={FlowerPrediction} />
      <Route path="/TVscript" exact component={TVscript} />
      <Route path="/ToDo" exact component={ToDo} />
      
        
    </div>
  );
}

export default Layout;