import React from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed
import { isTemplateElement } from "@babel/types";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="operator-buttons-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
     {operators.map(operator => <OperatorButton operator={operator}/>)}
    </div>
  );
};

export default Operators;
