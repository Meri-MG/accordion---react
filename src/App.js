import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';

import Dropwdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'A color of Red',
    value: 'red',
  },
  {
    label: 'A color of Blue',
    value: 'blue',
  },
  {
    label: 'A shade of green',
    value: 'green',
  },
];

const App = () => {
  const [selected, setSelected] = useState({});
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropwdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
