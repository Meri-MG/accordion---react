import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Translate from './components/Translate';
import Convert from './components/Convert';

// import Dropwdown from './components/Dropdown';

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
  // const [selected, setSelected] = useState({});
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle the Dropdown
      </button>
      {showDropdown ? (
        <Dropwdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Translate />
    </div>
  );
};

export default App;
