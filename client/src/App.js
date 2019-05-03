
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar";
import Books from "./pages/Books";
import Header from "./components/Header"



function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Header />
        <Switch>
          <Route exact path="/" component={Books}/>
          <Route exact path="/saved" component={Books}/>
        </Switch>
    
      </div>
    </Router>
  )
}

export default App;