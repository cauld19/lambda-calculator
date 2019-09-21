import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operator-number">
      {props.operatorData}
    </button>
  );
};

export default OperatorButton;
