import React, { Component } from 'react';

import './App.css';
import Welcome from './Welcome.js'
class App extends Component {
  render() {
    return (
      <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      </div>
    );
  }
}

export default App;
