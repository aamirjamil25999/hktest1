import React from "react";
import "./index.css";

function Dropdown ({options, labelText, onChange}) {

  // console.log(options)

  return (
    <div className="elementSet" defaultValue="labelText" onChange={onChange}>
      <select >
      {
        options.map((option)=>{
          return <option>{option}</option>
        })
      }
      </select>
    </div>
  );
}

export default Dropdown;