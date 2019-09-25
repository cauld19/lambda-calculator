import React from "react";

const OperatorButton = (props) => {
  return (
    <button  id={props.operatorData} onClick={() => {props.handleButtonPress(props.operatorData)}}>
      {props.operatorData}
    </button>
  );
};

export default OperatorButton;
