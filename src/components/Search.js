import React, { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    //whenever our search term changes, we need to do something...
    //there are three ways to make async code in useEffect
    const search = async()=> {
        await axios.get('url');
    };

    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
