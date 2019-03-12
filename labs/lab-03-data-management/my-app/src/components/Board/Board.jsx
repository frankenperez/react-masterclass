import React from 'react';
import './Board.scss';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
    this.switchMode = this.switchMode.bind(this);
  }

  switchMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <div className={`Board Board--${this.state.darkMode ? 'dark' : 'light'}`}>
        <button className="Board__switcher" onClick={this.switchMode}>
          Switch Mode
        </button>
      </div>
    );
  }
}

export default Board;
