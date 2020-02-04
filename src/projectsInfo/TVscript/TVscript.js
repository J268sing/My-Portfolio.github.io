import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './TVscript.css'
import Footer from '../../components/Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';

class TVscript extends Component {
    render() {
        return (
            <div>

                <Container>

                    <Jumbotron className="alignment-tvscript color1-tvscript shadow-lg p-3 mb-5 rounded" fluid>
                        <Container>
                            <h1>TVscript Generator</h1>
                            <p>
                                Recurrent Neural Network (RNN) using LSTM cells to generate small dialogue for a
    Simpson's TV script with a loss of 0.601.</p>
                        </Container>
                    </Jumbotron>
                </Container>




                <Container className="ne-tvscript">
                    <Row className="check-tvscript" >
                        <Col xs={6} md={6} xg={6} className="marg-tvscript" >
                            <Container >


                                <p>In this project, I trained a Recurrent Neural Network model (LSTM) that generates its own Simpsons TV scripts using RNNs. The dataset was provided by udacity and
                     consisted of part of the Simpsons dataset of scripts from 27 seasons.
                     The Neural Network generates a new TV script for a scene at Moe's Tavern.
             </p>
                            </Container>
                            <div className="alignment-tvscript">
                                <a href="https://github.com/J268sing/TV-Script-Generator">
                                    <Button variant="dark">Github</Button>
                                </a>
                            </div>
                        </Col>
                        <Col className="k-tvscript" xs={6} md={6} xg={6} >
                        <div>

                        <Carousel  >
                                            <Carousel.Item>
                                                <Container  >
                                                    <img
                                                        className="d-block w-100 "
                                                        src={require('../../assets/TVscript.png')}
                                                        alt="First slide"

                                                    />
                                                </Container>
                                                <Carousel.Caption>
                                                 </Carousel.Caption>
                                            </Carousel.Item>
                                          
                                        </Carousel>
                      
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Row className="row1-tvscript"><p>
                    The project consisted of preprocessing the data with word embedding and tokenising punctuation and training the RNN by
         sequence batching and encoding, as well as hyperparameter tunning.
         </p>
                </Row>

                <Container>
                    <Jumbotron className="alignment-tvscript color1-tvscript shadow-lg p-3 mb-5 rounded" fluid>
                        <Container>
                            <h3>Topics Covered:</h3><p>* Recurrent Neural Networks</p><p>    * Embeddings</p><p>* Word2Vec</p>



                            <p>* LSTM</p>
                            <p> * Sequence Batching</p>
                            <p> * PyTorch</p>
                            <p>* Tensorflow</p></Container>
                    </Jumbotron>

                </Container>


                <p className="space-skills"></p>
                <Footer></Footer>

            </div>
        )
    }
}
export default TVscript;

 