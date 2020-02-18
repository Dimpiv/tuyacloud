import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';
import AuthPage from "./components/auth/authPage";
import DashboardPage from "./components/dashboard";

export default function App() {
  return (
        <Router>
            <div className="App">
                <a href={"/"}>Auth </a>
                <a href={"/dashboard"}>dasboard</a>
                <Switch>
                    <Route exact path={"/"} component={AuthPage}/>
                    <Route exact path={"/dashboard"} component={DashboardPage}/>
                </Switch>
            </div>
        </Router>

  );
}

