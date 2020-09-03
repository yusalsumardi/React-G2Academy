import React, { Component } from "react";
import { Form } from "react-bootstrap";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Form.Control
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          onChange={(el) => this.props.fnSetValue(el.target)}
        />
      </>
    );
  }
}

export default Input;
