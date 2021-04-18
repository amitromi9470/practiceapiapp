import React from 'react';
import './App.css';
import Heading from './Heading/Heading';
import About from './About/About';
import Nav from './Nav/Nav';
import Shop from './Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <h1>Practice app</h1>
        <Heading name="Practice" />
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <Switch>
          <Route path="/About" exact component={About} />
          <Route path="/Shop" exact component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
