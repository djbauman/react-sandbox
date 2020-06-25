import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    }
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    }); 
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset 1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset 1">
            <Home 
            name={"Max"} 
            initialAge={27} 
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
