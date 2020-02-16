import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from "react-router-dom"
import './App.css';
import AuthPage from "./components/auth/authPage";
import DashboardPage from "./components/dashboard";

export default function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={"/auth"} component={AuthPage}/>
                <Route path={"/dashboard"} component={DashboardPage}/>
            </Switch>
        </Router>
    </div>
  );
}

