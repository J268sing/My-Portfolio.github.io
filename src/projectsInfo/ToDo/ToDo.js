import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './ToDo.css'


class ToDo extends Component {
    render() {
        return (
            <div>
                <Container className="container-flowerprediction ">
                    <h1 className="h1-todo">To-Do</h1>
                    <Container className="ne-layout-others">
                        <Row>
                            <Col xs={12} className="col1 space-mobile-flower-prediction" md={6} xg={6} >
                                <Container className="container-iread">
                                    <div >
                                        <Carousel  >
                                            <Carousel.Item>
                                                <Container  >
                                                    <img
                                                        className="d-block w-100 "
                                                        src={require('../../assets/ToDo1.png')}
                                                        alt="First slide"
                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Container>
                                                    <img
                                                        className="d-block w-100 carousel-center-image-pytorch"
                                                        src={require('../../assets/ToDo2.png')}
                                                        alt="Third slide"
                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <h4 style={{ margin: 0 }} className="h1-todo">Built using React, Express, Node.js</h4>
                                </Container>
                            </Col>
                            <Col className="check-iread" xs={12} md={6} xg={6}>
                                <div>
                                    <p className="p-iread">
                                        A full stack web app made with react and express where you can store your daily to-do list by creating
                                        new tasks. In this app you can categorize your tasks into 3 categories: To-Do, Done and Doing.
                                        This full Stack app was made while doing the course on Pluralsight Building a Full Stack Application with
                                    Express and React. This application has a Front End component built with <span>Redux</span> and
                                    <span>React</span> and back end component uses <span>Express</span> and <span>Node.js</span> to manage.
                                    </p>
                                    <a target="_blank" href="https://github.com/J268sing/To-Do-App"><Button variant="dark">Github</Button></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container >
                    <Row className="video-todo">
                        <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/evEIWDDBkls">
                        </iframe>
                    </Row>
                </Container>
                <p className="space-skills"></p>
                <Footer></Footer>
            </div>
        )
    }
}

export default ToDo;