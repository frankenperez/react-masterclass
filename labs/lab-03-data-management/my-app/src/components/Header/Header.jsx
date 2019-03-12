import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
      return (
        <div className="Header">
          <h1 className="Header__title">{this.props.title}</h1>
        </div>
      );
  }
}

export default Header;
