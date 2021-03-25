import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is front-end JS Framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS Library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating Components.",
  },
];

const options = [
  {
    label: "The Red Color",
    value: "red",
  },
  {
    label: "The Blue Color",
    value: "blue",
  },
  {
    label: "The Green Color",
    value: "green",
  },
];

const App = () => {
  //to keep the track of what is currently selected in our dropdown
  const [selected, setSelected] = useState(options[0]);
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Dropdown
      </button>
      {show ? (
        <Dropdown
          selected={selected}
          onSelectedChange={(option) => setSelected(option)}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
