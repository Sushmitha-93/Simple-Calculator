import React from "react"; //imr
import "./outputScreenRow.css";

//Stateless Functional Component - sfc
const OutputScreenRow = ({ value }) => {
  return (
    <div className="outputScreenRow">
      <input className="output-screen-row" type="text" readOnly value={value} />
    </div>
  );
};

export default OutputScreenRow;
