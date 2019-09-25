import React from "react";

const SpecialButton = (props) => {
  return (
    <button id={props.specialData} onClick={() => {props.handleButtonPress(props.specialData)}}>
      {props.specialData}
    </button>
  );
};

export default SpecialButton;
