import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import logo from "../../assets/img/logo/Logo.png";
import { withRouter, Link } from "react-router-dom";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = "/login";
    this.props.history.push(path);
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitAdd = (e) => {
    e.preventDefault();
    console.log(this.props.state.state);
    const users = this.state;
    this.props.fnSaveData("users", users);
    this.routeChange();
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "#e8ffff",
            borderRadius: 20,
            width: 400,
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: 200, width: 200, paddingTop: 20 }}
            />
            <h1 style={{ fontWeight: "bold" }}>Register</h1>
          </div>
          <div
            style={{
              marginLeft: 50,
              marginRight: 50,
            }}
          >
            <div>
              <MDBInput
                label="New Username"
                icon="user-plus"
                name="username"
                onChange={this.setValue}
              />
            </div>
            <div>
              <MDBInput
                label="Your Full Name"
                icon="user"
                name="fullname"
                onChange={this.setValue}
              />
            </div>
            <div>
              <MDBInput
                label="Your Email"
                type="email"
                icon="envelope"
                name="email"
                onChange={this.setValue}
              />
            </div>
            <div>
              <MDBInput
                label="Your Phone Number"
                icon="phone"
                name="phonenumber"
                onChange={this.setValue}
              />
            </div>
            <div>
              <MDBInput
                label="Your password"
                type="password"
                icon="key"
                name="password"
                onChange={this.setValue}
              />
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MDBBtn
              color="primary"
              outline
              rounded
              type="submit"
              onClick={this.submitAdd}
            >
              Register
            </MDBBtn>
            <p
              style={{
                fontSize: 12,
                color: "#0080c0",
                marginBottom: 0,
                marginTop: 20,
              }}
            >
              Sudah punya akun JALAN JALAN CUY?.
            </p>
            <Link to="/login">
              <p style={{ fontSize: 12 }}>Login</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(index);
