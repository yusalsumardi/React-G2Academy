import React, { Component } from "react";
import NavBarApp from "../../Component/Template/NavBarApp/NavBarApp";
import { Form, Container, Button } from "react-bootstrap";

export default class InputStudent extends Component {
  submitAdd = (e) => {
    e.preventDefault();
    console.log(this.props.state.state);
    const users = {
      username: this.props.state.state.username,
      password: this.props.state.state.password,
      fullname: this.props.state.state.fullname,
      quotes: this.props.state.state.quotes,
      gitlink: this.props.state.state.gitlink,
      isLogin: false,
      role: this.props.state.state.role,
      photolink: this.props.state.state.photolink,
    };

    this.props.fnSaveData("users", users);
  };
  render() {
    return (
      <div>
        <NavBarApp
          fnStatusLogin={this.props.fnStatusLogin}
          fnLogout={this.props.fnLogout}
          statRole={this.props.statRole}
        />
        <Container>
          <h1>Ini input Student</h1>
          <Form>
            <Form.Group controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="fullname"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                onChange={this.props.fnOnChange}
              >
                <option value="">-- Please Choose --</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGroupQuotes">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter GitHub Link"
                name="gitlink"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Form.Group controlId="formGroupQuotes">
              <Form.Label>Photo Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Phono Link"
                name="photolink"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Quotes</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="quotes"
                onChange={this.props.fnOnChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.submitAdd}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
