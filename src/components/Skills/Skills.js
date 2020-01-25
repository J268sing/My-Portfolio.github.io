import React, { Component } from 'react';
import './Skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Skills extends Component {
    render() {
        return (
            <div> 
                <p className="space-skills"></p>
                <Container className="color-container-skills">
                
                    <p className="align-skills-skills">Skills</p>
                    <p style={{ margin: 0 }} className="align-skills">Languages</p>
                    <Row className="align-items-skills"> JavaScript • Python • C++/C • SQL • Java • HTML/CSS • R</Row>
                    <p style={{ margin: 24 }}></p>
                    <p style={{ margin: 0 }} className="align-skills">Tools/Libraries</p>
                    <Row className="align-items-skills">React • Redux • Node.js • Git • Android Studio • PyTorch • TensorFlow • AWS</Row>
                    <p className="align-skills full-stack-skills">Full Stack </p>
                    <Container>
                        <Row className="row-cards-skills">
                            <Col xs={6} sm={6} md={6} lg={6} xg={6}>
                                <Card>
                                    <Card.Title className="card-title-skills"> UX Design</Card.Title>
                                    <Card.Body>• User experience and solving your customer need.</Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} xg={6}>
                                <Card>
                                    <Card.Title className="card-title-skills">UI Design</Card.Title>
                                    <Card.Body>• Creating aesthetically pleasing user interfaces.</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="row-cards-skills">
                            <Col xs={6} sm={6} md={6} lg={6} xg={6}>
                                <Card>
                                    <Card.Title className="card-title-skills">Front-End Development</Card.Title>
                                    <Card.Body>• Turning your design into reality that feels good to use.</Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} xg={6}>
                                <Card>
                                    <Card.Title className="card-title-skills">Backend Development</Card.Title>
                                    <Card.Body>• Creating your server-side programs that connect to databases.</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <p className="space-skills"></p>
            </div>
        )
    }
}
export default Skills;