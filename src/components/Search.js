import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  //we may have deafult search term to prevent sesarch on empty string
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  //1st useEffect to watch over Term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      //CF to clear timeout
      clearTimeout(timerId);
    };
  }, [term]);

  //2nd useEffect to watch over debouncedTerm
  useEffect(() => {
    //only here we will make requests
    //there are three ways to make async code in useEffect
    const search = async () => {
      //making async request
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      //note it should be inside search function
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  //to diplay list of results
  const renderedResults = results.map((result, index) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
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
