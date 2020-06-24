import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";

export class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Music", "Cooking"]
    };
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset 1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset 1">
            <Home name={"Max"} age={27} user={user}>
              <p>This is a paragraph!</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;