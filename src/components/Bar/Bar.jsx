import React from "react";

function Bar({ red, white, rose, total, handleBarAdd }) {
  return (
    <div>
      <ul>
        <li>Red wine:{red}</li>
        <li>White wine:{white}</li>
        <li>Rose:{rose}</li>
        <li>Total: {total}</li>
      </ul>
      <button type="button" onClick={() => handleBarAdd("red")}>
        Add red wine
      </button>
      <button type="button" onClick={() => handleBarAdd("white")}>
        Add white wine
      </button>
      <button type="button" onClick={() => handleBarAdd("rose")}>
        Add rose
      </button>
    </div>
  );
}

export default Bar;
