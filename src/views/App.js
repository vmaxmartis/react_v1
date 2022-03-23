import React from 'react';
import Form from './example/form';
import Nav from './nav/Nav';
import Home from './Home';
import Todoapp from './Todo/Todoapp';
import '../styles/App.css'
import { BrowserRouter,Switch, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <header className="">
        <Nav/>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/example">
              <Form/>
            </Route>
            <Route path="/todo">
              <Todoapp/>
            </Route>
          </Switch>
      </header>
      
    </div>
  </BrowserRouter>
    );
}
export default App

