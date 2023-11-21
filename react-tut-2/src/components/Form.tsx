import { useState } from "react";
function Form() {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState(false);

  function handleInput(e: object) {
    console.log(typeof e);
    setData(e.target.value);
    setShowData(false);
  }

  function handleSubmit() {
    setShowData(true);
  }
  return (
    <>
      <div>
        <h4>Input box current value: {data}</h4>
        <div className="d-flex">
          <input type="text" value={data} onChange={handleInput} />
          <button
            className="btn btn-outline-info btn-sm ms-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {showData && <h4>Input box value: {data}</h4>}
      </div>
    </>
  );
}

export default Form;
