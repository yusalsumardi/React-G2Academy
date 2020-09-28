import React, { Component } from "react";
import Input from "../input";
import { Form } from "react-bootstrap";

class RowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Form.Label>{this.props.label}</Form.Label>
        <Input
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          fnSetValue={this.props.fnSetValue}
        />
      </>
    );
  }
}

export default RowInput;
