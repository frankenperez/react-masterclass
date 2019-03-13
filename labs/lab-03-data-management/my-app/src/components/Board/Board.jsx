import React from 'react';
import axios from 'axios';
import { Card } from '../../components';
import './Board.scss';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      idea: []
    };
    this.switchMode = this.switchMode.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/ideas');
      this.setState({ ideas: response.data});
    } catch (error) {
      console.warn(error);
    }
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
        <div className="Board__grid">
          <div className="NewItem">
            <i className="NewItem__icon">+</i>
            <span>Add new idea</span>
          </div>
          {this.state.ideas && this.state.ideas.reverse().map((idea) =>
            <Card key={idea.id}
              idea={idea}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Board;
