import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import logo from "../../assets/img/logo/Logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ActionType from "../../redux/reducer/globalActionType";

//State Props

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    this.props.chgStatusLogin();
  };

  render() {
    console.log("ini di Navbar " + this.props.isLogin);
    if (this.props.isLogin) {
      return (
        <div>
          <div
            style={{
              backgroundColor: "transparant",
              padding: 5,
              flexDirection: "row",
              display: "flex",
              position: "absolute",
              width: "100%",
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: 40 }} />
            </Link>
            <div className="classButton">Promo</div>
            <div className="classButton">Gallery</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <MDBBtn
                outline
                color="danger"
                onClick={this.logout}
                type="submit"
              >
                Logout
              </MDBBtn>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div
          style={{
            backgroundColor: "transparant",
            padding: 5,
            flexDirection: "row",
            display: "flex",
            position: "absolute",
            width: "100%",
          }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </Link>
          <div className="classButton">Promo</div>
          <div className="classButton">Gallery</div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <Link className="classButton" to="/login">
              Login
            </Link>
            <Link className="classButton" to="/register">
              Regiser
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

const mapDispacthToProps = (dispatch) => {
  return {
    chgStatusLogin: () => dispatch({ type: ActionType.CHG_STATUSLOGIN }),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(index);
