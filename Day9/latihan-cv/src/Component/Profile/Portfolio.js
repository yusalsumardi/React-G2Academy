import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Profile.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1 className="display-6 text-center Portfolio Subjudul" id="Portfolio">
          Portfolio
        </h1>
        <div class="boxportofolio">
          <div class="box">
            <Image
              src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
              className="thumb imgbox"
              alt=""
            />
          </div>
          <div className="box">
            <Image
              src="https://images.unsplash.com/photo-1598469089688-d393543d7b22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
              className="thumb imgbox"
              alt=""
            />
          </div>
          <div className="box">
            <Image
              src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className="thumb imgbox"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
