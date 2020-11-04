import React, { Component } from "react";
import NavBarApp from "../../Component/Template/NavBarApp/NavBarApp";
import { Button, Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
// import { FirebaseContext } from "../../config/firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showText = () => {
    return "Test";
  };
  showCardStudent = () => {
    const { fullname, quotes, gitlink, photolink } = this.props.state.state;
    return (
      <Card style={{ width: "300px", padding: "8px", margin: "10px" }}>
        <Card.Img
          variant="top"
          src={photolink}
          style={{
            width: "284px",
            height: "300px",
          }}
        />
        <Card.Body>
          <Card.Title>{fullname}</Card.Title>
          <Card.Text>{quotes}</Card.Text>
          <Button variant="primary" href={gitlink}>
            {/* <Redirect to={gitlink} />; */}
            Go to GitHub
          </Button>
        </Card.Body>
      </Card>
    );
  };

  showCardAdmin = () => {
    const users = this.props.state.state.users;
    return users.map((user, idx) => {
      const { fullname, quotes, gitlink, photolink } = user;
      return (
        <Card style={{ width: "300px", padding: "8px", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={photolink}
            style={{
              width: "284px",
              height: "300px",
            }}
          />
          <Card.Body>
            <Card.Title>{fullname}</Card.Title>
            <Card.Text>{quotes}</Card.Text>
            <Button variant="primary" href={gitlink}>
              {/* <Redirect to={gitlink} />; */}
              Go to GitHub
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        {/* <FirebaseContext.Consumer>{this.showText}</FirebaseContext.Consumer>
        <Button variant="primary" onClick={this.props.gantiAlamatJauh}>
          Jauh
        </Button>
        <Button variant="primary" onClick={this.props.gantiAlamatDeket}>
          Dekat
        </Button> */}
        <NavBarApp
          fnStatusLogin={this.props.fnStatusLogin}
          fnLogout={this.props.fnLogout}
          statRole={this.props.statRole}
        />

        <Container>
          {!this.props.state.state.isLogin ? (
            <h1>Ini Home belum login</h1>
          ) : (
            <h1>Welcome {this.props.state.state.fullname}</h1>
          )}

          <Container style={{ display: "flex", justifyContent: "center" }}>
            {this.props.state.state.role === "student"
              ? this.showCardStudent()
              : this.showCardAdmin()}
          </Container>
        </Container>
      </div>
    );
  }
}

const stateToProps = (state) => ({
  address: state.address,
});

const actionJauh = () => ({
  type: "gantiAlamat",
  payload: "Jauh",
});

const actionDeket = () => ({
  type: "gantiAlamat",
  payload: "Deket",
});

const dispatchToProps = (dispatch) => ({
  gantiAlamatDeket: () => dispatch(actionDeket()),
  gantiAlamatJauh: () => dispatch(actionJauh()),
});

export default connect(stateToProps, dispatchToProps)(Home);
