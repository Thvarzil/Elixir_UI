import React, { Component } from 'react';


export default class Location extends Component{
    render(){
        return(

            <div className={"frosted main-content"}>
                <h1>Here we are!!</h1>
                <iframe id={"map-frame"}
                        title={"map"}
                    width="600"
                    height="450"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDh910CLOzjnQnbIgNZcjyRzy-LXAUosH0
    &q=Elixir+Lounge,Salt+Lake+City,Utah">
                </iframe>
            </div>

        )
    }
}