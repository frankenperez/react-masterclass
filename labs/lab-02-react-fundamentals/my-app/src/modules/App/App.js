import React, { Component } from 'react';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header title="Creative Ideas" />
            <p className="Board">
              Board
            </p>
        </div>
    );
  }
}

export default App;
