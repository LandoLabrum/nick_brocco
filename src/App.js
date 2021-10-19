import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from "./templates/Form";
import Home from "./templates/Home";
import Logo from "./media/logo.png"
export default function App() {
  return (
    <Router>
      <div>
        <nav >
        <div className="nav-wrapper">

        <Link className="brand-logo center" to="/">
          <img src={Logo}/>
          </Link>
          <ul>
            <li>
              
              {/* <i className="material-icons">home</i>
              </Link> */}

              </li>
              {/* <Link to="/form">Form</Link> */}
          </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

