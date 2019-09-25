import React, {useState} from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);


  return (
    <div>
      { specialState.map((data) => (
        <SpecialButton key={data} specialData={data} handleButtonPress={props.handleButtonPress} />
      ))}
    </div>
  );
};

export default Specials;
