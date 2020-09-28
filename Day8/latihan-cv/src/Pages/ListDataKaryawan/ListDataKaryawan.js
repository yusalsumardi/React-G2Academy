import React, { Component } from "react";
import NavbarHome from "../../Component/Template/NavbarHome/NavbarHome";
import { Table, Form } from "react-bootstrap";

export default class ListDataKaryawan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      divisions: [],
    };
  }

  componentDidMount() {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const divisions = localStorage.getItem("divisions")
      ? JSON.parse(localStorage.getItem("divisions"))
      : [];
    this.setState({
      users,
      divisions,
    });
  }

  updateData = (username, val) => {
    const { users } = this.state;
    users.forEach((element) => {
      if (username === element.username) {
        element.division = val;
        return;
      }
    });
    localStorage.setItem("users", JSON.stringify(users));
  };

  showTable = () => {
    const { users, divisions } = this.state;
    return users.map((user, idx) => {
      const { name, division, address, username } = user;
      return (
        <tr key={idx + 1}>
          <td>{idx + 1}</td>
          <td>{name}</td>
          <td>
            <Form.Control
              as="select"
              custom
              onChange={this.updateData(username, this.value)}
            >
              <option value="">-- Please Choose -- </option>
              {divisions.map((division) => {
                return (
                  <>
                    <option value={division}>{division.divisionname}</option>
                  </>
                );
              })}
            </Form.Control>
          </td>
          <td>{address}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <NavbarHome />
        <div>
          <h1>List Karyawan</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Division</th>
                <th>Adress</th>
              </tr>
            </thead>
            <tbody>{this.showTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
