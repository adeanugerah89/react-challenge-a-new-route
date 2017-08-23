import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchFood from './components/SearchFood'
import List from './components/List'
import Detail from './components/Detail'
import { BrowserRouter , Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
            <h1>Welcome To ZooFoods</h1>
            <SearchFood></SearchFood>
            <Route exact path="/" component={List} />
            <Route exact path="/Detail/:id" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
