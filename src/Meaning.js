import React from "react";
import "./Meaning.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">
        <Examples examples={props.meaning.example} />
      </div>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
