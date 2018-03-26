import React, { Component } from 'react';
import logo from '../elixirLogo.jpg';


//import Master Component, so our header can interact with Master.state. This is what makes the navigation work.
import Master from "./Master/Master";
import App from "../App";

export default class Header extends Component{
    render(){

        return(
            <div>
                <header className="App-header">
                    {/*Dropdown Structure*/}
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href={""}><h5>Our Brunch</h5></a></li>
                        <li className={"divider"}> </li>
                        <li><a href={""}>Trio Lunch</a></li>
                        <li><a href={""}>Trio Dinner</a></li>
                        <li><a href={""}>Trio Desserts</a></li>
                    </ul>
                    <nav className={"nav-wrapper"}>
                        <div className={"nav-contents"}>
                            <img src={logo} className="App-logo" alt="logo" />
                            <ul className="right hide-on-med-and-down">
                                {/*Drink link - sets Master.state to "featured-drinks"*/}
                                <li><button onClick={
                                    this.props.navigator("people")
                                }><h5>The People</h5></button></li>

                                <li><button><h5>The Drinks</h5></button></li>
                                {/*Dropdown Trigger*/}
                                <li><button className="dropdown-button" data-activates="dropdown1"><h5>The Food</h5></button></li>
                                <li><span><h5>||</h5></span></li>
                                <li><button><h5>Find Us</h5></button></li>

                            </ul>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}