import React from "react"; //imr
import "./buttons.css";

//Stateless functional component - sfc
const Buttons = props => {
  return (
    <button
      className="btn btn-secondary calculator-buttons"
      style={{ minWidth: props.minWidth }}
      onClick={() => {
        props.onInputClick(props.label);
      }}
    >
      {props.label === "Delete" ? <i class="fas fa-backspace" /> : props.label}
    </button>
  );
};

export default Buttons;
