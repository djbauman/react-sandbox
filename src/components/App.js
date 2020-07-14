import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "./Header";
import { Root } from "./Root";
import Home from "./Home";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path={"/"} component={Root} />
            <Route path={"/home"} component={Home} />
            {/* <Route path={"/user/:id"} component={User} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
