import React, { useEffect, useState } from "react";

const LifeCycleHooks = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  useEffect(() => {
    return () => console.log("componentWillUnmount");
  }, []);

  return (
    <>
      <button onClick={() => setState(state + 1)}>inc</button>
      <h1>life cycle hooks example {state}</h1>
    </>
  );
};

export default LifeCycleHooks;
