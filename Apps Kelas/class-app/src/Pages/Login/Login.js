import React, { Component } from "react";
import NavBarApp from "../../Component/Template/NavBarApp/NavBarApp";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      address: "",
    };
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUserFirebase = (obj) => {
    obj.preventDefault();
    // this.props.firebase
    //   .createUserFirebase(this.state)
    //   .then((e) => alert(e.massage))
    //   .catch((e) => alert(e.massage));
    const Users = firebase.database();
    const ref = Users.ref("Users");
  };

  componentDidMount() {
    const Users = firebase.database();
    const ref = Users.ref("/Users");
    ref.once("value", (data) => {
      const Data = data.val();
      console.log(Data);
    });
  }

  submitAdd = (e) => {
    e.preventDefault();
    // console.log(this.props.state.state);
    const users = {
      username: this.props.state.state.username,
      password: this.props.state.state.password,
    };
    this.props.fnAuthLogin(users, this.props.state.state.users);
  };

  render() {
    if (this.props.state.state.isLogin) {
      return <Redirect as={Link} to="/home" />;
    }

    return (
      <div>
        <NavBarApp
          fnStatusLogin={this.props.fnStatusLogin}
          fnLogout={this.props.fnLogout}
          statRole={this.props.statRole}
        />
        <div>
          <h1 className="text-center">Login</h1>
        </div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="username"
                // onChange={this.props.fnOnChange}
                onChange={this.setValue}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                // onChange={this.props.fnOnChange}
                onChange={this.setValue}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input Alamat"
                name="address"
                // onChange={this.props.fnOnChange}
                onChange={this.setValue}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.submitAdd}
              style={{ marginRight: "10px" }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.addUserFirebase}
              style={{ marginLeft: "10px" }}
            >
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
