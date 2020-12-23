import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [state, setState] = useState({ name: "test", age: 26 });
  useMemo(() => console.log("memo"), [state.name]);
  console.log("render!!!");

  return (
    <>
      <h1>{state.name}</h1>
      <h1>{state.age}</h1>
      <button onClick={() => setState({ ...state, age: 39 })}>
        change AGE
      </button>
      <button onClick={() => setState({ ...state, name: "Test name !!!" })}>
        change NAME
      </button>
    </>
  );
};

export default UseMemoComponent;
