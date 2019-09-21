import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);


  return (
    <div>
      { operatorState.map((data, index) => (
        <OperatorButton key ={index} operatorData={data.char} />
      ))}
    </div>
  );
};

export default Operators;
