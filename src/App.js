import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import Article from './components/pages/Article';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/academics" component={Article} />
      </div>
    </BrowserRouter>
  );
}

export default App;
