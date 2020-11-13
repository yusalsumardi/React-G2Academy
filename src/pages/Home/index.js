import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import NavbarTop from "../../component/NavbarTop";
import { connect } from "react-redux";
// import Axios from "axios";
import { Slide } from "react-slideshow-image";
import "./style.css";
import "react-slideshow-image/dist/styles.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   Axios.get("test.api.amadeus.com");
  // }

  render() {
    console.log("ini dari hal Home " + this.props.isLogin);
    if (this.props.isLogin) {
      return (
        <div>
          <div>
            <NavbarTop />
          </div>
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              width: "100%",
              height: 500,
              display: "flex",
              flexDirection: "coloumn",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 60,
                color: "white",
                textAlign: "center",
                textShadow: "3px 3px 5px #000",
              }}
            >
              MAU KEMANA LIBURAN NANTI?
            </div>
          </div>
          <div style={{ margin: 50 }}>
            <Slide easing="ease" arrows={false}>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                  <div
                    style={{
                      fontSize: 60,
                      color: "white",
                      textAlign: "center",
                      textShadow: "3px 3px 5px #000",
                      // position: "absolute",
                    }}
                  >
                    Papua?
                  </div>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                  <div
                    style={{
                      fontSize: 60,
                      color: "white",
                      textAlign: "center",
                      textShadow: "3px 3px 5px #000",
                      // position: "absolute",
                    }}
                  >
                    Bandung?
                  </div>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                  <div
                    style={{
                      fontSize: 60,
                      color: "white",
                      textAlign: "center",
                      textShadow: "3px 3px 5px #000",
                      // position: "absolute",
                    }}
                  >
                    Bali?
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect as={Link} to="/landing" />
      </div>
    );
  }
}

const slideImages = [
  "https://images.unsplash.com/photo-1594034280179-7eb9c0784e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2143&q=80",
  "https://images.unsplash.com/photo-1582581204705-b067fd8ea391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2017&q=80",
  "https://images.unsplash.com/photo-1502091409938-6e32777d8707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",
];

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(index);
