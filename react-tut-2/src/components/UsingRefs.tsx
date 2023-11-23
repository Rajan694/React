import { useRef } from "react";
import ForwardRefs from "./ForwardRefs";
function UsingRefs() {
  const inputRef = useRef<HTMLInputElement>(null);
  const myRef = useRef<HTMLInputElement>(null);
  function controlInput() {
    inputRef.current!.value = "Hello Rajan by useRef";
    inputRef.current!.style.color = "red";
    inputRef.current!.style.backgroundColor = "yellow";
    inputRef.current!.focus();
  }
  function controlInput2() {
    myRef.current!.value = "Hello Rajan by forwardRef";
    myRef.current!.style.color = "yellow";
    myRef.current!.style.backgroundColor = "red";
    myRef.current!.focus();
  }

  return (
    <>
      <div>
        <h1>useRef in React </h1>
        <input type="text" ref={inputRef} />
        <button className="ms-2 btn btn-primary btn-sm" onClick={controlInput}>
          Handle Input
        </button>
      </div>
      <div>
        <ForwardRefs ref={myRef} />
        <button className="ms-2 btn btn-info btn-sm" onClick={controlInput2}>
          Handle Input in its child by forwardRef
        </button>
      </div>
    </>
  );
}

export default UsingRefs;
