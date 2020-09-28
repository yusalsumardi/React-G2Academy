import React, { Component } from "react";
import NavbarHome from "../../Component/Template/NavbarHome/NavbarHome";
import { Form, Button } from "react-bootstrap";
import RowInput from "../../Component/Template/rowInput";

export default class InputDataKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      address: "",
      division: "",
      isLogin: false,

      users: [],
    };
  }

  componentDidMount() {
    const users = localStorage.users ? JSON.parse(localStorage.users) : [];
    this.setState({
      users,
    });
  }

  setValue = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  inputKaryawan = (e) => {
    e.preventDefault();
    const { username, name, address, division, inLogin, users } = this.state;
    const password = "password" + username;
    this.setState({
      password: password,
      inLogin: false,
    });
    const user = { username, name, address, division, inLogin, password };

    if (username === "") {
      alert("Username must not empty");
      return;
    } else if (name === "") {
      alert("Name must not empty");
      return;
    } else if (address === "") {
      alert("Address must not empty");
      return;
    }

    const isExist = users.some((user) => user.username === username);
    if (isExist) {
      alert("Employee is already exist!");
      return;
    }

    this.saveData("users", user);
    
  };

  saveData = (dataName, data) => {
    let listOfData = localStorage.getItem(dataName)
      ? JSON.parse(localStorage.getItem(dataName))
      : [];
    listOfData.push(data);
    localStorage.setItem(dataName, JSON.stringify(listOfData));
    window.location.reload();
    alert("Success add new employee!");
  };

  render() {
    return (
      <div>
        <NavbarHome />
        <h1>Ini Menu Input Karyawan</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <RowInput
              name="name"
              type="text"
              label="Nama Lengkap"
              placeholder="Input Nama Lengkap"
              fnSetValue={this.setValue}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <RowInput
              name="username"
              type="email"
              label="Username"
              placeholder="Input Username"
              fnSetValue={this.setValue}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="address"
              onChange={(el) => this.setValue(el.target)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.inputKaryawan}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
