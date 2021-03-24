import React from "react";
import Accordion from "./components/Accordion";

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

const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};

export default App;
