import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';
import './FlowerPrediction.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
 
class FlowerPrediction extends Component {
    render() {
        return ( 
            <div>

                <Container className="container-flowerprediction ">
                <div className="div-space-iread">

                    <h1 className="h1-flowerprediction">Flower  Prediction</h1>
</div>
<div className="div-space-iread">

                    <Container className="ne-layout-others">
                        <Row>
                            <Col xs={6} className="col1" md={6} xg={6} >
                                <Container className="container-layout">
                                     <div >
                                        <Carousel  >
                                            <Carousel.Item>
                                                <Container  >
                                                    <img
                                                        className="d-block w-100 "
                                                        src={require('../../assets/Flower-prediction1.png')}
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
                                                        src={require('../../assets/Flower-prediction2.png')}
                                                        alt="Third slide"
                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <h4 style={{ margin: 0 }} className="h1-flowerprediction">Made using PyTorch</h4>
                                </Container>
                            </Col>
                            <Col xs={6} md={6} xg={6}>
                                <div className="">
                                    <p className="p-layout">This is a CNN model bulit by fine-tuning the pre-trained VGG19 model by modifiying the classifying layer with custom feed forward network that has 2 hidden layers and ReLU activation functions.
                                    The model has an accuracy of the 85% and is trained on CUDA's GPU. 
                                    </p>
                                    <Card className="card-flower-prediction shadow card1-pytorch  bg-dark rounded" text="white" >
                                <Card.Body>Model Specifications: VGG19, Optimizer: Adam, Activation Function: ReLu and Softmax, Pooling Layer: MaxPool2d, number of inputs: 25088, number of classes: 102, number of epochs: 8</Card.Body>
                            </Card>
                                 </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Container>

                <Container fluid className="container-flower-prediction ">Link to the trained dataset: <a target="_blank" href ="https://drive.google.com/file/d/1-Dx1OXsg2yuTDfyELJA2LOCaQAvIrVK2/view?usp=sharing"  className="card-flower-prediction">Checkpoint</a></Container>

                <Container className="ne-layout-others">
        <Row>
          <Col xs={6} md={6} xg={6}>
            <div>
              <p className="p-layout">Deployed the CNN model into a web app using 
              flask that takes in a flower image and uses the trained network to predict name of the flower that is the nearest look-alike (neighbour) of flower present in the image.</p>
                    </div>
          </Col>
          <Col xs={6} className="col1" md={6} xg={6} >
            <Container className="container-layout">
            <Container >
                <Row className="video-todo"> 
                <iframe width="420" height="315" src="https://www.youtube.com/embed/K6fZ592WUAY" frameborder="0" allowfullscreen></iframe>

                 </Row>
                </Container>
                               <h4 style={{ margin: 0 }}>Web/Mobile Developer</h4>
              <h4 >Software Engineer</h4>
            </Container>
          </Col>
        </Row>
      </Container>

     
                 
                <p className="space-skills"></p>
                <Footer></Footer>

            </div>
        )
    }
}
export default FlowerPrediction;

