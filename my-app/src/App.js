import React, { Component } from 'react';
import { createStore } from 'redux'

// Espera un parámetro, reducers
const store = createStore(() => {}, );

class App extends Component {
  constructor() {
    super();
    this.state = { city: ''};
  }

  onClick() {
    this.setState({ city: 'Lima'});
    store.dispatch({ type: 'City', value: 'Lima' })
  }

  render() {
    // Se pasa un action como parámetro
    return (
      <div className="App">
        Hola Mundo
        <button onClick={this.onClick()}>Click</button>
      </div>
    );
  }
}

export default App;
