import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLangaugeChange('en')}
        ></i>
        <i
          className="flag jp"
          onClick={() => this.context.onLangaugeChange('jp')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
