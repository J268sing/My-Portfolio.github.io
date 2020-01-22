import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import './FlowerPrediction.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

class FlowerPrediction extends Component {
    render() {
        return (
            <div>
                <Container className="container-flowerprediction ">
                    <h1 className="h1-flowerprediction">FlowerPrediction</h1>

                    <Container className="ne-layout">
                        <Row>
                            <Col xs={6} className="col1" md={6} xg={6} >
                                <Container className="container-layout">
                                    <div >
                                        <Carousel  >
                                            <Carousel.Item>
                                                <Container  >
                                                    <img
                                                        className="d-block w-100 "
                                                        src={require('../../assets/transfer-learning.png')}
                                                        alt="First slide"

                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                    <h3 className="carousel-caption-pytorch">Content Image, Style reference</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Container>
                                                    <img
                                                        className="d-block img-fluid w-100 carousel-center-image-pytorch"
                                                        src={require('../../assets/transfer-learning-training.png')}
                                                        alt="Third slide"
                                                    /></Container>

                                                <Carousel.Caption>
                                                    <h3 className="carousel-caption-pytorch">Training Loss</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Container>
                                                    <img
                                                        className="d-block w-100 carousel-center-image-pytorch"
                                                        src={require('../../assets/final-transfer-learning.png')}
                                                        alt="Third slide"
                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                    <h3 className="carousel-caption-pytorch">Content Image, Final Image</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <Image src={require('../../assets/Flower-Prediction.png')} />
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


                </Container>









                <p className="space-skills"></p>
                <Footer></Footer>

            </div>
        )
    }
}
export default FlowerPrediction;

