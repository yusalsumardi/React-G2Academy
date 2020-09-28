import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavbarHome extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="bg-light justify-content-between"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/inputdatakaryawan">
                Input Karyawan
              </Nav.Link>
              <Nav.Link as={Link} to="/inputdivisi">
                Input Divisi
              </Nav.Link>
              <Nav.Link as={Link} to="/listkaryawan">
                List Karyawan
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
