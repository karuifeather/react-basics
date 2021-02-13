import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Nepali',
    value: 'ne',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text</label>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
