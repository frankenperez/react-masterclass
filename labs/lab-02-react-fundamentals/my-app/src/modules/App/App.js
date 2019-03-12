import React, { Component } from 'react';
import { Board, Footer, Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Creative Ideas" />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
