import React, {useState} from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);


  return (
    <div>
      { specialState.map((data, index) => (
        <SpecialButton key ={index} specialData={data} />
      ))}
    </div>
  );
};

export default Specials;
