import React, {Component} from 'react';


import './App.css';



import Header from './Components/Header';
import Footer from "./Components/Footer";

import Master from "./Components/Master/Master";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "landing"
        };

    }

    navigate(course){this.setState({page: course});}


    render() {
        return (
            <div className="App">
                <Header navigator={this.navigate}/>
                <Master page={this.state.page}/>
                <Footer/>
            </div>

        );
    }
}

