import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { NewButton } from "./NewButton";

export const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Dropdown as={ButtonGroup}>
        <Button variant="success">New</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">New 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">New thing 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">New thing 3</Dropdown.Item>
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
  );
};