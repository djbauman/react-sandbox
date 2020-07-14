import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "./Header";
import Home from "./Home";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
