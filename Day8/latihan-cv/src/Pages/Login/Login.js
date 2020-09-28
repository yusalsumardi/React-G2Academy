import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import RowInput from "../../Component/Template/rowInput";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      division: "",
      address: "",
      isLogin: false,
    };
  }

  componentDidMount() {
    const users = localStorage.users ? JSON.parse(localStorage.users) : [];

  //   const newuser = {
  //     username: "admin@admin.com",
  //     password: "adminpass",
  //     isLogin: false,
  //   };

  //   users.push(newuser);

  //   localStorage.setItem("users", JSON.stringify(users));
  }

  setValue = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  onLogin = (e) => {
    e.preventDefault();
    let status = false;
    const users = JSON.parse(localStorage.users);
    const { username, password } = this.state;
    // alert(username);
    // alert(password);

    if (username === "") {
      alert("Username must not empty");
      return;
    } else if (password === "") {
      alert("Password must not empty");
      return;
    }

    users.forEach(element => {
      if (username === element.username && password === element.password) {
        alert("Login Success");
        this.setState({
          isLogin: true,
        });
        status = true;
        return;
      }
    });
    if (status==false){
      alert("Username / Password Salah!");
    }
    return;
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="Body_Login">
        <div>
          <h1 className="text-center">Login</h1>
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <RowInput
              name="username"
              type="email"
              label="Username"
              placeholder="Input Username"
              fnSetValue={this.setValue}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <RowInput
              name="password"
              type="password"
              label="Password"
              placeholder="Input Password"
              fnSetValue={this.setValue}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.onLogin}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
