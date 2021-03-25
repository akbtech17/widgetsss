import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

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
  
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
