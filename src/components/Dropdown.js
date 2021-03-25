import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //we need to set up a manual Event Listner on body element
  //for that we need to define uE, which will run on inital render only,
  //and set up EL
  useEffect(() => {
    //setting manual EL
    const onBodyClick = (event) => {
      //   console.log("CLICK");
      if (ref.current && ref.current.contains(event.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    //cleanup fuction - we need to turn off click listner when DD is removed from the DOM

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  //rendering list of options
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color!</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
