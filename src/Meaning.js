import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <em>
        <h3>{props.meaning.partOfSpeech}</h3>{" "}
      </em>
      <div className="definition">
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>
      <div className="example">
        <strong>Example: </strong>
        {props.meaning.example}
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
