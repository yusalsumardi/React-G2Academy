import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import logo from "../../assets/img/logo/Logo.png";
import { connect } from "react-redux";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitAdd = (e) => {
    e.preventDefault();
    const userlogin = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.fnAuthLogin(userlogin, e);
  };

  render() {
    console.log("Ini di hal Login " + this.props.isLogin);
    let statuslogin = this.props.isLogin;
    if (statuslogin) {
      return <Redirect as={Link} to="/home" />;
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
            <h1 style={{ fontWeight: "bold" }}>Login</h1>
          </div>
          <div
            style={{
              marginLeft: 50,
              marginRight: 50,
            }}
          >
            <div>
              <MDBInput
                label="Username"
                icon="user"
                onChange={this.setValue}
                name="username"
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
              onClick={this.submitAdd}
              type="submit"
              style={{ width: 150, marginBottom: 20 }}
            >
              Login
            </MDBBtn>
            <p style={{ fontSize: 12, color: "#0080c0", marginBottom: 0 }}>
              Bergabunglah dengan JALAN JALAN CUY sekarang juga.
            </p>
            <Link to="/register">
              <p style={{ fontSize: 12 }}>Register</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(index);
