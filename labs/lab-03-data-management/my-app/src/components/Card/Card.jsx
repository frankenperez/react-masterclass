import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render(){
    return (
      <div className="Card">
        <p className="Card__title">{this.props.idea.title}</p>
        <p className="Card__detail">{this.props.idea.detail}</p>
      </div>
    );
  }
}

export default Card;
