import React from 'react';
import './Footer.scss';

const defaultProps = {
  footerInfo: 'My React App'
};

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="Footer">
        <p className="Footer__info">
          {this.props.footerInfo}
        </p>
      </div>
    );
  }
}

Footer.defaultProps = defaultProps;
export default Footer;
