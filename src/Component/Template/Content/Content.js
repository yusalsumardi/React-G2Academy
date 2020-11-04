import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import Home from "../../../Pages/Home/Home";
import InputStudent from "../../../Pages/InputStudent/InputStudent";
import { connect } from "react-redux";
import { FirebaseContext } from "../../../config/firebase";
import ActionType from "../../../redux/reducer/globalActionType";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      role: "",
      password: "",
      fullname: "",
      quotes: "",
      gitlink: "",
      photolink: "",
      users: [],
      isLogin: false,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logout = () => {
    this.props.chgStatusLogin();
  };

  statusLogin = () => {
    return this.props.isLogin;
  };

  componentDidMount() {
    // this.props.gantiAlamat();

    // const admin = {
    //   username: "admin",
    //   password: "admin",
    // };
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    // users.push(admin);
    // localStorage.setItem("users", JSON.stringify(users));
    this.SetUsers(users);

    console.log(this.state);
    console.log(users);
  }

  SetUsers = (users) => {
    this.setState({
      users: users,
    });
  };

  authLogin = (user, users) => {
    // const statusLogin = users.some((item) => {
    //   if (item.username === user.username && item.password === user.password) {
    //     console.log(item.fullname);
    //     this.setState({
    //       username: item.username,
    //       role: item.role,
    //       password: item.password,
    //       fullname: item.fullname,
    //       quotes: item.quotes,
    //       gitlink: item.gitlink,
    //       photolink: item.photolink,
    //     });
    //   }
    //   return true;
    // });
    let statusLogin = false;
    users.forEach((element) => {
      if (
        element.username === user.username &&
        element.password === user.password
      ) {
        // console.log(element.fullname);
        this.setState({
          username: element.username,
          role: element.role,
          password: element.password,
          fullname: element.fullname,
          quotes: element.quotes,
          gitlink: element.gitlink,
          photolink: element.photolink,
        });
        statusLogin = true;
      }
    });

    if (statusLogin) {
      this.props.chgStatusLogin();
      alert("Login Success!");
    } else {
      alert("Login Gagal!");
    }
    // console.log(this.state);
  };

  saveData = (dataName, data) => {
    let listOfData = localStorage.getItem(dataName)
      ? JSON.parse(localStorage.getItem(dataName))
      : [];
    listOfData.push(data);
    localStorage.setItem(dataName, JSON.stringify(listOfData));
    // window.location.reload();
    alert("Success!");
  };

  render() {
    // console.log(this.props.address);
    return (
      <div style={{ marginBottom: "60px" }}>
        <Switch>
          <Route path="/login">
            <FirebaseContext.Consumer>
              {(firebase) => (
                <Login
                  state={this}
                  fnAuthLogin={this.authLogin}
                  fnOnChange={this.onChange}
                  fnStatusLogin={this.statusLogin}
                  fnLogout={this.logout}
                  {...this.props}
                  firebase={firebase}
                />
              )}
            </FirebaseContext.Consumer>
          </Route>
          <Route path="/home">
            <Home
              state={this}
              fnStatusLogin={this.statusLogin}
              statRole={this.state.role}
            />
          </Route>
          <Route path="/inputstudent">
            {this.state.isLogin ? (
              <InputStudent
                state={this}
                fnOnChange={this.onChange}
                fnSaveData={this.saveData}
                fnStatusLogin={this.statusLogin}
                fnLogout={this.logout}
                statRole={this.state.role}
              />
            ) : (
              <Redirect to="/home" />
            )}
          </Route>
          <Route exact path="/">
            <Home
              state={this}
              fnStatusLogin={this.statusLogin}
              statRole={this.state.role}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

//=====================================REDUX=============================

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

export default connect(mapStateToProps, mapDispacthToProps)(Content);
