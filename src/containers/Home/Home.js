import React, { Component } from 'react';
import Navba from '../../components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Layout from '../layout/Layout';


class Home extends Component {
    render() {
        return (
            <div>
            <Navba></Navba>
            <Route exact path="/" component={Layout} />             
             </div>
        )
    }
}
export default Home;

