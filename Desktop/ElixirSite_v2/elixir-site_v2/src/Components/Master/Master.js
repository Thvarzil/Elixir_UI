import React, {Component} from 'react';

//import all other components for return to App.js based on React state / user navigation
import TestContent from "../TestContent";
import Landing from "./Landing";
import FeaturedDrinks from "../Drinks/FeaturedDrinks";
import BrunchMenu from "../Menu/BrunchMenu";

export default class Master extends Component{
    constructor(props) {
        super(props);
        this.state = {page: "landing"};
    }

    render(){
       const page = this.state.page;

       if(page==="landing"){
           return(
               <Landing/>
           );
       }
       if(page==="featured-drinks"){
           return(
               <FeaturedDrinks/>
           );
       }
    }
}