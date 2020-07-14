import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Root  from "./Root";
import Page1 from "./Page1";
import Page2 from "./Page2";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Root />
        <Switch>
          <Route path={"/page1"} component={Page1} />
          <Route path={"/page2"} component={Page2} />
        </Switch>
      </Router>
    );
  }
}

export default App;
