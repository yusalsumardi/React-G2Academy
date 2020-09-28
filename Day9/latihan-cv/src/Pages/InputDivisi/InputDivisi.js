import React, { Component } from "react";
import NavbarHome from "../../Component/Template/NavbarHome/NavbarHome";
import { Form, Button } from "react-bootstrap";
import RowInput from "../../Component/Template/rowInput";

export default class InputDivisi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionname: "",
      divisions: [],
    };
  }

  componentDidMount() {
    const divisions = localStorage.getItem("divisions") ? JSON.parse(localStorage.getItem("divisions")) : [];
    this.setState({
      divisions,
    });
  }

  setValue = (el) => {
    this.setState({
      [el.name]: el.value,
    });
  };

  inputDivision = (e) => {
    e.preventDefault();
    const { divisionname, divisions } = this.state;
    const newdivision = { divisionname };

    if (divisionname === "") {
      alert("Username must not empty");
      return;
    }

    const isExist = divisions.some((newdivision) => newdivision.divisionname === divisionname);
    if (isExist) {
      alert("Division is already exist!");
      return;
    }

    this.saveData("divisions", newdivision);
    
  };

  saveData = (dataName, data) => {
    let listOfData = localStorage.getItem(dataName)
      ? JSON.parse(localStorage.getItem(dataName))
      : [];
    listOfData.push(data);
    localStorage.setItem(dataName, JSON.stringify(listOfData));
    window.location.reload();
    alert("Success add new Division!");
  };

  render() {
    return (
      <div>
        <NavbarHome />
        <h1>Ini Menu Input Division</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <RowInput
              name="divisionname"
              type="text"
              label="Nama Divisi"
              placeholder="Input Nama Divisi"
              fnSetValue={this.setValue}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.inputDivision}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
