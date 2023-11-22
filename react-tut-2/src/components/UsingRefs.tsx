import { useRef } from "react";
function UsingRefs() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  function controlInput() {
    inputRef.current!.value = "Hello Rajan by useRef";
    inputRef.current!.style.color = "red";
    inputRef.current!.style.backgroundColor = "yellow";
    inputRef.current!.focus();
  }
  return (
    <div>
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button className="btn btn-primary btn-sm" onClick={controlInput}>
        Handle Input
      </button>
    </div>
  );
}

export default UsingRefs;
