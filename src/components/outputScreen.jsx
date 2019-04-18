import React from "react"; //imr
import OutputScreenRow from "./outputScreenRow";

//Stateless functional component - sfc
const OutputScreen = props => {
  return (
    <div className="outScreen">
      <OutputScreenRow value={props.question} />
      <OutputScreenRow value={props.answer} />
    </div>
  );
};

export default OutputScreen;
