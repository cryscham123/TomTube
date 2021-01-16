import React, { Component } from 'react';
import './app.scss';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import Details from "./routes/details";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Nav />
          <Route path="/:id" exact={true} component={Home} />
          <Route path="/details/:id" component={Details} />
        </HashRouter>
        <footer></footer>
    </>
    );
  }
}

export default App;
