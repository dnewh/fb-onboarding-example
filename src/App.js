import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/containers/Home';
import Header from './components/containers/Header';
import Profile from './components/containers/Profile';

import './App.css';

class App extends Component {

  // componentWillMount() {
  //   let self = this;
  //   self.props.auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       let gUser = {
  //         displayName: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL
  //       };
  //       self.props.actions.addUser(gUser);
  //     }
  //   })
  // }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    let auth = this.props.auth;
    return (
      <div className="App">
        <Header auth={auth} />
        <Route exact path="/" render={(props) => <Home auth={auth} />} />
        <Route path="/home" render={(props) => <Home auth={auth} />} />
        <Route path="/profile" render={(props) => <Profile auth={auth} />} />
      </div>
    );
  }
}

export default App;
