import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBarApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.fnStatusLogin());
    // console.log(this.props.statRole);
    return (
      <div>
        <Navbar
          className="bg-light justify-content-between"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand as={Link} to="/home">
            Student Apps
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {this.props.fnStatusLogin() && this.props.statRole === "teacher" ? (
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/inputstudent">
                  Input Student
                </Nav.Link>
              </Nav>
            ) : null}
            {!this.props.fnStatusLogin() ? (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/home" onClick={this.props.fnLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
