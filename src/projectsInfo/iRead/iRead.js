import React, { Component } from 'react';
import './iRead.css'
import Container from 'react-bootstrap/Container';
import Crousel from '../../components/Carousel/Carousel'
import image1 from '../../assets/ui.png';
import image2 from '../../assets/backend.png'
import image3 from '../../assets/frontend.png'


class iRead extends Component {
    render() {
        return (
            <div>
                <Container className="check">
                <h1>iRead</h1>
                <p>
                    iRead is an all-in-one book reading app for android devices. The robust and well-designed app allows you to read books offline any time, anywhere.
                    A reader can get lots of free books available in the app that includes all categories such as fiction, non-fiction, romance, historical, comics, magazines and many more.
                    Also, you have an option to filter your favourite books and store them separate.
                    It uses google api and users can have an option to pick from more than 1 million books
                </p>
                <Crousel p={image1} q={image2} r={image3}></Crousel>
                
                </Container>
            </div>
        )
    }
}
export default iRead;

