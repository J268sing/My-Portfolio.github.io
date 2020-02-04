import React, { Component } from 'react';
import './iRead.css'
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
 
class iRead extends Component {
    render() {
        return (
            <div>
                 <Container className="container-flowerprediction ">
                    <h1 className="h1-iread">iRead</h1>
                    <div className="div-space-iread">
                    <Container className="ne-layout-others">
                        <Row>
                            <Col xs={6} className="col1" md={6} xg={6} >
                                <Container className="container-iread">
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
                                    <h4 style={{ margin: 0 }} className="h1-iread">Made in Android Studio</h4>
                                </Container>
                            </Col>
                            <Col className="check-iread" xs={6} md={6} xg={6}>
                                <div>
                                    <p className="p-iread">  
                    iRead is an all-in-one book reading app for android devices. The robust and well-designed app allows you to read books offline any time, anywhere.
                    A reader can get lots of free books available in the app that includes all categories such as fiction, non-fiction, romance, historical, comics, magazines and many more.
                    Also, you have an option to filter your favourite books and store them separate.
                    The app uses google api for all its search results and recommendations. Thus allowing users to pick from more than 1 million books.                                    </p>
                                       <a target="_blank" href="https://github.com/J268sing/iRead"><Button variant="dark">Github</Button></a> 
                                 </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </Container>

                <Container fluid className="container-iread1">You can browse through different recommendations of different categories. Also, the app keeps track of 5 latest books that you have been reading recently. The UI is classic Material Design and the app layout is simple enough for almost everybody.</Container>


                <p className="space-skills"></p>

                <Container >
                <Row className="video-todo"> 
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/K6fZ592WUAY">
                </iframe>
                 </Row>
                </Container>
                 
 
                  <p className="space-skills"></p>
                <Footer></Footer>

            </div>
        )
    }
}
export default iRead;