import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Component/Template/Footer/Footer";
import Content from "./Component/Template/Content/Content";

function App() {
  return (
    <div className="App">
      <Router>
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
