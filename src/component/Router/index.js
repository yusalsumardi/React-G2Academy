import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../../pages/Landing";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NavbarTop from "../NavbarTop";
import Footer from "../Footer";
import Home from "../../pages/Home";
import { connect } from "react-redux";
import ActionType from "../../redux/reducer/globalActionType";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  statusLogin = () => {
    return this.props.isLogin;
  };

  componentDidMount() {
    // const admin = {
    //   username: "admin",
    //   password: "admin",
    // };
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    // users.push(admin);
    // localStorage.setItem("users", JSON.stringify(users));
    // this.setState({ users: users });

    this.setState({
      users: users,
    });
  }

  authLogin = (userlogin, e) => {
    e.preventDefault();
    let statuslogin = this.props.isLogin;
    let users = this.state.users;

    users.forEach((element) => {
      if (
        element.username === userlogin.username &&
        element.password === userlogin.password
      ) {
        statuslogin = true;
        // console.log(statuslogin);
      }
    });

    if (statuslogin) {
      this.props.chgStatusLogin();
      alert("Login Success!");
    } else {
      alert("Login Gagal!");
    }
    console.log("setelah Login button Dipencet " + this.props.isLogin);
  };

  saveData = (dataName, data) => {
    let listOfData = localStorage.getItem(dataName)
      ? JSON.parse(localStorage.getItem(dataName))
      : [];
    listOfData.push(data);
    localStorage.setItem(dataName, JSON.stringify(listOfData));
    alert("Success!");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Switch>
          {/* <Route path="/landing">
            <NavbarTop />
            <Landing />
            <Footer />
          </Route>
          <Route path="/login">
            <Login fnAuthLogin={this.authLogin} />
          </Route>
          <Route path="/register">
            <Register state={this} fnSaveData={this.saveData} />
          </Route>
          <Route path="/home">
            <NavbarTop />
            <Home />
          </Route> */}
          <Route exact path="/">
            <NavbarTop />
            <Home />
            {/* <Footer /> */}
          </Route>
        </Switch>
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
