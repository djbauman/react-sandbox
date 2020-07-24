import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { NewButton } from "./NewButton";

export default class Header extends Component {
  render() {
    return (
      <div className="my-header">
        <Navbar bg="light" expand="lg">
          <NewButton />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Root</Link></Nav.Link>
              <Nav.Link><Link to="/screen1">Screen 1</Link></Nav.Link> {/*Figure out how to do without this nested Link. (React router NavLink?)*/}
              <Nav.Link><Link to="/screen2">Screen 2</Link></Nav.Link>
              <Nav.Link><Link to="/screen3">Screen 3</Link></Nav.Link>
              {/* <Nav.Link href="/page1">Page 1</Nav.Link>
              <Nav.Link href="/page2">Page 2</Nav.Link> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

};