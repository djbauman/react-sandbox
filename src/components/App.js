import React from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from "../history"

import { Root } from "./Root";
import { Home } from "./Home";
import { User } from "./User";

export class App extends React.Component {
  render() {
    return(
      <Router history={createBrowserHistory}>
        <Route path={"/"} component={Root}>
          <Route path={"user"} component={User} />
          <Route path={"home"} component={Home} />
        </Route>
        <Route path={"home"} component={Home} />
      </Router>
    );
  }
}

export default App;
