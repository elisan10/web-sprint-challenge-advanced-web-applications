import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import EditMenu from "./components/EditMenu";
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
        {/* <PrivateRoute
          path="/bubbles/:id"
          render={(props) => {
            return (
              <ColorList
                {...props}
                // colors={colorList}
                // updateColors={setColorList}
              />
            );
          }}
        /> */}
        {/* <PrivateRoute path="/bubbles/:id" component={EditMenu} /> */}
      </div>
    </Router>
  );
}

export default App;
