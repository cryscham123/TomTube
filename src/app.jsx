import React, { Component } from 'react';
import './app.scss';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import Details from "./routes/details";
import Search from "./routes/search";
import Nav from "./nav";

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Nav />
          <Route path="/" exact={true} component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/search/:id" component={Search} />
        </HashRouter>
        <footer></footer>
    </>
    );
  }
}

export default App;
