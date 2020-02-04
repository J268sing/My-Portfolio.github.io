import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './Experience.css'
class Experience extends Component {
    render() {
        return (
            <div>
                                <p className="space-skills"></p>

                <div className="div-color-experience">
                    <h1 className="center-experience">Experience</h1>
                    <Container className="color-container-experience">
                        <Row><Col>
                            <Card className="card-experience">
                                <Card.Body>
                                    <Card.Title>Starck Softwares </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">May 2018 - August 2018</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li><p style={{ margin: 0 }}>Performed troubleshoot to identify software performance issues</p></li>
                                            <li><p style={{ margin: 0 }}>Provided relevant course material and helped improve their average by more than 15%</p></li>
                                            <li><p>Effectively wrote clean and reusable code for designing templates for their clients.</p></li></ul>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col></Row>
                        <Row><Col>
                            <Card className="card-experience">
                                <Card.Body>
                                    <Card.Title>Tutor Math</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">April 2016 - August 2016</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li><p style={{ margin: 0 }}>Lectured 20 students from grade 8-12 aimed to build intuition about complex mathematical ideas</p></li>
                                            <li><p>Maintained existing and functionality during assimilation into ongoing operations of web business.</p></li></ul>


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col></Row>
                    </Container>
                </div>
                <p className="space-skills"></p>

            </div>
        )
    }
}
export default Experience;

