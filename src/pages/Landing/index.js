import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import NavbarTop from "../../component/NavbarTop";
import { connect } from "react-redux";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let statuslogin = this.props.isLogin;
    if (statuslogin) {
      return <Redirect as={Link} to="/home" />;
    }
    return (
      <div>
        <NavbarTop
          fnStatusLogin={this.props.fnStatusLogin}
          fnLogout={this.props.fnLogout}
        />
        <div
          style={{
            background: `url(https://images.unsplash.com/photo-1515888368305-5a7eba31b4e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2136&q=80)`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            display: "flex",
            boxShadow: "0px 20px 50px rgba(0,0,0,0.2)",
            top: 0,
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: "white",
              textAlign: "center",
              textShadow: "3px 3px 5px #000",
            }}
          >
            JALAN JALAN CUY
            <div
              style={{
                fontSize: 18,
                color: "white",
                textAlign: "center",
                textShadow: "3px 3px 5px #000",
              }}
            >
              Jalan jalan lah bray, Ngoding mulu, Bosen kali
            </div>
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

export default connect(mapStateToProps)(Landing);
