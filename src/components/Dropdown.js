import React from 'react';

const Dropdown = ({options}) => {

    //rendering list of options
    const renderedOptions = options.map(option => {
        return (
            <div key={option.value} className="item">
                {option.label}
            </div>
        );
    })

    return (
        <h1>{renderedOptions}</h1>
    );
};

export default Dropdown;