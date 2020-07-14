import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { NewButton } from "./NewButton";

export const Header = (props) => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Dropdown as={ButtonGroup}>
          <Button variant="success">New</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/action-1">New thing 1</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/action-2">New thing 2</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/action-3">New thing 3</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};