import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    //Task List:
    //1. Render BubblePage as a PrivateRoute
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
