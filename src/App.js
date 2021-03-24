import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import SignUPP from "./pages/SignUPP";





function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/sign-up" component={SignUPP} exact/> 
        
       
        
         
      </Switch>
      </Router>
  );
}

export default App;
