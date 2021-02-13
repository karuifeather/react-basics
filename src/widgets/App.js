import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

const items = [
  {
    title: 'Cancer Personality Traits',
    content:
      'There are many good and bad Cancer traits. On the good side, the Cancer personality is loyal, protective, intuitive, and caring. On the bad side, Cancers are overly sensitive, moody, and vindictive.',
  },
  {
    title: 'Gemini Personality Traits',
    content:
      "The Gemini personality is very fun, but, like every sign, Geminis have weaknesses. Their strengths are that they're adaptable, outgoing, and intelligent—there's never a dull moment with a Gemini. However, their weaknesses are that they're indecisive, impulsive, unreliable, and nosy—be careful telling a Gemini your deepest darkest secrets.",
  },
  {
    title: 'Scorpio Personality Traits',
    content:
      "Scorpios are extremely deep and emotional people, and are intense in all things they do. They're natural leaders and can be very serious; Scorpios are one of the most interesting signs because of their intensity, and there are some key Scorpio characteristics to be aware of that make them stand apart.",
  },
];

const options = [
  {
    label: 'Color Red',
    value: 'red',
  },
  {
    label: 'Chosen Blue',
    value: 'blue',
  },
  {
    label: 'Shade of Black',
    value: 'black',
  },
];

export default App;
