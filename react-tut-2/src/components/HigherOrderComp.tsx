import { useState } from "react";
function HigherOrderComp() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}
function HOCRed(props: React.PropsWithChildren<{ cmp: React.ComponentType }>) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      Red
      <props.cmp />
    </h2>
  );
}

function HOCGreen(
  props: React.PropsWithChildren<{ cmp: React.ComponentType }>
) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>
      Green
      <props.cmp />
    </h2>
  );
}

function HOCBlue(props: React.PropsWithChildren<{ cmp: React.ComponentType }>) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      Blue
      <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button
        className="btn btn-warning btn-sm"
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>
    </div>
  );
}

export default HigherOrderComp;
