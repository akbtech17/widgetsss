import React, { useState } from "react";

const Accordion = ({ items }) => {
  //setting up state activeIndex - array destructing
  const [activeIndex, setActiveIndex] = useState(null);

  //helper function
  const onTitleCLick = (index) => {
    // console.log("Title clicked " + index);
    setActiveIndex(index);
    //whenever we click, update the curr active indx
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onTitleCLick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
