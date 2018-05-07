import React, { Component } from 'react';

import Home from './components/js/Home';

import './App.css';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
