import React, { Component } from 'react';
import logo from '../elixirLogo.jpg';

export default class Header extends Component{
    render(){

        return(
            <div>
                <header className="App-header">
                    {/*Dropdown Structure*/}
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href="">one</a></li>
                        <li><a href="">two</a></li>
                        <li className="divider"></li>
                        <li><a href="">three</a></li>
                    </ul>
                    <nav className={"nav-wrapper"}>
                        <div className={"nav-contents"}>
                            <img src={logo} className="App-logo" alt="logo" />
                            <ul className="right hide-on-med-and-down">
                                <li><a href="">Sass</a></li>
                                <li><a href="">Components</a></li>
                                {/*Dropdown Trigger*/}
                                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}