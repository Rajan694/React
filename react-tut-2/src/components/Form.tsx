import { useState, useEffect } from "react";
function Form() {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState(false);
  //FORM VARIABLES

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Please fill in all fields");
    } else if (password.length < 6) {
      setError("Password should be at least 6 characters");
    } else {
      // Perform login logic here
      setError("");
      console.log("Login successful!");
    }
  }

  //lifecycle hook, all in one, can be sued many times
  useEffect(() => {
    console.log("this is lifecycle hook");
  }, [data]);

  useEffect(() => {
    console.log("this is lifecycle hook for username");
  }, [username, password]);

  return (
    <>
      <div>
        <h4>Input box current value: {data}</h4>
        <div className="d-flex mb-3">
          <input
            type="text"
            value={data}
            onChange={(e) => {
              //USING TWO FUNCTION INLINE
              setData(e.target.value);
              setShowData(false);
            }}
          />
          <button
            className="btn btn-outline-info btn-sm ms-3"
            onClick={() => setShowData(true)}
          >
            Submit
          </button>
        </div>

        {showData && <h4>Input box value: {data}</h4>}
      </div>
      {/* form started */}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
}

export default Form;
