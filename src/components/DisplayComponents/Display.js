import React, {useState} from "react";

const Display = () => {
  const [display, setDisplay] = useState(0);
  
  return <div className="display">{display}</div>;
};


export default Display;