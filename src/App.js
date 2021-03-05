import React, { useState } from "react";
import "./assets/app.scss";

const App = () => {
  const defState = {
    value: "",
    defVal: 13,
    result: null,
    toggle: false,
  };
  const [state, setState] = useState(defState);

  return (
    <>
      <p>App</p>
      <br />
      <button>test25</button>
      <button>test25</button>
      <button>test25</button>
    </>
  );
};

export default App;
