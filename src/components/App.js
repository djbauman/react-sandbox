import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header  from "./Header";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import MyModal1 from "./MyModal1";
import MyModal2 from "./MyModal2";
import MyModal3 from "./MyModal3";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path={"/screen1"} component={Screen1} />
          <Route path={"/screen2"} component={Screen2} />
          <Route path={"/screen3"} component={Screen3} />
          <Route path={"/action-1"} component={MyModal1} />
          <Route path={"/action-2"} component={MyModal2} />
          <Route path={"/action-3"} component={MyModal3} />
        </Switch>
      </Router>
    );
  }
}

export default App;
