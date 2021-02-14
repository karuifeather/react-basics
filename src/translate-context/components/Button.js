import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'en' ? 'Submit' : '参加する';
  }

  renderColor(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ langauge }) => this.renderSubmit(langauge)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
