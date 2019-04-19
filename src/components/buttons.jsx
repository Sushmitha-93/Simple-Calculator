import React from "react"; //imr
import "./buttons.css";

//Stateless functional component - sfc
const Buttons = props => {
  return (
    <button
      className={getButtonClass()}
      style={{ minWidth: props.minWidth }}
      onClick={() => {
        props.onInputClick(props.label);
      }}
    >
      {props.label === "Delete" ? <i class="fas fa-backspace" /> : props.label}
    </button>
  );

  function getButtonClass() {
    let buttonClass = "btn btn-secondary calculator-buttons ";
    buttonClass += props.class;
    return buttonClass;
  }
};

export default Buttons;
