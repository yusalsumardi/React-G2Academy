import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Profile.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="display-6 text-center Contact Subjudul" id="Contact">
          Contact
        </h1>
        <div className="text-center contactprop">
          <p>Yusal Sumardi</p>
          <p>Yusalsumardi@gmail.com</p>
          <p>+62 82260634270</p>
        </div>
        <div className="foarmcontact">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Send Email to Me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
