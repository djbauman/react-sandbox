import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import createBrowserHistory from "../history"

import { Root } from "./Root";
import { Home } from "./Home";
import { User } from "./User";

export class App extends React.Component {
  render() {
    return(
      <Router history={createBrowserHistory}>
        {/* <main> */}
          <Root />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
          </Switch>
        {/* </main> */}
      </Router>
    );
  }
}

export default App;
