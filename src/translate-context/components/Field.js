import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    let text;

    if (this.context.langauge === 'en') {
      text = 'Name';
    } else {
      text = '名前';
    }

    // const text = this.context.language === 'en' ? 'Name' : '名前';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
