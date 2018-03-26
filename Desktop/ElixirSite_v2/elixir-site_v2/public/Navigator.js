import App from "../src/App"

$("#navButton").on("click", function(){
    console.log("button clicked");
    App.setState({
        page: this.val()
    });
});