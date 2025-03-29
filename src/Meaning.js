import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <em>
        <h3>{props.meaning.partOfSpeech}</h3>{" "}
      </em>
      ;<p>{props.meaning.definition}</p>;<p>{props.meaning.definition}</p>
    </div>
  );
}
