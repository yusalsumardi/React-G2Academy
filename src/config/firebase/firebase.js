import app from "firebase/app";
import "firebase/auth";

const readConfig = (key) => {
  return process.env["REACT_APP_" + key];
};

const config = {
  apiKey: readConfig("apiKey"),
  authDomain: readConfig("authDomain"),
  databaseURL: readConfig("databaseURL"),
  projectId: readConfig("projectId"),
  storageBucket: readConfig("storageBucket"),
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  createUserFirebase = (obj) => {
    return this.auth.createUserWithEmailAndPassword(obj.username, obj.password);
  };
}

export default Firebase;
