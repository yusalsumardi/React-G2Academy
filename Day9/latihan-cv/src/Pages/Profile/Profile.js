import React, { Component } from "react";
import { Image } from "react-bootstrap";
import NavBarHome from "../../Component/NavbarHome";
import About from "../../Component/Profile/About";
import Contact from "../../Component/Profile/Contact";
import Portfolio from "../../Component/Profile/Portfolio";
import Footer from "../../Component/Footer";
import Img from "../../asset/img/foto.png";

export default class Profile extends Component {
  render() {
    return (
      <>
        {/* NavBar */}
        <NavBarHome />

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <Image
              src={Img}
              roundedCircle
              className="foto d-block mx-auto img-fluid"
              height="200"
              width="200"
            />
            <h1 className="display-4 text-center">Yusal Sumardi</h1>
            <p className="lead text-center">
              IT NETWORKS | PROGRAMMER | DESIGNER
            </p>
          </div>
        </div>

        <About />

        <Portfolio />

        <Contact />

        <Footer />
      </>
    );
  }
}
