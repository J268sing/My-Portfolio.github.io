import React, { Component } from 'react';
import './iRead.css'
import Container from 'react-bootstrap/Container';
import Crousel from '../../components/Carousel/Carousel'
import image1 from '../../assets/ui.png';
import image2 from '../../assets/backend.png'
import image3 from '../../assets/frontend.png'
import Footer from '../../components/Footer/Footer';


class iRead extends Component {
    render() {
        return (
            <div>
                <Container className="check-iread">
                <h1>iRead</h1>
                <p>
                    iRead is an all-in-one book reading app for android devices. The robust and well-designed app allows you to read books offline any time, anywhere.
                    A reader can get lots of free books available in the app that includes all categories such as fiction, non-fiction, romance, historical, comics, magazines and many more.
                    Also, you have an option to filter your favourite books and store them separate.
                    The app uses google api for all its search results and recommendations. Thus allowing users to pick from more than 1 million books.
                </p>

            
                <Crousel p={image1} q={image2} r={image3}></Crousel>
                <p>link for checking out the project on github</p>

                <p>You can browse through different recommendations of different categories. Also, the app keeps track of 5 latest books that you have been reading recently. The UI is classic Material Design and the app layout is simple enough for almost everybody.</p>
                </Container>
                <p className="space-skills"></p>
                <Footer></Footer>

            </div>
        )
    }
}
export default iRead;