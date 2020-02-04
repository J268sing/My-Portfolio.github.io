import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Shopify.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Footer/Footer';

 
class Shopify extends Component {
  render() {
    return (
      <div className="col1-shopify">

 
        <Container className="mainPage-shopify">
          <Row className="check-shopify" >
            <Col xs={6} md={6} xg={6}>
              <Container >
                <h1 className="color-shopify">Shopify Project</h1>
                <h3 className="color-shopify" style={{ textAlign: "start" }}> About: This project was made as a part of shopify Mobile Dev Challenge</h3>



                <p className="color-shopify">This app uses shopify's api to show the items and was built in android studio. Main feature of this app was to view the list items as cards</p>
              </Container>
              <div className="alignment-shopify">
        <a href="https://github.com/J268sing/shopify-project">
                      <Button  variant="dark">Github</Button>
                    </a> 
                    </div>
            </Col>
            <Col className="k-shopify" xs={6} md={6} xg={6} >
              <Image className="j-shopify" src={require('../../assets/king.png')} />
            </Col>
          </Row>
        </Container>



        <Container className="check-shopify">
         <Card className="color-shopify" className="check-shopify" className="shadow-lg bg-dark p-3 mb-5  rounded" >
  <Card.Body className="color1-shopify"><h4>Task 1</h4> You're a successful Shopify merchant with many collections of products! You’d like to keep an eye on your collections.
          create an app that displays a Custom Collections list page and a Collection Details page. Your app will fetch the data from the Shopify Custom Collections REST API.
The collection image</Card.Body>
</Card>
<Card className="card-shopify" className="color-shopify"  className="check-shopify" className="shadow-lg bg-dark p-3 mb-5  rounded" >
  <Card.Body className="color1-shopify">
         <h4> Task 2</h4> Collections list page: A simple list of every custom collection (e.g. In our above response you will see we will need cells for: Aerodynamic, Durable and Small). Tapping on a collection launches the Collection Details page.
Collection Details page: A list of every product for a specific collection. Each row in the list needs to contain, at a minimum:
The name of the product
The total available inventory across all variants of the product
The collection title
The collection image</Card.Body>
</Card>
        </Container>
<Container >
                <Row className="video-todo"> 
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                 </Row>
                </Container>
<p className="space-skills"></p>
<Footer></Footer>

         
      </div>
    )
  }
}
export default Shopify;

 