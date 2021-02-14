import React from 'react';

const Context = React.createContext('en');

export class LanguageStore extends React.Component {
  state = { langauge: 'en' };

  onLangaugeChange = (lan) => {
    this.setState({ langauge: lan });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLangaugeChange: this.onLangaugeChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
