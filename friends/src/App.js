import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/Auth/PrivateRoute';
import "./App.css";
import Login from "./components/Auth/Login";
import Friends from './components/Friends'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
        <PrivateRoute path="/add-friend" component={AddFriend} />
      </header>
    </div >
  );
}

export default App;
