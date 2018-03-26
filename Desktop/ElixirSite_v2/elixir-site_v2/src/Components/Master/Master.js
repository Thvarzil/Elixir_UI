import React, {Component} from 'react';

//import all other components for return to App.js based on React state / user navigation
import TestContent from "../TestContent";
import Landing from "./Landing";
import FeaturedDrinks from "../Drinks/FeaturedDrinks";
import BrunchMenu from "../Menu/BrunchMenu";

export default class Master extends Component{

    render(){


       if(this.props.page==="landing"){
           return(
               <Landing/>
           );
       }
       if(this.props.page==="drinks"){
           return(
               <FeaturedDrinks/>
           );
       }
       else{
           return(
               <div className={"frosted main-content"}>
                   <h1>There was an error. this.props.page is freaking out.</h1>
               </div>
           )
       }
    }
}