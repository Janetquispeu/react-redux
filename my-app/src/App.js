import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hola Mundo
      </div>
    );
  }
}
