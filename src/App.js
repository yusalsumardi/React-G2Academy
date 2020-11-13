import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterContent from "../src/component/Router";

function App() {
  return (
    <div>
      <Router>
        <RouterContent />
      </Router>
    </div>
  );
}

export default App;
