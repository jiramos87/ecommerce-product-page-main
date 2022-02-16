import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import injectContext from './store/AppContext'
import Collections from './views/Collections'
import Contact from './views/Contact'
import About from './views/About'
import Women from './views/Women'
import Men from './views/Men'

const App = () => {
  const basename = process.env.BASENAME || ""

  return (
    <div className="App">
      <Router basename={basename}>
        <div className="row mt-0 pt-0">
          <Switch>
              <Route exact path="/">
                <Collections />
              </Route>
              <Route exact path="/collections">
                <Collections />
              </Route>
              <Route exact path="/men">
                <Men />
              </Route>
              <Route exact path="/women">
                <Women />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
        </div>
      </Router >
    </div>
  )
}

export default injectContext(App);
