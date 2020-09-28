import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../../Pages/Login/Login";
import Home from "../../../Pages/Home/Home";
import InputDataKaryawan from "../../../Pages/InputDataKaryawan/InputDataKaryawan";
import InputDivisi from "../../../Pages/InputDivisi/InputDivisi";
import ListDataKaryawan from "../../../Pages/ListDataKaryawan/ListDataKaryawan";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/inputdatakaryawan">
            <InputDataKaryawan />
          </Route>
          <Route path="/inputdivisi">
            <InputDivisi />
          </Route>
          <Route path="/listkaryawan">
            <ListDataKaryawan />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}
