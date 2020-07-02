import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import createBrowserHistory from "../history"

import { Root } from "./Root";
import { Home } from "./Home";
import { User } from "./User";

export class App extends React.Component {
  render() {
    return(
      // <Router history={createBrowserHistory}> /* This seems optional */
      <Router>
        {/* <main> */}
          <Root />
          <Switch>
            <Route path={"/home"} component={Home} />
            <Route path={"/user/:id"} component={User} />
          </Switch>
        {/* </main> */}
      </Router>
    );
  }
}

export default App;
