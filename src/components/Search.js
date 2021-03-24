import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  //we may have deafult search term to prevent sesarch on empty string
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  //   console.log(results);

  useEffect(() => {
    //whenever our search term changes, we need to do something...
    //there are three ways to make async code in useEffect
    const search = async () => {
      //making async request
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      //note it should be inside search function
      setResults(data.query.search);
    };

    //we must not search an empty string
    // if (term) {
    //   search();
    // }

    search();
  }, [term]);

  //to diplay list of results
  const renderedResults = results.map((result, index) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
