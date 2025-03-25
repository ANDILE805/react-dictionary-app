import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
