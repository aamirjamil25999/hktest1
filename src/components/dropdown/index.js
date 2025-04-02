import React from "react";
import "./index.css";

function Dropdown ({options, labelText, onChange}) {

  // console.log(options)

  return (
    <div className="elementSet">
      <select data-testid="dropdown" defaultValue={labelText} onChange={onChange}>
        {/* Do not remove this default option as this is needed in testing */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;