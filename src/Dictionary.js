import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }

  function Search(event) {
    event.preventDefault();

    let apiKey = "cd7ff0b39233e546tfae64f37ao44b9a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word"
          className="form-control m-3"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary w-100" />
      </form>

      <Results results={results} />
    </div>
  );
}
