import React from "react";


 const NumberButton = (props) => {
  return (
    <button onClick={() => {props.handleButtonPress(props.numberData)}}>
      {props.numberData}
    </button>
  );
};

export default NumberButton;