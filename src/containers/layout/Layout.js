import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './Layout.css'
import { Link } from 'react-router-dom';
 

class Layout extends Component {
  
  
  render() {
    return (
      <div >
        <Container className="ne">
          <Row>
            <Col xs={6} className="col1" md={6} xg={6} >
              <Container className="containe">
                <Image src={require('../../assets/king.png')} roundedCircle />
                <h4 style={{ margin: 0 }}>Web/Mobile Developer</h4>
                <h4 >Software Engineer</h4>
              </Container>
            </Col>
            <Col xs={6} md={6} xg={6} className="col2">
              <div>
                <p className="p">I'm a Mathematics student at University of Waterloo. I love working on projects such as <span>apps</span> and <span>web development</span> from <span>design to development</span> and in my spare time
I like to learn more about deep learning (particularly NLP) and neural networks.</p>
                <p>Current software interests: Backend infrastruture, React, React Native, NLP and Algorithms</p>
              </div>
            </Col>
          </Row>
        </Container>



        <div>
          <h1 >Full Stack</h1>
          <CardGroup >
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>iRead</Card.Title>
                <Card.Text>
                  An android app for downloading and reading books.
    </Card.Text>
                <Row>
                  <Col>
                    <Button className="block" variant="primary">About</Button>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/iRead">
                      <Button className="block" variant="primary">Github</Button>
                    </a>                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>Shopify Project</Card.Title>
                <Card.Text>
                  An android app that diplay at displays a Custom Collections list page and a Collection Details page of products of a Merchant
    </Card.Text>
                <Row>
                  <Col>
                    <Button className="block" variant="primary">About</Button>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/shopify-project">
                      <Button className="block" variant="primary">Github</Button>
                    </a>                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>Flower Prediction</Card.Title>
                <Card.Text>
                A CNN model trained using machine learning algorithms to predict the species of flower from input flower image.
    </Card.Text>
                <Row>
                  <Col>
                    <Button className="block" variant="primary">About</Button>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/Flower-Prediction">
                      <Button className="block" variant="primary">Github</Button>
                    </a>                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardGroup>
 

          <CardGroup >
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>TV-Script-Generator</Card.Title>
                <Card.Text>
                A recurrent neural network (RNN) that generates small new dialogues for Simpson's TV script</Card.Text>
                <Row>
                  <Col>
                    <Button className="block" variant="primary">About</Button>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/TV-Script-Generator">
                    <Button className="block"  variant="primary">Github</Button>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>Deep Learning PyTorch</Card.Title>
                <Card.Text>
                  Jupyter Notebooks of implementations of various machine learning topics like transfer learning, inference and validation, maxpooling visualization etc.
    </Card.Text>
                <Row>
                  <Col>
                    <Button className="block" variant="primary">About</Button>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/deep-learning-PyTorch">
                      <Button    className="block" variant="primary">Github</Button>
                    </a> 
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-white rounded">
              <Card.Img variant="top" src={require('../../assets/ui.png')} />
              <Card.Body>
                <Card.Title>Copied Project</Card.Title>
                <Card.Text>
                A project to be copied
    </Card.Text>
                <Row>
                  <Col>
                  <Link to="/Nepage">
                    <Button className="block" variant="primary">About</Button>
                  </Link>
                  </Col>
                  <Col>
                  <a href="https://github.com/J268sing/Flower-Prediction">
                      <Button  className="block" variant="primary">Github</Button>
                    </a>                  
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardGroup>

        </div>
     
       </div> 
    );
  }
}



export default Layout;
