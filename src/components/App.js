import React from "react";
import { Root } from "./Root";
import { Home } from "./Home";

export class App extends React.Component {

  render() {
    return(
      <Root>
        <Home></Home>
      </Root>
    );
  }
}

export default App;
